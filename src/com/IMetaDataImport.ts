import { GUID } from "../guid.ts";
import { encodeCString16, u8, unwrap } from "../util.ts";
import { IUnknown } from "./IUnknown.ts";

export type HCORENUM = Deno.PointerValue;
export const HCORENUM = "pointer" as const;
export type mdToken = number;
export const mdToken = "u32" as const;

export class IMetaDataImport extends IUnknown {
  static GUID = new GUID("{7DAC8207-D3AE-4C75-9B67-92801A497D44}");

  CloseEnum(hEnum: HCORENUM) {
    const fn = this.vtable(
      3,
      {
        parameters: [HCORENUM],
        result: "void",
      } as const,
    );
    fn(hEnum);
  }

  CountEnum(hEnum: HCORENUM): number {
    const fn = this.vtable(
      4,
      {
        parameters: [HCORENUM, "buffer"],
        result: "i32",
      } as const,
    );
    const out = new BigUint64Array(1);
    unwrap(fn(hEnum, u8(out)));
    return Number(out[0]);
  }

  EnumCustomAttributes(
    phEnum: ArrayBufferView,
    tk: mdToken,
    tkType: mdToken,
    rCustomAttributes: ArrayBufferView,
    cMax: number,
    pcCustomAttributes: ArrayBufferView,
  ) {
    const fn = this.vtable(
      5,
      {
        parameters: [
          "buffer",
          mdToken,
          mdToken,
          "buffer",
          "isize",
          "buffer",
        ],
        result: "i32",
      } as const,
    );
    unwrap(
      fn(
        u8(phEnum),
        tk,
        tkType,
        u8(rCustomAttributes),
        cMax,
        u8(pcCustomAttributes),
      ),
    );
  }

  EnumEvents(
    phEnum: ArrayBufferView,
    td: mdToken,
    rEvents: ArrayBufferView,
    cMax: number,
    pcEvents: ArrayBufferView,
  ) {
    const fn = this.vtable(
      6,
      {
        parameters: ["buffer", mdToken, "buffer", "isize", "buffer"],
        result: "i32",
      } as const,
    );
    unwrap(
      fn(u8(phEnum), td, u8(rEvents), cMax, u8(pcEvents)),
    );
  }

  EnumFields(
    phEnum: ArrayBufferView,
    cl: mdToken,
    rFields: ArrayBufferView,
    cMax: number,
    pcTokens: ArrayBufferView,
  ) {
    const fn = this.vtable(
      7,
      {
        parameters: ["buffer", mdToken, "buffer", "isize", "buffer"],
        result: "i32",
      } as const,
    );
    unwrap(
      fn(u8(phEnum), cl, u8(rFields), cMax, u8(pcTokens)),
    );
  }

  EnumFieldsWithName(
    phEnum: ArrayBufferView,
    cl: mdToken,
    szName: string,
    rFields: ArrayBufferView,
    cMax: number,
    pcTokens: ArrayBufferView,
  ) {
    const fn = this.vtable(
      8,
      {
        parameters: [
          "buffer",
          mdToken,
          "buffer",
          "buffer",
          "isize",
          "buffer",
        ],
        result: "i32",
      } as const,
    );
    unwrap(
      fn(
        u8(phEnum),
        cl,
        encodeCString16(szName),
        u8(rFields),
        cMax,
        u8(pcTokens),
      ),
    );
  }

  EnumInterfaceImpls(
    phEnum: ArrayBufferView,
    td: mdToken,
    rImpls: ArrayBufferView,
    cMax: number,
    pcImpls: ArrayBufferView,
  ) {
    const fn = this.vtable(
      9,
      {
        parameters: ["buffer", mdToken, "buffer", "isize", "buffer"],
        result: "i32",
      } as const,
    );
    unwrap(
      fn(u8(phEnum), td, u8(rImpls), cMax, u8(pcImpls)),
    );
  }

  EnumMemberRefs(
    phEnum: ArrayBufferView,
    tkParent: mdToken,
    rMemberRefs: ArrayBufferView,
    cMax: number,
    pcTokens: ArrayBufferView,
  ) {
    const fn = this.vtable(
      10,
      {
        parameters: [
          "buffer",
          mdToken,
          "buffer",
          "isize",
          "buffer",
        ],
        result: "i32",
      } as const,
    );
    unwrap(
      fn(
        u8(phEnum),
        tkParent,
        u8(rMemberRefs),
        cMax,
        u8(pcTokens),
      ),
    );
  }

  EnumMembers(
    phEnum: ArrayBufferView,
    cl: mdToken,
    rMembers: ArrayBufferView,
    cMax: number,
    pcTokens: ArrayBufferView,
  ) {
    const fn = this.vtable(
      11,
      {
        parameters: ["buffer", mdToken, "buffer", "isize", "buffer"],
        result: "i32",
      } as const,
    );
    unwrap(
      fn(u8(phEnum), cl, u8(rMembers), cMax, u8(pcTokens)),
    );
  }

  EnumMembersWithName(
    phEnum: ArrayBufferView,
    cl: mdToken,
    szName: string,
    rMembers: ArrayBufferView,
    cMax: number,
    pcTokens: ArrayBufferView,
  ) {
    const fn = this.vtable(
      12,
      {
        parameters: [
          "buffer",
          mdToken,
          "buffer",
          "buffer",
          "isize",
          "buffer",
        ],
        result: "i32",
      } as const,
    );
    unwrap(
      fn(
        u8(phEnum),
        cl,
        encodeCString16(szName),
        u8(rMembers),
        cMax,
        u8(pcTokens),
      ),
    );
  }

