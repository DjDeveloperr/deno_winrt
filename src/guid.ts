export type GUIDConvertible = GUID | Uint8Array | bigint;

export class GUID {
  data: Uint8Array;

  constructor(value: GUIDConvertible) {
    if (value instanceof GUID) {
      this.data = value.data;
    } else if (value instanceof Uint8Array) {
      this.data = value;
    } else if (typeof value === "bigint") {
      this.data = GUID.fromBigInt(value).data;
    } else {
      throw new Error("Invalid value");
    }
  }

  static fromBigInt(value: bigint) {
    const data = new Uint8Array(16);
    const str = value.toString(data.length).padStart(data.length * 2, "0");
    for (let i = 0; i < data.length * 2; i += 2) {
      data[i / 2] = parseInt(str[i] + str[i + 1], 16);
    }
    return new GUID(data);
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
