import * as t from "./wintypes.ts";

export const winrt = Deno.dlopen("api-ms-win-core-winrt-l1-1-0.dll", {
  RoInitialize: {
    parameters: [t.DWORD],
    result: t.HRESULT,
  },

  RoGetActivationFactory: {
    parameters: [t.HSTRING, t.GUID, t.LPVOID],
    result: t.HRESULT,
  },

  WindowsCreateString: {
    parameters: [t.PCNZWCH, t.UINT32, t.HSTRING_PTR],
    result: t.HRESULT,
  },

  WindowsDeleteString: {
    parameters: [t.HSTRING],
    result: t.HRESULT,
  },

  WindowsGetStringRawBuffer: {
    parameters: [t.HSTRING, t.UINT32_PTR],
    result: t.PCWSTR,
  },
}).symbols;

winrt.RoInitialize(0);
