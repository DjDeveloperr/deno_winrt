import { GUID } from "../../../../guid.ts";
import { COMObject, PointerConvertible, toPointer } from "../../../../com.ts";

export class ULARGE_INTEGER extends COMObject {
  static GUID = GUID.fromString("{00000000-0000-0000-0000-000000000000}");

  [Symbol.for("COMObject.name")]() {
    return "Windows.Win32.Foundation.ULARGE_INTEGER";
  }

  // Anonymous: Windows.Win32.Foundation.ULARGE_INTEGER;
  // u: Windows.Win32.Foundation.ULARGE_INTEGER;
  // QuadPart: Windows.Win32.Foundation.ULARGE_INTEGER;
}
