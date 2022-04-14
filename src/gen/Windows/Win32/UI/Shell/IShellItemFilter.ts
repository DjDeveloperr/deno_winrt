import { GUID } from "../../../../../guid.ts";
import { IUnknown } from "../../../../Windows/Win32/System/Com/IUnknown.ts";
import { IShellItem } from "../../../../Windows/Win32/UI/Shell/IShellItem.ts";
import { toPointer } from "../../../../../com.ts";
import { PointerConvertible } from "../../../../../com.ts";

export class IShellItemFilter extends IUnknown {
  static GUID = GUID.fromString("{2659B475-EEB8-48B7-8F07-B378810F48CF}");

  [Symbol.for("COMObject.name")]() {
    return "Windows.Win32.UI.Shell.IShellItemFilter";
  }

  IncludeItem(
    psi: IShellItem,
  ): number {
    const result = this._getFunction(3, {
      parameters: ["pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(psi));
    return result;
  }

  GetEnumFlagsForItem(
    psi: IShellItem,
    pgrfFlags: PointerConvertible<number>,
  ): number {
    const result = this._getFunction(4, {
      parameters: ["pointer", "pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(psi), toPointer(pgrfFlags));
    return result;
  }
}
