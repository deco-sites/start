export interface Props {
  /**
   * @description The description of name.
   */
  name?: string;
}

export default function Section({ name = "It Works!" }: Props) {
  return (
    <div class="flex h-96 items-center justify-center">
      <p class="leading-10 text-6xl">{name}</p>
    </div>
  );
}
