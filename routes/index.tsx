/** @jsx h */
import { h } from "preact";
import { createLivePage } from "$live/live.tsx";
import GetStarted from "../components/GetStarted.tsx";

export const { handler, LivePage } = createLivePage({
  render: () => <GetStarted />,
});
export default LivePage;
