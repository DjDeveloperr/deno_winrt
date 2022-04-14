import { GUID } from "../../../../../guid.ts";
import { COMObject } from "../../../../../com.ts";

export class STATSTG extends COMObject {
  static GUID = GUID.fromString("{00000000-0000-0000-0000-000000000000}");

  [Symbol.for("COMObject.name")]() {
    return "Windows.Win32.System.Com.STATSTG";
  }
}
