/// Autogenerated: Windows.Win32.UI.Input.Ime.fpCreateIFELanguageInstanceType

import { GUID } from "../../../../../../guid.ts";
import { COMObject } from "../../../../../../com.ts";
import { toPointer } from "../../../../../../com.ts";
import { PointerConvertible } from "../../../../../../com.ts";

export class fpCreateIFELanguageInstanceType extends COMObject {
  static GUID = GUID.fromString("{00000000-0000-0000-0000-000000000000}");

  [Symbol.for("COMObject.name")]() {
    return "Windows.Win32.UI.Input.Ime.fpCreateIFELanguageInstanceType";
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
    clsid: PointerConvertible<GUID>,
    ppvObj: PointerConvertible<PointerConvertible<void>>,
  ): number {
    const result = this._getFunction(1, {
      parameters: ["pointer", "pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(clsid), toPointer(ppvObj));
    return result;
  }
}
