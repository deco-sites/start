import {
  dirname,
  fromFileUrl,
  join,
} from "https://deno.land/std@0.201.0/path/mod.ts";
import {
  load,
  LoadResponse,
} from "https://deno.land/x/eszip@v0.56.0/loader.ts";

import { build, Parser } from "https://deno.land/x/eszip@v0.56.0/mod.ts";

const write = async (path: string, content: string) => {
  try {
    await Deno.mkdir(dirname(path), { recursive: true });
    await Deno.writeTextFile(path, content);
  } catch (err) {
    console.log("err", err, path);
    // ignore
  }
};
const url2path = (url: string) => {
  return join(...(new URL(url).pathname.split("/").filter(Boolean)));
};

const extract = async (
  dest: string,
  parser: Parser,
  specifiers: string[],
  imports: Record<string, string>,
) => {
  for (const specifier of specifiers) {
    const module = await parser.getModuleSource(specifier);
    await write(join(dest, "source", url2path(specifier)), module);
    // Track import
    imports[specifier] = `./${url2path(specifier)}`;
  }
  // Write import map
  const importMap = JSON.stringify({ imports }, null, 2);
  await Deno.writeTextFile(
    join(dest, "source", "import_map.json"),
    importMap,
  );
};
interface ImportMap {
  imports: Record<string, string>;
}
const parseImportMap = (
  importMapUrl: string,
): Promise<Record<string, string>> => {
  const content = importMapUrl.startsWith("file:")
    ? Deno.readTextFile(fromFileUrl(importMapUrl))
    : fetch(importMapUrl).then((res) => res.text());
  return content.then((content) => JSON.parse(content).imports ?? {});
};
export const runEsZip = async (
  eszip: string,
  specifier: string,
  importMap: string,
) => {
  const [bytes, parser, imports] = await Promise.all([
    Deno.readFile(eszip),
    Parser.createInstance(),
    parseImportMap(importMap),
  ]);
  const specifiers = await parser.parseBytes(bytes);
  await parser.load();
  const tmpDir = await Deno.makeTempDir({ prefix: "esz" });
  try {
    // Extract
    await extract(
      tmpDir,
      parser,
      specifiers,
      imports,
    );
    const importMap = join(tmpDir, "source", "import_map.json");
    // Run
    const p = new Deno.Command("deno", {
      cwd: join(tmpDir, "source"),
      args: [
        "run",
        "-A",
        "--no-check",
        "--import-map",
        importMap,
        specifier,
      ],
    });
    const process = p.spawn();
    await process.output();
  } catch (err) {
    console.log(err);
  } finally {
    // Cleanup
    // await Deno.remove(tmpDir, { recursive: true });
  }
};
export const asFile = (filePath: string) => `file://${filePath}`;

const loader = async (specifier: string) => {
  if (specifier.startsWith("node:")) {
    const withoutNode = specifier.substring("node:".length);
    return load(`https://deno.land/std@0.177.1/node/${withoutNode}.ts`);
  }

  if (!specifier.startsWith("npm:")) {
    return load(specifier);
  }
  const withoutNpm = specifier.substring("npm:".length);
  const versionSeparator = withoutNpm.lastIndexOf("@");
  const nextSlash = withoutNpm.indexOf("/", versionSeparator);
  const renamedSpecifier = `https://cdn.jsdelivr.net/npm/${withoutNpm}${
    nextSlash === -1 ? "" : withoutNpm.substring(nextSlash)
  }/+esm`;
  const loadResponse = await load(renamedSpecifier);
  if (!loadResponse) {
    return {
      content: "",
      specifier,
      kind: "external",
    };
  }
  return loadResponse
    ? { ...loadResponse, specifier: renamedSpecifier }
    : loadResponse;
};

const cache: Record<string, Promise<LoadResponse | undefined>> = {};

export const buildEsZip = async (outfile: string, ...specifiers: string[]) => {
  const esZip = await build(
    specifiers,
    (specifier) => {
      return cache[specifier] ??= loader(specifier);
    },
    asFile(join(Deno.cwd(), "deno.json")),
  );
  await Deno.writeFile(outfile, esZip);
};
