/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { createLivePage } from "$live/live.tsx";
import Head from "../components/Head.tsx";
import GetStarted from "../components/GetStarted.tsx";

export const { handler, LivePage } = createLivePage({
  render: () => (
    <>
      <Head />
      <GetStarted />,
    </>
  ),
});
export default LivePage;
