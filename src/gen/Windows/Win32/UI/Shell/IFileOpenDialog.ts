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

  GetResults(
    ppenum: PointerConvertible<IShellItemArray>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: ["pointer"],
          result: "pointer",
        } as const,
      )(toPointer(ppenum)),
    );
  }

  GetSelectedItems(
    ppsai: PointerConvertible<IShellItemArray>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: ["pointer"],
          result: "pointer",
        } as const,
      )(toPointer(ppsai)),
    );
  }
}
