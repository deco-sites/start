/** @jsx h */
import { h } from "preact";
import { createLiveHandler } from "$live/live.tsx";
import Head from "../components/Head.tsx";
import Layout from "../components/Layout.tsx";
import GetStarted from "../components/GetStarted.tsx";
import InspectVSCode from "../islands/InspectVSCode.tsx";

export const handler = createLiveHandler();

export default function Home() {
  return (
    <Layout>
      <Head />
      <GetStarted enableInspectVSCode={true} />
      <InspectVSCode />
    </Layout>
  );
}
