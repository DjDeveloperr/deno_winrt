import { GUID } from "../../../../../guid.ts";
import {
  COMObject,
  PointerConvertible,
  toPointer,
} from "../../../../../com.ts";

export class FDAP extends COMObject {
  static GUID = GUID.fromString("{00000000-0000-0000-0000-000000000000}");

  // value__: Windows.Win32.UI.Shell.FDAP;
  // FDAP_BOTTOM: Windows.Win32.UI.Shell.FDAP;
  // FDAP_TOP: Windows.Win32.UI.Shell.FDAP;
}
