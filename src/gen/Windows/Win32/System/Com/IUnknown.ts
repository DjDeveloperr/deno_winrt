import { GUID } from "../../../../../guid.ts";
import { COMObject } from "../../../../../com.ts";
import { PointerConvertible } from "../../../../../com.ts";
import { toPointer } from "../../../../../com.ts";

export class IUnknown extends COMObject {
  static GUID = GUID.fromString("{00000000-0000-0000-C000-000000000046}");

  [Symbol.for("COMObject.name")]() {
    return "Windows.Win32.System.Com.IUnknown";
  }

  QueryInterface(
    riid: PointerConvertible<GUID>,
    ppvObject: PointerConvertible<PointerConvertible<void>>,
  ): number {
    const result = this._getFunction(0, {
      parameters: ["pointer", "pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(riid), toPointer(ppvObject));
    return result;
  }

  AddRef(): number {
    const result = this._getFunction(1, {
      parameters: ["pointer", ],
      result: "u32",
    } as const)(this._ptr, );
    return result;
  }

  Release(): number {
    const result = this._getFunction(2, {
      parameters: ["pointer", ],
      result: "u32",
    } as const)(this._ptr, );
    return result;
  }
}
