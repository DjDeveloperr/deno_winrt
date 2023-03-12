import { GUID } from "../guid.ts";
import { u8, unwrap } from "../util.ts";
import { COMObject } from "./object.ts";

export class IUnknown extends COMObject {
  static GUID = new GUID(0x00000000_0000_0000_c000_000000000046n);

  QueryInterface<I extends typeof IUnknown>(i: I): InstanceType<I> {
    const fn = this.vtable(
      0,
      {
        parameters: ["buffer", "buffer"],
        result: "i32",
      } as const,
    );
    const out = new BigUint64Array(1);
    unwrap(fn(i.GUID, u8(out)));
    return new i(Deno.UnsafePointer.create(out[0])!) as InstanceType<I>;
  }

  AddRef(): number {
    const fn = this.vtable(
      1,
      {
        parameters: [],
        result: "u32",
      } as const,
    );
    return fn();
  }

  Release(): void {
    const fn = this.vtable(
      2,
      {
        parameters: [],
        result: "void",
      } as const,
    );
    fn();
  }
}
