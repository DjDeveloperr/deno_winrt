import { com } from "../com.ts";
import { GUID } from "../guid.ts";
import { HString } from "../hstring.ts";
import { u8, unwrap } from "../util.ts";
import { IUnknown } from "./IUnknown.ts";

export class IInspectable extends IUnknown {
  static GUID = new GUID(0xaf86e2e0_b12d_4c6a_9c5a_d7aa65101e90n);

  GetIids(): GUID[] {
    const fn = this.vtable(
      3,
      {
        parameters: ["buffer", "buffer"],
        result: "i32",
      } as const,
    );
    const result: GUID[] = [];
    const outCount = new BigUint64Array(1);
    const outIids = new BigUint64Array(1);
    unwrap(fn(u8(outCount), u8(outIids)));
    const count = Number(outCount[0]);
    const iids = Deno.UnsafePointer.create(outIids[0])!;
    const view = new Deno.UnsafePointerView(iids);
    for (let i = 0; i < count * 2; i += 2) {
      const guid = new Uint8Array(16);
      view.copyInto(guid.subarray(0, 8), Number(i * 8));
      view.copyInto(guid.subarray(8, 16), Number(i + 1) * 8);
      result.push(new GUID(guid));
    }
    com.CoTaskMemFree(iids);
    return result;
  }

  GetRuntimeClassName(): string {
    const fn = this.vtable(
      4,
      {
        parameters: ["buffer"],
        result: "i32",
      } as const,
    );
    const out = new BigUint64Array(1);
    unwrap(fn(u8(out)));
    const ptr = Deno.UnsafePointer.create(out[0])!;
    return new HString(ptr) as unknown as string;
  }

  GetTrustLevel(): number {
    const fn = this.vtable(
      5,
      {
        parameters: ["buffer"],
        result: "i32",
      } as const,
    );
    const out = new Uint32Array(1);
    unwrap(fn(u8(out)));
    return out[0];
  }

  _getClassName(): string {
    return this.GetRuntimeClassName();
  }
}
