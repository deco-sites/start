import { buildEsZip } from "./eszip_lib.ts";

const p = performance.now();
await buildEsZip(
  "out.eszip2",
  "https://denopkg.com/deco-sites/start@main/main.ts",
  "https://denopkg.com/deco-sites/start@main/deno.json",
);
console.log("took", performance.now() - p, "ms");
