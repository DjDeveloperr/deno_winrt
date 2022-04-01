import { COMObject, getFunction, vtable } from "../com.ts";
import { GUID } from "../guid.ts";
import { unwrap } from "../util.ts";

export class IUnknown extends COMObject {
  static GUID = GUID.fromBigInt(0x00000000_0000_0000_c000_000000000046n);

  @vtable(0, {
    parameters: ["pointer", "pointer", "pointer"],
    result: "isize",
  })
  QueryInterface<T extends typeof IUnknown>(type: T): T {
    const fn = getFunction(arguments);
    const out = new BigUint64Array(1);
    unwrap(fn(this._ptr, type.GUID.data, out));
    return new type(new Deno.UnsafePointer(out[0])) as unknown as T;
  }

  @vtable(1, {
    parameters: ["pointer"],
    result: "u64",
  })
  AddRef(): number {
    const fn = getFunction(arguments);
    return fn(this._ptr);
  }

  @vtable(2, {
    parameters: ["pointer"],
    result: "void",
  })
  Release(): void {
    const fn = getFunction(arguments);
    fn(this._ptr);
  }
}
