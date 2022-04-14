export class GETPROPERTYSTOREFLAGS {
  static GPS_DEFAULT: number = 0;
  static GPS_HANDLERPROPERTIESONLY: number = 1;
  static GPS_READWRITE: number = 2;
  static GPS_TEMPORARY: number = 4;
  static GPS_FASTPROPERTIESONLY: number = 8;
  static GPS_OPENSLOWITEM: number = 16;
  static GPS_DELAYCREATION: number = 32;
  static GPS_BESTEFFORT: number = 64;
  static GPS_NO_OPLOCK: number = 128;
  static GPS_PREFERQUERYPROPERTIES: number = 256;
  static GPS_EXTRINSICPROPERTIES: number = 512;
  static GPS_EXTRINSICPROPERTIESONLY: number = 1024;
  static GPS_VOLATILEPROPERTIES: number = 2048;
  static GPS_VOLATILEPROPERTIESONLY: number = 4096;
  static GPS_MASK_VALID: number = 8191;
}
