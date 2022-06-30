import { GUID } from "../guid.ts";
import { encodeUTF16, unwrap } from "../util.ts";
import { IUnknown } from "./IUnknown.ts";

export class IMetaDataImport extends IUnknown {
  static GUID = GUID.fromString("{7DAC8207-D3AE-4C75-9B67-92801A497D44}");

  CloseEnum(e: bigint): number {
    const fn = this._getFunction(
      3,
      {
        parameters: ["pointer", "pointer"],
        result: "isize",
      } as const,
    );
    return Number(fn(this._ptr, e));
  }

  CountEnum(e: bigint): number {
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

  ResetEnum(e: bigint, pos: number) {
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
    return Number(fn(this._ptr, phEnum, rgTypeDefs, cMax, pcTypeDefs));
  }

  EnumInterfaceImpls(
    phEnum: BigUint64Array,
    td: number,
    rImpls: Uint32Array,
    cMax: number,
    pcImpls: Uint32Array,
  ): number {
    const fn = this._getFunction(
      7,
      {
        parameters: [
          "pointer",
          "pointer",
          "u32",
          "pointer",
          "isize",
          "pointer",
        ],
        result: "isize",
      } as const,
    );
    return Number(fn(this._ptr, phEnum, td, rImpls, cMax, pcImpls));
  }

  FindTypeDefByName(
    szTypeDef: string,
    tkEnclosingClass: number,
    mdTypeDef: Uint32Array,
  ): number {
    const fn = this._getFunction(
      9,
      {
        parameters: ["pointer", "pointer", "u32", "pointer"],
        result: "isize",
      } as const,
    );
    return Number(fn(
      this._ptr,
      encodeUTF16(szTypeDef + "\0")[0],
      tkEnclosingClass,
      mdTypeDef,
    ));
  }

  GetModuleFromScope(ptkModule: Uint32Array): number {
    const fn = this._getFunction(
      11,
      {
        parameters: ["pointer", "pointer"],
        result: "isize",
      } as const,
    );
    return Number(fn(this._ptr, ptkModule));
  }

  GetInterfaceImplProps(
    tkInterfaceImpl: number,
    ptkClass: Uint32Array,
    ptkIface: Uint32Array,
  ): number {
    const fn = this._getFunction(
      13,
      {
        parameters: ["pointer", "u32", "pointer", "pointer"],
        result: "isize",
      } as const,
    );
    return Number(fn(this._ptr, tkInterfaceImpl, ptkClass, ptkIface));
  }

  GetTypeRefProps(
    tkTypeRef: number,
    ptkResolutionScope: Uint32Array,
    szName: Uint16Array,
    cchName: number,
    pchName: Uint32Array,
  ): number {
    const fn = this._getFunction(
      14,
      {
        parameters: [
          "pointer",
          "u32",
          "pointer",
          "pointer",
          "usize",
          "pointer",
        ],
        result: "isize",
      } as const,
    );
    return Number(fn(
      this._ptr,
      tkTypeRef,
      ptkResolutionScope,
      szName,
      cchName,
      pchName,
    ));
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
    return Number(fn(
      this._ptr,
      td,
      szTypeDef,
      cchTypeDef,
      pchTypeDef,
      pdwTypeDefFlags,
      ptkExtends,
    ));
  }

  EnumMethods(
    phEnum: BigUint64Array,
    tkTypeDef: number,
    rgMethod: Uint32Array,
    cMax: number,
    pcTokens: Uint32Array,
  ): number {
    const fn = this._getFunction(
      18,
      {
        parameters: [
          "pointer",
          "pointer",
          "u32",
          "pointer",
          "isize",
          "pointer",
        ],
        result: "isize",
      } as const,
    );
    return Number(fn(this._ptr, phEnum, tkTypeDef, rgMethod, cMax, pcTokens));
  }

  EnumFields(
    phEnum: BigUint64Array,
    tkTypeDef: number,
    rgFields: Uint32Array,
    cMax: number,
    pcTokens: Uint32Array,
  ): number {
    const fn = this._getFunction(
      20,
      {
        parameters: [
          "pointer",
          "pointer",
          "u32",
          "pointer",
          "isize",
          "pointer",
        ],
        result: "isize",
      } as const,
    );
    return Number(fn(this._ptr, phEnum, tkTypeDef, rgFields, cMax, pcTokens));
  }

  EnumParams(
    phEnum: BigUint64Array,
    tkMethodDef: number,
    rParams: Uint32Array,
    cMax: number,
    pcTokens: Uint32Array,
  ): number {
    const fn = this._getFunction(
      22,
      {
        parameters: [
          "pointer",
          "pointer",
          "u32",
          "pointer",
          "isize",
          "pointer",
        ],
        result: "isize",
      } as const,
    );
    return Number(fn(this._ptr, phEnum, tkMethodDef, rParams, cMax, pcTokens));
  }

  GetMethodProps(
    tkMethodDef: number,
    ptkClass: Uint32Array,
    szMethod: Uint16Array,
    cchMethod: number,
    pchMethod: Uint32Array,
    pdwAttr: Uint32Array,
    ppvSigBlob: BigUint64Array,
    pcbSigBlob: Uint32Array,
    pulCodeRVA: Uint32Array,
    pdvImplFlags: Uint32Array,
  ): number {
    const fn = this._getFunction(
      30,
      {
        parameters: [
          "pointer",
          "u32",
          "pointer",
          "pointer",
          "usize",
          "pointer",
          "pointer",
          "pointer",
          "pointer",
          "pointer",
          "pointer",
        ],
        result: "isize",
      } as const,
    );
    return Number(fn(
      this._ptr,
      tkMethodDef,
      ptkClass,
      szMethod,
      cchMethod,
      pchMethod,
      pdwAttr,
      ppvSigBlob,
      pcbSigBlob,
      pulCodeRVA,
      pdvImplFlags,
    ));
  }

  GetTypeSpecFromToken(
    tkTypeSpec: number,
    ppvSig: BigUint64Array,
    pcbSig: Uint32Array,
  ): number {
    const fn = this._getFunction(
      44,
      {
        parameters: ["pointer", "u32", "pointer", "pointer"],
        result: "isize",
      } as const,
    );
    return Number(fn(this._ptr, tkTypeSpec, ppvSig, pcbSig));
  }

  GetFieldProps(
    tkFieldDef: number,
    ptkTypeDef: Uint32Array,
    szField: Uint16Array,
    cchField: number,
    pchField: Uint32Array,
    pdwAttr: Uint32Array,
    ppvSigBlob: BigUint64Array,
    pcbSigBlob: Uint32Array,
    pdwCPlusTypeFlag: Uint32Array,
    ppValue: BigUint64Array,
    pcchValue: Uint32Array,
  ): number {
    const fn = this._getFunction(
      57,
      {
        parameters: [
          "pointer",
          "u32",
          "pointer",
          "pointer",
          "usize",
          "pointer",
          "pointer",
          "pointer",
          "pointer",
          "pointer",
          "pointer",
          "pointer",
        ],
        result: "isize",
      } as const,
    );
    return Number(fn(
      this._ptr,
      tkFieldDef,
      ptkTypeDef,
      szField,
      cchField,
      pchField,
      pdwAttr,
      ppvSigBlob,
      pcbSigBlob,
      pdwCPlusTypeFlag,
      ppValue,
      pcchValue,
    ));
  }

  GetParamProps(
    tkParamDef: number,
    ptkMethodDef: Uint32Array,
    pulSequence: Uint32Array,
    szName: Uint16Array,
    cchName: number,
    pchName: Uint32Array,
    pdwAttr: Uint32Array,
    pdwCPlusTypeFlag: Uint32Array,
    ppValue: BigUint64Array,
    pcchValue: BigUint64Array,
  ): number {
    const fn = this._getFunction(
      59,
      {
        parameters: [
          "pointer",
          "u32",
          "pointer",
          "pointer",
          "pointer",
          "usize",
          "pointer",
          "pointer",
          "pointer",
          "pointer",
          "pointer",
        ],
        result: "isize",
      } as const,
    );
    return Number(fn(
      this._ptr,
      tkParamDef,
      ptkMethodDef,
      pulSequence,
      szName,
      cchName,
      pchName,
      pdwAttr,
      pdwCPlusTypeFlag,
      ppValue,
      pcchValue,
    ));
  }

  GetCustomAttributeByName(
    tkObj: number,
    szName: string,
    ppData: BigUint64Array,
    pcbData: Uint32Array,
  ): number {
    const fn = this._getFunction(
      60,
      {
        parameters: ["pointer", "u32", "pointer", "pointer", "pointer"],
        result: "isize",
      } as const,
    );
    return Number(
      fn(this._ptr, tkObj, encodeUTF16(szName + "\0")[0], ppData, pcbData),
    );
  }

  [Symbol.for("COMObject.name")]() {
    return "IMetaDataImport";
  }
}
