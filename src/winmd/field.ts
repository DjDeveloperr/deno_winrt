import { Scope } from "./scope.ts";

export class Field {
  constructor(public scope: Scope, public token: number) {}
}
