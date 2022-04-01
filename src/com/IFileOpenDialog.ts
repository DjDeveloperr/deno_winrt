import { createInstance } from "../com.ts";
import { GUID } from "../guid.ts";
import { IFileDialog } from "./IFileDialog.ts";

export const CLSID_FileOpenDialog = GUID.fromBigInt(
  0xDC1C5A9C_E88A_4DDE_A5A1_60F82A20AEF7n,
);

export class IFileOpenDialog extends IFileDialog {
  static GUID = GUID.fromBigInt(0xD57C7288_D4AD_4768_BE02_9D969532D960n);

  static createInstance() {
    return createInstance(CLSID_FileOpenDialog, this);
  }

  [Symbol.for("COMObject.name")]() {
    return "IFileOpenDialog";
  }
}
