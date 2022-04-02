import { Scope } from "./scope.ts";

export class TypeDef {
  #initialized = false;
  #name = "";
  #flags = 0;

  constructor(public scope: Scope, public token: number) {}

  get name() {
    this.#initialize();
    return this.#name;
  }

  get flags() {
    this.#initialize();
    return this.#flags;
  }

  get isClass() {
    return (this.flags & 0x00000020) === 0x00000000;
  }

  get isInterface() {
    return (this.flags & 0x00000020) === 0x00000020;
  }

  get isAbstract() {
    return (this.flags & 0x00000080) === 0x00000080;
  }

  get isSealed() {
    return (this.flags & 0x00000100) === 0x00000100;
  }

  get isSpecialName() {
    return (this.flags & 0x00000400) === 0x00000400;
  }

  get isImport() {
    return (this.flags & 0x00001000) === 0x00001000;
  }

  get isSerializable() {
    return (this.flags & 0x00002000) === 0x00002000;
  }

  get isWindowsRuntime() {
    return (this.flags & 0x00004000) === 0x00004000;
  }

  get isRTSpecialName() {
    return (this.flags & 0x00000800) === 0x00000800;
  }

  get stringFormat() {
    return this.flags & 0x00030000;
  }

  get isBeforeFieldInit() {
    return (this.flags & 0x00100000) === 0x00100000;
  }

  get isForwarder() {
    return (this.flags & 0x00200000) === 0x00200000;
  }

  #initialize() {
    if (!this.#initialized) {
      let hr;

      const outName = new Uint16Array(256);
      const chTypeDef = new Uint32Array(1);
      const outFlags = new Uint32Array(1);
      const outExtends = new Uint32Array(1);

      hr = this.scope.com.GetTypeDefProps(
        this.token,
        outName,
        outName.length,
        chTypeDef,
        outFlags,
        outExtends,
      );

      if (hr !== 0) {
        throw new Error(`GetTypeDefProps failed with 0x${hr.toString(16)}`);
      }

      this.#name = String.fromCharCode(
        ...outName.subarray(0, Number(chTypeDef[0])),
      );
      this.#flags = outFlags[0];
      this.#initialized = true;
    }
  }

  [Symbol.for("Deno.customInspect")]() {
    return `TypeDef${this.isClass ? "<Class>" : ""}${
      this.isInterface ? "<Interface>" : ""
    }(${this.name})`;
  }
}
