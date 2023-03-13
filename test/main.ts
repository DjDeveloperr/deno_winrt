import { IMetaDataDispenser, IMetaDataImport2 } from "../mod.ts";

const dispenser = IMetaDataDispenser.create();

console.log(dispenser);

const scope = dispenser.OpenScope(
  "./metadata/Windows.Win32.winmd",
  0,
  IMetaDataImport2,
);

console.log(scope);

scope.Release();

dispenser.Release();
