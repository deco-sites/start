/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { PageProps } from "$fresh/server.ts";
import Head from "../components/Head.tsx";
import { createLiveRoute } from "$live/live.tsx";
import GetStarted from "../components/GetStarted.tsx";

export const { handler, LiveRoute } = createLiveRoute((
  { url }: PageProps<any>,
) => (
  <>
    <Head url={url} title="Welcome to Live" />
    <GetStarted />
  </>
));
export default LiveRoute;
