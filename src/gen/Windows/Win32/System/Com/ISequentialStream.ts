import { GUID } from "../../../../../guid.ts";
import { IUnknown } from "../../../../Windows/Win32/System/Com/IUnknown.ts";
import { HRESULT } from "../../../../Windows/Win32/Foundation/HRESULT.ts";
import {
  COMObject,
  PointerConvertible,
  toPointer,
} from "../../../../../com.ts";

export class ISequentialStream extends IUnknown {
  static GUID = GUID.fromString("{0C733A30-2A1C-11CE-ADE5-00AA0044773D}");

  Read(
    pv: PointerConvertible<void>,
    cb: number,
    pcbRead: PointerConvertible<number>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: ["pointer", "u32", "pointer"],
          result: "pointer",
        } as const,
      )(toPointer(pv), cb, toPointer(pcbRead)),
    );
  }

  Write(
    pv: PointerConvertible<void>,
    cb: number,
    pcbWritten: PointerConvertible<number>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: ["pointer", "u32", "pointer"],
          result: "pointer",
        } as const,
      )(toPointer(pv), cb, toPointer(pcbWritten)),
    );
  }
}
