import { processFile } from "../mod.ts";

for await (
  const { name, isFile } of Deno.readDir(
    new URL("../metadata", import.meta.url),
  )
) {
  if (!isFile || !name.endsWith(".winmd")) continue;
  console.log(`Processing ${name}...`);
  await Deno.writeTextFile(
    new URL(`../metadata/${name.replace(".winmd", ".json")}`, import.meta.url),
    JSON.stringify(
      processFile(new URL(`../metadata/${name}`, import.meta.url)),
      null,
      2,
    ),
  );
}
