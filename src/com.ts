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

    StringFromIID: {
      parameters: ["pointer", "pointer"],
      result: "isize",
    },
  } as const,
).symbols;

ole32.CoInitializeEx(null, 0x02 | 0x04);

export class COMObject {
  _ptr: bigint;
  #vtable?: Deno.UnsafePointerView;

  protected get _vtable() {
    if (!this.#vtable) {
      const view = new Deno.UnsafePointerView(this._ptr);
      const vtable = view.getBigUint64(0);
      this.#vtable = new Deno.UnsafePointerView(vtable);
    }
    return this.#vtable;
  }

  constructor(ptr: bigint) {
    this._ptr = ptr;
  }

  protected _getFunction<Fn extends Deno.ForeignFunction>(
    offset: number,
    def: Fn,
  ): Deno.UnsafeFnPointer<Fn>["call"] {
    const ptr = this._vtable.getBigUint64(offset * 8);
    const fnptr = new Deno.UnsafeFnPointer(ptr, def);
    return (...args: any) => fnptr.call(...args);
  }

  [Symbol.for("Deno.customInspect")]() {
    const name = (this as any)[Symbol.for("COMObject.name")]?.();
    if (!this._ptr || this._ptr === 0n) {
      return `COMObject${name ? `<${name}>` : ""}(nullptr)`;
    }
    return `COMObject${name ? `<${name}>` : ""}(0x${
      this._ptr.toString(16).padStart(8, "0")
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
  if (hr !== 0n) {
    throw new Error(`CLSIDFromString failed with 0x${hr.toString(16)}`);
  }
  return ptr;
}

export function stringFromGUID(
  guid: Uint8Array,
): string {
  const ptr = new BigUint64Array(1);
  const hr = ole32.StringFromIID(
    guid,
    ptr,
  );
  if (hr !== 0n) {
    throw new Error(`StringFromIID failed with 0x${hr.toString(16)}`);
  }
  const str = new Uint16Array(38);
  new Deno.UnsafePointerView(ptr[0]).copyInto(str);
  return String.fromCharCode(...str);
}

export function createInstance<
  I extends { GUID: GUID } & (new (ptr: bigint) => InstanceType<I>),
>(
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
  return new iid(out[0]) as InstanceType<I>;
}

export type TypedArray =
  | Uint8Array
  | Uint16Array
  | Uint32Array
  | BigUint64Array
  | Int8Array
  | Int16Array
  | Int32Array
  | BigInt64Array
  | Float32Array
  | Float64Array
  | Uint8ClampedArray;

export type PointerConvertible<_PLACEHOLDER = unknown> =
  | bigint
  | null
  | TypedArray
  | COMObject
  | bigint
  | Deno.UnsafeFnPointer<Deno.ForeignFunction>
  | undefined;

export function toPointer(
  v: PointerConvertible,
): bigint | null | TypedArray {
  if (
    v === null || v === undefined || typeof v === "bigint" ||
    (typeof v === "object" && "buffer" in v && v.buffer instanceof ArrayBuffer)
  ) {
    return v === undefined ? null : v;
  } else if (v instanceof COMObject) {
    return v._ptr;
  } else if (typeof v === "bigint") {
    return v;
  } else if (v instanceof Deno.UnsafeFnPointer) {
    return v.pointer;
  } else {
    throw new Error(
      `Unsupported value being converted to pointer: ${Deno.inspect(v)}`,
    );
  }
}

export type PWSTRConvertible = string | Uint16Array | null;
export class PWSTR extends String {
  constructor(ptr: bigint) {
    let str = "";
    const view = new Deno.UnsafePointerView(ptr);
    for (let i = 0;; i++) {
      const c = view.getUint16(i * 2);
      if (c === 0) {
        break;
      }
      str += String.fromCharCode(c);
    }
    super(str);
  }
}

export function toPWSTR(
  v: PWSTRConvertible,
): bigint | null | TypedArray {
  if (v === null || v === undefined) return null;
  if (typeof v === "string") {
    return encodeUTF16(v + "\0")[0];
  } else return v;
}

export type PSTRConvertible = string | Uint8Array | null;
export class PSTR extends String {
  constructor(ptr: bigint) {
    if (ptr === 0n) throw new Error("PSTR is null");
    super(new Deno.UnsafePointerView(ptr).getCString);
  }
}

export function toPSTR(
  v: PSTRConvertible,
): bigint | null | TypedArray {
  if (typeof v === "string") {
    return new TextEncoder().encode(v + "\0");
  } else if (typeof v === "object") {
    if (v !== null && v instanceof Uint8Array) return v;
  }
  return null;
}
