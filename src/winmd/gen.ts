import { GUID } from "../guid.ts";
import * as winmd from "./mod.ts";

function typeToFFI(ty: winmd.TypeId): Deno.NativeType {
  switch (ty.base) {
    case "u8":
    case "i8":
    case "u16":
    case "i16":
    case "u32":
    case "i32":
    case "u64":
    case "i64":
    case "f32":
    case "f64":
    case "usize":
    case "isize":
    case "void":
      return ty.base;

    case "char":
    case "bool":
      return "u8";

    case "ptr":
    case "fnptr":
    case "byref":
    case "valuetype":
    case "class":
    case "object":
    case "string":
      return "pointer";

    default:
      throw new Error("Unsupported type: " + ty.base);
  }
}

export class Emitter {
  #emitted = new Set<string>();

  constructor(
    public scope: winmd.Scope,
    public write: (name: string, src: string) => any,
  ) {}

  processTypeId(typeId: winmd.TypeId, imports: Set<string>): string {
    let type = "any", generic: string | undefined;
    if (typeId.base === "void" || typeId.base === "string") {
      return typeId.base;
    } else if (typeId.base === "bool") {
      return "boolean";
    } else if (typeId.base === "byref" || typeId.base === "ptr") {
      if (typeId.typeArg) {
        const str = this.processTypeId(typeId.typeArg, imports);
        return `PointerConvertible<${str}>`;
      } else {
        return "PointerConvertible";
      }
    } else if (
      [
        "u8",
        "i8",
        "u16",
        "i16",
        "i32",
        "u32",
        "i64",
        "u64",
        "f32",
        "f64",
        "isize",
        "usize",
      ]
        .includes(typeId.base)
    ) {
      return "number";
    } else if (typeId.base === "fnptr") {
      return "Deno.UnsafeFnPointer";
    } else if (typeId.base === "object") {
      imports.add("COMObject");
      return "COMObject";
    } else if (typeId.type) {
      imports.add(typeId.type.name);
      if (!this.#emitted.has(typeId.type.name)) {
        this.emitTypeDef(typeId.type);
      }
      return typeId.type.name.split(".").pop()!;
    }
    if (typeId.typeArg) generic = this.processTypeId(typeId.typeArg, imports);
    return type;
  }

  emitMethod(method: winmd.Method, imports: Set<string>) {
    let source = `  ${method.name}${
      method.parameters.length === 0
        ? "()"
        : `(\n${
          method.parameters.map((param) => {
            const ty = this.processTypeId(param.type, imports);
            return `    ${param.name}: ${ty},`;
          }).join("\n")
        }\n  )`
    }: ${
      method.returnType
        ? this.processTypeId(method.returnType.type, imports)
        : "void"
    } {\n`;
    const wrapComObject =
      method.returnType && typeToFFI(method.returnType.type) === "pointer" &&
        ["valuetype", "class"].includes(method.returnType.type.base)
        ? this.processTypeId(method.returnType.type, imports)
        : undefined;
    source += `    return ${
      wrapComObject ? `new ${wrapComObject}(` : ""
    }this._getFunction(0, {\n`;
    source += `      parameters: [${
      method.parameters.map((p) => `"${typeToFFI(p.type)}"`).join(", ")
    }],\n`;
    source += `      result: "${
      method.returnType ? typeToFFI(method.returnType.type) : "void"
    }",\n`;
    source += `    } as const)(${
      method.parameters.map((e) => {
        const ffi = typeToFFI(e.type);
        if (ffi === "pointer") {
          imports.add("COMObject");
          return `toPointer(${e.name})`;
        } else return e.name;
      }).join(", ")
    })${wrapComObject ? ")" : ""};\n`;
    source += "  }";
    return source;
  }

  emitTypeDef(def: winmd.TypeDef) {
    if (this.#emitted.has(def.name)) {
      return;
    }

    this.#emitted.add(def.name);

    const nameParts = def.name.split(".");
    const name = nameParts.pop()!;

    const imports = new Set<string>();
    imports.add("GUID");

    if (def.interfaces.length === 0) {
      imports.add("COMObject");
    }

    def.interfaces.forEach((iface) => {
      this.emitTypeDef(iface);
      imports.add(iface.name);
    });

    let source = `export class ${name}${
      def.interfaces.length
        ? ` extends ${def.interfaces[0].name.split(".").pop()}`
        : " extends COMObject"
    } {\n`;

    source += `  static GUID = GUID.fromString("${
      (def.guid ?? new GUID(new Uint8Array(16))).toString()
    }");\n`;

    if (def.fields.length !== 0) {
      source += "\n";
      source += def.fields.map((field) => {
        return `  // ${field.name}: ${field.type.name};`;
      }).join("\n") + "\n";
    }

    if (def.methods.length !== 0) {
      source += "\n";
      source += def.methods
        .map((method) => this.emitMethod(method, imports))
        .join("\n\n") + "\n";
    }

    source += "}\n";

    source = imports.size === 0
      ? source
      : `${
        [...imports].filter((e) => e !== def.name).map((e) => {
          if (e === "COMObject") {
            return `import { COMObject, toPointer, PointerConvertible } from "${
              "../".repeat(nameParts.length + 1)
            }com.ts";`;
          }
          if (e === "GUID") {
            return `import { GUID } from "${
              "../".repeat(nameParts.length + 1)
            }guid.ts";`;
          }
          const parts = e.split(".");
          const name = parts.pop()!;
          return `import { ${name} } from "${"../".repeat(nameParts.length)}${
            parts.join("/")
          }/${name}.ts";`;
        }).join("\n")
      }\n\n${source}`;

    this.write(def.name, source);
  }

  emit(filter: (def: winmd.TypeDef) => boolean = () => true) {
    for (const def of this.scope.typeDefs) {
      if (filter(def)) {
        this.emitTypeDef(def);
        if (def.isInterface) {
          const parts = def.name.split(".");
          const last = parts.pop()!;
          const cls = this.scope.typeDefs.find((e) =>
            e.name.endsWith("." + last.slice(1))
          );
          if (cls) {
            this.emitTypeDef(cls);
          }
        }
      }
    }
  }
}

await Deno.remove(new URL("../gen", import.meta.url), { recursive: true });
await Deno.mkdir(new URL("../gen", import.meta.url));

const dispenser = new winmd.MetaDataDispenser();
const scope = dispenser.openScope("Windows.Win32.winmd");
const emitter = new Emitter(scope, (name, src) => {
  console.log("Emit", name);

  const dirs = name.split(".");
  name = dirs.pop()!;

  const accum = `../gen/${dirs.join("/")}`;
  Deno.mkdirSync(new URL(accum, import.meta.url), { recursive: true });

  Deno.writeTextFileSync(
    new URL(`${accum}/${name}.ts`, import.meta.url),
    src,
  );
});

emitter.emit((def) => def.name === "Windows.Win32.UI.Shell.IFileOpenDialog");

function makeReExports(path: URL): void {
  const exports = [];
  for (const entry of Deno.readDirSync(path)) {
    if (entry.isFile) {
      exports.push('export * from "./' + entry.name + '";');
    } else if (entry.isDirectory) {
      makeReExports(new URL("./" + entry.name + "/", path));
      exports.push(
        "export * as " + entry.name + ' from "./' + entry.name + '/mod.ts";',
      );
    }
  }
  Deno.writeTextFileSync(
    new URL(`./mod.ts`, path),
    exports.join("\n") + "\n",
  );
}

makeReExports(new URL("../gen/", import.meta.url));
