import { mdTypeDef } from "../com/IMetaDataImport.ts";
import { IMetaDataImport2 } from "../com/IMetaDataImport2.ts";
import { decodeOutString16 } from "../util.ts";

export interface MdTypeDef {
  name: string;
  flags: number;
  extends: number;
}

export function processTypeDef(
  typeDef: IMetaDataImport2,
  td: mdTypeDef,
): MdTypeDef {
  const szTypeDef = new Uint16Array(256);
  const pchTypeDef = new Uint32Array(1);
  const pdwTypeDefFlags = new Uint32Array(1);
  const ptkExtends = new Uint32Array(1);

  typeDef.GetTypeDefProps(
    td,
    szTypeDef,
    szTypeDef.length,
    pchTypeDef,
    pdwTypeDefFlags,
    ptkExtends,
  );

  const name = decodeOutString16(szTypeDef, pchTypeDef);

  return {
    name,
    flags: pdwTypeDefFlags[0],
    extends: ptkExtends[0],
  };
}
