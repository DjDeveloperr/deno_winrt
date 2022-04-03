import { GUID } from "../../../../../guid.ts";
import { IUnknown } from "../../../../Windows/Win32/System/Com/IUnknown.ts";
import { IBindCtx } from "../../../../Windows/Win32/System/Com/IBindCtx.ts";
import { Guid } from "../../../../System/Guid.ts";
import { HRESULT } from "../../../../Windows/Win32/Foundation/HRESULT.ts";
import {
  COMObject,
  PointerConvertible,
  toPointer,
} from "../../../../../com.ts";
import { SIGDN } from "../../../../Windows/Win32/UI/Shell/SIGDN.ts";
import { PWSTR } from "../../../../Windows/Win32/Foundation/PWSTR.ts";

export class IShellItem extends IUnknown {
  static GUID = GUID.fromString("{43826D1E-E718-42EE-BC55-A1E261C37BFE}");

  [Symbol.for("COMObject.name")]() {
    return "Windows.Win32.UI.Shell.IShellItem";
  }

  BindToHandler(
    pbc: IBindCtx,
    bhid: PointerConvertible<Guid>,
    riid: PointerConvertible<Guid>,
    ppv: PointerConvertible<PointerConvertible<void>>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        3,
        {
          parameters: ["pointer", "pointer", "pointer", "pointer", "pointer"],
          result: "pointer",
        } as const,
      )(
        this._ptr,
        toPointer(pbc),
        toPointer(bhid),
        toPointer(riid),
        toPointer(ppv),
      ),
    );
  }

  GetParent(
    ppsi: PointerConvertible<IShellItem>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        4,
        {
          parameters: ["pointer", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(ppsi)),
    );
  }

  GetDisplayName(
    sigdnName: SIGDN,
    ppszName: PointerConvertible<PWSTR>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        5,
        {
          parameters: ["pointer", "pointer", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(sigdnName), toPointer(ppszName)),
    );
  }

  GetAttributes(
    sfgaoMask: number,
    psfgaoAttribs: PointerConvertible<number>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        6,
        {
          parameters: ["pointer", "u32", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, sfgaoMask, toPointer(psfgaoAttribs)),
    );
  }

  Compare(
    psi: IShellItem,
    hint: number,
    piOrder: PointerConvertible<number>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        7,
        {
          parameters: ["pointer", "pointer", "u32", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(psi), hint, toPointer(piOrder)),
    );
  }
}
