import { GUID } from "../../../../../guid.ts";
import { IPersistStream } from "../../../../Windows/Win32/System/Com/IPersistStream.ts";
import { IBindCtx } from "../../../../Windows/Win32/System/Com/IBindCtx.ts";
import { PointerConvertible } from "../../../../../com.ts";
import { toPointer } from "../../../../../com.ts";
import { IEnumMoniker } from "../../../../Windows/Win32/System/Com/IEnumMoniker.ts";
import { PWSTRConvertible } from "../../../../../com.ts";
import { toPWSTR } from "../../../../../com.ts";

export class IMoniker extends IPersistStream {
  static GUID = GUID.fromString("{0000000F-0000-0000-C000-000000000046}");

  [Symbol.for("COMObject.name")]() {
    return "Windows.Win32.System.Com.IMoniker";
  }

  BindToObject(
    pbc: IBindCtx,
    pmkToLeft: IMoniker | null,
    riidResult: PointerConvertible<GUID>,
    ppvResult: PointerConvertible<PointerConvertible<void>>,
  ): number {
    const result = this._getFunction(8, {
      parameters: ["pointer", "pointer", "pointer", "pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(pbc), toPointer(pmkToLeft), toPointer(riidResult), toPointer(ppvResult));
    return result;
  }

  BindToStorage(
    pbc: IBindCtx,
    pmkToLeft: IMoniker | null,
    riid: PointerConvertible<GUID>,
    ppvObj: PointerConvertible<PointerConvertible<void>>,
  ): number {
    const result = this._getFunction(9, {
      parameters: ["pointer", "pointer", "pointer", "pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(pbc), toPointer(pmkToLeft), toPointer(riid), toPointer(ppvObj));
    return result;
  }

  Reduce(
    pbc: IBindCtx,
    dwReduceHowFar: number,
    ppmkToLeft: PointerConvertible<IMoniker>,
    ppmkReduced: PointerConvertible<IMoniker>,
  ): number {
    const result = this._getFunction(10, {
      parameters: ["pointer", "pointer", "u32", "pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(pbc), dwReduceHowFar, toPointer(ppmkToLeft), toPointer(ppmkReduced));
    return result;
  }

  ComposeWith(
    pmkRight: IMoniker,
    fOnlyIfNotGeneric: boolean,
    ppmkComposite: PointerConvertible<IMoniker>,
  ): number {
    const result = this._getFunction(11, {
      parameters: ["pointer", "pointer", "i32", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(pmkRight), fOnlyIfNotGeneric, toPointer(ppmkComposite));
    return result;
  }

  Enum(
    fForward: boolean,
    ppenumMoniker: PointerConvertible<IEnumMoniker>,
  ): number {
    const result = this._getFunction(12, {
      parameters: ["pointer", "i32", "pointer"],
      result: "i32",
    } as const)(this._ptr, fForward, toPointer(ppenumMoniker));
    return result;
  }

  IsEqual(
    pmkOtherMoniker: IMoniker,
  ): number {
    const result = this._getFunction(13, {
      parameters: ["pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(pmkOtherMoniker));
    return result;
  }

  Hash(
    pdwHash: PointerConvertible<number>,
  ): number {
    const result = this._getFunction(14, {
      parameters: ["pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(pdwHash));
    return result;
  }

  IsRunning(
    pbc: IBindCtx,
    pmkToLeft: IMoniker,
    pmkNewlyRunning: IMoniker,
  ): number {
    const result = this._getFunction(15, {
      parameters: ["pointer", "pointer", "pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(pbc), toPointer(pmkToLeft), toPointer(pmkNewlyRunning));
    return result;
  }

  GetTimeOfLastChange(
    pbc: IBindCtx,
    pmkToLeft: IMoniker,
    pFileTime: PointerConvertible<Deno.UnsafePointer>,
  ): number {
    const result = this._getFunction(16, {
      parameters: ["pointer", "pointer", "pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(pbc), toPointer(pmkToLeft), toPointer(pFileTime));
    return result;
  }

  Inverse(
    ppmk: PointerConvertible<IMoniker>,
  ): number {
    const result = this._getFunction(17, {
      parameters: ["pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(ppmk));
    return result;
  }

  CommonPrefixWith(
    pmkOther: IMoniker,
    ppmkPrefix: PointerConvertible<IMoniker>,
  ): number {
    const result = this._getFunction(18, {
      parameters: ["pointer", "pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(pmkOther), toPointer(ppmkPrefix));
    return result;
  }

  RelativePathTo(
    pmkOther: IMoniker,
    ppmkRelPath: PointerConvertible<IMoniker>,
  ): number {
    const result = this._getFunction(19, {
      parameters: ["pointer", "pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(pmkOther), toPointer(ppmkRelPath));
    return result;
  }

  GetDisplayName(
    pbc: IBindCtx,
    pmkToLeft: IMoniker,
    ppszDisplayName: PointerConvertible<PWSTRConvertible>,
  ): number {
    const result = this._getFunction(20, {
      parameters: ["pointer", "pointer", "pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(pbc), toPointer(pmkToLeft), toPointer(ppszDisplayName));
    return result;
  }

  ParseDisplayName(
    pbc: IBindCtx,
    pmkToLeft: IMoniker,
    pszDisplayName: PWSTRConvertible,
    pchEaten: PointerConvertible<number>,
    ppmkOut: PointerConvertible<IMoniker>,
  ): number {
    const result = this._getFunction(21, {
      parameters: ["pointer", "pointer", "pointer", "pointer", "pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(pbc), toPointer(pmkToLeft), toPWSTR(pszDisplayName), toPointer(pchEaten), toPointer(ppmkOut));
    return result;
  }

  IsSystemMoniker(
    pdwMksys: PointerConvertible<number>,
  ): number {
    const result = this._getFunction(22, {
      parameters: ["pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(pdwMksys));
    return result;
  }
}
