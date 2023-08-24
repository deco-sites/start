import PoweredByDeco from "deco-sites/std/components/PoweredByDeco.tsx";

export default function Footer() {
    return (
        <div class="lg:container py-4 mx-8 md:mx-16 lg:mx-auto flex justify-center items-center gap-2">
            <span>Powered by</span> <PoweredByDeco width={76} />
        </div>
    )
}