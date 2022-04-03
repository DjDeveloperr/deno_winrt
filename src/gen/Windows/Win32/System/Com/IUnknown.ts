import { GUID } from "../../../../../guid.ts";
import {
  COMObject,
  PointerConvertible,
  toPointer,
} from "../../../../../com.ts";
import { Guid } from "../../../../System/Guid.ts";
import { HRESULT } from "../../../../Windows/Win32/Foundation/HRESULT.ts";

export class IUnknown extends COMObject {
  static GUID = GUID.fromString("{00000000-0000-0000-C000-000000000046}");

  QueryInterface(
    riid: PointerConvertible<Guid>,
    ppvObject: PointerConvertible<PointerConvertible<void>>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: ["pointer", "pointer"],
          result: "pointer",
        } as const,
      )(toPointer(riid), toPointer(ppvObject)),
    );
  }

  AddRef(): number {
    return this._getFunction(
      0,
      {
        parameters: [],
        result: "u32",
      } as const,
    )();
  }

  Release(): number {
    return this._getFunction(
      0,
      {
        parameters: [],
        result: "u32",
      } as const,
    )();
  }
}
