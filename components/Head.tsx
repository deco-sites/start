import { asset, Head } from "$fresh/runtime.ts";
import { JSONSchema7 } from "https://esm.sh/v92/@types/json-schema@7.0.11/X-YS9yZWFjdDpwcmVhY3QvY29tcGF0CmQvcHJlYWN0QDEwLjEwLjY/index.d.ts";

export const schema: JSONSchema7 = {
  title: "SEO",
  type: "object",
  properties: {
    title: {
      title: "Title",
      type: "string",
    },
    description: {
      title: "Description",
      type: "string",
    },
    url: {
      title: "URL",
      type: "string",
    },
    imageUrl: {
      title: "Image URL",
      type: "string",
    },
  },
};

export interface HeadProps {
  title?: string;
  description?: string;
  url?: URL;
  imageUrl?: string;
  faviconUrl?: string;
  styleUrls?: string[];
  themeColor?: string;
}

export const defaultProps: HeadProps = {
  title: "Deco Live Template Site — edit this!",
  description: "A complete digital commerce experience platform.",
  url: new URL("https://deco.cx"),
  imageUrl: "https://via.placeholder.com/300",
  faviconUrl: "",
  styleUrls: [],
  themeColor: "#003232",
};

export default function HeadComponent(props: HeadProps) {
  const merged = { ...defaultProps, ...props };
  return (
    <Head>
      <title>{merged.title}</title>
      <meta name="theme-color" content={merged.themeColor}></meta>
      <meta name="description" content={merged.description} />
      <meta property="og:title" content={merged.title} />
      <meta property="og:description" content={merged.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={merged.url?.href} />
      <meta
        property="og:image"
        content={merged.imageUrl}
      />
      <link
        rel="shortcut icon"
        href={merged.faviconUrl}
        type="image/x-icon"
      >
      </link>

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
      </link>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
      </link>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
      </link>
      <link rel="manifest" href="/site.webmanifest"></link>
      <link rel="mask-icon" href="/safari-pinned-tab.svg" data-color="#003232">
      </link>
      <meta name="theme-color" content="#003232"></meta>
      <meta name="msapplication-TileColor" content="#003232"></meta>
      {merged.styleUrls?.map((styleUrl: string) => (
        <link rel="stylesheet" href={asset(styleUrl)}></link>
      ))}
    </Head>
  );
}
