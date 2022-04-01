import { COMObject } from "../com.ts";
import { GUID } from "../guid.ts";
import { unwrap } from "../util.ts";

export class IUnknown extends COMObject {
  static GUID = GUID.fromBigInt(0x00000000_0000_0000_c000_000000000046n);

  QueryInterface<T extends typeof IUnknown>(type: T): InstanceType<T> {
    const fn = this._getFunction(
      0,
      {
        parameters: ["pointer", "pointer", "pointer"],
        result: "isize",
      } as const,
    );
    const out = new BigUint64Array(1);
    unwrap(fn(this._ptr, type.GUID.data, out));
    return new type(new Deno.UnsafePointer(out[0])) as InstanceType<T>;
  }

  AddRef(): number {
    const fn = this._getFunction(
      1,
      {
        parameters: ["pointer"],
        result: "u64",
      } as const,
    );
    return fn(this._ptr);
  }

  Release(): void {
    const fn = this._getFunction(
      2,
      {
        parameters: ["pointer"],
        result: "void",
      } as const,
    );
    fn(this._ptr);
  }

  [Symbol.for("COMObject.name")]() {
    return "IUnknown";
  }
}
