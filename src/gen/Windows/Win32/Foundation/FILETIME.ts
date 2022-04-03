import { GUID } from "../../../../guid.ts";
import { COMObject, PointerConvertible, toPointer } from "../../../../com.ts";

export class FILETIME extends COMObject {
  static GUID = GUID.fromString("{00000000-0000-0000-0000-000000000000}");

  // dwLowDateTime: Windows.Win32.Foundation.FILETIME;
  // dwHighDateTime: Windows.Win32.Foundation.FILETIME;
}
