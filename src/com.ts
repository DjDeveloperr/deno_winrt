import type { IUnknown } from "./com/IUnknown.ts";
import { GUID, GUIDConvertible } from "./guid.ts";
import { encodeUTF16, unwrap } from "./util.ts";

export const ole32 = Deno.dlopen(
  "Ole32.dll",
  {
    CoInitializeEx: {
      parameters: ["pointer", "isize"],
      result: "isize",
    },

    CoCreateInstance: {
      parameters: ["pointer", "pointer", "u32", "pointer", "pointer"],
      result: "isize",
    },

    CLSIDFromString: {
      parameters: ["pointer", "pointer"],
      result: "isize",
    },

    IIDFromString: {
      parameters: ["pointer", "pointer"],
      result: "isize",
    },
  } as const,
).symbols;

Deno.dlopen("rpcrt4.dll", {});
Deno.dlopen("shell32.dll", {});
Deno.dlopen("shcore.dll", {});

ole32.CoInitializeEx(null, 0x02 | 0x04);

const nullptr = new Deno.UnsafePointer(0n);

export function vtable(offset: number, def: Deno.ForeignFunction) {
  return function (
    target: COMObject,
    property: string,
    desc: PropertyDescriptor,
  ) {
    const wrapper = desc.value as CallableFunction;
    const fn = new Deno.UnsafeFnPointer(nullptr, def);
    const decorated = function (this: COMObject, ...args: any[]) {
      return wrapper.bind(this)(
        ...args.slice(0, wrapper.length),
        fn.call.bind(fn),
      );
    };
    if (!target._functions) {
      target._functions = new Map([[offset, [property, fn, decorated]]]);
    } else {
      target._functions.set(offset, [property, fn, decorated]);
    }
  };
}

export function getFunction(args: typeof arguments): CallableFunction {
  return [...args].pop();
}

export class COMObject {
  declare _functions?: Map<
    number,
    [string, Deno.UnsafeFnPointer<Deno.ForeignFunction>, CallableFunction]
  >;
  _ptr: Deno.UnsafePointer;
  protected _vtable: Deno.UnsafePointerView;

  constructor(ptr: Deno.UnsafePointer) {
    this._ptr = ptr;
    const view = new Deno.UnsafePointerView(ptr);
    const vtable = new Deno.UnsafePointer(view.getBigUint64(0));
    this._vtable = new Deno.UnsafePointerView(vtable);
    if (this._functions) {
      for (const [offset, fn] of this._functions.entries()) {
        fn[1].pointer = new Deno.UnsafePointer(
          this._vtable.getBigUint64(offset * 8),
        );
        this.constructor.prototype[fn[0]] = fn[2].bind(this);
      }
    }
  }

  protected _getFunction<Fn extends Deno.ForeignFunction>(
    offset: number,
    def: Fn,
  ): Deno.UnsafeFnPointer<Fn>["call"] {
    const ptr = new Deno.UnsafePointer(this._vtable.getBigUint64(offset * 8));
    const fnptr = new Deno.UnsafeFnPointer(ptr, def);
    return (...args: any) => fnptr.call(...args);
  }

  [Symbol.for("Deno.customInspect")]() {
    if (!this._ptr || this._ptr.value === 0n) return `COMObject(nullptr)`;
    return `COMObject(0x${this._ptr.value.toString(16).padStart(8, "0")})`;
  }
}

export function clsidFromString(
  clsid: string,
): Uint8Array {
  const ptr = new Uint8Array(16);
  const hr = ole32.CLSIDFromString(
    encodeUTF16(clsid + "\0")[0],
    ptr,
  );
  if (hr !== 0) {
    throw new Error(`CLSIDFromString failed with 0x${hr.toString(16)}`);
  }
  return ptr;
}

export function createInstance<I extends typeof IUnknown>(
  clsid: GUIDConvertible,
  iid: I,
): InstanceType<I> {
  const out = new BigUint64Array(1);
  unwrap(ole32.CoCreateInstance(
    new GUID(clsid).data,
    null,
    0x01 | 0x02 | 0x04 | 0x10,
    iid.GUID.data,
    out,
  ));
  return new iid(new Deno.UnsafePointer(out[0])) as InstanceType<I>;
}
