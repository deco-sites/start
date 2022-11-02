import manifest from "./deco.gen.ts";
import { start } from "$live/server.ts";
import stylesPlugin from "$live/plugins/styles.ts";
import twindPlugin from "$fresh/plugins/twind.ts";
import twindConfig from "$start/twind.config.ts";

await start(manifest, {
  site: "start",
  siteId: 8,
  plugins: [
    stylesPlugin(),
    twindPlugin({
      selfURL: new URL("./twind.config.ts", import.meta.url).href,
      ...twindConfig,
    }),
  ],
});
