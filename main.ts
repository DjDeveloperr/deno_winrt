import { createInstance } from "./mod.ts";
import {
  FileOpenDialog,
  IFileOpenDialog,
} from "./src/gen/Windows/Win32/UI/Shell/mod.ts";

const dialog = createInstance(FileOpenDialog.GUID, IFileOpenDialog);
console.log(dialog);
dialog.Show(null);
