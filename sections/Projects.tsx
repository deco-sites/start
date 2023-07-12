export interface Props {
  title: string;
  projects: Array<{
    title: string;
    description?: string;
    href: string;
  }>;
}

export default function Projects({ title, projects }: Props) {
  return (
    <div class="flex justify-center items-center w-full">
      <div class="flex flex-col max-w-[800px]">
        <h1 class="text-xl">{title}</h1>
        <ul>
          {projects.map(({ title, description, href }) => (
            <a href={href} target="_blank">
              <li class="flex flex-col">
                <span>{title}</span>
                {description && <span>{description}</span>}
              </li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
}
