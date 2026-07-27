import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/page-hero";
import { ConvergenceLine } from "@/components/convergence-line";
import { Reveal } from "@/components/reveal";
import { destinations } from "@/lib/data";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Five MICE destinations, each built around a different reason to travel — from harbor-city plenaries to alpine leadership retreats.",
};

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        title="Five destinations, none of them interchangeable."
        lede="Every destination on Confluence earns its place for a specific reason — a skyline, a ridge line, a freight tunnel. Pick the reason that matches your brief, not just the capacity number."
      />

      <section className="bg-paper py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 space-y-20 md:space-y-28">
          {destinations.map((d, i) => (
            <div key={d.slug} id={d.slug} className="scroll-mt-28">
              <Reveal>
                <div
                  className={`grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 ${
                    i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative h-72 overflow-hidden rounded-2xl lg:h-[420px]">
                    <Image
                      src={`https://picsum.photos/seed/${d.imageSeed}/1000/900`}
                      alt=""
                      fill
                      priority={i === 0}
                      sizes="(min-width: 1024px) 45vw, 100vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-col justify-center">
                    <p className="label text-text-muted">{d.region}</p>
                    <h2 className="font-display balance mt-3 text-display-s text-text-on-paper">
                      {d.name}
                    </h2>
                    <p className="mt-2 text-lg text-text-muted">{d.tagline}</p>
                    <p className="pretty mt-5 max-w-lg leading-relaxed text-text-muted">
                      {d.description}
                    </p>

                    <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-line pt-6 sm:grid-cols-4">
                      {d.stats.map((s) => (
                        <div key={s.label}>
                          <p className="font-mono tabular-nums text-xl text-text-on-paper">{s.value}</p>
                          <p className="label mt-1 text-text-muted">{s.label}</p>
                        </div>
                      ))}
                    </div>

                    <Link
                      href="/contact"
                      className="group mt-8 inline-flex w-fit items-center gap-2 text-sm font-medium text-brass-strong"
                    >
                      Request a proposal for {d.name}
                      <ArrowRight
                        size={16}
                        weight="bold"
                        className="transition-transform duration-150 ease-out group-hover:translate-x-0.5"
                      />
                    </Link>
                  </div>
                </div>
              </Reveal>

              {i < destinations.length - 1 ? (
                <div className="mt-20 flex justify-center opacity-70 md:mt-28">
                  <ConvergenceLine variant="divider" className="h-8 w-56" />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
