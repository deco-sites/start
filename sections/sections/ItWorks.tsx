export interface Props {
  /**
   * @description The description of name.
   */
  name?: string;
}

export default function Section({ name = "Capy" }: Props) {
  return <div class="flex items-center justify-center h-screen text-[#18181B] text-6xl leading-10">{name}</div>;
}
