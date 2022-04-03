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

  [Symbol.for("COMObject.name")]() {
    return "Windows.Win32.System.Com.IBindCtx";
  }

  RegisterObjectBound(
    punk: IUnknown,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        3,
        {
          parameters: ["pointer", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(punk)),
    );
  }

  RevokeObjectBound(
    punk: IUnknown,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        4,
        {
          parameters: ["pointer", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(punk)),
    );
  }

  ReleaseBoundObjects(): HRESULT {
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

  SetBindOptions(
    pbindopts: PointerConvertible<BIND_OPTS>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        6,
        {
          parameters: ["pointer", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(pbindopts)),
    );
  }

  GetBindOptions(
    pbindopts: PointerConvertible<BIND_OPTS>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        7,
        {
          parameters: ["pointer", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(pbindopts)),
    );
  }

  GetRunningObjectTable(
    pprot: PointerConvertible<IRunningObjectTable>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        8,
        {
          parameters: ["pointer", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(pprot)),
    );
  }

  RegisterObjectParam(
    pszKey: PWSTR,
    punk: IUnknown,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        9,
        {
          parameters: ["pointer", "pointer", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(pszKey), toPointer(punk)),
    );
  }

  GetObjectParam(
    pszKey: PWSTR,
    ppunk: PointerConvertible<IUnknown>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        10,
        {
          parameters: ["pointer", "pointer", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(pszKey), toPointer(ppunk)),
    );
  }

  EnumObjectParam(
    ppenum: PointerConvertible<IEnumString>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        11,
        {
          parameters: ["pointer", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(ppenum)),
    );
  }

  RevokeObjectParam(
    pszKey: PWSTR,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        12,
        {
          parameters: ["pointer", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(pszKey)),
    );
  }
}
