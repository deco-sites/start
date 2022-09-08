import { PageProps } from "$fresh/server.ts";
import Layout from "../components/Layout.tsx";
import Head from "../components/Head.tsx";
import { createLiveHandler } from "$live/live.tsx";

export interface MyAPIData {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const handler = createLiveHandler<MyAPIData>({
  loader: async () => {
    return await fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json());
  },
});
export default function Loader({ url, data }: PageProps<MyAPIData>) {
  return (
    <Layout>
      <Head url={url} title="Live loader example" />
      <span>{JSON.stringify(data)}</span>
    </Layout>
  );
}
