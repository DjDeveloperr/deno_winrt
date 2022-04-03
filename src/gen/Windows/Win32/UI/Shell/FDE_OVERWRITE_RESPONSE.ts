import { GUID } from "../../../../../guid.ts";
import {
  COMObject,
  PointerConvertible,
  toPointer,
} from "../../../../../com.ts";

export class FDE_OVERWRITE_RESPONSE extends COMObject {
  static GUID = GUID.fromString("{00000000-0000-0000-0000-000000000000}");

  [Symbol.for("COMObject.name")]() {
    return "Windows.Win32.UI.Shell.FDE_OVERWRITE_RESPONSE";
  }

  // value__: Windows.Win32.UI.Shell.FDE_OVERWRITE_RESPONSE;
  // FDEOR_DEFAULT: Windows.Win32.UI.Shell.FDE_OVERWRITE_RESPONSE;
  // FDEOR_ACCEPT: Windows.Win32.UI.Shell.FDE_OVERWRITE_RESPONSE;
  // FDEOR_REFUSE: Windows.Win32.UI.Shell.FDE_OVERWRITE_RESPONSE;
}
