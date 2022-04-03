import { GUID } from "../../guid.ts";
import { COMObject, PointerConvertible, toPointer } from "../../com.ts";

export class Guid extends COMObject {
  static GUID = GUID.fromString("{00000000-0000-0000-0000-000000000000}");
}
