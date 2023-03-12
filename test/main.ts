import { IMetaDataDispenser, IMetaDataImport2 } from "../mod.ts";

const dispenser = IMetaDataDispenser.create();

console.log(dispenser);

const scope = dispenser.OpenScope(
  "H:\\Projects\\deno_win32\\Windows.Win32.winmd",
  0,
  IMetaDataImport2,
);

console.log(scope);

scope.Release();

dispenser.Release();
