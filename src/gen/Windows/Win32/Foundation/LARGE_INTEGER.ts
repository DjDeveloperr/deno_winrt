import { GUID } from "../../../../guid.ts";
import { COMObject, PointerConvertible, toPointer } from "../../../../com.ts";

export class LARGE_INTEGER extends COMObject {
  static GUID = GUID.fromString("{00000000-0000-0000-0000-000000000000}");

  // Anonymous: Windows.Win32.Foundation.LARGE_INTEGER;
  // u: Windows.Win32.Foundation.LARGE_INTEGER;
  // QuadPart: Windows.Win32.Foundation.LARGE_INTEGER;
}
