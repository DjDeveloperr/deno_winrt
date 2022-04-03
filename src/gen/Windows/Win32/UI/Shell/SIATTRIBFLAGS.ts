import { GUID } from "../../../../../guid.ts";
import {
  COMObject,
  PointerConvertible,
  toPointer,
} from "../../../../../com.ts";

export class SIATTRIBFLAGS extends COMObject {
  static GUID = GUID.fromString("{00000000-0000-0000-0000-000000000000}");

  [Symbol.for("COMObject.name")]() {
    return "Windows.Win32.UI.Shell.SIATTRIBFLAGS";
  }

  // value__: Windows.Win32.UI.Shell.SIATTRIBFLAGS;
  // SIATTRIBFLAGS_AND: Windows.Win32.UI.Shell.SIATTRIBFLAGS;
  // SIATTRIBFLAGS_OR: Windows.Win32.UI.Shell.SIATTRIBFLAGS;
  // SIATTRIBFLAGS_APPCOMPAT: Windows.Win32.UI.Shell.SIATTRIBFLAGS;
  // SIATTRIBFLAGS_MASK: Windows.Win32.UI.Shell.SIATTRIBFLAGS;
  // SIATTRIBFLAGS_ALLITEMS: Windows.Win32.UI.Shell.SIATTRIBFLAGS;
}
