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

const wintypes = Deno.dlopen(
  "WinTypes.dll",
  {
    RoGetMetaDataFile: {
      parameters: ["pointer", "pointer", "pointer", "pointer", "pointer"],
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
  return new IInspectable(cls[0]);
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
  return new iid(factory[0]) as InstanceType<I>;
}

export function getMetaDataFile(
  name: string,
  dispenser: bigint | null,
) {
  const path = new BigUint64Array(1);
  const imp = new BigUint64Array(1);
  const token = new BigUint64Array(1);
  unwrap(wintypes.RoGetMetaDataFile(
    HSTRING.fromString(name).handle,
    dispenser,
    path,
    imp,
    token,
  ));
  return {
    path: new HSTRING(path[0]).getString(),
    scope: imp[0],
    token: token[0],
  };
}

winrt.RoInitialize(0);
