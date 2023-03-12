import { GUID, GUIDConv } from "../guid.ts";
import { encodeCString16, u8, unwrap } from "../util.ts";
import { IMetaDataImport } from "./IMetaDataImport.ts";
import { IUnknown } from "./IUnknown.ts";
import { createInstance } from "./object.ts";

export class IMetaDataDispenser extends IUnknown {
  static GUID = new GUID("{809C652E-7396-11D2-9771-00A0C9B4D50C}");

  DefineScope(
    rclsid: GUIDConv,
    dwOpenFlags: number,
    riid: GUIDConv,
    ppIUnk: BigUint64Array,
  ): void {
    const fn = this.vtable(
      3,
      {
        parameters: ["buffer", "u32", "buffer", "buffer"],
        result: "i32",
      } as const,
    );
    unwrap(fn(new GUID(rclsid), dwOpenFlags, new GUID(riid), u8(ppIUnk)));
  }

  OpenScope<I extends typeof IMetaDataImport>(
    scope: string,
    flags: number,
    i: I,
  ): InstanceType<I> {
    const fn = this.vtable(
      4,
      {
        parameters: ["buffer", "u32", "buffer", "buffer"],
        result: "i32",
      } as const,
    );
    const out = new BigUint64Array(1);
    unwrap(fn(encodeCString16(scope), flags, i.GUID, u8(out)));
    return new i(Deno.UnsafePointer.create(out[0])!) as InstanceType<I>;
  }

  static create(): IMetaDataDispenser {
    return createInstance(
      "{E5CB7A31-7512-11D2-89CE-0080C792E5D8}",
      IMetaDataDispenser,
    );
  }

  _getClassName(): string {
    return "MetaDataDispenser";
  }
}