  EnumMethodImpls(
    phEnum: ArrayBufferView,
    td: mdToken,
    rMethodBody: ArrayBufferView,
    rMethodDecl: ArrayBufferView,
    cMax: number,
    pcTokens: ArrayBufferView,
  ) {
    const fn = this.vtable(
      13,
      {
        parameters: [
          "buffer",
          mdToken,
          "buffer",
          "buffer",
          "isize",
          "buffer",
        ],
        result: "i32",
      } as const,
    );
    unwrap(
      fn(
        u8(phEnum),
        td,
        u8(rMethodBody),
        u8(rMethodDecl),
        cMax,
        u8(pcTokens),
      ),
    );
  }

  EnumMethods(
    phEnum: ArrayBufferView,
    cl: mdToken,
    rMethods: ArrayBufferView,
    cMax: number,
    pcTokens: ArrayBufferView,
  ) {
    const fn = this.vtable(
      14,
      {
        parameters: ["buffer", mdToken, "buffer", "isize", "buffer"],
        result: "i32",
      } as const,
    );
    unwrap(
      fn(u8(phEnum), cl, u8(rMethods), cMax, u8(pcTokens)),
    );
  }

  EnumMethodSemantics(
    phEnum: ArrayBufferView,
    mb: mdToken,
    rEventProp: ArrayBufferView,
    cMax: number,
    pcEventProp: ArrayBufferView,
  ) {
    const fn = this.vtable(
      15,
      {
        parameters: [
          "buffer",
          mdToken,
          "buffer",
          "isize",
          "buffer",
        ],
        result: "i32",
      } as const,
    );
    unwrap(
      fn(
        u8(phEnum),
        mb,
        u8(rEventProp),
        cMax,
        u8(pcEventProp),
      ),
    );
  }

  EnumMethodsWithName(
    phEnum: ArrayBufferView,
    cl: mdToken,
    szName: string,
    rMethods: ArrayBufferView,
    cMax: number,
    pcTokens: ArrayBufferView,
  ) {
    const fn = this.vtable(
      16,
      {
        parameters: [
          "buffer",
          mdToken,
          "buffer",
          "buffer",
          "isize",
          "buffer",
        ],
        result: "i32",
      } as const,
    );
    unwrap(
      fn(
        u8(phEnum),
        cl,
        encodeCString16(szName),
        u8(rMethods),
        cMax,
        u8(pcTokens),
      ),
    );
  }

  EnumModuleRefs(
    phEnum: ArrayBufferView,
    rModuleRefs: ArrayBufferView,
    cmax: number,
    pcModuleRefs: ArrayBufferView,
  ) {
    const fn = this.vtable(
      17,
      {
        parameters: [
          "buffer",
          "buffer",
          "isize",
          "buffer",
        ],
        result: "i32",
      } as const,
    );
    unwrap(
      fn(
        u8(phEnum),
        u8(rModuleRefs),
        cmax,
        u8(pcModuleRefs),
      ),
    );
  }

  EnumParams(
    phEnum: ArrayBufferView,
    mb: mdToken,
    rParams: ArrayBufferView,
    cMax: number,
    pcTokens: ArrayBufferView,
  ) {
    const fn = this.vtable(
      18,
      {
        parameters: [
          "buffer",
          mdToken,
          "buffer",
          "isize",
          "buffer",
        ],
        result: "i32",
      } as const,
    );
    unwrap(
      fn(
        u8(phEnum),
        mb,
        u8(rParams),
        cMax,
        u8(pcTokens),
      ),
    );
  }

  EnumPermissionSets() {}

  EnumProperties() {}

  EnumSignatures() {}

  EnumTypeDefs() {}

  EnumTypeRefs() {}

  EnumTypeSpecs() {}

  EnumUnresolvedMethods() {}

  EnumUserStrings() {}

  FindField() {}

  FindMember() {}

  FindMemberRef() {}

  FindMethod() {}

  FindTypeDefByName() {}

  FindTypeRef() {}

  GetClassLayout() {}

  GetCustomAttributeByName() {}

  GetCustomAttributeProps() {}

  GetEventProps() {}

  GetFieldMarshal() {}

  GetFieldProps() {}

  GetInterfaceImplProps() {}

  GetMemberProps() {}

  GetMemberRefProps() {}

  GetMethodProps() {}

  GetMethodSemantics() {}

  GetModuleFromScope() {}

  GetModuleRefProps() {}

  GetNameFromToken() {}

  GetNativeCallConvFromSig() {}

  GetNestedClassProps() {}

  GetParamForMethodIndex() {}

  GetParamProps() {}

  GetPermissionSetProps() {}

  GetPinvokeMap() {}

  GetPropertyProps() {}

  GetRVA() {}

  GetScopeProps() {}

  GetSigFromToken() {}

  GetTypeDefProps() {}

  GetTypeRefProps() {}

  GetTypeSpecFromToken() {}

  GetUserString() {}

  IsGlobal() {}

  IsValidToken() {}

  ResetEnum() {}

  ResolveTypeRef() {}

  _getClassName(): string {
    return "IMetaDataImport";
  }
}
