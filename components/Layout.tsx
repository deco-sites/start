import { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
}

export default function Layout(props: Props) {
  return (
    <div class="min-h-screen bg-primary text-primary">
      {props.children}
    </div>
  );
}
