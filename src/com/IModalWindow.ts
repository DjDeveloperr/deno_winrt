import { GUID } from "../guid.ts";
import { unwrap } from "../util.ts";
import { getFunction, vtable } from "../com.ts";
import { IUnknown } from "./IUnknown.ts";

export class IModalWindow extends IUnknown {
  static GUID = GUID.fromBigInt(0xB4DB1657_70D7_485E_8E3E_6FCB5A5C1802n);

  @vtable(3, {
    parameters: ["pointer", "pointer"],
    result: "isize",
  })
  Show(hwndOwner: Deno.UnsafePointer): number {
    const fn = getFunction(arguments);
    return fn(this._ptr, hwndOwner);
  }
}
