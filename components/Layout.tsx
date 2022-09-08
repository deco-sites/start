export default function Layout(props: any) {
  return (
    <div class="min-h-screen bg-primary-light text-primary-dark">
      {props.children}
    </div>
  );
}
