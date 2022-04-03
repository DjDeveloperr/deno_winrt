import { GUID } from "../../../../../guid.ts";
import { IModalWindow } from "../../../../Windows/Win32/UI/Shell/IModalWindow.ts";
import { COMDLG_FILTERSPEC } from "../../../../Windows/Win32/UI/Shell/Common/COMDLG_FILTERSPEC.ts";
import { HRESULT } from "../../../../Windows/Win32/Foundation/HRESULT.ts";
import {
  COMObject,
  PointerConvertible,
  toPointer,
} from "../../../../../com.ts";
import { IFileDialogEvents } from "../../../../Windows/Win32/UI/Shell/IFileDialogEvents.ts";
import { IShellItem } from "../../../../Windows/Win32/UI/Shell/IShellItem.ts";
import { PWSTR } from "../../../../Windows/Win32/Foundation/PWSTR.ts";
import { FDAP } from "../../../../Windows/Win32/UI/Shell/FDAP.ts";
import { Guid } from "../../../../System/Guid.ts";
import { IShellItemFilter } from "../../../../Windows/Win32/UI/Shell/IShellItemFilter.ts";

export class IFileDialog extends IModalWindow {
  static GUID = GUID.fromString("{42F85136-DB7E-439C-85F1-E4075D135FC8}");

  [Symbol.for("COMObject.name")]() {
    return "Windows.Win32.UI.Shell.IFileDialog";
  }

  SetFileTypes(
    cFileTypes: number,
    rgFilterSpec: PointerConvertible<COMDLG_FILTERSPEC>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        4,
        {
          parameters: ["pointer", "u32", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, cFileTypes, toPointer(rgFilterSpec)),
    );
  }

  SetFileTypeIndex(
    iFileType: number,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        5,
        {
          parameters: ["pointer", "u32"],
          result: "pointer",
        } as const,
      )(this._ptr, iFileType),
    );
  }

  GetFileTypeIndex(
    piFileType: PointerConvertible<number>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        6,
        {
          parameters: ["pointer", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(piFileType)),
    );
  }

  Advise(
    pfde: IFileDialogEvents,
    pdwCookie: PointerConvertible<number>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        7,
        {
          parameters: ["pointer", "pointer", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(pfde), toPointer(pdwCookie)),
    );
  }

  Unadvise(
    dwCookie: number,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        8,
        {
          parameters: ["pointer", "u32"],
          result: "pointer",
        } as const,
      )(this._ptr, dwCookie),
    );
  }

  SetOptions(
    fos: number,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        9,
        {
          parameters: ["pointer", "u32"],
          result: "pointer",
        } as const,
      )(this._ptr, fos),
    );
  }

  GetOptions(
    pfos: PointerConvertible<number>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        10,
        {
          parameters: ["pointer", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(pfos)),
    );
  }

  SetDefaultFolder(
    psi: IShellItem,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        11,
        {
          parameters: ["pointer", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(psi)),
    );
  }

  SetFolder(
    psi: IShellItem,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        12,
        {
          parameters: ["pointer", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(psi)),
    );
  }

  GetFolder(
    ppsi: PointerConvertible<IShellItem>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        13,
        {
          parameters: ["pointer", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(ppsi)),
    );
  }

  GetCurrentSelection(
    ppsi: PointerConvertible<IShellItem>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        14,
        {
          parameters: ["pointer", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(ppsi)),
    );
  }

  SetFileName(
    pszName: PWSTR,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        15,
        {
          parameters: ["pointer", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(pszName)),
    );
  }

  GetFileName(
    pszName: PointerConvertible<PWSTR>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        16,
        {
          parameters: ["pointer", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(pszName)),
    );
  }

  SetTitle(
    pszTitle: PWSTR,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        17,
        {
          parameters: ["pointer", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(pszTitle)),
    );
  }

  SetOkButtonLabel(
    pszText: PWSTR,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        18,
        {
          parameters: ["pointer", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(pszText)),
    );
  }

  SetFileNameLabel(
    pszLabel: PWSTR,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        19,
        {
          parameters: ["pointer", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(pszLabel)),
    );
  }

  GetResult(
    ppsi: PointerConvertible<IShellItem>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        20,
        {
          parameters: ["pointer", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(ppsi)),
    );
  }

  AddPlace(
    psi: IShellItem,
    fdap: FDAP,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        21,
        {
          parameters: ["pointer", "pointer", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(psi), toPointer(fdap)),
    );
  }

  SetDefaultExtension(
    pszDefaultExtension: PWSTR,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        22,
        {
          parameters: ["pointer", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(pszDefaultExtension)),
    );
  }

  Close(
    hr: HRESULT,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        23,
        {
          parameters: ["pointer", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(hr)),
    );
  }

  SetClientGuid(
    guid: PointerConvertible<Guid>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        24,
        {
          parameters: ["pointer", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(guid)),
    );
  }

  ClearClientData(): HRESULT {
    return new HRESULT(
      this._getFunction(
        25,
        {
          parameters: ["pointer"],
          result: "pointer",
        } as const,
      )(this._ptr),
    );
  }

  SetFilter(
    pFilter: IShellItemFilter,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        26,
        {
          parameters: ["pointer", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(pFilter)),
    );
  }
}
