import { GUID } from "../../../../../guid.ts";
import { IUnknown } from "../../../../Windows/Win32/System/Com/IUnknown.ts";
import { IBindCtx } from "../../../../Windows/Win32/System/Com/IBindCtx.ts";
import { Guid } from "../../../../System/Guid.ts";
import { HRESULT } from "../../../../Windows/Win32/Foundation/HRESULT.ts";
import {
  COMObject,
  PointerConvertible,
  toPointer,
} from "../../../../../com.ts";
import { GETPROPERTYSTOREFLAGS } from "../../../../Windows/Win32/UI/Shell/PropertiesSystem/GETPROPERTYSTOREFLAGS.ts";
import { PROPERTYKEY } from "../../../../Windows/Win32/UI/Shell/PropertiesSystem/PROPERTYKEY.ts";
import { SIATTRIBFLAGS } from "../../../../Windows/Win32/UI/Shell/SIATTRIBFLAGS.ts";
import { IShellItem } from "../../../../Windows/Win32/UI/Shell/IShellItem.ts";
import { IEnumShellItems } from "../../../../Windows/Win32/UI/Shell/IEnumShellItems.ts";

export class IShellItemArray extends IUnknown {
  static GUID = GUID.fromString("{B63EA76D-1F85-456F-A19C-48159EFA858B}");

  [Symbol.for("COMObject.name")]() {
    return "Windows.Win32.UI.Shell.IShellItemArray";
  }

  BindToHandler(
    pbc: IBindCtx,
    bhid: PointerConvertible<Guid>,
    riid: PointerConvertible<Guid>,
    ppvOut: PointerConvertible<PointerConvertible<void>>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        3,
        {
          parameters: ["pointer", "pointer", "pointer", "pointer", "pointer"],
          result: "pointer",
        } as const,
      )(
        this._ptr,
        toPointer(pbc),
        toPointer(bhid),
        toPointer(riid),
        toPointer(ppvOut),
      ),
    );
  }

  GetPropertyStore(
    flags: GETPROPERTYSTOREFLAGS,
    riid: PointerConvertible<Guid>,
    ppv: PointerConvertible<PointerConvertible<void>>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        4,
        {
          parameters: ["pointer", "pointer", "pointer", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(flags), toPointer(riid), toPointer(ppv)),
    );
  }

  GetPropertyDescriptionList(
    keyType: PointerConvertible<PROPERTYKEY>,
    riid: PointerConvertible<Guid>,
    ppv: PointerConvertible<PointerConvertible<void>>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        5,
        {
          parameters: ["pointer", "pointer", "pointer", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(keyType), toPointer(riid), toPointer(ppv)),
    );
  }

  GetAttributes(
    AttribFlags: SIATTRIBFLAGS,
    sfgaoMask: number,
    psfgaoAttribs: PointerConvertible<number>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        6,
        {
          parameters: ["pointer", "pointer", "u32", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(AttribFlags), sfgaoMask, toPointer(psfgaoAttribs)),
    );
  }

  GetCount(
    pdwNumItems: PointerConvertible<number>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        7,
        {
          parameters: ["pointer", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(pdwNumItems)),
    );
  }

  GetItemAt(
    dwIndex: number,
    ppsi: PointerConvertible<IShellItem>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        8,
        {
          parameters: ["pointer", "u32", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, dwIndex, toPointer(ppsi)),
    );
  }

  EnumItems(
    ppenumShellItems: PointerConvertible<IEnumShellItems>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        9,
        {
          parameters: ["pointer", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(ppenumShellItems)),
    );
  }
}
