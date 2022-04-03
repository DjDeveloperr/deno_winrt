import { clsidFromString, stringFromGUID } from "./com.ts";

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
    return stringFromGUID(this.data);
  }

  [Symbol.for("Deno.customInspect")]() {
    return `GUID { ${this.toString()} }`;
  }
}
