import { MetaDataDispenser } from "./mod.ts";

const dispenser = new MetaDataDispenser();
const scope = dispenser.openScope("Windows.Win32.winmd");

const td = scope.typeDefs.find((e) =>
  e.name === "Windows.Win32.UI.Shell.IFileDialog"
)!;

console.log(
  td.isInterface ? "interface" : "class",
  `${td.name}${
    td.interfaces.length
      ? ` implements ${td.interfaces.map((e) => e.name).join(", ")} `
      : ""
  }`,
  "{",
);

if (td.fields.length) {
  console.log(
    td.fields.map((field) => `  ${field.type.name} ${field.name};`).join("\n"),
  );
}

if (td.methods.length) {
  console.log(
    td.methods.map((method) => {
      return `  ${method.isStatic ? "static " : ""}${
        method.returnType?.type ?? "void"
      } ${method.name}(${
        method.parameters.map((param) => {
          return `${param.isOut ? "out " : ""}${param.type} ${param.name}`;
        }).join(", ")
      });`;
    }).join("\n"),
  );
}

console.log("}");
