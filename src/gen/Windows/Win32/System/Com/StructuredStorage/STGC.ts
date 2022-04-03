import { GUID } from "../../../../../../guid.ts";
import {
  COMObject,
  PointerConvertible,
  toPointer,
} from "../../../../../../com.ts";

export class STGC extends COMObject {
  static GUID = GUID.fromString("{00000000-0000-0000-0000-000000000000}");

  [Symbol.for("COMObject.name")]() {
    return "Windows.Win32.System.Com.StructuredStorage.STGC";
  }

  // value__: Windows.Win32.System.Com.StructuredStorage.STGC;
  // STGC_DEFAULT: Windows.Win32.System.Com.StructuredStorage.STGC;
  // STGC_OVERWRITE: Windows.Win32.System.Com.StructuredStorage.STGC;
  // STGC_ONLYIFCURRENT: Windows.Win32.System.Com.StructuredStorage.STGC;
  // STGC_DANGEROUSLYCOMMITMERELYTODISKCACHE: Windows.Win32.System.Com.StructuredStorage.STGC;
  // STGC_CONSOLIDATE: Windows.Win32.System.Com.StructuredStorage.STGC;
}
