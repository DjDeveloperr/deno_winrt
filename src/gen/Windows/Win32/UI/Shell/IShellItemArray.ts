import { GUID } from "../../../../../guid.ts";
import { IUnknown } from "../../../../Windows/Win32/System/Com/IUnknown.ts";
import { IBindCtx } from "../../../../Windows/Win32/System/Com/IBindCtx.ts";
import { PointerConvertible } from "../../../../../com.ts";
import { toPointer } from "../../../../../com.ts";
import { PROPERTYKEY } from "../../../../Windows/Win32/UI/Shell/PropertiesSystem/PROPERTYKEY.ts";
import { IShellItem } from "../../../../Windows/Win32/UI/Shell/IShellItem.ts";
import { IEnumShellItems } from "../../../../Windows/Win32/UI/Shell/IEnumShellItems.ts";

export class IShellItemArray extends IUnknown {
  static GUID = GUID.fromString("{B63EA76D-1F85-456F-A19C-48159EFA858B}");

  [Symbol.for("COMObject.name")]() {
    return "Windows.Win32.UI.Shell.IShellItemArray";
  }

  BindToHandler(
    pbc: IBindCtx,
    bhid: PointerConvertible<GUID>,
    riid: PointerConvertible<GUID>,
    ppvOut: PointerConvertible<PointerConvertible<void>>,
  ): number {
    const result = this._getFunction(3, {
      parameters: ["pointer", "pointer", "pointer", "pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(pbc), toPointer(bhid), toPointer(riid), toPointer(ppvOut));
    return result;
  }

  GetPropertyStore(
    flags: number /* GETPROPERTYSTOREFLAGS */,
    riid: PointerConvertible<GUID>,
    ppv: PointerConvertible<PointerConvertible<void>>,
  ): number {
    const result = this._getFunction(4, {
      parameters: ["pointer", "i16", "pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, flags, toPointer(riid), toPointer(ppv));
    return result;
  }

  GetPropertyDescriptionList(
    keyType: PointerConvertible<PROPERTYKEY>,
    riid: PointerConvertible<GUID>,
    ppv: PointerConvertible<PointerConvertible<void>>,
  ): number {
    const result = this._getFunction(5, {
      parameters: ["pointer", "pointer", "pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(keyType), toPointer(riid), toPointer(ppv));
    return result;
  }

  GetAttributes(
    AttribFlags: number /* SIATTRIBFLAGS */,
    sfgaoMask: number,
    psfgaoAttribs: PointerConvertible<number>,
  ): number {
    const result = this._getFunction(6, {
      parameters: ["pointer", "i16", "u32", "pointer"],
      result: "i32",
    } as const)(this._ptr, AttribFlags, sfgaoMask, toPointer(psfgaoAttribs));
    return result;
  }

  GetCount(
    pdwNumItems: PointerConvertible<number>,
  ): number {
    const result = this._getFunction(7, {
      parameters: ["pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(pdwNumItems));
    return result;
  }

  GetItemAt(
    dwIndex: number,
    ppsi: PointerConvertible<IShellItem>,
  ): number {
    const result = this._getFunction(8, {
      parameters: ["pointer", "u32", "pointer"],
      result: "i32",
    } as const)(this._ptr, dwIndex, toPointer(ppsi));
    return result;
  }

  EnumItems(
    ppenumShellItems: PointerConvertible<IEnumShellItems>,
  ): number {
    const result = this._getFunction(9, {
      parameters: ["pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(ppenumShellItems));
    return result;
  }
}
