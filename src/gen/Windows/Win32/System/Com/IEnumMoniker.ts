import { GUID } from "../../../../../guid.ts";
import { IUnknown } from "../../../../Windows/Win32/System/Com/IUnknown.ts";
import { IMoniker } from "../../../../Windows/Win32/System/Com/IMoniker.ts";
import { HRESULT } from "../../../../Windows/Win32/Foundation/HRESULT.ts";
import {
  COMObject,
  PointerConvertible,
  toPointer,
} from "../../../../../com.ts";

export class IEnumMoniker extends IUnknown {
  static GUID = GUID.fromString("{00000102-0000-0000-C000-000000000046}");

  [Symbol.for("COMObject.name")]() {
    return "Windows.Win32.System.Com.IEnumMoniker";
  }

  Next(
    celt: number,
    rgelt: PointerConvertible<IMoniker>,
    pceltFetched: PointerConvertible<number> | null,
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
    ppenum: PointerConvertible<IEnumMoniker>,
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
