export function unwrap(result: number) {
  if (result !== 0) {
    throw new Error(`WinAPI call failed: 0x${result.toString(16)}`);
  }
}

export function encodeUTF16(str: string): [Uint16Array, number] {
  const buffer = new Uint16Array(str.length);
  buffer.set(new TextEncoder().encode(str));
  return [buffer, buffer.length];
}
