import { fromFileUrl } from "../../deps.ts";
import { IMetaDataDispenser } from "../com/IMetaDataDispenser.ts";
import { IMetaDataImport2 } from "../com/IMetaDataImport2.ts";
import { processScope } from "./scope.ts";

export function processFile(file: string | URL) {
  const dispenser = IMetaDataDispenser.create();
  const scope = dispenser.OpenScope(
    file instanceof URL ? fromFileUrl(file) : file,
    0,
    IMetaDataImport2,
  );
  const data = processScope(scope);
  scope.Release();
  dispenser.Release();
  return data;
}
