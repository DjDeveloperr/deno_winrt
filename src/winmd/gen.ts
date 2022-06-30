import { GUID } from "../guid.ts";
import * as winmd from "./mod.ts";

function getShortName(name: string) {
  return name.split(".").at(-1)!.split("`")[0];
}

type SpecialType = [
  string,
  Deno.NativeType,
  (conv: string, imports: Set<string>) => string,
  boolean,
];

const SPECIAL_TYPES: Record<
  string,
  SpecialType
> = {
  "Windows.Win32.Foundation.PWSTR": [
    "PWSTRConvertible",
    "pointer",
    (v, imports) => {
      imports.add("PWSTR");
      return `new PWSTR(${v})`;
    },
    true,
  ],
  "Windows.Win32.Foundation.PSTR": [
    "PSTRConvertible",
    "pointer",
    (v, imports) => {
      imports.add("PSTR");
      return `new PSTR(${v})`;
    },
    true,
  ],
  "Windows.Win32.Foundation.BSTR": [
    "PSTRConvertible",
    "pointer",
    (v, imports) => {
      imports.add("PSTR");
      return `new PSTR(${v})`;
    },
    true,
  ],
  "Windows.Win32.Foundation.HRESULT": ["number", "i32", (v, _imports) => {
    return v;
  }, false],
  "Windows.Foundation.HResult": ["number", "i32", (v, _imports) => {
    return v;
  }, false],
  "System.Guid": ["GUID", "pointer", (v, imports) => {
    imports.add("GUID");
    return `new GUID(${v})`;
  }, false],
  "Windows.Win32.Foundation.LARGE_INTEGER": [
    "bigint",
    "pointer",
    (v, _imports) => {
      return v;
    },
    false,
  ],
  "Windows.Win32.Foundation.ULARGE_INTEGER": [
    "bigint",
    "pointer",
    (v, _imports) => {
      return `${v}.value`;
    },
    false,
  ],
  "Windows.Win32.Foundation.BOOL": ["boolean", "i32", (v, _imports) => {
    return `${v} !== 0`;
  }, false],
  "Windows.Win32.Foundation.FILETIME": [
    "bigint",
    "pointer",
    (v, _imports) => {
      return v;
    },
    false,
  ],
  "Windows.Win32.Foundation.HWND": [
    "bigint",
    "pointer",
    (v, _imports) => {
      return v;
    },
    false,
  ],
};

function jsify(name: string) {
  if (name === "var") {
    return `pVar`;
  } else if (name === "arguments") {
    return `pArguments`;
  } else return name;
}

