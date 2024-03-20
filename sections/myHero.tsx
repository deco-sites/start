interface Props {
  /**
  * @description The description of name.
  */
  name?: string;
}

export default function Section({ name = "Capy" }: Props) {
  return <div class="flex justify-center bg-green-200">It {name}</div>
}