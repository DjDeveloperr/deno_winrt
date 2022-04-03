import { GUID } from "../../../../../guid.ts";
import { ISequentialStream } from "../../../../Windows/Win32/System/Com/ISequentialStream.ts";
import { LARGE_INTEGER } from "../../../../Windows/Win32/Foundation/LARGE_INTEGER.ts";
import { STREAM_SEEK } from "../../../../Windows/Win32/System/Com/STREAM_SEEK.ts";
import { ULARGE_INTEGER } from "../../../../Windows/Win32/Foundation/ULARGE_INTEGER.ts";
import { HRESULT } from "../../../../Windows/Win32/Foundation/HRESULT.ts";
import {
  COMObject,
  PointerConvertible,
  toPointer,
} from "../../../../../com.ts";
import { STGC } from "../../../../Windows/Win32/System/Com/StructuredStorage/STGC.ts";
import { STATSTG } from "../../../../Windows/Win32/System/Com/STATSTG.ts";

export class IStream extends ISequentialStream {
  static GUID = GUID.fromString("{0000000C-0000-0000-C000-000000000046}");

  [Symbol.for("COMObject.name")]() {
    return "Windows.Win32.System.Com.IStream";
  }

  Seek(
    dlibMove: LARGE_INTEGER,
    dwOrigin: STREAM_SEEK,
    plibNewPosition: PointerConvertible<ULARGE_INTEGER> | null,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        5,
        {
          parameters: ["pointer", "pointer", "pointer", "pointer"],
          result: "pointer",
        } as const,
      )(
        this._ptr,
        toPointer(dlibMove),
        toPointer(dwOrigin),
        toPointer(plibNewPosition),
      ),
    );
  }

  SetSize(
    libNewSize: ULARGE_INTEGER,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        6,
        {
          parameters: ["pointer", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(libNewSize)),
    );
  }

  CopyTo(
    pstm: IStream,
    cb: ULARGE_INTEGER,
    pcbRead: PointerConvertible<ULARGE_INTEGER> | null,
    pcbWritten: PointerConvertible<ULARGE_INTEGER> | null,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        7,
        {
          parameters: ["pointer", "pointer", "pointer", "pointer", "pointer"],
          result: "pointer",
        } as const,
      )(
        this._ptr,
        toPointer(pstm),
        toPointer(cb),
        toPointer(pcbRead),
        toPointer(pcbWritten),
      ),
    );
  }

  Commit(
    grfCommitFlags: STGC,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        8,
        {
          parameters: ["pointer", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(grfCommitFlags)),
    );
  }

  Revert(): HRESULT {
    return new HRESULT(
      this._getFunction(
        9,
        {
          parameters: ["pointer"],
          result: "pointer",
        } as const,
      )(this._ptr),
    );
  }

  LockRegion(
    libOffset: ULARGE_INTEGER,
    cb: ULARGE_INTEGER,
    dwLockType: number,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        10,
        {
          parameters: ["pointer", "pointer", "pointer", "u32"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(libOffset), toPointer(cb), dwLockType),
    );
  }

  UnlockRegion(
    libOffset: ULARGE_INTEGER,
    cb: ULARGE_INTEGER,
    dwLockType: number,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        11,
        {
          parameters: ["pointer", "pointer", "pointer", "u32"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(libOffset), toPointer(cb), dwLockType),
    );
  }

  Stat(
    pstatstg: PointerConvertible<STATSTG>,
    grfStatFlag: number,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        12,
        {
          parameters: ["pointer", "pointer", "u32"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(pstatstg), grfStatFlag),
    );
  }

  Clone(
    ppstm: PointerConvertible<IStream>,
  ): HRESULT {
    return new HRESULT(
      this._getFunction(
        13,
        {
          parameters: ["pointer", "pointer"],
          result: "pointer",
        } as const,
      )(this._ptr, toPointer(ppstm)),
    );
  }
}
