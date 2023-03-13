import { GUID } from "../guid.ts";
import { encodeCString16, u8, unwrap } from "../util.ts";
import { IUnknown } from "./IUnknown.ts";

export type HCORENUM = Deno.PointerValue;
export const HCORENUM = "pointer" as const;
export type mdToken = number;
export const mdToken = "u32" as const;
export type mdTypeDef = number;
export const mdTypeDef = "u32" as const;
export type mdCustomAttribute = number;
export const mdCustomAttribute = "u32" as const;
export type mdEvent = number;
export const mdEvent = "u32" as const;
export type mdFieldDef = number;
export const mdFieldDef = "u32" as const;
export type mdInterfaceImpl = number;
export const mdInterfaceImpl = "u32" as const;
export type mdMemberRef = number;
export const mdMemberRef = "u32" as const;
export type mdMethodDef = number;
export const mdMethodDef = "u32" as const;
export type mdModuleRef = number;
export const mdModuleRef = "u32" as const;
export type mdParamDef = number;
export const mdParamDef = "u32" as const;
export type mdPermission = number;
export const mdPermission = "u32" as const;
export type mdProperty = number;
export const mdProperty = "u32" as const;
export type mdSignature = number;
export const mdSignature = "u32" as const;
export type mdTypeRef = number;
export const mdTypeRef = "u32" as const;
export type mdTypeSpec = number;
export const mdTypeSpec = "u32" as const;
export type mdString = number;
export const mdString = "u32" as const;

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
      53,
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
      33,
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
      20,
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
      21,
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
      7,
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
      23,
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
      16,
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
      17,
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
      24,
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
      18,
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
      35,
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
      19,
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
      43,
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
      22,
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

  EnumPermissionSets(
    phEnum: ArrayBufferView,
    tk: mdToken,
    dwActions: number,
    rPermission: ArrayBufferView,
    cMax: number,
    pcTokens: ArrayBufferView,
  ) {
    const fn = this.vtable(
      25,
      {
        parameters: [
          "buffer",
          mdToken,
          "i32",
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
        dwActions,
        u8(rPermission),
        cMax,
        u8(pcTokens),
      ),
    );
  }

  EnumProperties(
    phEnum: ArrayBufferView,
    cl: mdToken,
    rProperties: ArrayBufferView,
    cMax: number,
    pcTokens: ArrayBufferView,
  ) {
    const fn = this.vtable(
      32,
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
        cl,
        u8(rProperties),
        cMax,
        u8(pcTokens),
      ),
    );
  }

  EnumSignatures(
    phEnum: ArrayBufferView,
    rSignatures: ArrayBufferView,
    cmax: number,
    pcSignatures: ArrayBufferView,
  ) {
    const fn = this.vtable(
      49,
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
        u8(rSignatures),
        cmax,
        u8(pcSignatures),
      ),
    );
  }

  EnumTypeDefs(
    phEnum: ArrayBufferView,
    rTypeDefs: ArrayBufferView,
    cMax: number,
    pcTypeDefs: ArrayBufferView,
  ) {
    const fn = this.vtable(
      6,
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
        u8(rTypeDefs),
        cMax,
        u8(pcTypeDefs),
      ),
    );
  }

  EnumTypeRefs(
    phEnum: ArrayBufferView,
    rTypeRefs: ArrayBufferView,
    cmax: number,
    pcTypeRefs: ArrayBufferView,
  ) {
    const fn = this.vtable(
      8,
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
        u8(rTypeRefs),
        cmax,
        u8(pcTypeRefs),
      ),
    );
  }

  EnumTypeSpecs(
    phEnum: ArrayBufferView,
    rTypeSpecs: ArrayBufferView,
    cmax: number,
    pcTypeSpecs: ArrayBufferView,
  ) {
    const fn = this.vtable(
      50,
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
        u8(rTypeSpecs),
        cmax,
        u8(pcTypeSpecs),
      ),
    );
  }

  EnumUnresolvedMethods(
    phEnum: ArrayBufferView,
    rMethods: ArrayBufferView,
    cMax: number,
    pcTokens: ArrayBufferView,
  ) {
    const fn = this.vtable(
      46,
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
        u8(rMethods),
        cMax,
        u8(pcTokens),
      ),
    );
  }

  EnumUserStrings(
    phEnum: ArrayBufferView,
    rStrings: ArrayBufferView,
    cmax: number,
    pcStrings: ArrayBufferView,
  ) {
    const fn = this.vtable(
      51,
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
        u8(rStrings),
        cmax,
        u8(pcStrings),
      ),
    );
  }

  FindField(
    td: mdTypeDef,
    szName: string,
    pbSigBlob: ArrayBufferView,
    cbSigBlob: number,
    pmb: ArrayBufferView,
  ) {
    const fn = this.vtable(
      28,
      {
        parameters: [
          mdTypeDef,
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
        td,
        encodeCString16(szName),
        u8(pbSigBlob),
        cbSigBlob,
        u8(pmb),
      ),
    );
  }

  FindMember(
    td: mdTypeDef,
    szName: string,
    pbSigBlob: ArrayBufferView,
    cbSigBlob: number,
    pmb: ArrayBufferView,
  ) {
    const fn = this.vtable(
      26,
      {
        parameters: [
          mdTypeDef,
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
        td,
        encodeCString16(szName),
        u8(pbSigBlob),
        cbSigBlob,
        u8(pmb),
      ),
    );
  }

  FindMemberRef(
    td: mdTypeDef,
    szName: string,
    pbSigBlob: ArrayBufferView,
    cbSigBlob: number,
    pmr: ArrayBufferView,
  ) {
    const fn = this.vtable(
      29,
      {
        parameters: [
          mdTypeDef,
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
        td,
        encodeCString16(szName),
        u8(pbSigBlob),
        cbSigBlob,
        u8(pmr),
      ),
    );
  }

  FindMethod(
    td: mdTypeDef,
    szName: string,
    pbSigBlob: ArrayBufferView,
    cbSigBlob: number,
    pmb: ArrayBufferView,
  ) {
    const fn = this.vtable(
      27,
      {
        parameters: [
          mdTypeDef,
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
        td,
        encodeCString16(szName),
        u8(pbSigBlob),
        cbSigBlob,
        u8(pmb),
      ),
    );
  }

  FindTypeDefByName(
    szTypeDef: string,
    tkEnclosingClass: mdToken,
    ptd: ArrayBufferView,
  ) {
    const fn = this.vtable(
      9,
      {
        parameters: [
          "buffer",
          mdToken,
          "buffer",
        ],
        result: "i32",
      } as const,
    );
    unwrap(
      fn(
        encodeCString16(szTypeDef),
        tkEnclosingClass,
        u8(ptd),
      ),
    );
  }

  FindTypeRef(
    tkResolutionScope: mdToken,
    szName: string,
    ptr: ArrayBufferView,
  ) {
    const fn = this.vtable(
      55,
      {
        parameters: [
          mdToken,
          "buffer",
          "buffer",
        ],
        result: "i32",
      } as const,
    );
    unwrap(
      fn(
        tkResolutionScope,
        encodeCString16(szName),
        u8(ptr),
      ),
    );
  }

  GetClassLayout(
    td: mdTypeDef,
    pdwPackSize: ArrayBufferView,
    rFieldOffset: ArrayBufferView,
    cMax: number,
    pcFieldOffset: ArrayBufferView,
    pulClassSize: ArrayBufferView,
  ) {
    const fn = this.vtable(
      37,
      {
        parameters: [
          mdTypeDef,
          "buffer",
          "buffer",
          "isize",
          "buffer",
          "buffer",
        ],
        result: "i32",
      } as const,
    );
    unwrap(
      fn(
        td,
        u8(pdwPackSize),
        u8(rFieldOffset),
        cMax,
        u8(pcFieldOffset),
        u8(pulClassSize),
      ),
    );
  }

  GetCustomAttributeByName(
    tkObj: mdToken,
    szName: string,
    ppData: ArrayBufferView,
    pcbData: ArrayBufferView,
  ) {
    const fn = this.vtable(
      60,
      {
        parameters: [
          mdToken,
          "buffer",
          "buffer",
          "buffer",
        ],
        result: "i32",
      } as const,
    );
    unwrap(
      fn(
        tkObj,
        encodeCString16(szName),
        u8(ppData),
        u8(pcbData),
      ),
    );
  }

  GetCustomAttributeProps(
    cv: mdCustomAttribute,
    ptkObj: ArrayBufferView,
    ptkType: ArrayBufferView,
    ppBlob: ArrayBufferView,
    pcbSize: ArrayBufferView,
  ) {
    const fn = this.vtable(
      54,
      {
        parameters: [
          mdCustomAttribute,
          "buffer",
          "buffer",
          "buffer",
          "buffer",
        ],
        result: "i32",
      } as const,
    );
    unwrap(
      fn(
        cv,
        u8(ptkObj),
        u8(ptkType),
        u8(ppBlob),
        u8(pcbSize),
      ),
    );
  }

  GetEventProps(
    ev: mdEvent,
    pClass: ArrayBufferView,
    szEvent: ArrayBufferView,
    cchEvent: number,
    pchEvent: ArrayBufferView,
    pdwEventFlags: ArrayBufferView,
    ptkEventType: ArrayBufferView,
    pmdAddOn: ArrayBufferView,
    pmdRemoveOn: ArrayBufferView,
    pmdFire: ArrayBufferView,
    rmdOtherMethod: ArrayBufferView,
    cMax: number,
    pcOtherMethod: ArrayBufferView,
  ) {
    const fn = this.vtable(
      34,
      {
        parameters: [
          mdEvent,
          "buffer",
          "buffer",
          "isize",
          "buffer",
          "buffer",
          "buffer",
          "buffer",
          "buffer",
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
        ev,
        u8(pClass),
        u8(szEvent),
        cchEvent,
        u8(pchEvent),
        u8(pdwEventFlags),
        u8(ptkEventType),
        u8(pmdAddOn),
        u8(pmdRemoveOn),
        u8(pmdFire),
        u8(rmdOtherMethod),
        cMax,
        u8(pcOtherMethod),
      ),
    );
  }

  GetFieldMarshal(
    tk: mdToken,
    ppvNativeType: ArrayBufferView,
    pcbNativeType: ArrayBufferView,
  ) {
    const fn = this.vtable(
      38,
      {
        parameters: [
          mdToken,
          "buffer",
          "buffer",
        ],
        result: "i32",
      } as const,
    );
    unwrap(
      fn(
        tk,
        u8(ppvNativeType),
        u8(pcbNativeType),
      ),
    );
  }

  GetFieldProps(
    mb: mdFieldDef,
    pClass: ArrayBufferView,
    szField: ArrayBufferView,
    cchField: number,
    pchField: ArrayBufferView,
    pdwAttr: ArrayBufferView,
    ppvSigBlob: ArrayBufferView,
    pcbSigBlob: ArrayBufferView,
    pwdCPlusTypeFlag: ArrayBufferView,
    ppValue: ArrayBufferView,
    pcchValue: ArrayBufferView,
  ) {
    const fn = this.vtable(
      57,
      {
        parameters: [
          mdFieldDef,
          "buffer",
          "buffer",
          "isize",
          "buffer",
          "buffer",
          "buffer",
          "buffer",
          "buffer",
          "buffer",
          "buffer",
        ],
        result: "i32",
      } as const,
    );
    unwrap(
      fn(
        mb,
        u8(pClass),
        u8(szField),
        cchField,
        u8(pchField),
        u8(pdwAttr),
        u8(ppvSigBlob),
        u8(pcbSigBlob),
        u8(pwdCPlusTypeFlag),
        u8(ppValue),
        u8(pcchValue),
      ),
    );
  }

  GetInterfaceImplProps(
    iiImpl: mdInterfaceImpl,
    pClass: ArrayBufferView,
    ptkIface: ArrayBufferView,
  ) {
    const fn = this.vtable(
      13,
      {
        parameters: [
          mdInterfaceImpl,
          "buffer",
          "buffer",
        ],
        result: "i32",
      } as const,
    );
    unwrap(
      fn(
        iiImpl,
        u8(pClass),
        u8(ptkIface),
      ),
    );
  }

  GetMemberProps(
    mb: mdToken,
    pClass: ArrayBufferView,
    szMember: ArrayBufferView,
    cchMember: number,
    pchMember: ArrayBufferView,
    pdwAttr: ArrayBufferView,
    ppvSigBlob: ArrayBufferView,
    pcbSigBlob: ArrayBufferView,
    pulCodeRVA: ArrayBufferView,
    pdwImplFlags: ArrayBufferView,
    pdwCPlusTypeFlag: ArrayBufferView,
    ppValue: ArrayBufferView,
    pcchValue: ArrayBufferView,
  ) {
    const fn = this.vtable(
      56,
      {
        parameters: [
          mdToken,
          "buffer",
          "buffer",
          "isize",
          "buffer",
          "buffer",
          "buffer",
          "buffer",
          "buffer",
          "buffer",
          "buffer",
          "buffer",
          "buffer",
        ],
        result: "i32",
      } as const,
    );
    unwrap(
      fn(
        mb,
        u8(pClass),
        u8(szMember),
        cchMember,
        u8(pchMember),
        u8(pdwAttr),
        u8(ppvSigBlob),
        u8(pcbSigBlob),
        u8(pulCodeRVA),
        u8(pdwImplFlags),
        u8(pdwCPlusTypeFlag),
        u8(ppValue),
        u8(pcchValue),
      ),
    );
  }

  GetMemberRefProps(
    mr: mdMemberRef,
    ptk: ArrayBufferView,
    szMember: ArrayBufferView,
    cchMember: number,
    pchMember: ArrayBufferView,
    ppvSigBlob: ArrayBufferView,
    pbSig: ArrayBufferView,
  ) {
    const fn = this.vtable(
      31,
      {
        parameters: [
          mdMemberRef,
          "buffer",
          "buffer",
          "isize",
          "buffer",
          "buffer",
          "buffer",
        ],
        result: "i32",
      } as const,
    );
    unwrap(
      fn(
        mr,
        u8(ptk),
        u8(szMember),
        cchMember,
        u8(pchMember),
        u8(ppvSigBlob),
        u8(pbSig),
      ),
    );
  }

  GetMethodProps(
    mb: mdMethodDef,
    pClass: ArrayBufferView,
    szMethod: ArrayBufferView,
    cchMethod: number,
    pchMethod: ArrayBufferView,
    pdwAttr: ArrayBufferView,
    ppvSigBlob: ArrayBufferView,
    pcbSigBlob: ArrayBufferView,
    pulCodeRVA: ArrayBufferView,
    pdwImplFlags: ArrayBufferView,
  ) {
    const fn = this.vtable(
      30,
      {
        parameters: [
          mdMethodDef,
          "buffer",
          "buffer",
          "isize",
          "buffer",
          "buffer",
          "buffer",
          "buffer",
          "buffer",
          "buffer",
        ],
        result: "i32",
      } as const,
    );
    unwrap(
      fn(
        mb,
        u8(pClass),
        u8(szMethod),
        cchMethod,
        u8(pchMethod),
        u8(pdwAttr),
        u8(ppvSigBlob),
        u8(pcbSigBlob),
        u8(pulCodeRVA),
        u8(pdwImplFlags),
      ),
    );
  }

  GetMethodSemantics(
    mb: mdMethodDef,
    tkEventProp: mdToken,
    pdwSemanticsFlags: ArrayBufferView,
  ) {
    const fn = this.vtable(
      36,
      {
        parameters: [
          mdMethodDef,
          mdToken,
          "buffer",
        ],
        result: "i32",
      } as const,
    );
    unwrap(
      fn(
        mb,
        tkEventProp,
        u8(pdwSemanticsFlags),
      ),
    );
  }

  GetModuleFromScope(
    pmd: ArrayBufferView,
  ) {
    const fn = this.vtable(
      11,
      {
        parameters: [
          "buffer",
        ],
        result: "i32",
      } as const,
    );
    unwrap(
      fn(
        u8(pmd),
      ),
    );
  }

  GetModuleRefProps(
    mur: mdModuleRef,
    szName: ArrayBufferView,
    cchName: number,
    pchName: ArrayBufferView,
  ) {
    const fn = this.vtable(
      42,
      {
        parameters: [
          mdModuleRef,
          "buffer",
          "isize",
          "buffer",
        ],
        result: "i32",
      } as const,
    );
    unwrap(
      fn(
        mur,
        u8(szName),
        cchName,
        u8(pchName),
      ),
    );
  }

  GetNameFromToken(
    tk: mdToken,
    szUtf8NamePtr: ArrayBufferView,
  ) {
    const fn = this.vtable(
      45,
      {
        parameters: [
          mdToken,
          "buffer",
        ],
        result: "i32",
      } as const,
    );
    unwrap(
      fn(
        tk,
        u8(szUtf8NamePtr),
      ),
    );
  }

  GetNativeCallConvFromSig(
    pvSig: ArrayBufferView,
    cbSig: number,
    pCallConv: ArrayBufferView,
  ) {
    const fn = this.vtable(
      63,
      {
        parameters: [
          "buffer",
          "isize",
          "buffer",
        ],
        result: "i32",
      } as const,
    );
    unwrap(
      fn(
        u8(pvSig),
        cbSig,
        u8(pCallConv),
      ),
    );
  }

  GetNestedClassProps(
    tdNestedClass: mdTypeDef,
    ptdEnclosingClass: ArrayBufferView,
  ) {
    const fn = this.vtable(
      62,
      {
        parameters: [
          mdTypeDef,
          "buffer",
        ],
        result: "i32",
      } as const,
    );
    unwrap(
      fn(
        tdNestedClass,
        u8(ptdEnclosingClass),
      ),
    );
  }

  GetParamForMethodIndex(
    md: mdMethodDef,
    ulParamSeq: number,
    ppd: ArrayBufferView,
  ) {
    const fn = this.vtable(
      52,
      {
        parameters: [
          mdMethodDef,
          "u32",
          "buffer",
        ],
        result: "i32",
      } as const,
    );
    unwrap(
      fn(
        md,
        ulParamSeq,
        u8(ppd),
      ),
    );
  }

  GetParamProps(
    tk: mdParamDef,
    ptkMethod: ArrayBufferView,
    pulSequence: ArrayBufferView,
    szName: ArrayBufferView,
    cchName: number,
    pchName: ArrayBufferView,
    pdwAttr: ArrayBufferView,
    pwdCPlusTypeFlag: ArrayBufferView,
    ppValue: ArrayBufferView,
    pcchValue: ArrayBufferView,
  ) {
    const fn = this.vtable(
      59,
      {
        parameters: [
          mdParamDef,
          "buffer",
          "buffer",
          "buffer",
          "isize",
          "buffer",
          "buffer",
          "buffer",
          "buffer",
          "buffer",
        ],
        result: "i32",
      } as const,
    );
    unwrap(
      fn(
        tk,
        u8(ptkMethod),
        u8(pulSequence),
        u8(szName),
        cchName,
        u8(pchName),
        u8(pdwAttr),
        u8(pwdCPlusTypeFlag),
        u8(ppValue),
        u8(pcchValue),
      ),
    );
  }

  GetPermissionSetProps(
    pm: mdPermission,
    pdwAction: ArrayBufferView,
    ppvPermission: ArrayBufferView,
    pcbPermission: ArrayBufferView,
  ) {
    const fn = this.vtable(
      40,
      {
        parameters: [
          mdPermission,
          "buffer",
          "buffer",
          "buffer",
        ],
        result: "i32",
      } as const,
    );
    unwrap(
      fn(
        pm,
        u8(pdwAction),
        u8(ppvPermission),
        u8(pcbPermission),
      ),
    );
  }

  GetPinvokeMap(
    tk: mdToken,
    pdwMappingFlags: ArrayBufferView,
    szImportName: ArrayBufferView,
    cchImportName: number,
    pchImportName: ArrayBufferView,
    pmrImportDLL: ArrayBufferView,
  ) {
    const fn = this.vtable(
      48,
      {
        parameters: [
          mdToken,
          "buffer",
          "buffer",
          "isize",
          "buffer",
          "buffer",
        ],
        result: "i32",
      } as const,
    );
    unwrap(
      fn(
        tk,
        u8(pdwMappingFlags),
        u8(szImportName),
        cchImportName,
        u8(pchImportName),
        u8(pmrImportDLL),
      ),
    );
  }

  GetPropertyProps(
    prop: mdProperty,
    pClass: ArrayBufferView,
    szProperty: ArrayBufferView,
    cchProperty: number,
    pchProperty: ArrayBufferView,
    pdwPropFlags: ArrayBufferView,
    ppvSig: ArrayBufferView,
    pbSig: ArrayBufferView,
    pwdCPlusTypeFlag: ArrayBufferView,
    ppDefaultValue: ArrayBufferView,
    pcchDefaultValue: ArrayBufferView,
    pmdSetter: ArrayBufferView,
    pmdGetter: ArrayBufferView,
    rmdOtherMethod: ArrayBufferView,
    cMax: number,
    pcOtherMethod: ArrayBufferView,
  ) {
    const fn = this.vtable(
      58,
      {
        parameters: [
          mdProperty,
          "buffer",
          "buffer",
          "isize",
          "buffer",
          "buffer",
          "buffer",
          "buffer",
          "buffer",
          "buffer",
          "buffer",
          "buffer",
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
        prop,
        u8(pClass),
        u8(szProperty),
        cchProperty,
        u8(pchProperty),
        u8(pdwPropFlags),
        u8(ppvSig),
        u8(pbSig),
        u8(pwdCPlusTypeFlag),
        u8(ppDefaultValue),
        u8(pcchDefaultValue),
        u8(pmdSetter),
        u8(pmdGetter),
        u8(rmdOtherMethod),
        cMax,
        u8(pcOtherMethod),
      ),
    );
  }

  GetRVA(
    tk: mdToken,
    pulCodeRVA: ArrayBufferView,
    pdwImplFlags: ArrayBufferView,
  ) {
    const fn = this.vtable(
      39,
      {
        parameters: [
          mdToken,
          "buffer",
          "buffer",
        ],
        result: "i32",
      } as const,
    );
    unwrap(
      fn(
        tk,
        u8(pulCodeRVA),
        u8(pdwImplFlags),
      ),
    );
  }

  GetScopeProps(
    szName: ArrayBufferView,
    cchName: number,
    pchName: ArrayBufferView,
    pmvid: ArrayBufferView,
  ) {
    const fn = this.vtable(
      10,
      {
        parameters: [
          "buffer",
          "isize",
          "buffer",
          "buffer",
        ],
        result: "i32",
      } as const,
    );
    unwrap(
      fn(
        u8(szName),
        cchName,
        u8(pchName),
        u8(pmvid),
      ),
    );
  }

  GetSigFromToken(
    mdSig: mdSignature,
    ppvSig: ArrayBufferView,
    pcbSig: ArrayBufferView,
  ) {
    const fn = this.vtable(
      41,
      {
        parameters: [
          mdSignature,
          "buffer",
          "buffer",
        ],
        result: "i32",
      } as const,
    );
    unwrap(
      fn(
        mdSig,
        u8(ppvSig),
        u8(pcbSig),
      ),
    );
  }

  GetTypeDefProps(
    td: mdTypeDef,
    szTypeDef: ArrayBufferView,
    cchTypeDef: number,
    pchTypeDef: ArrayBufferView,
    pdwTypeDefFlags: ArrayBufferView,
    ptkExtends: ArrayBufferView,
  ) {
    const fn = this.vtable(
      12,
      {
        parameters: [
          mdTypeDef,
          "buffer",
          "isize",
          "buffer",
          "buffer",
          "buffer",
        ],
        result: "i32",
      } as const,
    );
    unwrap(
      fn(
        td,
        u8(szTypeDef),
        cchTypeDef,
        u8(pchTypeDef),
        u8(pdwTypeDefFlags),
        u8(ptkExtends),
      ),
    );
  }

  GetTypeRefProps(
    tr: mdTypeRef,
    ptkResolutionScope: ArrayBufferView,
    szName: ArrayBufferView,
    cchName: number,
    pchName: ArrayBufferView,
  ) {
    const fn = this.vtable(
      14,
      {
        parameters: [
          mdTypeRef,
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
        tr,
        u8(ptkResolutionScope),
        u8(szName),
        cchName,
        u8(pchName),
      ),
    );
  }

  GetTypeSpecFromToken(
    typespec: mdTypeSpec,
    ppvSig: ArrayBufferView,
    pcbSig: ArrayBufferView,
  ) {
    const fn = this.vtable(
      44,
      {
        parameters: [
          mdTypeSpec,
          "buffer",
          "buffer",
        ],
        result: "i32",
      } as const,
    );
    unwrap(
      fn(
        typespec,
        u8(ppvSig),
        u8(pcbSig),
      ),
    );
  }

  GetUserString(
    tk: mdString,
    szString: ArrayBufferView,
    cchString: number,
    pchString: ArrayBufferView,
  ) {
    const fn = this.vtable(
      47,
      {
        parameters: [
          mdString,
          "buffer",
          "isize",
          "buffer",
        ],
        result: "i32",
      } as const,
    );
    unwrap(
      fn(
        tk,
        u8(szString),
        cchString,
        u8(pchString),
      ),
    );
  }

  IsGlobal(
    pd: mdToken,
    pbGlobal: ArrayBufferView,
  ) {
    const fn = this.vtable(
      64,
      {
        parameters: [
          mdToken,
          "buffer",
        ],
        result: "i32",
      } as const,
    );
    unwrap(
      fn(
        pd,
        u8(pbGlobal),
      ),
    );
  }

  IsValidToken(
    tk: mdToken,
  ): boolean {
    const fn = this.vtable(
      61,
      {
        parameters: [
          mdToken,
        ],
        result: "i32",
      } as const,
    );
    return fn(tk) !== 0;
  }

  ResetEnum(
    hEnum: HCORENUM,
    ulPos: number,
  ) {
    const fn = this.vtable(
      5,
      {
        parameters: [
          HCORENUM,
          "isize",
        ],
        result: "i32",
      } as const,
    );
    unwrap(
      fn(
        hEnum,
        ulPos,
      ),
    );
  }

  ResolveTypeRef(
    tr: mdTypeRef,
    riid: GUID,
    ppIScope: ArrayBufferView,
    ptd: ArrayBufferView,
  ) {
    const fn = this.vtable(
      15,
      {
        parameters: [
          mdTypeRef,
          "buffer",
          "buffer",
          "buffer",
        ],
        result: "i32",
      } as const,
    );
    unwrap(
      fn(
        tr,
        riid,
        u8(ppIScope),
        u8(ptd),
      ),
    );
  }

  _getClassName(): string {
    return "IMetaDataImport";
  }
}
