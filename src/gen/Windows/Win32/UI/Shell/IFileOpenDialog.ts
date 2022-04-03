import { GUID } from "../../../../../guid.ts";
import { IFileDialog } from "../../../../Windows/Win32/UI/Shell/IFileDialog.ts";
import { IShellItemArray } from "../../../../Windows/Win32/UI/Shell/IShellItemArray.ts";
import { HRESULT } from "../../../../Windows/Win32/Foundation/HRESULT.ts";
import {
  COMObject,
  PointerConvertible,
  toPointer,
} from "../../../../../com.ts";

export class IFileOpenDialog extends IFileDialog {
  static GUID = GUID.fromString("{D57C7288-D4AD-4768-BE02-9D969532D960}");

  [Symbol.for("COMObject.name")]() {
    return "Windows.Win32.UI.Shell.IFileOpenDialog";
  }

  GetResults(
    ppenum: PointerConvertible<IShellItemArray>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        27,
        {
          parameters: ["pointer", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(ppenum)),
    );
  }

  GetSelectedItems(
    ppsai: PointerConvertible<IShellItemArray>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        28,
        {
          parameters: ["pointer", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(ppsai)),
    );
  }
}
