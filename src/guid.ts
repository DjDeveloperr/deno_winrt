import { clsidFromString } from "./com.ts";

export type GUIDConvertible = GUID | Uint8Array | bigint | string;

export class GUID {
  data: Uint8Array;

  constructor(value: GUIDConvertible) {
    if (value instanceof GUID) {
      this.data = value.data;
    } else if (value instanceof Uint8Array) {
      this.data = value;
    } else if (typeof value === "bigint") {
      this.data = GUID.fromBigInt(value).data;
    } else if (typeof value === "string") {
      this.data = GUID.fromString(value).data;
    } else {
      throw new Error("Invalid value");
    }
  }

  static fromString(value: string) {
    return new GUID(clsidFromString(value));
  }

  static fromBigInt(value: bigint) {
    const data = value.toString(16).padStart(32, "0");
    const inner = `${data.slice(0, 8)}-${data.slice(8, 12)}-${
      data.slice(12, 16)
    }-${data.slice(16, 20)}-${data.slice(20, 32)}`;
    const str = "{" + inner + "}";
    return this.fromString(str);
  }

  toString() {
    const view = new DataView(this.data.buffer);
    return `${view.getUint32(0, false).toString(16).padStart(8, "0")}-${
      view.getUint16(4, false).toString(16).padStart(4, "0")
    }-${view.getUint16(6, false).toString(16).padStart(4, "0")}-${
      view.getUint16(8, false).toString(16).padStart(4, "0")
    }-${view.getUint16(10, false).toString(16).padStart(4, "0")}${
      view.getUint32(12, false).toString(16).padStart(8, "0")
    }`;
  }

  [Symbol.for("Deno.customInspect")]() {
    return `GUID { ${this.toString()} }`;
  }
}
