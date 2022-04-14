import { GUID } from "../../../../../guid.ts";
import { IUnknown } from "../../../../Windows/Win32/System/Com/IUnknown.ts";
import { toPointer } from "../../../../../com.ts";
import { PointerConvertible } from "../../../../../com.ts";
import { BIND_OPTS } from "../../../../Windows/Win32/System/Com/BIND_OPTS.ts";
import { IRunningObjectTable } from "../../../../Windows/Win32/System/Com/IRunningObjectTable.ts";
import { PWSTRConvertible } from "../../../../../com.ts";
import { toPWSTR } from "../../../../../com.ts";
import { IEnumString } from "../../../../Windows/Win32/System/Com/IEnumString.ts";

export class IBindCtx extends IUnknown {
  static GUID = GUID.fromString("{0000000E-0000-0000-C000-000000000046}");

  [Symbol.for("COMObject.name")]() {
    return "Windows.Win32.System.Com.IBindCtx";
  }

  RegisterObjectBound(
    punk: IUnknown,
  ): number {
    const result = this._getFunction(3, {
      parameters: ["pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(punk));
    return result;
  }

  RevokeObjectBound(
    punk: IUnknown,
  ): number {
    const result = this._getFunction(4, {
      parameters: ["pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(punk));
    return result;
  }

  ReleaseBoundObjects(): number {
    const result = this._getFunction(5, {
      parameters: ["pointer", ],
      result: "i32",
    } as const)(this._ptr, );
    return result;
  }

  SetBindOptions(
    pbindopts: PointerConvertible<BIND_OPTS>,
  ): number {
    const result = this._getFunction(6, {
      parameters: ["pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(pbindopts));
    return result;
  }

  GetBindOptions(
    pbindopts: PointerConvertible<BIND_OPTS>,
  ): number {
    const result = this._getFunction(7, {
      parameters: ["pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(pbindopts));
    return result;
  }

  GetRunningObjectTable(
    pprot: PointerConvertible<IRunningObjectTable>,
  ): number {
    const result = this._getFunction(8, {
      parameters: ["pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(pprot));
    return result;
  }

  RegisterObjectParam(
    pszKey: PWSTRConvertible,
    punk: IUnknown,
  ): number {
    const result = this._getFunction(9, {
      parameters: ["pointer", "pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPWSTR(pszKey), toPointer(punk));
    return result;
  }

  GetObjectParam(
    pszKey: PWSTRConvertible,
    ppunk: PointerConvertible<IUnknown>,
  ): number {
    const result = this._getFunction(10, {
      parameters: ["pointer", "pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPWSTR(pszKey), toPointer(ppunk));
    return result;
  }

  EnumObjectParam(
    ppenum: PointerConvertible<IEnumString>,
  ): number {
    const result = this._getFunction(11, {
      parameters: ["pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(ppenum));
    return result;
  }

  RevokeObjectParam(
    pszKey: PWSTRConvertible,
  ): number {
    const result = this._getFunction(12, {
      parameters: ["pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPWSTR(pszKey));
    return result;
  }
}
