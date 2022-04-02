import { MetaDataDispenser } from "./mod.ts";

const dispenser = new MetaDataDispenser();
const scope = dispenser.openScope("Windows.Win32.winmd");

const td = scope.typeDefs.find((e) =>
  e.name === "Windows.Win32.UI.Shell.IFileDialog"
)!;

console.log(td.methods);
