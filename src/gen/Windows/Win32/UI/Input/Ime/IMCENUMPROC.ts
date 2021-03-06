/// Autogenerated: Windows.Win32.UI.Input.Ime.IMCENUMPROC

import { GUID } from "../../../../../../guid.ts";
import { COMObject } from "../../../../../../com.ts";
import { toPointer } from "../../../../../../com.ts";
import { HIMC } from "../../../../../Windows/Win32/Globalization/HIMC.ts";
import { LPARAM } from "../../../../../Windows/Win32/Foundation/LPARAM.ts";

export class IMCENUMPROC extends COMObject {
  static GUID = GUID.fromString("{00000000-0000-0000-0000-000000000000}");

  [Symbol.for("COMObject.name")]() {
    return "Windows.Win32.UI.Input.Ime.IMCENUMPROC";
  }

  ctor(
    object: COMObject,
    method: number,
  ): void {
    const result = this._getFunction(0, {
      parameters: ["pointer", "pointer", "isize"],
      result: "void",
    } as const)(this._ptr, toPointer(object), method);
    return result;
  }

  Invoke(
    param0: HIMC,
    param1: LPARAM,
  ): boolean {
    const result = this._getFunction(1, {
      parameters: ["pointer", "pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(param0), toPointer(param1));
    return result;
  }
}
