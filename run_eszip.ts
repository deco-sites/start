import { runEsZip } from "./eszip_lib.ts";

await runEsZip(
  "out.eszip2",
  "https://denopkg.com/deco-sites/start@main/main.ts",
  "https://denopkg.com/deco-sites/start@main/deno.json",
);
