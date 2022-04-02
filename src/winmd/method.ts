import { Parameter } from "./parameter.ts";
import { Scope } from "./scope.ts";
import { TypeDef } from "./typedef.ts";

export class Method {
  #initialized = false;
  #parent!: TypeDef;
  #name = "";
  #attr = 0;
  #sigs!: Uint8Array;
  #rva = 0;
  #implFlags = 0;
  #parameters: Parameter[] = [];

  constructor(public scope: Scope, public token: number) {}

  #initialize() {
    if (!this.#initialized) {
      const ptkClass = new Uint32Array(1);
      const szMethod = new Uint16Array(256);
      const pchMethod = new Uint32Array(1);
      const pdwAttr = new Uint32Array(1);
      const ppvSigBlob = new BigUint64Array(1);
      const pcbSigBlob = new Uint32Array(1);
      const pulCodeRVA = new Uint32Array(1);
      const pdvImplFlags = new Uint32Array(1);

      const hr = this.scope.com.GetMethodProps(
        this.token,
        ptkClass,
        szMethod,
        szMethod.length,
        pchMethod,
        pdwAttr,
        ppvSigBlob,
        pcbSigBlob,
        pulCodeRVA,
        pdvImplFlags,
      );

      if (hr === 0) {
        this.#parent = new TypeDef(this.scope, ptkClass[0]);
        this.#name = new TextDecoder("utf-16le").decode(
          szMethod.subarray(0, pchMethod[0] - 1),
        );
        this.#attr = pdwAttr[0];
        this.#sigs = new Uint8Array(pcbSigBlob[0]);
        new Deno.UnsafePointerView(new Deno.UnsafePointer(ppvSigBlob[0]))
          .copyInto(this.#sigs);
        this.#rva = pulCodeRVA[0];
        this.#implFlags = pdvImplFlags[0];

        this.#initializeParameters();

        this.#initialized = true;
      }
    }
  }

  #initializeParameters() {
    const phEnum = new BigUint64Array(1);
    const rParams = new Uint32Array(1);
    const pcTokens = new Uint32Array(1);

    let hr;

    hr = this.scope.com.EnumParams(phEnum, this.token, rParams, 1, pcTokens);

    while (hr === 0) {
      this.#parameters.push(new Parameter(this.scope, rParams[0]));
      hr = this.scope.com.EnumParams(phEnum, this.token, rParams, 1, pcTokens);
    }

    this.scope.com.CloseEnum(new Deno.UnsafePointer(phEnum[0]));
  }

  get name() {
    this.#initialize();
    return this.#name;
  }

  get parent() {
    this.#initialize();
    return this.#parent;
  }

  get attr() {
    this.#initialize();
    return this.#attr;
  }

  get sigs() {
    this.#initialize();
    return this.#sigs;
  }

  get relativeVirtualAddress() {
    this.#initialize();
    return this.#rva;
  }

  get implFlags() {
    this.#initialize();
    return this.#implFlags;
  }

  get parameters() {
    this.#initialize();
    return this.#parameters;
  }

  get memberAccess() {
    return this.attr & 0x0007;
  }

  get isStatic() {
    return (this.attr & 0x0010) !== 0;
  }

  get isFinal() {
    return (this.attr & 0x0020) !== 0;
  }

  get isVirtual() {
    return (this.attr & 0x0040) !== 0;
  }

  get isHideBySig() {
    return (this.attr & 0x0080) !== 0;
  }

  get vtableLayout() {
    return (this.attr & 0x0100) === 0x0100 ? "new" : "reuse";
  }

  get isCheckAccessOnOverride() {
    return (this.attr & 0x0200) !== 0;
  }

  get isAbstract() {
    return (this.attr & 0x0400) !== 0;
  }

  get isSpecialName() {
    return (this.attr & 0x0800) !== 0;
  }

  get isPinvokeImpl() {
    return (this.attr & 0x2000) !== 0;
  }

  get isUnmanagedExport() {
    return (this.attr & 0x0008) !== 0;
  }

  get isRTSpecialName() {
    return (this.attr & 0x1000) !== 0;
  }

  get isGetter() {
    return this.isSpecialName && this.name.startsWith("get_");
  }

  get isSetter() {
    return this.isSpecialName && this.name.startsWith("put_");
  }

  get isProperty() {
    return this.isGetter || this.isSetter;
  }

  get hasGenericParams() {
    return (this.sigs[0] & 0x10) === 0x10;
  }

  [Symbol.for("Deno.customInspect")]() {
    return `Method(${this.name}: ${
      [...this.sigs].map((e) => e.toString(16)).join(" ")
    }, ${Deno.inspect(this.parameters)})`;
  }
}
