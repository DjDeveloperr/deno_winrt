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

  SetFileTypes(
    cFileTypes: number,
    rgFilterSpec: PointerConvertible<COMDLG_FILTERSPEC>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: ["u32", "pointer"],
          result: "pointer",
        } as const,
      )(cFileTypes, toPointer(rgFilterSpec)),
    );
  }

  SetFileTypeIndex(
    iFileType: number,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: ["u32"],
          result: "pointer",
        } as const,
      )(iFileType),
    );
  }

  GetFileTypeIndex(
    piFileType: PointerConvertible<number>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: ["pointer"],
          result: "pointer",
        } as const,
      )(toPointer(piFileType)),
    );
  }

  Advise(
    pfde: IFileDialogEvents,
    pdwCookie: PointerConvertible<number>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: ["pointer", "pointer"],
          result: "pointer",
        } as const,
      )(toPointer(pfde), toPointer(pdwCookie)),
    );
  }

  Unadvise(
    dwCookie: number,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: ["u32"],
          result: "pointer",
        } as const,
      )(dwCookie),
    );
  }

  SetOptions(
    fos: number,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: ["u32"],
          result: "pointer",
        } as const,
      )(fos),
    );
  }

  GetOptions(
    pfos: PointerConvertible<number>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: ["pointer"],
          result: "pointer",
        } as const,
      )(toPointer(pfos)),
    );
  }

  SetDefaultFolder(
    psi: IShellItem,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: ["pointer"],
          result: "pointer",
        } as const,
      )(toPointer(psi)),
    );
  }

  SetFolder(
    psi: IShellItem,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: ["pointer"],
          result: "pointer",
        } as const,
      )(toPointer(psi)),
    );
  }

  GetFolder(
    ppsi: PointerConvertible<IShellItem>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: ["pointer"],
          result: "pointer",
        } as const,
      )(toPointer(ppsi)),
    );
  }

  GetCurrentSelection(
    ppsi: PointerConvertible<IShellItem>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: ["pointer"],
          result: "pointer",
        } as const,
      )(toPointer(ppsi)),
    );
  }

  SetFileName(
    pszName: PWSTR,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: ["pointer"],
          result: "pointer",
        } as const,
      )(toPointer(pszName)),
    );
  }

  GetFileName(
    pszName: PointerConvertible<PWSTR>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: ["pointer"],
          result: "pointer",
        } as const,
      )(toPointer(pszName)),
    );
  }

  SetTitle(
    pszTitle: PWSTR,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: ["pointer"],
          result: "pointer",
        } as const,
      )(toPointer(pszTitle)),
    );
  }

  SetOkButtonLabel(
    pszText: PWSTR,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: ["pointer"],
          result: "pointer",
        } as const,
      )(toPointer(pszText)),
    );
  }

  SetFileNameLabel(
    pszLabel: PWSTR,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: ["pointer"],
          result: "pointer",
        } as const,
      )(toPointer(pszLabel)),
    );
  }

  GetResult(
    ppsi: PointerConvertible<IShellItem>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: ["pointer"],
          result: "pointer",
        } as const,
      )(toPointer(ppsi)),
    );
  }

  AddPlace(
    psi: IShellItem,
    fdap: FDAP,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: ["pointer", "pointer"],
          result: "pointer",
        } as const,
      )(toPointer(psi), toPointer(fdap)),
    );
  }

  SetDefaultExtension(
    pszDefaultExtension: PWSTR,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: ["pointer"],
          result: "pointer",
        } as const,
      )(toPointer(pszDefaultExtension)),
    );
  }

  Close(
    hr: HRESULT,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: ["pointer"],
          result: "pointer",
        } as const,
      )(toPointer(hr)),
    );
  }

  SetClientGuid(
    guid: PointerConvertible<Guid>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: ["pointer"],
          result: "pointer",
        } as const,
      )(toPointer(guid)),
    );
  }

  ClearClientData(): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: [],
          result: "pointer",
        } as const,
      )(),
    );
  }

  SetFilter(
    pFilter: IShellItemFilter,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: ["pointer"],
          result: "pointer",
        } as const,
      )(toPointer(pFilter)),
    );
  }
}
