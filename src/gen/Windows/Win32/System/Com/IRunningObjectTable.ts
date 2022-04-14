import { GUID } from "../../../../../guid.ts";
import { IUnknown } from "../../../../Windows/Win32/System/Com/IUnknown.ts";
import { IMoniker } from "../../../../Windows/Win32/System/Com/IMoniker.ts";
import { PointerConvertible } from "../../../../../com.ts";
import { toPointer } from "../../../../../com.ts";
import { IEnumMoniker } from "../../../../Windows/Win32/System/Com/IEnumMoniker.ts";

export class IRunningObjectTable extends IUnknown {
  static GUID = GUID.fromString("{00000010-0000-0000-C000-000000000046}");

  [Symbol.for("COMObject.name")]() {
    return "Windows.Win32.System.Com.IRunningObjectTable";
  }

  Register(
    grfFlags: number,
    punkObject: IUnknown,
    pmkObjectName: IMoniker,
    pdwRegister: PointerConvertible<number>,
  ): number {
    const result = this._getFunction(3, {
      parameters: ["pointer", "u32", "pointer", "pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, grfFlags, toPointer(punkObject), toPointer(pmkObjectName), toPointer(pdwRegister));
    return result;
  }

  Revoke(
    dwRegister: number,
  ): number {
    const result = this._getFunction(4, {
      parameters: ["pointer", "u32"],
      result: "i32",
    } as const)(this._ptr, dwRegister);
    return result;
  }

  IsRunning(
    pmkObjectName: IMoniker,
  ): number {
    const result = this._getFunction(5, {
      parameters: ["pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(pmkObjectName));
    return result;
  }

  GetObject(
    pmkObjectName: IMoniker,
    ppunkObject: PointerConvertible<IUnknown>,
  ): number {
    const result = this._getFunction(6, {
      parameters: ["pointer", "pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(pmkObjectName), toPointer(ppunkObject));
    return result;
  }

  NoteChangeTime(
    dwRegister: number,
    pfiletime: PointerConvertible<Deno.UnsafePointer>,
  ): number {
    const result = this._getFunction(7, {
      parameters: ["pointer", "u32", "pointer"],
      result: "i32",
    } as const)(this._ptr, dwRegister, toPointer(pfiletime));
    return result;
  }

  GetTimeOfLastChange(
    pmkObjectName: IMoniker,
    pfiletime: PointerConvertible<Deno.UnsafePointer>,
  ): number {
    const result = this._getFunction(8, {
      parameters: ["pointer", "pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(pmkObjectName), toPointer(pfiletime));
    return result;
  }

  EnumRunning(
    ppenumMoniker: PointerConvertible<IEnumMoniker>,
  ): number {
    const result = this._getFunction(9, {
      parameters: ["pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(ppenumMoniker));
    return result;
  }
}
