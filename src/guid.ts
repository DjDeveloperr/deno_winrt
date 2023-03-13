import { com } from "./com.ts";
import { encodeCString16, readCString16, u8, unwrap } from "./util.ts";

export type GUIDConv =
  | string
  | Uint8Array
  | bigint
  | NonNullable<Deno.PointerValue>;

function convGUID(data: GUIDConv): Uint8Array {
  if (typeof data === "string") {
    const cstr = encodeCString16(data);
    const guid = new Uint8Array(16);
    unwrap(com.CLSIDFromString(cstr, guid));
    return guid;
  } else if (typeof data === "bigint") {
    const guid = new Uint8Array(16);
    const view = new DataView(guid.buffer);
    const bg0 = data >> 64n;
    const bg1 = data & 0xffffffffffffffffn;
    view.setBigUint64(0, bg0, false);
    view.setBigUint64(8, bg1, false);
    return guid;
  } else if (typeof data === "object") {
    if (data === null) throw new TypeError("Invalid GUID: null");
    if (data instanceof Uint8Array) {
      return data;
    } else if (Object.getPrototypeOf(data) === null) {
      const buf = Deno.UnsafePointerView.getArrayBuffer(data, 16);
      return new Uint8Array(buf);
    } else {
      throw new TypeError("Invalid GUID object type");
    }
  } else {
    throw new TypeError("Invalid GUID type: " + typeof data);
  }
}

export class GUID extends Uint8Array {
  constructor(data: GUIDConv) {
    super(convGUID(data).buffer, 0, 16);
  }

  toString() {
    const out = new BigUint64Array(1);
    unwrap(com.StringFromIID(this, u8(out)));
    const ptr = Deno.UnsafePointer.create(Number(out[0]))!;
    const str = readCString16(ptr);
    com.CoTaskMemFree(ptr);
    return str;
  }

  toJSON() {
    return this.toString();
  }

  [Symbol.for("Deno.customInspect")]() {
    return "GUID(" + this.toString() + ")";
  }
}
