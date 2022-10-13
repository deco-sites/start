import { Loader } from "$live/types.ts";

export interface MyAPIData {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default {
  inputSchema: {},
  outputSchema: {
    $ref: "jsonplaceholder",
  },
  loader: async () => {
    return await fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json()).then((data) => ({ data }));
  },
} as Loader;
