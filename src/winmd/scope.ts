import { IMetaDataImport2 } from "../com/IMetaDataImport2.ts";
import { GUID } from "../guid.ts";
import { decodeOutString16, enumerator } from "../util.ts";
import { MdTypeDef, processTypeDef } from "./typedef.ts";

export interface MdScope {
  version: string;
  guid: GUID;
  typeDefs: MdTypeDef[];
}

export function processScope(scope: IMetaDataImport2): MdScope {
  const outVersion = new Uint16Array(256);
  const pchName = new Uint32Array(1);
  const guid = new GUID(0n);
  scope.GetScopeProps(outVersion, outVersion.length, pchName, guid);
  const version = decodeOutString16(outVersion, pchName);

  const typeDefs: MdTypeDef[] = [];

  const phEnum = new BigUint64Array(1);
  const rTypeDefs = new Uint32Array(1);
  const pcTypeDefs = new Uint32Array(1);

  for (
    const td of enumerator(() => {
      scope.EnumTypeDefs(phEnum, rTypeDefs, 1, pcTypeDefs);
      return rTypeDefs[0];
    })
  ) {
    typeDefs.push(processTypeDef(scope, td));
  }

  return {
    version,
    guid,
    typeDefs,
  };
}
