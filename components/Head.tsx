import { JSONSchema7 } from "https://esm.sh/v92/@types/json-schema@7.0.11/X-YS9yZWFjdDpwcmVhY3QvY29tcGF0CmQvcHJlYWN0QDEwLjEwLjY/index.d.ts";
import { NextSeo as NS } from "next-seo";
import type { NextSeoProps } from "next-seo";
import type { ComponentClass, h } from "preact";

const NextSeo = NS as ComponentClass<NextSeoProps>;

export const schema: JSONSchema7 = {
  title: "SEO",
  type: "object",
  required: ["url", "themeColor"],
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
      format: "uri",
    },
    imageUrl: {
      title: "Image URL",
      type: "string",
      format: "uri",
    },
    themeColor: {
      title: "Theme color",
      type: "string",
      pattern: "#[a-zA-Z0-9]{3,8}",
    },
    twitter: {
      title: "twitter",
      type: "object",
      properties: {
        cardType: {
          title: "Twitter Card type",
          type: "string",
        },
      },
    },
  },
};

export interface HeadProps extends NextSeoProps {
  title?: string;
  description?: string;
  url?: string;
  imageUrl?: string;
  faviconUrl?: string;
  themeColor?: string;
}

export default function HeadComponent(
  {
    title = "Deco Live Template Site - Edit this!",
    description =
      "A complete digital commerce experience platform. - Edit this!",
    url = "https://start.deco.page",
    imageUrl = "https://via.placeholder.com/300",
    faviconUrl = "",
    themeColor = "#003232",
    ...otherProps
  }: HeadProps,
) {
  return (
    <NextSeo
      title={title}
      description={description}
      openGraph={{
        type: "website",
        url: url,
        images: [{ url: imageUrl }],
        ...(otherProps.openGraph ?? {}),
      }}
      canonical={url}
      additionalMetaTags={otherProps?.additionalMetaTags ?? [
        {
          name: "theme-color",
          content: themeColor,
        },
        {
          name: "msapplication-TileColor",
          content: themeColor,
        },
      ]}
      additionalLinkTags={otherProps?.additionalLinkTags ?? [{
        rel: "shortcut icon",
        href: faviconUrl,
        type: "image/x-icon",
      }, {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      }, {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      }, {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      }, {
        rel: "mask-icon",
        href: "/safari-pinned-tab.svg",
        color: themeColor,
      }]}
      twitter={otherProps.twitter}
    />
  );
}
