import { GUID } from "../../../../../guid.ts";
import { IPersistStream } from "../../../../Windows/Win32/System/Com/IPersistStream.ts";
import { IBindCtx } from "../../../../Windows/Win32/System/Com/IBindCtx.ts";
import { Guid } from "../../../../System/Guid.ts";
import { HRESULT } from "../../../../Windows/Win32/Foundation/HRESULT.ts";
import {
  COMObject,
  PointerConvertible,
  toPointer,
} from "../../../../../com.ts";
import { BOOL } from "../../../../Windows/Win32/Foundation/BOOL.ts";
import { IEnumMoniker } from "../../../../Windows/Win32/System/Com/IEnumMoniker.ts";
import { FILETIME } from "../../../../Windows/Win32/Foundation/FILETIME.ts";
import { PWSTR } from "../../../../Windows/Win32/Foundation/PWSTR.ts";

export class IMoniker extends IPersistStream {
  static GUID = GUID.fromString("{0000000F-0000-0000-C000-000000000046}");

  [Symbol.for("COMObject.name")]() {
    return "Windows.Win32.System.Com.IMoniker";
  }

  BindToObject(
    pbc: IBindCtx,
    pmkToLeft: IMoniker,
    riidResult: PointerConvertible<Guid>,
    ppvResult: PointerConvertible<PointerConvertible<void>>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        8,
        {
          parameters: ["pointer", "pointer", "pointer", "pointer", "pointer"],
          result: "pointer",
        } as const,
      )(
        this._ptr,
        toPointer(pbc),
        toPointer(pmkToLeft),
        toPointer(riidResult),
        toPointer(ppvResult),
      ),
    );
  }

  BindToStorage(
    pbc: IBindCtx,
    pmkToLeft: IMoniker,
    riid: PointerConvertible<Guid>,
    ppvObj: PointerConvertible<PointerConvertible<void>>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        9,
        {
          parameters: ["pointer", "pointer", "pointer", "pointer", "pointer"],
          result: "pointer",
        } as const,
      )(
        this._ptr,
        toPointer(pbc),
        toPointer(pmkToLeft),
        toPointer(riid),
        toPointer(ppvObj),
      ),
    );
  }

  Reduce(
    pbc: IBindCtx,
    dwReduceHowFar: number,
    ppmkToLeft: PointerConvertible<IMoniker>,
    ppmkReduced: PointerConvertible<IMoniker>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        10,
        {
          parameters: ["pointer", "pointer", "u32", "pointer", "pointer"],
          result: "pointer",
        } as const,
      )(
        this._ptr,
        toPointer(pbc),
        dwReduceHowFar,
        toPointer(ppmkToLeft),
        toPointer(ppmkReduced),
      ),
    );
  }

  ComposeWith(
    pmkRight: IMoniker,
    fOnlyIfNotGeneric: BOOL,
    ppmkComposite: PointerConvertible<IMoniker>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        11,
        {
          parameters: ["pointer", "pointer", "pointer", "pointer"],
          result: "pointer",
        } as const,
      )(
        this._ptr,
        toPointer(pmkRight),
        toPointer(fOnlyIfNotGeneric),
        toPointer(ppmkComposite),
      ),
    );
  }

  Enum(
    fForward: BOOL,
    ppenumMoniker: PointerConvertible<IEnumMoniker>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        12,
        {
          parameters: ["pointer", "pointer", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(fForward), toPointer(ppenumMoniker)),
    );
  }

  IsEqual(
    pmkOtherMoniker: IMoniker,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        13,
        {
          parameters: ["pointer", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(pmkOtherMoniker)),
    );
  }

  Hash(
    pdwHash: PointerConvertible<number>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        14,
        {
          parameters: ["pointer", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(pdwHash)),
    );
  }

  IsRunning(
    pbc: IBindCtx,
    pmkToLeft: IMoniker,
    pmkNewlyRunning: IMoniker,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        15,
        {
          parameters: ["pointer", "pointer", "pointer", "pointer"],
          result: "pointer",
        } as const,
      )(
        this._ptr,
        toPointer(pbc),
        toPointer(pmkToLeft),
        toPointer(pmkNewlyRunning),
      ),
    );
  }

  GetTimeOfLastChange(
    pbc: IBindCtx,
    pmkToLeft: IMoniker,
    pFileTime: PointerConvertible<FILETIME>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        16,
        {
          parameters: ["pointer", "pointer", "pointer", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(pbc), toPointer(pmkToLeft), toPointer(pFileTime)),
    );
  }

  Inverse(
    ppmk: PointerConvertible<IMoniker>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        17,
        {
          parameters: ["pointer", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(ppmk)),
    );
  }

  CommonPrefixWith(
    pmkOther: IMoniker,
    ppmkPrefix: PointerConvertible<IMoniker>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        18,
        {
          parameters: ["pointer", "pointer", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(pmkOther), toPointer(ppmkPrefix)),
    );
  }

  RelativePathTo(
    pmkOther: IMoniker,
    ppmkRelPath: PointerConvertible<IMoniker>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        19,
        {
          parameters: ["pointer", "pointer", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(pmkOther), toPointer(ppmkRelPath)),
    );
  }

  GetDisplayName(
    pbc: IBindCtx,
    pmkToLeft: IMoniker,
    ppszDisplayName: PointerConvertible<PWSTR>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        20,
        {
          parameters: ["pointer", "pointer", "pointer", "pointer"],
          result: "pointer",
        } as const,
      )(
        this._ptr,
        toPointer(pbc),
        toPointer(pmkToLeft),
        toPointer(ppszDisplayName),
      ),
    );
  }

  ParseDisplayName(
    pbc: IBindCtx,
    pmkToLeft: IMoniker,
    pszDisplayName: PWSTR,
    pchEaten: PointerConvertible<number>,
    ppmkOut: PointerConvertible<IMoniker>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        21,
        {
          parameters: [
            "pointer",
            "pointer",
            "pointer",
            "pointer",
            "pointer",
            "pointer",
          ],
          result: "pointer",
        } as const,
      )(
        this._ptr,
        toPointer(pbc),
        toPointer(pmkToLeft),
        toPointer(pszDisplayName),
        toPointer(pchEaten),
        toPointer(ppmkOut),
      ),
    );
  }

  IsSystemMoniker(
    pdwMksys: PointerConvertible<number>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        22,
        {
          parameters: ["pointer", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(pdwMksys)),
    );
  }
}
