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

  [Symbol.for("COMObject.name")]() {
    return "Windows.Win32.System.Com.IUnknown";
  }

  QueryInterface(
    riid: PointerConvertible<Guid>,
    ppvObject: PointerConvertible<PointerConvertible<void>>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: ["pointer", "pointer", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(riid), toPointer(ppvObject)),
    );
  }

  AddRef(): number {
    return this._getFunction(
      1,
      {
        parameters: ["pointer"],
        result: "u32",
      } as const,
    )(this._ptr);
  }

  Release(): number {
    return this._getFunction(
      2,
      {
        parameters: ["pointer"],
        result: "u32",
      } as const,
    )(this._ptr);
  }
}
