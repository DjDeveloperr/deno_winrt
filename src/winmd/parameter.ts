import { Scope } from "./scope.ts";

export class Parameter {
  #initialized = false;
  #name = "";

  constructor(public scope: Scope, public token: number) {}

  #initialize() {
    if (!this.#initialized) {
      const ptkMethodDef = new Uint32Array(1);
      const pulSequence = new Uint32Array(1);
      const szName = new Uint16Array(256);
      const pchName = new Uint32Array(1);
      const pdwAttr = new Uint32Array(1);
      const pdwCPlusTypeFlag = new Uint32Array(1);
      const ppValue = new BigUint64Array(1);
      const pcchValue = new BigUint64Array(1);

      const hr = this.scope.com.GetParamProps(
        this.token,
        ptkMethodDef,
        pulSequence,
        szName,
        szName.length,
        pchName,
        pdwAttr,
        pdwCPlusTypeFlag,
        ppValue,
        pcchValue,
      );

      if (hr === 0) {
        this.#name = new TextDecoder("utf-16le").decode(
          szName.subarray(0, pchName[0] - 1),
        );

        this.#initialized = true;
      }
    }
  }

  get name() {
    this.#initialize();
    return this.#name;
  }

  [Symbol.for("Deno.customInspect")]() {
    return `Parameter<${this.name}>`;
  }
}
