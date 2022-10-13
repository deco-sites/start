import { JSONSchema7 } from "https://esm.sh/v92/@types/json-schema@7.0.11/X-YS9yZWFjdDpwcmVhY3QvY29tcGF0CmQvcHJlYWN0QDEwLjEwLjY/index.d.ts";
import { MyAPIData } from "../loaders/jsonPlaceholder.ts";

export const schema: JSONSchema7 = {
  title: "JsonPlaceholder",
  type: "object",
  properties: {
    data: {
      $ref: "jsonplaceholder",
    },
  },
};

interface Props {
  data: MyAPIData;
}

export default function JsonPlaceholder({ data }: Props) {
  return <span>{JSON.stringify(data)}</span>;
}
