import { GUID } from "../../../../../guid.ts";
import { IUnknown } from "../../../../Windows/Win32/System/Com/IUnknown.ts";
import { HWND } from "../../../../Windows/Win32/Foundation/HWND.ts";
import { HRESULT } from "../../../../Windows/Win32/Foundation/HRESULT.ts";
import {
  COMObject,
  PointerConvertible,
  toPointer,
} from "../../../../../com.ts";

export class IModalWindow extends IUnknown {
  static GUID = GUID.fromString("{B4DB1657-70D7-485E-8E3E-6FCB5A5C1802}");

  [Symbol.for("COMObject.name")]() {
    return "Windows.Win32.UI.Shell.IModalWindow";
  }

  Show(
    hwndOwner: HWND | null,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        3,
        {
          parameters: ["pointer", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(hwndOwner)),
    );
  }
}
