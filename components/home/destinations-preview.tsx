import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { destinations } from "@/lib/data";
import { ConvergenceLine } from "@/components/convergence-line";
import { Reveal } from "@/components/reveal";
import { DragScroll } from "@/components/drag-scroll";

export function DestinationsPreview() {
  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal className="max-w-xl">
            <h2 className="font-display balance text-display-l text-text-on-ink">
              Five destinations, none of them interchangeable.
            </h2>
          </Reveal>
          <Reveal delay={60}>
            <Link
              href="/destinations"
              className="group inline-flex items-center gap-2 text-sm font-medium text-brass"
            >
              View all destinations
              <ArrowRight
                size={16}
                weight="bold"
                className="transition-transform duration-150 ease-out group-hover:translate-x-0.5"
              />
            </Link>
          </Reveal>
        </div>

        <DragScroll className="mt-12 -mx-6 md:-mx-10 pb-4">
          <div className="flex snap-x snap-mandatory gap-5 px-6 md:px-10">
            {destinations.map((d, i) => (
              <Reveal key={d.slug} delay={i * 50} className="snap-start shrink-0">
                <Link
                  href={`/destinations#${d.slug}`}
                  draggable={false}
                  className="group block w-[280px] sm:w-[340px] rounded-2xl border border-line-on-ink overflow-hidden bg-ink-2"
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={`https://picsum.photos/seed/${d.imageSeed}/700/560`}
                      alt=""
                      fill
                      draggable={false}
                      sizes="340px"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <p className="label text-text-on-ink-muted">{d.region}</p>
                    <h3 className="font-display mt-1.5 text-xl text-text-on-ink">{d.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-on-ink-muted">
                      {d.tagline}
                    </p>
                    <div className="mt-5 flex items-center gap-3 border-t border-line-on-ink pt-4">
                      <ConvergenceLine variant="data" className="h-6 w-10 shrink-0" />
                      <div>
                        <p className="font-mono tabular-nums text-sm text-text-on-ink">
                          {d.stats[0].value}
                        </p>
                        <p className="label text-text-on-ink-muted">{d.stats[0].label}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </DragScroll>
      </div>
    </section>
  );
}
