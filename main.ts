import { IMetaDataDispenser, IMetaDataImport2 } from "./mod.ts";

const obj = IMetaDataDispenser.createInstance();
console.log(obj);
const scope = obj.OpenScope("Windows.Win32.winmd", 0, IMetaDataImport2);
console.log(scope);

const phEnum = new BigUint64Array(1);
const rgTypeDefs = new Uint32Array(1);
const pcTypeDefs = new Uint32Array(1);

let hr;

hr = scope.EnumTypeDefs(phEnum, rgTypeDefs, 1, pcTypeDefs);
let num = 0;

while (hr === 0) {
  // console.log(rgTypeDefs[0]);
  hr = scope.EnumTypeDefs(phEnum, rgTypeDefs, 1, pcTypeDefs);
  num++;
}

scope.CloseEnum(new Deno.UnsafePointer(phEnum[0]));

console.log(num);
