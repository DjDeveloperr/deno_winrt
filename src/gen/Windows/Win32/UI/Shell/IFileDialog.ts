import { GUID } from "../../../../../guid.ts";
import { IModalWindow } from "../../../../Windows/Win32/UI/Shell/IModalWindow.ts";
import { PointerConvertible } from "../../../../../com.ts";
import { COMDLG_FILTERSPEC } from "../../../../Windows/Win32/UI/Shell/Common/COMDLG_FILTERSPEC.ts";
import { toPointer } from "../../../../../com.ts";
import { IFileDialogEvents } from "../../../../Windows/Win32/UI/Shell/IFileDialogEvents.ts";
import { IShellItem } from "../../../../Windows/Win32/UI/Shell/IShellItem.ts";
import { PWSTRConvertible } from "../../../../../com.ts";
import { toPWSTR } from "../../../../../com.ts";
import { IShellItemFilter } from "../../../../Windows/Win32/UI/Shell/IShellItemFilter.ts";

export class IFileDialog extends IModalWindow {
  static GUID = GUID.fromString("{42F85136-DB7E-439C-85F1-E4075D135FC8}");

  [Symbol.for("COMObject.name")]() {
    return "Windows.Win32.UI.Shell.IFileDialog";
  }

  SetFileTypes(
    cFileTypes: number,
    rgFilterSpec: PointerConvertible<COMDLG_FILTERSPEC>,
  ): number {
    const result = this._getFunction(4, {
      parameters: ["pointer", "u32", "pointer"],
      result: "i32",
    } as const)(this._ptr, cFileTypes, toPointer(rgFilterSpec));
    return result;
  }

  SetFileTypeIndex(
    iFileType: number,
  ): number {
    const result = this._getFunction(5, {
      parameters: ["pointer", "u32"],
      result: "i32",
    } as const)(this._ptr, iFileType);
    return result;
  }

  GetFileTypeIndex(
    piFileType: PointerConvertible<number>,
  ): number {
    const result = this._getFunction(6, {
      parameters: ["pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(piFileType));
    return result;
  }

  Advise(
    pfde: IFileDialogEvents,
    pdwCookie: PointerConvertible<number>,
  ): number {
    const result = this._getFunction(7, {
      parameters: ["pointer", "pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(pfde), toPointer(pdwCookie));
    return result;
  }

  Unadvise(
    dwCookie: number,
  ): number {
    const result = this._getFunction(8, {
      parameters: ["pointer", "u32"],
      result: "i32",
    } as const)(this._ptr, dwCookie);
    return result;
  }

  SetOptions(
    fos: number,
  ): number {
    const result = this._getFunction(9, {
      parameters: ["pointer", "u32"],
      result: "i32",
    } as const)(this._ptr, fos);
    return result;
  }

  GetOptions(
    pfos: PointerConvertible<number>,
  ): number {
    const result = this._getFunction(10, {
      parameters: ["pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(pfos));
    return result;
  }

  SetDefaultFolder(
    psi: IShellItem,
  ): number {
    const result = this._getFunction(11, {
      parameters: ["pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(psi));
    return result;
  }

  SetFolder(
    psi: IShellItem,
  ): number {
    const result = this._getFunction(12, {
      parameters: ["pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(psi));
    return result;
  }

  GetFolder(
    ppsi: PointerConvertible<IShellItem>,
  ): number {
    const result = this._getFunction(13, {
      parameters: ["pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(ppsi));
    return result;
  }

  GetCurrentSelection(
    ppsi: PointerConvertible<IShellItem>,
  ): number {
    const result = this._getFunction(14, {
      parameters: ["pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(ppsi));
    return result;
  }

  SetFileName(
    pszName: PWSTRConvertible,
  ): number {
    const result = this._getFunction(15, {
      parameters: ["pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPWSTR(pszName));
    return result;
  }

  GetFileName(
    pszName: PointerConvertible<PWSTRConvertible>,
  ): number {
    const result = this._getFunction(16, {
      parameters: ["pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(pszName));
    return result;
  }

  SetTitle(
    pszTitle: PWSTRConvertible,
  ): number {
    const result = this._getFunction(17, {
      parameters: ["pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPWSTR(pszTitle));
    return result;
  }

  SetOkButtonLabel(
    pszText: PWSTRConvertible,
  ): number {
    const result = this._getFunction(18, {
      parameters: ["pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPWSTR(pszText));
    return result;
  }

  SetFileNameLabel(
    pszLabel: PWSTRConvertible,
  ): number {
    const result = this._getFunction(19, {
      parameters: ["pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPWSTR(pszLabel));
    return result;
  }

  GetResult(
    ppsi: PointerConvertible<IShellItem>,
  ): number {
    const result = this._getFunction(20, {
      parameters: ["pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(ppsi));
    return result;
  }

  AddPlace(
    psi: IShellItem,
    fdap: number /* FDAP */,
  ): number {
    const result = this._getFunction(21, {
      parameters: ["pointer", "pointer", "i16"],
      result: "i32",
    } as const)(this._ptr, toPointer(psi), fdap);
    return result;
  }

  SetDefaultExtension(
    pszDefaultExtension: PWSTRConvertible,
  ): number {
    const result = this._getFunction(22, {
      parameters: ["pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPWSTR(pszDefaultExtension));
    return result;
  }

  Close(
    hr: number,
  ): number {
    const result = this._getFunction(23, {
      parameters: ["pointer", "i32"],
      result: "i32",
    } as const)(this._ptr, hr);
    return result;
  }

  SetClientGuid(
    guid: PointerConvertible<GUID>,
  ): number {
    const result = this._getFunction(24, {
      parameters: ["pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(guid));
    return result;
  }

  ClearClientData(): number {
    const result = this._getFunction(25, {
      parameters: ["pointer", ],
      result: "i32",
    } as const)(this._ptr, );
    return result;
  }

  SetFilter(
    pFilter: IShellItemFilter,
  ): number {
    const result = this._getFunction(26, {
      parameters: ["pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(pFilter));
    return result;
  }
}
