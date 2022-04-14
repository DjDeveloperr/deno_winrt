import { GUID } from "../../../../../guid.ts";
import { ISequentialStream } from "../../../../Windows/Win32/System/Com/ISequentialStream.ts";
import { PointerConvertible } from "../../../../../com.ts";
import { toPointer } from "../../../../../com.ts";
import { STATSTG } from "../../../../Windows/Win32/System/Com/STATSTG.ts";

export class IStream extends ISequentialStream {
  static GUID = GUID.fromString("{0000000C-0000-0000-C000-000000000046}");

  [Symbol.for("COMObject.name")]() {
    return "Windows.Win32.System.Com.IStream";
  }

  Seek(
    dlibMove: bigint,
    dwOrigin: number /* STREAM_SEEK */,
    plibNewPosition: PointerConvertible<bigint> | null,
  ): number {
    const result = this._getFunction(5, {
      parameters: ["pointer", "pointer", "i16", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(dlibMove), dwOrigin, toPointer(plibNewPosition));
    return result;
  }

  SetSize(
    libNewSize: bigint,
  ): number {
    const result = this._getFunction(6, {
      parameters: ["pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(libNewSize));
    return result;
  }

  CopyTo(
    pstm: IStream,
    cb: bigint,
    pcbRead: PointerConvertible<bigint> | null,
    pcbWritten: PointerConvertible<bigint> | null,
  ): number {
    const result = this._getFunction(7, {
      parameters: ["pointer", "pointer", "pointer", "pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(pstm), toPointer(cb), toPointer(pcbRead), toPointer(pcbWritten));
    return result;
  }

  Commit(
    grfCommitFlags: number /* STGC */,
  ): number {
    const result = this._getFunction(8, {
      parameters: ["pointer", "i16"],
      result: "i32",
    } as const)(this._ptr, grfCommitFlags);
    return result;
  }

  Revert(): number {
    const result = this._getFunction(9, {
      parameters: ["pointer", ],
      result: "i32",
    } as const)(this._ptr, );
    return result;
  }

  LockRegion(
    libOffset: bigint,
    cb: bigint,
    dwLockType: number,
  ): number {
    const result = this._getFunction(10, {
      parameters: ["pointer", "pointer", "pointer", "u32"],
      result: "i32",
    } as const)(this._ptr, toPointer(libOffset), toPointer(cb), dwLockType);
    return result;
  }

  UnlockRegion(
    libOffset: bigint,
    cb: bigint,
    dwLockType: number,
  ): number {
    const result = this._getFunction(11, {
      parameters: ["pointer", "pointer", "pointer", "u32"],
      result: "i32",
    } as const)(this._ptr, toPointer(libOffset), toPointer(cb), dwLockType);
    return result;
  }

  Stat(
    pstatstg: PointerConvertible<STATSTG>,
    grfStatFlag: number,
  ): number {
    const result = this._getFunction(12, {
      parameters: ["pointer", "pointer", "u32"],
      result: "i32",
    } as const)(this._ptr, toPointer(pstatstg), grfStatFlag);
    return result;
  }

  Clone(
    ppstm: PointerConvertible<IStream>,
  ): number {
    const result = this._getFunction(13, {
      parameters: ["pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(ppstm));
    return result;
  }
}
