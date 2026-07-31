import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/page-hero";
import { TrailLine } from "@/components/trail-line";
import { Reveal } from "@/components/reveal";
import { tracks, bookingShare } from "@/lib/data";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Northeast India for deep focus retreats and Southeast Asia for scale summits. Two MICE tracks, fifteen cities, one delivery team.",
};

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        title="Two tracks. Fifteen cities. No leisure detours."
        lede="Every city on this page is chosen for a reason a corporate planner would recognize, not for a postcard. Pick the track that matches the objective, then let the delivery team handle the rest."
      />

      <section className="bg-paper py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 space-y-20 md:space-y-28">
          {tracks.map((track, i) => (
            <div key={track.slug} id={track.slug} className="scroll-mt-28">
              <Reveal>
                <div
                  className={`grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 ${
                    i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative h-72 overflow-hidden rounded-2xl lg:h-[420px]">
                    <Image
                      src={`https://picsum.photos/seed/${track.imageSeed}/1000/900`}
                      alt=""
                      fill
                      priority={i === 0}
                      sizes="(min-width: 1024px) 45vw, 100vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-col justify-center">
                    <p className="label text-text-muted">{track.region}</p>
                    <h2 className="font-display balance mt-3 text-display-s text-text-on-paper">
                      {track.program}
                    </h2>
                    <p className="mt-2 text-lg text-text-muted">{track.tagline}</p>
                    <p className="pretty mt-5 max-w-lg leading-relaxed text-text-muted">
                      {track.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {track.cities.map((city) => (
                        <span
                          key={city}
                          className="rounded-full border border-line px-3.5 py-1.5 text-sm text-text-on-paper"
                        >
                          {city}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 flex items-center gap-3 border-t border-line pt-6">
                      <TrailLine variant="data" className="h-6 w-10 shrink-0" />
                      <div>
                        <p className="font-mono tabular-nums text-xl text-text-on-paper">
                          {track.stat.value}
                        </p>
                        <p className="label text-text-muted">{track.stat.label}</p>
                      </div>
                    </div>

                    <Link
                      href={`/programs/${track.slug}`}
                      className="group mt-7 inline-flex w-fit items-center gap-2 text-sm font-medium text-terracotta-strong"
                    >
                      See the full {track.region} program
                      <ArrowRight
                        size={16}
                        weight="bold"
                        className="transition-transform duration-150 ease-out group-hover:translate-x-0.5"
                      />
                    </Link>
                  </div>
                </div>
              </Reveal>

              {i < tracks.length - 1 ? (
                <div className="mt-20 flex justify-center opacity-70 md:mt-28">
                  <TrailLine variant="divider" className="h-8 w-32" />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-paper-2 py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal className="max-w-xl">
            <h2 className="font-display balance text-display-s text-text-on-paper">
              Where the last twelve months of trips went
            </h2>
            <p className="pretty mt-3 leading-relaxed text-text-muted">
              Booking share by destination, FY25 to 26.
            </p>
          </Reveal>

          <div className="mt-10 space-y-5">
            {bookingShare.map((row, i) => (
              <Reveal key={row.destination} delay={i * 50}>
                <div>
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-sm font-medium text-text-on-paper">
                      {row.destination}
                    </span>
                    <span className="font-mono tabular-nums text-sm text-text-muted">
                      {row.share}%
                    </span>
                  </div>
                  <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-paper">
                    <div
                      className="h-full rounded-full bg-terracotta"
                      style={{ width: `${row.share}%` }}
                    />
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
