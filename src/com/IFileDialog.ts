import { GUID } from "../guid.ts";
import { IModalWindow } from "./IModalWindow.ts";

export class IFileDialog extends IModalWindow {
  static GUID = GUID.fromBigInt(0x42F85136_DB7E_439C_85F1_E4075D135FC8n);
}
