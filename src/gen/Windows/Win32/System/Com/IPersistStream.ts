import { GUID } from "../../../../../guid.ts";
import { IPersist } from "../../../../Windows/Win32/System/Com/IPersist.ts";
import { HRESULT } from "../../../../Windows/Win32/Foundation/HRESULT.ts";
import { IStream } from "../../../../Windows/Win32/System/Com/IStream.ts";
import {
  COMObject,
  PointerConvertible,
  toPointer,
} from "../../../../../com.ts";
import { BOOL } from "../../../../Windows/Win32/Foundation/BOOL.ts";
import { ULARGE_INTEGER } from "../../../../Windows/Win32/Foundation/ULARGE_INTEGER.ts";

export class IPersistStream extends IPersist {
  static GUID = GUID.fromString("{00000109-0000-0000-C000-000000000046}");

  IsDirty(): HRESULT {
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

  Load(
    pStm: IStream,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: ["pointer"],
          result: "pointer",
        } as const,
      )(toPointer(pStm)),
    );
  }

  Save(
    pStm: IStream,
    fClearDirty: BOOL,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: ["pointer", "pointer"],
          result: "pointer",
        } as const,
      )(toPointer(pStm), toPointer(fClearDirty)),
    );
  }

  GetSizeMax(
    pcbSize: PointerConvertible<ULARGE_INTEGER>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: ["pointer"],
          result: "pointer",
        } as const,
      )(toPointer(pcbSize)),
    );
  }
}
