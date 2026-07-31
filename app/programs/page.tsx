import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { tracks, impactMatrix } from "@/lib/data";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "The Digital Detox and Deep Work Retreat in Northeast India, and the Hybrid Scale and Innovation Summit in Southeast Asia. Two named MICE programs, matched to a real objective.",
};

const quadrantStyles: Record<string, string> = {
  "northeast-india": "border-terracotta/40",
  "southeast-asia": "border-line",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        title="Two named programs, not a menu of add ons."
        lede="Each track was built around a specific corporate objective, not a generic itinerary with a logo swapped in. Use the matrix below if you are not sure which one fits."
      />

      <section className="bg-paper py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {tracks.map((track, i) => (
              <Reveal key={track.slug} delay={i * 60}>
                <Link
                  href={`/programs/${track.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-paper"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={track.image}
                      alt={track.imageAlt}
                      fill
                      priority={i === 0}
                      sizes="(min-width: 768px) 45vw, 100vw"
                      className="group-hover-zoom object-cover transition-transform duration-700 ease-out"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <p className="label text-text-muted">{track.region}</p>
                    <div className="mt-2 flex items-start justify-between gap-4">
                      <h2 className="font-display text-2xl text-text-on-paper">
                        {track.program}
                      </h2>
                      <ArrowUpRight
                        size={20}
                        weight="light"
                        className="mt-1 shrink-0 text-text-muted transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-terracotta-strong"
                      />
                    </div>
                    <p className="pretty mt-3 flex-1 leading-relaxed text-text-muted">
                      {track.tagline}
                    </p>
                    <div className="mt-6 flex items-center gap-2 border-t border-line pt-4">
                      <span className="font-mono tabular-nums text-lg text-text-on-paper">
                        {track.stat.value}
                      </span>
                      <span className="label text-text-muted">{track.stat.label}</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper-2 py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal className="max-w-xl">
            <p className="label text-text-muted">The retreat matrix</p>
            <h2 className="font-display balance mt-3 text-display-s text-text-on-paper">
              Match the objective first, the destination second.
            </h2>
            <p className="pretty mt-3 leading-relaxed text-text-muted">
              Before booking a single flight, name the primary objective. The
              track follows from that, not the other way around.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {impactMatrix.map((q, i) => (
              <Reveal key={q.objective} delay={i * 50}>
                <div
                  className={`h-full rounded-2xl border bg-paper p-6 ${quadrantStyles[q.track]}`}
                >
                  <p className="label text-terracotta-strong">{q.objective}</p>
                  <p className="pretty mt-2 text-sm leading-relaxed text-text-muted">
                    {q.focus}
                  </p>
                  <div className="mt-5 border-t border-line pt-4">
                    <p className="text-sm font-medium text-text-on-paper">{q.trackLabel}</p>
                    <p className="mt-1 text-sm text-text-muted">{q.cities}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
