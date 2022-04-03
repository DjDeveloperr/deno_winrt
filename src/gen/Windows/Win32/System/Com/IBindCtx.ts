import { GUID } from "../../../../../guid.ts";
import { IUnknown } from "../../../../Windows/Win32/System/Com/IUnknown.ts";
import { HRESULT } from "../../../../Windows/Win32/Foundation/HRESULT.ts";
import {
  COMObject,
  PointerConvertible,
  toPointer,
} from "../../../../../com.ts";
import { BIND_OPTS } from "../../../../Windows/Win32/System/Com/BIND_OPTS.ts";
import { IRunningObjectTable } from "../../../../Windows/Win32/System/Com/IRunningObjectTable.ts";
import { PWSTR } from "../../../../Windows/Win32/Foundation/PWSTR.ts";
import { IEnumString } from "../../../../Windows/Win32/System/Com/IEnumString.ts";

export class IBindCtx extends IUnknown {
  static GUID = GUID.fromString("{0000000E-0000-0000-C000-000000000046}");

  RegisterObjectBound(
    punk: IUnknown,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: ["pointer"],
          result: "pointer",
        } as const,
      )(toPointer(punk)),
    );
  }

  RevokeObjectBound(
    punk: IUnknown,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: ["pointer"],
          result: "pointer",
        } as const,
      )(toPointer(punk)),
    );
  }

  ReleaseBoundObjects(): HRESULT {
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

  SetBindOptions(
    pbindopts: PointerConvertible<BIND_OPTS>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: ["pointer"],
          result: "pointer",
        } as const,
      )(toPointer(pbindopts)),
    );
  }

  GetBindOptions(
    pbindopts: PointerConvertible<BIND_OPTS>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: ["pointer"],
          result: "pointer",
        } as const,
      )(toPointer(pbindopts)),
    );
  }

  GetRunningObjectTable(
    pprot: PointerConvertible<IRunningObjectTable>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: ["pointer"],
          result: "pointer",
        } as const,
      )(toPointer(pprot)),
    );
  }

  RegisterObjectParam(
    pszKey: PWSTR,
    punk: IUnknown,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: ["pointer", "pointer"],
          result: "pointer",
        } as const,
      )(toPointer(pszKey), toPointer(punk)),
    );
  }

  GetObjectParam(
    pszKey: PWSTR,
    ppunk: PointerConvertible<IUnknown>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: ["pointer", "pointer"],
          result: "pointer",
        } as const,
      )(toPointer(pszKey), toPointer(ppunk)),
    );
  }

  EnumObjectParam(
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

  RevokeObjectParam(
    pszKey: PWSTR,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: ["pointer"],
          result: "pointer",
        } as const,
      )(toPointer(pszKey)),
    );
  }
}
