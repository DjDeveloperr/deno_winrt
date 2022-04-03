import { GUID } from "../../../../../guid.ts";
import { IUnknown } from "../../../../Windows/Win32/System/Com/IUnknown.ts";
import { IShellItem } from "../../../../Windows/Win32/UI/Shell/IShellItem.ts";
import { HRESULT } from "../../../../Windows/Win32/Foundation/HRESULT.ts";
import {
  COMObject,
  PointerConvertible,
  toPointer,
} from "../../../../../com.ts";

export class IEnumShellItems extends IUnknown {
  static GUID = GUID.fromString("{70629033-E363-4A28-A567-0DB78006E6D7}");

  [Symbol.for("COMObject.name")]() {
    return "Windows.Win32.UI.Shell.IEnumShellItems";
  }

  Next(
    celt: number,
    rgelt: PointerConvertible<IShellItem>,
    pceltFetched: PointerConvertible<number>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        3,
        {
          parameters: ["pointer", "u32", "pointer", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, celt, toPointer(rgelt), toPointer(pceltFetched)),
    );
  }

  Skip(
    celt: number,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        4,
        {
          parameters: ["pointer", "u32"],
          result: "pointer",
        } as const,
      )(this._ptr, celt),
    );
  }

  Reset(): HRESULT {
    return new HRESULT(
      this._getFunction(
        5,
        {
          parameters: ["pointer"],
          result: "pointer",
        } as const,
      )(this._ptr),
    );
  }

  Clone(
    ppenum: PointerConvertible<IEnumShellItems>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        6,
        {
          parameters: ["pointer", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(ppenum)),
    );
  }
}
