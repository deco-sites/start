/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { PageProps } from "$fresh/server.ts";
import Head from "../components/Head.tsx";
import { createLivePage } from "$live/live.tsx";

export interface MyAPIData {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const { handler, LivePage } = createLivePage<MyAPIData>({
  loader: async () => {
    return await fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json());
  },
  render: ({ url, data }: PageProps<MyAPIData>) => (
    <>
      <Head url={url} title="Live loader example" />
      <span>{JSON.stringify(data)}</span>
    </>
  ),
});
export default LivePage;
