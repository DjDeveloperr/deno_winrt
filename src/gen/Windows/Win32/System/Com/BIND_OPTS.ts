import { GUID } from "../../../../../guid.ts";
import {
  COMObject,
  PointerConvertible,
  toPointer,
} from "../../../../../com.ts";

export class BIND_OPTS extends COMObject {
  static GUID = GUID.fromString("{00000000-0000-0000-0000-000000000000}");

  // cbStruct: Windows.Win32.System.Com.BIND_OPTS;
  // grfFlags: Windows.Win32.System.Com.BIND_OPTS;
  // grfMode: Windows.Win32.System.Com.BIND_OPTS;
  // dwTickCountDeadline: Windows.Win32.System.Com.BIND_OPTS;
}
