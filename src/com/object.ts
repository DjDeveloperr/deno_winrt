import { com } from "../com.ts";
import { GUID, GUIDConv } from "../guid.ts";
import { u8, unwrap } from "../util.ts";

export class COMObject {
  static GUID = new GUID(0n);

  #handle: NonNullable<Deno.PointerValue>;
  #vtable: Deno.UnsafePointerView;
  #vtableCache = new Map<number, CallableFunction>();

  get handle() {
    return this.#handle;
  }

  constructor(handle: NonNullable<Deno.PointerValue>) {
    this.#handle = handle;
    const vtable = new Deno.UnsafePointerView(handle).getPointer();
    this.#vtable = new Deno.UnsafePointerView(vtable!);
  }

  vtable<Fn extends Deno.ForeignFunction>(
    index: number,
    def: Fn,
  ): Deno.UnsafeFnPointer<Fn>["call"] {
    if (this.#vtableCache.has(index)) {
      return this.#vtableCache.get(index)! as Deno.UnsafeFnPointer<Fn>["call"];
    }
    const ptr = this.#vtable.getPointer(index * 8);
    const fn = new Deno.UnsafeFnPointer(ptr!, {
      parameters: ["pointer", ...def.parameters],
      result: def.result,
      // deno-lint-ignore no-explicit-any
    } as any);
    const ps = def.parameters.map((_, i) => `p${i}`).join(", ");
    const result = new Function(
      "handle",
      "fn",
      `return function vtable${index}(${ps}) { return fn.call(handle${
        ps === "" ? "" : `, ${ps}`
      }); }`,
    )(this.#handle, fn) as Deno.UnsafeFnPointer<Fn>["call"];
    this.#vtableCache.set(index, result);
    return result;
  }

  toString() {
    const cls = this._getClassName();
    return `[COMObject${cls ? `<${cls}>` : ""} 0x${
      Deno.UnsafePointer.value(this.#handle).toString(16).padStart(16, "0")
    }]`;
  }

  _getClassName(): string | undefined {
    return;
  }

  [Symbol.for("Deno.customInspect")]() {
    return this.toString();
  }
}

export function createInstance<
  I extends typeof COMObject,
>(
  clsidinit: GUIDConv,
  i: I,
): InstanceType<I> {
  const clsid = new GUID(clsidinit);
  const out = new BigUint64Array(1);
  unwrap(com.CoCreateInstance(clsid, null, 0x17, i.GUID, u8(out)));
  const ptr = Deno.UnsafePointer.create(out[0])!;
  return new i(ptr) as InstanceType<I>;
}
