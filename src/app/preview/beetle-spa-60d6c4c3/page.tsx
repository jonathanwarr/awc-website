import { Archivo } from "next/font/google";
import { previewMetadata } from "./_components/business";

export const metadata = previewMetadata(
  "Beetle Spa homepage concepts",
  "Two homepage concepts for Beetle Spa, North Vancouver."
);

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
});

const concepts = [
  {
    href: "/preview/beetle-spa-60d6c4c3/a",
    tag: "Concept A",
    name: "Workshop",
    body: "Warm and approachable, with a light and dark mode toggle.",
  },
  {
    href: "/preview/beetle-spa-60d6c4c3/b",
    tag: "Concept B",
    name: "Technical Index",
    body: "Precise and editorial, built around a numbered service index.",
  },
];

/* Plain <a> links: a full page load lets Concept A apply its saved theme before paint. */
export default function BeetleSpaPreviewIndex() {
  return (
    <main
      className={`bs-root ${archivo.className} box-border flex w-full flex-1 bg-[#F7F6F3] text-base leading-normal text-[#16181B]`}
    >
      <div className="mx-auto box-border flex w-full max-w-[880px] flex-col gap-10 px-5 py-16 md:px-10 md:py-24">
        <div className="flex flex-col gap-4">
          <p className="m-0 flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.14em] text-[#8F6210]">
            <span className="inline-block h-3 w-3 rounded-full bg-[#E8B04B]" aria-hidden="true" />
            Beetle Spa
          </p>
          <h1 className="m-0 text-[clamp(36px,7vw,52px)] font-extrabold leading-[1.05] tracking-[-0.02em]">
            Two homepage concepts
          </h1>
          <p className="m-0 max-w-[560px] text-lg leading-[1.6] text-[#4A4E54]">
            Same content, two directions. Text in [square brackets] is a
            placeholder for details to confirm with the shop.
          </p>
        </div>
        <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-5 p-0">
          {concepts.map((concept) => (
            <li key={concept.href}>
              <a
                href={concept.href}
                className="flex h-full flex-col gap-3 rounded-[6px] border border-[#E2E0DB] bg-white p-7 text-[#16181B] no-underline transition-colors hover:border-[#CFCCC6]"
              >
                <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#8F6210]">
                  {concept.tag}
                </span>
                <h2 className="m-0 text-2xl font-bold">{concept.name}</h2>
                <p className="m-0 text-base leading-[1.55] text-[#4A4E54]">{concept.body}</p>
                <span className="mt-auto pt-2 text-base font-semibold">View concept →</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
