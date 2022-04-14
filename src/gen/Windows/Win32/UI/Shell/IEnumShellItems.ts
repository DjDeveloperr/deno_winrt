import { GUID } from "../../../../../guid.ts";
import { IUnknown } from "../../../../Windows/Win32/System/Com/IUnknown.ts";
import { PointerConvertible } from "../../../../../com.ts";
import { IShellItem } from "../../../../Windows/Win32/UI/Shell/IShellItem.ts";
import { toPointer } from "../../../../../com.ts";

export class IEnumShellItems extends IUnknown {
  static GUID = GUID.fromString("{70629033-E363-4A28-A567-0DB78006E6D7}");

  [Symbol.for("COMObject.name")]() {
    return "Windows.Win32.UI.Shell.IEnumShellItems";
  }

  Next(
    celt: number,
    rgelt: PointerConvertible<IShellItem>,
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
    ppenum: PointerConvertible<IEnumShellItems>,
  ): number {
    const result = this._getFunction(6, {
      parameters: ["pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(ppenum));
    return result;
  }
}
