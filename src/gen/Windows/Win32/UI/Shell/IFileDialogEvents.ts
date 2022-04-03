import { GUID } from "../../../../../guid.ts";
import { IUnknown } from "../../../../Windows/Win32/System/Com/IUnknown.ts";
import { IFileDialog } from "../../../../Windows/Win32/UI/Shell/IFileDialog.ts";
import { HRESULT } from "../../../../Windows/Win32/Foundation/HRESULT.ts";
import {
  COMObject,
  PointerConvertible,
  toPointer,
} from "../../../../../com.ts";
import { IShellItem } from "../../../../Windows/Win32/UI/Shell/IShellItem.ts";
import { FDE_SHAREVIOLATION_RESPONSE } from "../../../../Windows/Win32/UI/Shell/FDE_SHAREVIOLATION_RESPONSE.ts";
import { FDE_OVERWRITE_RESPONSE } from "../../../../Windows/Win32/UI/Shell/FDE_OVERWRITE_RESPONSE.ts";

export class IFileDialogEvents extends IUnknown {
  static GUID = GUID.fromString("{973510DB-7D7F-452B-8975-74A85828D354}");

  [Symbol.for("COMObject.name")]() {
    return "Windows.Win32.UI.Shell.IFileDialogEvents";
  }

  OnFileOk(
    pfd: IFileDialog,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        3,
        {
          parameters: ["pointer", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(pfd)),
    );
  }

  OnFolderChanging(
    pfd: IFileDialog,
    psiFolder: IShellItem,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        4,
        {
          parameters: ["pointer", "pointer", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(pfd), toPointer(psiFolder)),
    );
  }

  OnFolderChange(
    pfd: IFileDialog,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        5,
        {
          parameters: ["pointer", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(pfd)),
    );
  }

  OnSelectionChange(
    pfd: IFileDialog,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        6,
        {
          parameters: ["pointer", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(pfd)),
    );
  }

  OnShareViolation(
    pfd: IFileDialog,
    psi: IShellItem,
    pResponse: PointerConvertible<FDE_SHAREVIOLATION_RESPONSE>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        7,
        {
          parameters: ["pointer", "pointer", "pointer", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(pfd), toPointer(psi), toPointer(pResponse)),
    );
  }

  OnTypeChange(
    pfd: IFileDialog,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        8,
        {
          parameters: ["pointer", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(pfd)),
    );
  }

  OnOverwrite(
    pfd: IFileDialog,
    psi: IShellItem,
    pResponse: PointerConvertible<FDE_OVERWRITE_RESPONSE>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        9,
        {
          parameters: ["pointer", "pointer", "pointer", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(pfd), toPointer(psi), toPointer(pResponse)),
    );
  }
}
