import { GUID } from "../../../../guid.ts";
import { COMObject, PointerConvertible, toPointer } from "../../../../com.ts";

export class HWND extends COMObject {
  static GUID = GUID.fromString("{00000000-0000-0000-0000-000000000000}");

  [Symbol.for("COMObject.name")]() {
    return "Windows.Win32.Foundation.HWND";
  }

  // Value: Windows.Win32.Foundation.HWND;
}
