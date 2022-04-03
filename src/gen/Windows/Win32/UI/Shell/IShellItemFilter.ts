import { GUID } from "../../../../../guid.ts";
import { IUnknown } from "../../../../Windows/Win32/System/Com/IUnknown.ts";
import { IShellItem } from "../../../../Windows/Win32/UI/Shell/IShellItem.ts";
import { HRESULT } from "../../../../Windows/Win32/Foundation/HRESULT.ts";
import {
  COMObject,
  PointerConvertible,
  toPointer,
} from "../../../../../com.ts";

export class IShellItemFilter extends IUnknown {
  static GUID = GUID.fromString("{2659B475-EEB8-48B7-8F07-B378810F48CF}");

  [Symbol.for("COMObject.name")]() {
    return "Windows.Win32.UI.Shell.IShellItemFilter";
  }

  IncludeItem(
    psi: IShellItem,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        3,
        {
          parameters: ["pointer", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(psi)),
    );
  }

  GetEnumFlagsForItem(
    psi: IShellItem,
    pgrfFlags: PointerConvertible<number>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        4,
        {
          parameters: ["pointer", "pointer", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(psi), toPointer(pgrfFlags)),
    );
  }
}
