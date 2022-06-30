import { encodeUTF16 } from "./util.ts";

export const winstring = Deno.dlopen(
  "api-ms-win-core-winrt-string-l1-1-0.dll",
  {
    WindowsCreateString: {
      parameters: ["pointer", "u32", "pointer"],
      result: "isize",
    },

    WindowsGetStringRawBuffer: {
      parameters: ["pointer", "pointer"],
      result: "pointer",
    },
  } as const,
).symbols;

export class HSTRING {
  protected _handle: bigint;

  get handle(): bigint {
    return this._handle;
  }

  constructor(handle: bigint) {
    this._handle = handle;
  }

  static fromString(str: string) {
    const out = new BigUint64Array(1);
    winstring.WindowsCreateString(
      ...encodeUTF16(str),
      out,
    );
    return new HSTRING(out[0]);
  }

  getRawBuffer(): [bigint, number] {
    const out = new Uint32Array(1);
    const ptr = winstring.WindowsGetStringRawBuffer(this._handle, out);
    return [ptr, out[0]];
  }

  getString(): string {
    const [ptr, len] = this.getRawBuffer();
    const buffer = new Uint16Array(len);
    new Deno.UnsafePointerView(ptr).copyInto(buffer);
    return String.fromCharCode(...buffer);
  }
}
