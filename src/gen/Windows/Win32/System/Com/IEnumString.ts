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

  Next(
    celt: number,
    rgelt: PointerConvertible<PWSTR>,
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
    ppenum: PointerConvertible<IEnumString>,
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
