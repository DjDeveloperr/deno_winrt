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

  BindToHandler(
    pbc: IBindCtx,
    bhid: PointerConvertible<Guid>,
    riid: PointerConvertible<Guid>,
    ppv: PointerConvertible<PointerConvertible<void>>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: ["pointer", "pointer", "pointer", "pointer"],
          result: "pointer",
        } as const,
      )(toPointer(pbc), toPointer(bhid), toPointer(riid), toPointer(ppv)),
    );
  }

  GetParent(
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

  GetDisplayName(
    sigdnName: SIGDN,
    ppszName: PointerConvertible<PWSTR>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: ["pointer", "pointer"],
          result: "pointer",
        } as const,
      )(toPointer(sigdnName), toPointer(ppszName)),
    );
  }

  GetAttributes(
    sfgaoMask: number,
    psfgaoAttribs: PointerConvertible<number>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: ["u32", "pointer"],
          result: "pointer",
        } as const,
      )(sfgaoMask, toPointer(psfgaoAttribs)),
    );
  }

  Compare(
    psi: IShellItem,
    hint: number,
    piOrder: PointerConvertible<number>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: ["pointer", "u32", "pointer"],
          result: "pointer",
        } as const,
      )(toPointer(psi), hint, toPointer(piOrder)),
    );
  }
}
