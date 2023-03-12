export function u8(a: ArrayBufferView): Uint8Array {
  return new Uint8Array(a.buffer);
}

export function decodeUTF16LE(buf: Uint8Array): string {
  return new TextDecoder("utf-16le").decode(buf);
}

export function encodeUTF16LE(str: string): Uint16Array {
  return new Uint16Array(new TextEncoder().encode(str));
}

export function encodeCString(str: string): Uint8Array {
  return new TextEncoder().encode(str + "\0");
}

export function encodeCString16(str: string): Uint16Array {
  return encodeUTF16LE(str + "\0");
}

export function readCString16(ptr: Deno.PointerValue) {
  const view = new Deno.UnsafePointerView(ptr!);
  let i = 0;
  let c = 0;
  let result = "";
  while ((c = view.getUint16(i)) !== 0) {
    result += String.fromCharCode(c);
    i += 2;
  }
  return result;
}

export class HRESULT extends Error {
  name = "HRESULT";

  constructor(public code: number) {
    super(`code: 0x${(code >>> 0).toString(16).padStart(8, "0")}`);
  }
}

export function unwrap(result: number) {
  if (result !== 0) {
    throw new HRESULT(result);
  }
}
