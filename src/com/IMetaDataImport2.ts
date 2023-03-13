import { GUID } from "../guid.ts";
import { u8, unwrap } from "../util.ts";
import { IMetaDataImport } from "./IMetaDataImport.ts";

export type mdGenericParam = number;
export const mdGenericParam = "u32";
export type mdGenericParamConstraint = number;
export const mdGenericParamConstraint = "u32";
export type mdMethodSpec = number;
export const mdMethodSpec = "u32";

export class IMetaDataImport2 extends IMetaDataImport {
  static GUID = new GUID("{FCE5EFA0-8BBA-4f8E-A036-8F2022B08466}");

  EnumGenericParamConstraints(
    phEnum: ArrayBufferView,
    tk: mdGenericParam,
    rGenericParamConstraints: ArrayBufferView,
    cMax: number,
    pcGenericParamConstraints: ArrayBufferView,
  ) {
    const fn = this.vtable(
      68,
      {
        parameters: ["buffer", "u32", "buffer", "u32", "buffer"],
        result: "i32",
      } as const,
    );
    unwrap(
      fn(
        phEnum,
        tk,
        u8(rGenericParamConstraints),
        cMax,
        u8(pcGenericParamConstraints),
      ),
    );
  }

  EnumGenericParams(
    phEnum: ArrayBufferView,
    tk: number,
    rGenericParams: ArrayBufferView,
    cMax: number,
    pcGenericParams: ArrayBufferView,
  ) {
    const fn = this.vtable(
      65,
      {
        parameters: ["buffer", "u32", "buffer", "u32", "buffer"],
        result: "i32",
      } as const,
    );
    unwrap(
      fn(
        phEnum,
        tk,
        u8(rGenericParams),
        cMax,
        u8(pcGenericParams),
      ),
    );
  }

  EnumMethodSpecs(
    phEnum: ArrayBufferView,
    tk: number,
    rMethodSpecs: ArrayBufferView,
    cMax: number,
    pcMethodSpecs: ArrayBufferView,
  ) {
    const fn = this.vtable(
      72,
      {
        parameters: ["buffer", "u32", "buffer", "u32", "buffer"],
        result: "i32",
      } as const,
    );
    unwrap(
      fn(
        phEnum,
        tk,
        u8(rMethodSpecs),
        cMax,
        u8(pcMethodSpecs),
      ),
    );
  }

  GetGenericParamConstraintProps(
    gpc: mdGenericParamConstraint,
    ptGenericParam: ArrayBufferView,
    ptkConstraintType: ArrayBufferView,
  ) {
    const fn = this.vtable(
      69,
      {
        parameters: [mdGenericParamConstraint, "buffer", "buffer"],
        result: "i32",
      } as const,
    );
    unwrap(
      fn(
        gpc,
        u8(ptGenericParam),
        u8(ptkConstraintType),
      ),
    );
  }

  GetGenericParamProps(
    gp: mdGenericParam,
    pulParamSeq: ArrayBufferView,
    pdwParamFlags: ArrayBufferView,
    ptOwner: ArrayBufferView,
    reserved: ArrayBufferView,
    wzname: ArrayBufferView,
    cchName: number,
    pchName: ArrayBufferView,
  ) {
    const fn = this.vtable(
      66,
      {
        parameters: [
          mdGenericParam,
          "buffer",
          "buffer",
          "buffer",
          "buffer",
          "buffer",
          "u32",
          "buffer",
        ],
        result: "i32",
      } as const,
    );
    unwrap(
      fn(
        gp,
        u8(pulParamSeq),
        u8(pdwParamFlags),
        u8(ptOwner),
        u8(reserved),
        u8(wzname),
        cchName,
        u8(pchName),
      ),
    );
  }

  GetMethodSpecProps(
    mi: mdMethodSpec,
    tkParent: ArrayBufferView,
    ppvSigBlob: ArrayBufferView,
    pcbSigBlob: ArrayBufferView,
  ) {
    const fn = this.vtable(
      67,
      {
        parameters: [mdMethodSpec, "buffer", "buffer", "buffer"],
        result: "i32",
      } as const,
    );
    unwrap(
      fn(
        mi,
        u8(tkParent),
        u8(ppvSigBlob),
        u8(pcbSigBlob),
      ),
    );
  }

  GetPEKind(
    pdwPEKind: ArrayBufferView,
    pdwMachine: ArrayBufferView,
  ) {
    const fn = this.vtable(
      70,
      {
        parameters: ["buffer", "buffer"],
        result: "i32",
      } as const,
    );
    unwrap(
      fn(
        u8(pdwPEKind),
        u8(pdwMachine),
      ),
    );
  }

  GetVersionString(
    pwzBuf: ArrayBufferView,
    ccBufSize: number,
    pccBufSize: ArrayBufferView,
  ) {
    const fn = this.vtable(
      71,
      {
        parameters: ["buffer", "u32", "buffer"],
        result: "i32",
      } as const,
    );
    unwrap(
      fn(
        u8(pwzBuf),
        ccBufSize,
        u8(pccBufSize),
      ),
    );
  }

  _getClassName(): string {
    return "IMetaDataImport2";
  }
}
