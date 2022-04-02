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

ole32.CoInitializeEx(null, 0x02 | 0x04);

export class COMObject {
  _ptr: Deno.UnsafePointer;
  protected _vtable: Deno.UnsafePointerView;

  constructor(ptr: Deno.UnsafePointer) {
    this._ptr = ptr;
    const view = new Deno.UnsafePointerView(ptr);
    const vtable = new Deno.UnsafePointer(view.getBigUint64(0));
    this._vtable = new Deno.UnsafePointerView(vtable);
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
    const name = (this as any)[Symbol.for("COMObject.name")]?.();
    if (!this._ptr || this._ptr.value === 0n) {
      return `COMObject${name ? `<${name}>` : ""}(nullptr)`;
    }
    return `COMObject${name ? `<${name}>` : ""}(0x${
      this._ptr.value.toString(16).padStart(8, "0")
    })`;
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
