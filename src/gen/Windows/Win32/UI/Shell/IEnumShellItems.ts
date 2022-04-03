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

  Next(
    celt: number,
    rgelt: PointerConvertible<IShellItem>,
    pceltFetched: PointerConvertible<number>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: ["u32", "pointer", "pointer"],
          result: "pointer",
        } as const,
      )(celt, toPointer(rgelt), toPointer(pceltFetched)),
    );
  }

  Skip(
    celt: number,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: ["u32"],
          result: "pointer",
        } as const,
      )(celt),
    );
  }

  Reset(): HRESULT {
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

  Clone(
    ppenum: PointerConvertible<IEnumShellItems>,
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
}
