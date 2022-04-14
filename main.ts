import { PWSTR } from "./src/com.ts";
import {
  FileOpenDialog,
  IShellItem,
  SIGDN,
} from "./src/gen/Windows/Win32/UI/Shell/mod.ts";
import { Pointer } from "./src/util.ts";

const pShellItem = new Pointer(IShellItem);
const dialog = FileOpenDialog.create();
dialog.Show(null);
dialog.GetResult(pShellItem);
const ppszName = new Pointer(PWSTR);
pShellItem.value!.GetDisplayName(SIGDN.SIGDN_FILESYSPATH, ppszName);
console.log(ppszName.value);
