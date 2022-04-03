import { GUID } from "../../../../../../guid.ts";
import {
  COMObject,
  PointerConvertible,
  toPointer,
} from "../../../../../../com.ts";

export class COMDLG_FILTERSPEC extends COMObject {
  static GUID = GUID.fromString("{00000000-0000-0000-0000-000000000000}");

  // pszName: Windows.Win32.UI.Shell.Common.COMDLG_FILTERSPEC;
  // pszSpec: Windows.Win32.UI.Shell.Common.COMDLG_FILTERSPEC;
}
