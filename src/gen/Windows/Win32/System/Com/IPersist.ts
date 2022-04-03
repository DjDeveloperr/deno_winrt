import { GUID } from "../../../../../guid.ts";
import { IUnknown } from "../../../../Windows/Win32/System/Com/IUnknown.ts";
import { Guid } from "../../../../System/Guid.ts";
import { HRESULT } from "../../../../Windows/Win32/Foundation/HRESULT.ts";
import {
  COMObject,
  PointerConvertible,
  toPointer,
} from "../../../../../com.ts";

export class IPersist extends IUnknown {
  static GUID = GUID.fromString("{0000010C-0000-0000-C000-000000000046}");

  GetClassID(
    pClassID: PointerConvertible<Guid>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: ["pointer"],
          result: "pointer",
        } as const,
      )(toPointer(pClassID)),
    );
  }
}
