import { GUID } from "../../../../guid.ts";
import { COMObject, PointerConvertible, toPointer } from "../../../../com.ts";

export class PWSTR extends COMObject {
  static GUID = GUID.fromString("{00000000-0000-0000-0000-000000000000}");

  [Symbol.for("COMObject.name")]() {
    return "Windows.Win32.Foundation.PWSTR";
  }

  // Value: Windows.Win32.Foundation.PWSTR;
}
