/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";
import { createLiveHandler } from "$live/live.tsx";
import Head from "../components/Head.tsx";
import Layout from "../components/Layout.tsx";
import GetStarted from "../components/GetStarted.tsx";

export const handler = createLiveHandler();

export default function Start({ url }: PageProps<any>) {
  return (
    <Layout>
      <Head url={url} title="Welcome to Live" />
      <GetStarted />
    </Layout>
  );
}
