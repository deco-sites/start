/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";
import { createLivePage } from "$live/live.tsx";
import Head from "../components/Head.tsx";
import Layout from "../components/Layout.tsx";
import GetStarted from "../components/GetStarted.tsx";

export const { handler, LivePage } = createLivePage({
  render: ({ url }: PageProps<any>) => (
    <Layout>
      <Head url={url} title="Welcome to Live" />
      <GetStarted />
    </Layout>
  ),
});
export default LivePage;
