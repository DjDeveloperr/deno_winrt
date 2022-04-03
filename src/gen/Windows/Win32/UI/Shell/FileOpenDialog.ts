import { GUID } from "../../../../../guid.ts";
import {
  COMObject,
  PointerConvertible,
  toPointer,
} from "../../../../../com.ts";

export class FileOpenDialog extends COMObject {
  static GUID = GUID.fromString("{DC1C5A9C-E88A-4DDE-A5A1-60F82A20AEF7}");

  [Symbol.for("COMObject.name")]() {
    return "Windows.Win32.UI.Shell.FileOpenDialog";
  }
}
