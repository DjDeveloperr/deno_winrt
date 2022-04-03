import { GUID } from "../../../../../guid.ts";
import {
  COMObject,
  PointerConvertible,
  toPointer,
} from "../../../../../com.ts";

export class STATSTG extends COMObject {
  static GUID = GUID.fromString("{00000000-0000-0000-0000-000000000000}");

  // pwcsName: Windows.Win32.System.Com.STATSTG;
  // type: Windows.Win32.System.Com.STATSTG;
  // cbSize: Windows.Win32.System.Com.STATSTG;
  // mtime: Windows.Win32.System.Com.STATSTG;
  // ctime: Windows.Win32.System.Com.STATSTG;
  // atime: Windows.Win32.System.Com.STATSTG;
  // grfMode: Windows.Win32.System.Com.STATSTG;
  // grfLocksSupported: Windows.Win32.System.Com.STATSTG;
  // clsid: Windows.Win32.System.Com.STATSTG;
  // grfStateBits: Windows.Win32.System.Com.STATSTG;
  // reserved: Windows.Win32.System.Com.STATSTG;
}
