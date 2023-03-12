import { GUID } from "../guid.ts";
import { IUnknown } from "./IUnknown.ts";

export class IMetaDataImport extends IUnknown {
  static GUID = new GUID("{7DAC8207-D3AE-4C75-9B67-92801A497D44}");

  _getClassName(): string {
    return "IMetaDataImport";
  }
}
