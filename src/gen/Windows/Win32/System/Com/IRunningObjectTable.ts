import { GUID } from "../../../../../guid.ts";
import { IUnknown } from "../../../../Windows/Win32/System/Com/IUnknown.ts";
import { IMoniker } from "../../../../Windows/Win32/System/Com/IMoniker.ts";
import { HRESULT } from "../../../../Windows/Win32/Foundation/HRESULT.ts";
import {
  COMObject,
  PointerConvertible,
  toPointer,
} from "../../../../../com.ts";
import { FILETIME } from "../../../../Windows/Win32/Foundation/FILETIME.ts";
import { IEnumMoniker } from "../../../../Windows/Win32/System/Com/IEnumMoniker.ts";

export class IRunningObjectTable extends IUnknown {
  static GUID = GUID.fromString("{00000010-0000-0000-C000-000000000046}");

  Register(
    grfFlags: number,
    punkObject: IUnknown,
    pmkObjectName: IMoniker,
    pdwRegister: PointerConvertible<number>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: ["u32", "pointer", "pointer", "pointer"],
          result: "pointer",
        } as const,
      )(
        grfFlags,
        toPointer(punkObject),
        toPointer(pmkObjectName),
        toPointer(pdwRegister),
      ),
    );
  }

  Revoke(
    dwRegister: number,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: ["u32"],
          result: "pointer",
        } as const,
      )(dwRegister),
    );
  }

  IsRunning(
    pmkObjectName: IMoniker,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: ["pointer"],
          result: "pointer",
        } as const,
      )(toPointer(pmkObjectName)),
    );
  }

  GetObject(
    pmkObjectName: IMoniker,
    ppunkObject: PointerConvertible<IUnknown>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: ["pointer", "pointer"],
          result: "pointer",
        } as const,
      )(toPointer(pmkObjectName), toPointer(ppunkObject)),
    );
  }

  NoteChangeTime(
    dwRegister: number,
    pfiletime: PointerConvertible<FILETIME>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: ["u32", "pointer"],
          result: "pointer",
        } as const,
      )(dwRegister, toPointer(pfiletime)),
    );
  }

  GetTimeOfLastChange(
    pmkObjectName: IMoniker,
    pfiletime: PointerConvertible<FILETIME>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: ["pointer", "pointer"],
          result: "pointer",
        } as const,
      )(toPointer(pmkObjectName), toPointer(pfiletime)),
    );
  }

  EnumRunning(
    ppenumMoniker: PointerConvertible<IEnumMoniker>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: ["pointer"],
          result: "pointer",
        } as const,
      )(toPointer(ppenumMoniker)),
    );
  }
}
