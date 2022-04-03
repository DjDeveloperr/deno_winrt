import { GUID } from "../../../../../../guid.ts";
import {
  COMObject,
  PointerConvertible,
  toPointer,
} from "../../../../../../com.ts";

export class GETPROPERTYSTOREFLAGS extends COMObject {
  static GUID = GUID.fromString("{00000000-0000-0000-0000-000000000000}");

  // value__: Windows.Win32.UI.Shell.PropertiesSystem.GETPROPERTYSTOREFLAGS;
  // GPS_DEFAULT: Windows.Win32.UI.Shell.PropertiesSystem.GETPROPERTYSTOREFLAGS;
  // GPS_HANDLERPROPERTIESONLY: Windows.Win32.UI.Shell.PropertiesSystem.GETPROPERTYSTOREFLAGS;
  // GPS_READWRITE: Windows.Win32.UI.Shell.PropertiesSystem.GETPROPERTYSTOREFLAGS;
  // GPS_TEMPORARY: Windows.Win32.UI.Shell.PropertiesSystem.GETPROPERTYSTOREFLAGS;
  // GPS_FASTPROPERTIESONLY: Windows.Win32.UI.Shell.PropertiesSystem.GETPROPERTYSTOREFLAGS;
  // GPS_OPENSLOWITEM: Windows.Win32.UI.Shell.PropertiesSystem.GETPROPERTYSTOREFLAGS;
  // GPS_DELAYCREATION: Windows.Win32.UI.Shell.PropertiesSystem.GETPROPERTYSTOREFLAGS;
  // GPS_BESTEFFORT: Windows.Win32.UI.Shell.PropertiesSystem.GETPROPERTYSTOREFLAGS;
  // GPS_NO_OPLOCK: Windows.Win32.UI.Shell.PropertiesSystem.GETPROPERTYSTOREFLAGS;
  // GPS_PREFERQUERYPROPERTIES: Windows.Win32.UI.Shell.PropertiesSystem.GETPROPERTYSTOREFLAGS;
  // GPS_EXTRINSICPROPERTIES: Windows.Win32.UI.Shell.PropertiesSystem.GETPROPERTYSTOREFLAGS;
  // GPS_EXTRINSICPROPERTIESONLY: Windows.Win32.UI.Shell.PropertiesSystem.GETPROPERTYSTOREFLAGS;
  // GPS_VOLATILEPROPERTIES: Windows.Win32.UI.Shell.PropertiesSystem.GETPROPERTYSTOREFLAGS;
  // GPS_VOLATILEPROPERTIESONLY: Windows.Win32.UI.Shell.PropertiesSystem.GETPROPERTYSTOREFLAGS;
  // GPS_MASK_VALID: Windows.Win32.UI.Shell.PropertiesSystem.GETPROPERTYSTOREFLAGS;
}
