/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";
import Layout from "../components/Layout.tsx";
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
    <Layout>
      <Head url={url} title="Live loader example" />
      <span>{JSON.stringify(data)}</span>
    </Layout>
  ),
});
export default LivePage;
