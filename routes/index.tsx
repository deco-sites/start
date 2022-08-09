/** @jsx h */

import { h } from "preact";
import { createLivePage } from "$live/live.tsx";
import Head from "../components/Head.tsx";
import Layout from "../components/Layout.tsx";
import GetStarted from "../components/GetStarted.tsx";

export const { handler, LivePage } = createLivePage({
  render: () => (
    <Layout>
      <Head />
      <GetStarted />
    </Layout>
  ),
});

export default LivePage;
