import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { venues } from "@/lib/data";

export const metadata: Metadata = {
  title: "Venues",
  description:
    "Convention centres, congress halls, and exhibition districts across Confluence's destinations — named rooms, published capacities, no theoretical maximums.",
};

export default function VenuesPage() {
  return (
    <>
      <PageHero
        eyebrow="Venues"
        title="Named rooms, published capacities."
        lede="Every venue we recommend has a real clear-span number, a real breakout count, and a real name — not a theoretical maximum that assumes empty corridors."
      />

      <section className="bg-paper py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 space-y-6">
          {venues.map((v, i) => (
            <Reveal key={v.slug} delay={i * 50}>
              <div className="group grid grid-cols-1 overflow-hidden rounded-2xl border border-line bg-paper md:grid-cols-[0.9fr_1.1fr]">
                <div className="relative h-56 md:h-full">
                  <Image
                    src={`https://picsum.photos/seed/${v.imageSeed}/900/700`}
                    alt=""
                    fill
                    priority={i === 0}
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 md:p-10">
                  <p className="label text-text-muted">
                    {v.type} · {v.destination}
                  </p>
                  <h2 className="font-display mt-2 text-2xl text-text-on-paper md:text-3xl">
                    {v.name}
                  </h2>
                  <p className="pretty mt-3 max-w-lg leading-relaxed text-text-muted">
                    {v.description}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
                    <p className="font-mono text-sm text-text-on-paper">{v.capacity}</p>
                    <Link
                      href="/contact"
                      className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-brass-strong"
                    >
                      Check availability
                      <ArrowRight
                        size={14}
                        weight="bold"
                        className="transition-transform duration-150 ease-out group-hover/link:translate-x-0.5"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
