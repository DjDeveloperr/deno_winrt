import { MetaDataDispenser } from "./mod.ts";

const dispenser = new MetaDataDispenser();
const scope = dispenser.openScope("Windows.Win32.winmd");

console.log(scope.typeDefs.filter((e) => e.isInterface));
