import { decodeUTF16LE, encodeUTF16LE, u8 } from "./util.ts";
import { winrt } from "./winrt.ts";

function readString(ptr: NonNullable<Deno.PointerValue>) {
  const len = new Uint32Array(1);
  const buf = winrt.WindowsGetStringRawBuffer(ptr, u8(len));
  if (buf === null) return null;
  const data = Deno.UnsafePointerView.getArrayBuffer(buf, len[0]);
  return decodeUTF16LE(new Uint8Array(data));
}

export const HStringFinalizer = new FinalizationRegistry(
  (ptr: NonNullable<Deno.PointerValue>) => {
    winrt.WindowsDeleteString(ptr);
  },
);

export class HString extends String {
  ptr: NonNullable<Deno.PointerValue>;

  constructor(init: string | NonNullable<Deno.PointerValue>) {
    super(typeof init === "string" ? init : readString(init));

    if (typeof init === "string") {
      const out = new BigUint64Array(1);
      const encoded = encodeUTF16LE(init);
      winrt.WindowsCreateString(u8(encoded), init.length, u8(out));
      this.ptr = Deno.UnsafePointer.create(Number(out[0]))!;
      HStringFinalizer.register(this, this.ptr);
    } else {
      this.ptr = init;
    }
  }
}
