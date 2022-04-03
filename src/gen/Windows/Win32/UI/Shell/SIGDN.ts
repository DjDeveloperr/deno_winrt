import { GUID } from "../../../../../guid.ts";
import {
  COMObject,
  PointerConvertible,
  toPointer,
} from "../../../../../com.ts";

export class SIGDN extends COMObject {
  static GUID = GUID.fromString("{00000000-0000-0000-0000-000000000000}");

  // value__: Windows.Win32.UI.Shell.SIGDN;
  // SIGDN_NORMALDISPLAY: Windows.Win32.UI.Shell.SIGDN;
  // SIGDN_PARENTRELATIVEPARSING: Windows.Win32.UI.Shell.SIGDN;
  // SIGDN_DESKTOPABSOLUTEPARSING: Windows.Win32.UI.Shell.SIGDN;
  // SIGDN_PARENTRELATIVEEDITING: Windows.Win32.UI.Shell.SIGDN;
  // SIGDN_DESKTOPABSOLUTEEDITING: Windows.Win32.UI.Shell.SIGDN;
  // SIGDN_FILESYSPATH: Windows.Win32.UI.Shell.SIGDN;
  // SIGDN_URL: Windows.Win32.UI.Shell.SIGDN;
  // SIGDN_PARENTRELATIVEFORADDRESSBAR: Windows.Win32.UI.Shell.SIGDN;
  // SIGDN_PARENTRELATIVE: Windows.Win32.UI.Shell.SIGDN;
  // SIGDN_PARENTRELATIVEFORUI: Windows.Win32.UI.Shell.SIGDN;
}
