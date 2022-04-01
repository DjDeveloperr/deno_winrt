import { GUID } from "../guid.ts";
import { unwrap } from "../util.ts";
import { getFunction, vtable } from "../com.ts";
import { HSTRING } from "../winstring.ts";
import { IUnknown } from "./IUnknown.ts";

export class IInspectable extends IUnknown {
  static GUID = GUID.fromBigInt(0xaf86e2e0_b12d_4c6a_9c5a_d7aa65101e90n);

  @vtable(3, {
    parameters: ["pointer", "pointer", "pointer"],
    result: "isize",
  })
  GetIids(): GUID[] {
    const fn = getFunction(arguments);
    const iids = [];
    const outLen = new BigUint64Array(1);
    const outPtr = new BigUint64Array(1);
    unwrap(fn(this._ptr, outLen, outPtr));
    const view = new Deno.UnsafePointerView(new Deno.UnsafePointer(outPtr[0]));
    for (let i = 0n; i < outLen[0] * 2n; i += 2n) {
      const guid = new Uint8Array(16);
      view.copyInto(guid.subarray(0, 8), Number(i * 8n));
      view.copyInto(guid.subarray(8, 16), Number(i + 1n) * 8);
      iids.push(new GUID(guid));
    }
    return iids;
  }

  @vtable(4, {
    parameters: ["pointer", "pointer"],
    result: "isize",
  })
  GetRuntimeClassName(): string {
    const fn = getFunction(arguments);
    const out = new BigUint64Array(1);
    unwrap(fn(this._ptr, out));
    const ptr = new Deno.UnsafePointer(out[0]);
    return new HSTRING(ptr).getString();
  }

  @vtable(5, {
    parameters: ["pointer", "pointer"],
    result: "isize",
  })
  GetTrustLevel(): number {
    const fn = getFunction(arguments);
    const out = new Uint32Array(1);
    unwrap(fn(this._ptr, out));
    return out[0];
  }

  [Symbol.for("Deno.customInspect")]() {
    return `COMObject<${this.GetRuntimeClassName()}>(0x${
      this._ptr.value.toString(16).padStart(8, "0")
    })`;
  }
}
