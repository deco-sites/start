import { createLiveHandler, LivePage, LivePageData } from "$live/live.tsx";
import Layout from "../components/Layout.tsx";
import type { PageProps } from "$fresh/server.ts";

export const handler = createLiveHandler();

export default function Home(props: PageProps<LivePageData>) {
  return (
    <Layout>
      <LivePage {...props} />
    </Layout>
  );
}
