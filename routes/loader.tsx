import { PageProps } from "$fresh/server.ts";
import Layout from "../components/Layout.tsx";
import Head from "../components/Head.tsx";
import {
  createLiveHandler,
  LiveComponents,
  LivePage,
  LivePageData,
} from "$live/live.tsx";

export const handler = createLiveHandler();

export default function LoaderPage(
  props: PageProps<LivePageData>,
) {
  return (
    <LivePage {...props}>
      <Layout>
        <Head url={props.url} title="Live loader example" />
        <LiveComponents {...props.data} />
      </Layout>
    </LivePage>
  );
}
