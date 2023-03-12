import { GUID } from "../guid.ts";
import { IMetaDataImport } from "./IMetaDataImport.ts";

export class IMetaDataImport2 extends IMetaDataImport {
  static GUID = new GUID("{FCE5EFA0-8BBA-4f8E-A036-8F2022B08466}");

  _getClassName(): string {
    return "IMetaDataImport2";
  }
}
