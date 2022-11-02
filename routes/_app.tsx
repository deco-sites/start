import { AppProps } from "$fresh/server.ts";
import Layout from "$start/components/Layout.tsx";

export default function App(props: AppProps) {
  return (
    <Layout>
      <props.Component />
    </Layout>
  );
}
