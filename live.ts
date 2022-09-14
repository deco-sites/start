import manifest from "./deco.gen.ts";
import { start } from "$live/server.ts";
import stylesPlugin from "$live/plugins/styles.ts";
import twindPlugin from "$fresh/plugins/twind.ts";
import twindConfig from "./twind.config.ts";

await start(manifest, {
  site: "start",
  domains: ["start.deco.cx", "golive.deno.dev"],
  plugins: [
    stylesPlugin(),
    twindPlugin(twindConfig),
  ],
});
