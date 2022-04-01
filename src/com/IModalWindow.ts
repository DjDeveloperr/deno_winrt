import { GUID } from "../guid.ts";
import { IUnknown } from "./IUnknown.ts";

export class IModalWindow extends IUnknown {
  static GUID = GUID.fromBigInt(0xB4DB1657_70D7_485E_8E3E_6FCB5A5C1802n);

  Show(hwndOwner: Deno.UnsafePointer): number {
    const fn = this._getFunction(
      3,
      {
        parameters: ["pointer", "pointer"],
        result: "isize",
      } as const,
    );
    return fn(this._ptr, hwndOwner);
  }

  [Symbol.for("COMObject.name")]() {
    return "IModalWindow";
  }
}
