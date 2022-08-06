/** @jsx h */
import { h } from "preact";
import { createLiveRoute } from "$live/live.tsx";
import GetStarted from "../components/GetStarted.tsx";

export const { handler, LiveRoute } = createLiveRoute(() => <GetStarted />);
export default LiveRoute;
