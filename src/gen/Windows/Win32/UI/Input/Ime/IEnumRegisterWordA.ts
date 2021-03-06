/// Autogenerated: Windows.Win32.UI.Input.Ime.IEnumRegisterWordA

import { GUID } from "../../../../../../guid.ts";
import { IUnknown } from "../../../../../Windows/Win32/System/Com/IUnknown.ts";
import { PointerConvertible } from "../../../../../../com.ts";
import { toPointer } from "../../../../../../com.ts";
import { REGISTERWORDA } from "../../../../../Windows/Win32/UI/Input/Ime/REGISTERWORDA.ts";

export class IEnumRegisterWordA extends IUnknown {
  static GUID = GUID.fromString("{08C03412-F96B-11D0-A475-00AA006BCC59}");

  [Symbol.for("COMObject.name")]() {
    return "Windows.Win32.UI.Input.Ime.IEnumRegisterWordA";
  }

  Clone(
    ppEnum: PointerConvertible<IEnumRegisterWordA>,
  ): number {
    const result = this._getFunction(3, {
      parameters: ["pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(ppEnum));
    return result;
  }

  Next(
    ulCount: number,
    rgRegisterWord: PointerConvertible<REGISTERWORDA>,
    pcFetched: PointerConvertible<number>,
  ): number {
    const result = this._getFunction(4, {
      parameters: ["pointer", "u32", "pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, ulCount, toPointer(rgRegisterWord), toPointer(pcFetched));
    return result;
  }

  Reset(): number {
    const result = this._getFunction(5, {
      parameters: ["pointer", ],
      result: "i32",
    } as const)(this._ptr, );
    return result;
  }

  Skip(
    ulCount: number,
  ): number {
    const result = this._getFunction(6, {
      parameters: ["pointer", "u32"],
      result: "i32",
    } as const)(this._ptr, ulCount);
    return result;
  }
}
