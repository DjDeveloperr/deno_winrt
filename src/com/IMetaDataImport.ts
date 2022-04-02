import { GUID } from "../guid.ts";
import { encodeUTF16, unwrap } from "../util.ts";
import { IUnknown } from "./IUnknown.ts";

export class IMetaDataImport extends IUnknown {
  static GUID = GUID.fromString("{7DAC8207-D3AE-4C75-9B67-92801A497D44}");

  CloseEnum(e: Deno.UnsafePointer): number {
    const fn = this._getFunction(
      3,
      {
        parameters: ["pointer", "pointer"],
        result: "isize",
      } as const,
    );
    return fn(this._ptr, e);
  }

  CountEnum(e: Deno.UnsafePointer): number {
    const fn = this._getFunction(
      4,
      {
        parameters: ["pointer", "pointer", "pointer"],
        result: "isize",
      } as const,
    );
    const out = new Uint32Array(1);
    unwrap(fn(this._ptr, e, out));
    return out[0];
  }

  ResetEnum(e: Deno.UnsafePointer, pos: number) {
    const fn = this._getFunction(
      5,
      {
        parameters: ["pointer", "pointer", "isize"],
        result: "isize",
      } as const,
    );
    unwrap(fn(this._ptr, e, pos));
  }

  EnumTypeDefs(
    phEnum: BigUint64Array,
    rgTypeDefs: Uint32Array,
    cMax: number,
    pcTypeDefs: Uint32Array,
  ): number {
    const fn = this._getFunction(
      6,
      {
        parameters: ["pointer", "pointer", "pointer", "isize", "pointer"],
        result: "isize",
      } as const,
    );
    return fn(this._ptr, phEnum, rgTypeDefs, cMax, pcTypeDefs);
  }

  GetTypeDefProps(
    td: number,
    szTypeDef: Uint16Array,
    cchTypeDef: number,
    pchTypeDef: Uint32Array,
    pdwTypeDefFlags: Uint32Array,
    ptkExtends: Uint32Array,
  ): number {
    const fn = this._getFunction(
      12,
      {
        parameters: [
          "pointer",
          "u32",
          "pointer",
          "usize",
          "pointer",
          "pointer",
          "pointer",
        ],
        result: "isize",
      } as const,
    );
    return fn(
      this._ptr,
      td,
      szTypeDef,
      cchTypeDef,
      pchTypeDef,
      pdwTypeDefFlags,
      ptkExtends,
    );
  }

  [Symbol.for("COMObject.name")]() {
    return "IMetaDataImport";
  }
}
