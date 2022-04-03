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

  BindToHandler(
    pbc: IBindCtx,
    bhid: PointerConvertible<Guid>,
    riid: PointerConvertible<Guid>,
    ppvOut: PointerConvertible<PointerConvertible<void>>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: ["pointer", "pointer", "pointer", "pointer"],
          result: "pointer",
        } as const,
      )(toPointer(pbc), toPointer(bhid), toPointer(riid), toPointer(ppvOut)),
    );
  }

  GetPropertyStore(
    flags: GETPROPERTYSTOREFLAGS,
    riid: PointerConvertible<Guid>,
    ppv: PointerConvertible<PointerConvertible<void>>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: ["pointer", "pointer", "pointer"],
          result: "pointer",
        } as const,
      )(toPointer(flags), toPointer(riid), toPointer(ppv)),
    );
  }

  GetPropertyDescriptionList(
    keyType: PointerConvertible<PROPERTYKEY>,
    riid: PointerConvertible<Guid>,
    ppv: PointerConvertible<PointerConvertible<void>>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: ["pointer", "pointer", "pointer"],
          result: "pointer",
        } as const,
      )(toPointer(keyType), toPointer(riid), toPointer(ppv)),
    );
  }

  GetAttributes(
    AttribFlags: SIATTRIBFLAGS,
    sfgaoMask: number,
    psfgaoAttribs: PointerConvertible<number>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: ["pointer", "u32", "pointer"],
          result: "pointer",
        } as const,
      )(toPointer(AttribFlags), sfgaoMask, toPointer(psfgaoAttribs)),
    );
  }

  GetCount(
    pdwNumItems: PointerConvertible<number>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: ["pointer"],
          result: "pointer",
        } as const,
      )(toPointer(pdwNumItems)),
    );
  }

  GetItemAt(
    dwIndex: number,
    ppsi: PointerConvertible<IShellItem>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: ["u32", "pointer"],
          result: "pointer",
        } as const,
      )(dwIndex, toPointer(ppsi)),
    );
  }

  EnumItems(
    ppenumShellItems: PointerConvertible<IEnumShellItems>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        0,
        {
          parameters: ["pointer"],
          result: "pointer",
        } as const,
      )(toPointer(ppenumShellItems)),
    );
  }
}
