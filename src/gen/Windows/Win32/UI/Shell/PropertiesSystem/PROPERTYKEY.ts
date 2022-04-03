import { GUID } from "../../../../../../guid.ts";
import {
  COMObject,
  PointerConvertible,
  toPointer,
} from "../../../../../../com.ts";

export class PROPERTYKEY extends COMObject {
  static GUID = GUID.fromString("{00000000-0000-0000-0000-000000000000}");

  // fmtid: Windows.Win32.UI.Shell.PropertiesSystem.PROPERTYKEY;
  // pid: Windows.Win32.UI.Shell.PropertiesSystem.PROPERTYKEY;
}
