import { GUID } from "../../../../../guid.ts";
import { IUnknown } from "../../../../Windows/Win32/System/Com/IUnknown.ts";
import { PWSTR } from "../../../../Windows/Win32/Foundation/PWSTR.ts";
import { HRESULT } from "../../../../Windows/Win32/Foundation/HRESULT.ts";
import {
  COMObject,
  PointerConvertible,
  toPointer,
} from "../../../../../com.ts";

export class IEnumString extends IUnknown {
  static GUID = GUID.fromString("{00000101-0000-0000-C000-000000000046}");

  [Symbol.for("COMObject.name")]() {
    return "Windows.Win32.System.Com.IEnumString";
  }

  Next(
    celt: number,
    rgelt: PointerConvertible<PWSTR>,
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
    ppenum: PointerConvertible<IEnumString>,
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
