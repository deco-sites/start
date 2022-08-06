import manifest from "./deco.gen.ts";
import { start } from "$live/server.ts";

await start(manifest, {
  site: "start",
  domains: ["start.deco.cx", "golive.deno.dev"],
});
