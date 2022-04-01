import { IInspectable } from "./com/IInspectable.ts";
import type { IUnknown } from "./com/IUnknown.ts";
import { unwrap } from "./util.ts";
import { HSTRING } from "./winstring.ts";

export const winrt = Deno.dlopen(
  "api-ms-win-core-winrt-l1-1-0.dll",
  {
    RoInitialize: {
      parameters: ["isize"],
      result: "isize",
    },

    RoUninitialize: {
      parameters: [],
      result: "void",
    },

    RoActivateInstance: {
      parameters: ["pointer", "pointer"],
      result: "isize",
    },

    RoGetActivationFactory: {
      parameters: ["pointer", "pointer", "pointer"],
      result: "isize",
    },
  } as const,
).symbols;

export function getClass(name: string) {
  const cls = new BigUint64Array(1);
  unwrap(winrt.RoActivateInstance(
    HSTRING.fromString(name).handle,
    cls,
  ));
  return new IInspectable(new Deno.UnsafePointer(cls[0]));
}

export function getActivationFactory<I extends typeof IUnknown>(
  name: string,
  iid: I,
): InstanceType<I> {
  const factory = new BigUint64Array(1);
  unwrap(winrt.RoGetActivationFactory(
    HSTRING.fromString(name).handle,
    iid.GUID.data,
    factory,
  ));
  return new iid(new Deno.UnsafePointer(factory[0])) as InstanceType<I>;
}

winrt.RoInitialize(0);
