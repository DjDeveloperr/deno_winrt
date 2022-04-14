import { GUID } from "../../../../../guid.ts";
import { IUnknown } from "../../../../Windows/Win32/System/Com/IUnknown.ts";
import { PointerConvertible } from "../../../../../com.ts";
import { IMoniker } from "../../../../Windows/Win32/System/Com/IMoniker.ts";
import { toPointer } from "../../../../../com.ts";

export class IEnumMoniker extends IUnknown {
  static GUID = GUID.fromString("{00000102-0000-0000-C000-000000000046}");

  [Symbol.for("COMObject.name")]() {
    return "Windows.Win32.System.Com.IEnumMoniker";
  }

  Next(
    celt: number,
    rgelt: PointerConvertible<IMoniker>,
    pceltFetched: PointerConvertible<number> | null,
  ): number {
    const result = this._getFunction(3, {
      parameters: ["pointer", "u32", "pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, celt, toPointer(rgelt), toPointer(pceltFetched));
    return result;
  }

  Skip(
    celt: number,
  ): number {
    const result = this._getFunction(4, {
      parameters: ["pointer", "u32"],
      result: "i32",
    } as const)(this._ptr, celt);
    return result;
  }

  Reset(): number {
    const result = this._getFunction(5, {
      parameters: ["pointer", ],
      result: "i32",
    } as const)(this._ptr, );
    return result;
  }

  Clone(
    ppenum: PointerConvertible<IEnumMoniker>,
  ): number {
    const result = this._getFunction(6, {
      parameters: ["pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(ppenum));
    return result;
  }
}
