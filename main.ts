import { PWSTR } from "./src/com.ts";
import {
  FileOpenDialog,
  IShellItem,
  SIGDN,
} from "./src/gen/Windows/Win32/UI/Shell/mod.ts";
import { Pointer } from "./src/util.ts";
import { getMetaDataFile } from "./src/winrt.ts";
import * as winmd from "./src/winmd/mod.ts";
import { IMetaDataImport2 } from "./src/com/IMetaDataImport2.ts";

const dispenser = new winmd.MetaDataDispenser();
const scope = dispenser.openScope(
  "C:\\WINDOWS\\system32\\WinMetadata\\Windows.UI.Xaml.winmd",
);
console.log(scope.typeDefs);

const pShellItem = new Pointer(IShellItem);
const dialog = FileOpenDialog.create();
dialog.Show(null);
dialog.GetResult(pShellItem);
const ppszName = new Pointer(PWSTR);
pShellItem.value!.GetDisplayName(SIGDN.SIGDN_FILESYSPATH, ppszName);
console.log(ppszName.value);
