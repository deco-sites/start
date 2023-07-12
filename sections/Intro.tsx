import type { Image as DecoImage } from "deco-sites/std/components/types.ts";
import type { HTML } from "deco-sites/std/components/HTMLRenderer.tsx";
import HTMLRenderer from "deco-sites/std/components/HTMLRenderer.tsx";

/** @title {{{title}}} - {{{href}}} */
export interface Link {
  title: string;
  href: string;
}

export interface Props {
  /** @description: Ex: "Software Engineer" */
  headline: string;
  /** @title Upload your photo */
  picture?: DecoImage;
  introduction: HTML;
  links?: Array<Link>;
}

export default function Intro({
  headline,
  picture,
  introduction,
  links,
}: Props) {
  return (
    <header class="pt-20 pb-32 flex justify-center items-center">
      <div class="flex flex-col gap-2 text-3xl">
        <h1 class="font-bold text-4xl">{headline}</h1>
        <img
          class="object-cover w-24 h-24 rounded-full"
          src={picture}
          alt={headline}
        />
        <HTMLRenderer html={introduction} />
        {!!links?.length && (
          <ul>
            {links.map(({ href, title }) => (
              <a href={href} aria-label={title}>
                <li>{title}</li>
              </a>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
}