function typeToFFI(ty: winmd.TypeId): Deno.NativeType {
  if (ty.type?.name) {
    const special = SPECIAL_TYPES[ty.type.name];
    if (special) {
      return special[1];
    }
  }

  if (ty.type?.isEnum) {
    return typeToFFI(ty.type.enumBaseType!);
  }

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
      return ty.base as Deno.NativeType;

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
    case "genericinst":
    case "szarray":
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

  processTypeId(
    typeId: winmd.TypeId,
    imports: Set<string>,
  ): string | SpecialType {
    let type = "any", generic: string | SpecialType | undefined;
    if (typeId.base === "void" || typeId.base === "string") {
      return typeId.base;
    } else if (typeId.base === "bool") {
      return "boolean";
    } else if (typeId.base === "byref" || typeId.base === "ptr") {
      imports.add("PointerConvertible");
      if (typeId.typeArg) {
        const str = this.processTypeId(typeId.typeArg, imports);
        if (str instanceof Array && str[3]) imports.add(str[0]);
        return `PointerConvertible<${str instanceof Array ? str[0] : str}>`;
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
      const special = SPECIAL_TYPES[typeId.type.name];
      if (special) return special;
      if (typeId.type.enumBaseType) {
        if (!this.#emitted.has(typeId.type.name)) {
          this.emitTypeDef(typeId.type);
        }
        return this.processTypeId(typeId.type.enumBaseType, imports) +
          ` /* ${getShortName(typeId.type.name)} */`;
      }
      imports.add(typeId.type.name);
      if (!this.#emitted.has(typeId.type.name)) {
        this.emitTypeDef(typeId.type);
      }
      return getShortName(typeId.type.name);
    }
    if (typeId.typeArg) generic = this.processTypeId(typeId.typeArg, imports);
    return type;
  }

  emitMethod(addr: number, method: winmd.Method, imports: Set<string>) {
    let source = `  ${
      method.name === ".ctor"
        ? "ctor"
        : method.name.replace("get_", "get").replace("put_", "set").replace(
          / +/g,
          "_",
        )
    }${
      method.parameters.length === 0
        ? "()"
        : `(\n${
          method.parameters.map((param) => {
            const ty = this.processTypeId(param.type, imports);
            if (ty instanceof Array && ty[3]) imports.add(ty[0]);
            return `    ${jsify(param.name)}: ${
              ty instanceof Array ? ty[0] : ty
            }${
              param.isOptional && typeToFFI(param.type) === "pointer"
                ? " | null"
                : ""
            },`;
          }).join("\n")
        }\n  )`
    }: ${
      method.returnType
        ? (() => {
          const proc = this.processTypeId(method.returnType.type, imports);
          if (proc instanceof Array) return proc[0];
          else return proc;
        })()
        : "void"
    } {\n`;
    const wrapComObject =
      method.returnType && typeToFFI(method.returnType.type) === "pointer" &&
        ["valuetype", "class"].includes(method.returnType.type.base)
        ? this.processTypeId(method.returnType.type, imports)
        : undefined;
    source += `    const result = this._getFunction(${addr}, {\n`;
    source += `      parameters: ["pointer", ${
      method.parameters.map((p) => `"${typeToFFI(p.type)}"`).join(", ")
    }],\n`;
    source += `      result: "${
      method.returnType ? typeToFFI(method.returnType.type) : "void"
    }",\n`;
    source += `    } as const)(this._ptr, ${
      method.parameters.map((e) => {
        if (e.type.type?.name === "Windows.Win32.Foundation.PWSTR") {
          imports.add("toPWSTR");
          return `toPWSTR(${jsify(e.name)})`;
        }
        if (
          e.type.type?.name === "Windows.Win32.Foundation.PSTR" ||
          e.type.type?.name === "Windows.Win32.Foundation.BSTR"
        ) {
          imports.add("toPSTR");
          return `toPSTR(${jsify(e.name)})`;
        }
        const ffi = typeToFFI(e.type);
        if (ffi === "pointer") {
          imports.add("toPointer");
          return `toPointer(${jsify(e.name)})`;
        } else return jsify(e.name);
      }).join(", ")
    });\n`;
    if (wrapComObject) {
      if (typeof wrapComObject === "string") {
        source += `    return new ${wrapComObject}(result);\n`;
      } else {
        source += `    return ${wrapComObject[2]("result", imports)};\n`;
      }
    } else {
      source += `    return result;\n`;
    }
    source += "  }";
    return source;
  }

  emitTypeDef(def: winmd.TypeDef) {
    if (this.#emitted.has(def.name)) {
      return;
    }

    const nameParts = def.name.split(".");
    if (nameParts.at(-2)?.includes("`")) nameParts.pop()!;

    this.#emitted.add(nameParts.join("."));

    const name = nameParts.at(-1)!;

    const imports = new Set<string>();
    if (!def.isEnum) imports.add("GUID");

    if (def.interfaces.length === 0 && !def.isEnum) {
      imports.add("COMObject");
    }

    if (!def.isEnum) {
      def.interfaces.forEach((iface) => {
        this.emitTypeDef(iface);
        imports.add(iface.name);
      });
    }

    let source = "";

    source += def.isEnum
      ? `export class ${name} {`
      : `export class ${name}${
        def.interfaces.length
          ? ` extends ${getShortName(def.interfaces[0].name)}`
          : " extends COMObject"
      } {\n`;

    if (!def.isEnum) {
      source += `  static GUID = GUID.fromString("${
        (def.guid ?? new GUID(new Uint8Array(16))).toString()
      }");\n\n`;

      source += `  [Symbol.for("COMObject.name")]() {\n`;
      source += `    return "${def.name}";\n`;
      source += `  }\n`;

      const iface = this.scope.typeDefs.find((e) =>
        getShortName(e.name) === "I" + name
      );
      if (iface) {
        imports.add("createInstance");
        imports.add(iface.name);
        source += "\n";
        source += `  static create() {\n`;
        source += `    return createInstance(this.GUID, ${iface.name.split(".")
          .pop()!});\n`;
        source += `  }\n`;
      }
    }

    if (def.isEnum && def.fields.length !== 0) {
      source += "\n";
      const base = def.enumBaseType!;
      const ty = this.processTypeId(base, imports);
      if (typeof ty !== "string" || !["number", "bigint"].includes(ty)) {
        throw new Error("Unsupported enum type");
      }
      source += def.fields.filter((e) =>
        e.name !== "value__"
      ).map((field, i) => {
        let k: number | bigint = i;
        if (field.pValue !== 0n) {
          const view = new Deno.UnsafePointerView(field.pValue);
          switch (base.base) {
            case "u8":
              k = view.getUint8();
              break;
            case "u16":
              k = view.getUint16();
              break;
            case "u32":
              k = view.getUint32();
              break;
            case "usize":
            case "u64":
              k = view.getBigUint64();
              break;
            case "i8":
              k = view.getInt8();
              break;
            case "i16":
              k = view.getInt16();
              break;
            case "i32":
              k = view.getInt32();
              break;
            case "isize":
            case "i64":
              k = view.getBigInt64();
              break;
            case "f32":
              k = view.getFloat32();
              break;
            case "f64":
              k = view.getFloat64();
              break;

            default:
              throw new Error("Unsupported enum type");
          }
        }
        return `  static ${field.name}: ${ty} = ${k};`;
      }).join("\n") + "\n";
    }

    if (def.methods.length !== 0) {
      source += "\n";
      source += def.methods
        .map((method, i) =>
          this.emitMethod(i + def.baseVtableAddr, method, imports)
        )
        .join("\n\n") + "\n";
    }

    source += "}\n";

    source = imports.size === 0
      ? source
      : `${
        [...imports].filter((e) => e !== def.name).map((e) => {
          if (e === "COMObject") {
            return `import { COMObject } from "${
              "../".repeat(nameParts.length)
            }com.ts";`;
          }
          if (e === "createInstance") {
            return `import { createInstance } from "${
              "../".repeat(nameParts.length)
            }com.ts";`;
          }
          if (e === "toPointer") {
            return `import { toPointer } from "${
              "../".repeat(nameParts.length)
            }com.ts";`;
          }
          if (e === "PointerConvertible") {
            return `import { PointerConvertible } from "${
              "../".repeat(nameParts.length)
            }com.ts";`;
          }
          if (e === "GUID") {
            return `import { GUID } from "${
              "../".repeat(nameParts.length)
            }guid.ts";`;
          }
          if (e === "PWSTR") {
            return `import { PWSTR } from "${
              "../".repeat(nameParts.length)
            }com.ts";`;
          }
          if (e === "PSTR") {
            return `import { PSTR } from "${
              "../".repeat(nameParts.length)
            }com.ts";`;
          }
          if (e === "PWSTRConvertible") {
            return `import { PWSTRConvertible } from "${
              "../".repeat(nameParts.length)
            }com.ts";`;
          }
          if (e === "PSTRConvertible") {
            return `import { PSTRConvertible } from "${
              "../".repeat(nameParts.length)
            }com.ts";`;
          }
          if (e === "toPWSTR") {
            return `import { toPWSTR } from "${
              "../".repeat(nameParts.length)
            }com.ts";`;
          }
          if (e === "toPSTR") {
            return `import { toPSTR } from "${
              "../".repeat(nameParts.length)
            }com.ts";`;
          }
          const parts = e.split(".").map((e) => e.split("`")[0]);
          const name = parts.pop()!;
          return `import { ${name} } from "${
            "../".repeat(nameParts.length - 1)
          }${parts.join("/")}/${name}.ts";`;
        }).join("\n")
      }\n\n${source}`;

    this.write(def.name, `/// Autogenerated: ${def.name}\n\n` + source);
  }

  emit(filter: (def: winmd.TypeDef) => boolean = () => true) {
    for (const def of this.scope.typeDefs) {
      if (filter(def)) {
        console.log("MAIN", def.name);
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

const scope = dispenser.openScope(
  // "C:\\WINDOWS\\system32\\WinMetadata\\Windows.UI.Xaml.winmd",
  "Windows.Win32.winmd",
);
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

emitter.emit((def) =>
  def.name.startsWith("Windows.Win32.UI.Shell.IFileOpenDialog") ||
  def.name.startsWith("Windows.Win32.UI.Input")
);

Deno.writeTextFileSync(
  "names.txt",
  scope.typeDefs.map((e) => e.name).join("\n"),
);

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
