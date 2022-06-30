export function unwrap(result: number | bigint) {
  if (Number(result) !== 0) {
    throw new Error(`WinAPI call failed: 0x${result.toString(16)}`);
  }
}

export function encodeUTF16(str: string): [Uint16Array, number] {
  const buffer = new Uint16Array(str.length);
  buffer.set(new TextEncoder().encode(str));
  return [buffer, buffer.length];
}

export class Pointer<T extends new (ptr: bigint) => InstanceType<T>>
  extends BigUint64Array {
  ty: T;

  constructor(ptr: bigint);
  constructor(ty: T);
  constructor(ty: T | bigint) {
    super(1);
    if (typeof ty === "bigint") {
      this[0] = ty;
      this.ty = Pointer as unknown as T;
    } else {
      this.ty = ty;
    }
  }

  get pointer() {
    return this[0];
  }

  get value(): InstanceType<T> | null {
    if (this[0] === 0n) return null;
    return new this.ty(this.pointer);
  }
}

const ptr = new Pointer(Pointer);

export class U8 extends Number {}
export class U16 extends Number {}
export class U32 extends Number {}
export class U64 extends BigUint64Array {}
export class I8 extends Number {}
export class I16 extends Number {}
