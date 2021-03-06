/// Autogenerated: Windows.Win32.UI.Input.Touch.IInertiaProcessor

import { GUID } from "../../../../../../guid.ts";
import { IUnknown } from "../../../../../Windows/Win32/System/Com/IUnknown.ts";
import { PointerConvertible } from "../../../../../../com.ts";
import { toPointer } from "../../../../../../com.ts";

export class IInertiaProcessor extends IUnknown {
  static GUID = GUID.fromString("{18B00C6D-C5EE-41B1-90A9-9D4A929095AD}");

  [Symbol.for("COMObject.name")]() {
    return "Windows.Win32.UI.Input.Touch.IInertiaProcessor";
  }

  getInitialOriginX(
    x: PointerConvertible<number>,
  ): number {
    const result = this._getFunction(3, {
      parameters: ["pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(x));
    return result;
  }

  setInitialOriginX(
    x: number,
  ): number {
    const result = this._getFunction(4, {
      parameters: ["pointer", "f32"],
      result: "i32",
    } as const)(this._ptr, x);
    return result;
  }

  getInitialOriginY(
    y: PointerConvertible<number>,
  ): number {
    const result = this._getFunction(5, {
      parameters: ["pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(y));
    return result;
  }

  setInitialOriginY(
    y: number,
  ): number {
    const result = this._getFunction(6, {
      parameters: ["pointer", "f32"],
      result: "i32",
    } as const)(this._ptr, y);
    return result;
  }

  getInitialVelocityX(
    x: PointerConvertible<number>,
  ): number {
    const result = this._getFunction(7, {
      parameters: ["pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(x));
    return result;
  }

  setInitialVelocityX(
    x: number,
  ): number {
    const result = this._getFunction(8, {
      parameters: ["pointer", "f32"],
      result: "i32",
    } as const)(this._ptr, x);
    return result;
  }

  getInitialVelocityY(
    y: PointerConvertible<number>,
  ): number {
    const result = this._getFunction(9, {
      parameters: ["pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(y));
    return result;
  }

  setInitialVelocityY(
    y: number,
  ): number {
    const result = this._getFunction(10, {
      parameters: ["pointer", "f32"],
      result: "i32",
    } as const)(this._ptr, y);
    return result;
  }

  getInitialAngularVelocity(
    velocity: PointerConvertible<number>,
  ): number {
    const result = this._getFunction(11, {
      parameters: ["pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(velocity));
    return result;
  }

  setInitialAngularVelocity(
    velocity: number,
  ): number {
    const result = this._getFunction(12, {
      parameters: ["pointer", "f32"],
      result: "i32",
    } as const)(this._ptr, velocity);
    return result;
  }

  getInitialExpansionVelocity(
    velocity: PointerConvertible<number>,
  ): number {
    const result = this._getFunction(13, {
      parameters: ["pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(velocity));
    return result;
  }

  setInitialExpansionVelocity(
    velocity: number,
  ): number {
    const result = this._getFunction(14, {
      parameters: ["pointer", "f32"],
      result: "i32",
    } as const)(this._ptr, velocity);
    return result;
  }

  getInitialRadius(
    radius: PointerConvertible<number>,
  ): number {
    const result = this._getFunction(15, {
      parameters: ["pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(radius));
    return result;
  }

  setInitialRadius(
    radius: number,
  ): number {
    const result = this._getFunction(16, {
      parameters: ["pointer", "f32"],
      result: "i32",
    } as const)(this._ptr, radius);
    return result;
  }

  getBoundaryLeft(
    left: PointerConvertible<number>,
  ): number {
    const result = this._getFunction(17, {
      parameters: ["pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(left));
    return result;
  }

  setBoundaryLeft(
    left: number,
  ): number {
    const result = this._getFunction(18, {
      parameters: ["pointer", "f32"],
      result: "i32",
    } as const)(this._ptr, left);
    return result;
  }

  getBoundaryTop(
    top: PointerConvertible<number>,
  ): number {
    const result = this._getFunction(19, {
      parameters: ["pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(top));
    return result;
  }

  setBoundaryTop(
    top: number,
  ): number {
    const result = this._getFunction(20, {
      parameters: ["pointer", "f32"],
      result: "i32",
    } as const)(this._ptr, top);
    return result;
  }

  getBoundaryRight(
    right: PointerConvertible<number>,
  ): number {
    const result = this._getFunction(21, {
      parameters: ["pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(right));
    return result;
  }

  setBoundaryRight(
    right: number,
  ): number {
    const result = this._getFunction(22, {
      parameters: ["pointer", "f32"],
      result: "i32",
    } as const)(this._ptr, right);
    return result;
  }

  getBoundaryBottom(
    bottom: PointerConvertible<number>,
  ): number {
    const result = this._getFunction(23, {
      parameters: ["pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(bottom));
    return result;
  }

  setBoundaryBottom(
    bottom: number,
  ): number {
    const result = this._getFunction(24, {
      parameters: ["pointer", "f32"],
      result: "i32",
    } as const)(this._ptr, bottom);
    return result;
  }

  getElasticMarginLeft(
    left: PointerConvertible<number>,
  ): number {
    const result = this._getFunction(25, {
      parameters: ["pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(left));
    return result;
  }

  setElasticMarginLeft(
    left: number,
  ): number {
    const result = this._getFunction(26, {
      parameters: ["pointer", "f32"],
      result: "i32",
    } as const)(this._ptr, left);
    return result;
  }

  getElasticMarginTop(
    top: PointerConvertible<number>,
  ): number {
    const result = this._getFunction(27, {
      parameters: ["pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(top));
    return result;
  }

  setElasticMarginTop(
    top: number,
  ): number {
    const result = this._getFunction(28, {
      parameters: ["pointer", "f32"],
      result: "i32",
    } as const)(this._ptr, top);
    return result;
  }

  getElasticMarginRight(
    right: PointerConvertible<number>,
  ): number {
    const result = this._getFunction(29, {
      parameters: ["pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(right));
    return result;
  }

  setElasticMarginRight(
    right: number,
  ): number {
    const result = this._getFunction(30, {
      parameters: ["pointer", "f32"],
      result: "i32",
    } as const)(this._ptr, right);
    return result;
  }

  getElasticMarginBottom(
    bottom: PointerConvertible<number>,
  ): number {
    const result = this._getFunction(31, {
      parameters: ["pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(bottom));
    return result;
  }

  setElasticMarginBottom(
    bottom: number,
  ): number {
    const result = this._getFunction(32, {
      parameters: ["pointer", "f32"],
      result: "i32",
    } as const)(this._ptr, bottom);
    return result;
  }

  getDesiredDisplacement(
    displacement: PointerConvertible<number>,
  ): number {
    const result = this._getFunction(33, {
      parameters: ["pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(displacement));
    return result;
  }

  setDesiredDisplacement(
    displacement: number,
  ): number {
    const result = this._getFunction(34, {
      parameters: ["pointer", "f32"],
      result: "i32",
    } as const)(this._ptr, displacement);
    return result;
  }

  getDesiredRotation(
    rotation: PointerConvertible<number>,
  ): number {
    const result = this._getFunction(35, {
      parameters: ["pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(rotation));
    return result;
  }

  setDesiredRotation(
    rotation: number,
  ): number {
    const result = this._getFunction(36, {
      parameters: ["pointer", "f32"],
      result: "i32",
    } as const)(this._ptr, rotation);
    return result;
  }

  getDesiredExpansion(
    expansion: PointerConvertible<number>,
  ): number {
    const result = this._getFunction(37, {
      parameters: ["pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(expansion));
    return result;
  }

  setDesiredExpansion(
    expansion: number,
  ): number {
    const result = this._getFunction(38, {
      parameters: ["pointer", "f32"],
      result: "i32",
    } as const)(this._ptr, expansion);
    return result;
  }

  getDesiredDeceleration(
    deceleration: PointerConvertible<number>,
  ): number {
    const result = this._getFunction(39, {
      parameters: ["pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(deceleration));
    return result;
  }

  setDesiredDeceleration(
    deceleration: number,
  ): number {
    const result = this._getFunction(40, {
      parameters: ["pointer", "f32"],
      result: "i32",
    } as const)(this._ptr, deceleration);
    return result;
  }

  getDesiredAngularDeceleration(
    deceleration: PointerConvertible<number>,
  ): number {
    const result = this._getFunction(41, {
      parameters: ["pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(deceleration));
    return result;
  }

  setDesiredAngularDeceleration(
    deceleration: number,
  ): number {
    const result = this._getFunction(42, {
      parameters: ["pointer", "f32"],
      result: "i32",
    } as const)(this._ptr, deceleration);
    return result;
  }

  getDesiredExpansionDeceleration(
    deceleration: PointerConvertible<number>,
  ): number {
    const result = this._getFunction(43, {
      parameters: ["pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(deceleration));
    return result;
  }

  setDesiredExpansionDeceleration(
    deceleration: number,
  ): number {
    const result = this._getFunction(44, {
      parameters: ["pointer", "f32"],
      result: "i32",
    } as const)(this._ptr, deceleration);
    return result;
  }

  getInitialTimestamp(
    timestamp: PointerConvertible<number>,
  ): number {
    const result = this._getFunction(45, {
      parameters: ["pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(timestamp));
    return result;
  }

  setInitialTimestamp(
    timestamp: number,
  ): number {
    const result = this._getFunction(46, {
      parameters: ["pointer", "u32"],
      result: "i32",
    } as const)(this._ptr, timestamp);
    return result;
  }

  Reset(): number {
    const result = this._getFunction(47, {
      parameters: ["pointer", ],
      result: "i32",
    } as const)(this._ptr, );
    return result;
  }

  Process(
    completed: PointerConvertible<boolean>,
  ): number {
    const result = this._getFunction(48, {
      parameters: ["pointer", "pointer"],
      result: "i32",
    } as const)(this._ptr, toPointer(completed));
    return result;
  }

  ProcessTime(
    timestamp: number,
    completed: PointerConvertible<boolean>,
  ): number {
    const result = this._getFunction(49, {
      parameters: ["pointer", "u32", "pointer"],
      result: "i32",
    } as const)(this._ptr, timestamp, toPointer(completed));
    return result;
  }

  Complete(): number {
    const result = this._getFunction(50, {
      parameters: ["pointer", ],
      result: "i32",
    } as const)(this._ptr, );
    return result;
  }

  CompleteTime(
    timestamp: number,
  ): number {
    const result = this._getFunction(51, {
      parameters: ["pointer", "u32"],
      result: "i32",
    } as const)(this._ptr, timestamp);
    return result;
  }
}
