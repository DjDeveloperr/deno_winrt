import * as t from "./wintypes.ts";

export const com = Deno.dlopen("ole32.dll", {
  CoInitializeEx: {
    parameters: [t.LPVOID, t.DWORD],
    result: t.HRESULT,
  },

  CoCreateInstance: {
    parameters: [t.REFCLSID, t.LPUNKNOWN, t.DWORD, t.REFIID, t.LPVOID_PTR],
    result: t.HRESULT,
  },

  CLSIDFromString: {
    parameters: [t.LPCOLESTR, t.LPCLSID],
    result: t.HRESULT,
  },

  StringFromIID: {
    parameters: [t.REFIID_BUF, t.LPCOLESTR_PTR],
    result: t.HRESULT,
  },

  CoTaskMemFree: {
    parameters: [t.LPVOID],
    result: "void",
  },
}).symbols;

com.CoInitializeEx(null, 0);
