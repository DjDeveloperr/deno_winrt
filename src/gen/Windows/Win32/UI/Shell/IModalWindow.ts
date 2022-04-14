import { GUID } from "../../../../../guid.ts";
import { IUnknown } from "../../../../Windows/Win32/System/Com/IUnknown.ts";
import { toPointer } from "../../../../../com.ts";

export class IModalWindow extends IUnknown {
  static GUID = GUID.fromString("{B4DB1657-70D7-485E-8E3E-6FCB5A5C1802}");

  [Symbol.for("COMObject.name")]() {
    return "Windows.Win32.UI.Shell.IModalWindow";
  }

  Show(
    hwndOwner: Deno.UnsafePointer | null,
  ): number {
    const result = this._getFunction(3, {
      parameters: ["pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(hwndOwner));
    return result;
  }
}
