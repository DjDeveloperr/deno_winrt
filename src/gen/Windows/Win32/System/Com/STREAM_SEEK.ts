import { GUID } from "../../../../../guid.ts";
import {
  COMObject,
  PointerConvertible,
  toPointer,
} from "../../../../../com.ts";

export class STREAM_SEEK extends COMObject {
  static GUID = GUID.fromString("{00000000-0000-0000-0000-000000000000}");

  [Symbol.for("COMObject.name")]() {
    return "Windows.Win32.System.Com.STREAM_SEEK";
  }

  // value__: Windows.Win32.System.Com.STREAM_SEEK;
  // STREAM_SEEK_SET: Windows.Win32.System.Com.STREAM_SEEK;
  // STREAM_SEEK_CUR: Windows.Win32.System.Com.STREAM_SEEK;
  // STREAM_SEEK_END: Windows.Win32.System.Com.STREAM_SEEK;
}
