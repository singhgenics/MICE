import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { tracks } from "@/lib/data";
import { Reveal } from "@/components/reveal";

export function ProgramsSplit() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="font-display balance text-display-l text-text-on-paper">
              One team, two very different retreats.
            </h2>
          </Reveal>
          <Reveal delay={60}>
            <p className="pretty mt-4 max-w-xl text-lg leading-relaxed text-text-muted">
              Northeast India and Southeast Asia solve different problems. Pick the
              one that matches the objective, not the one that photographs best.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-[1.15fr_1fr]">
          {tracks.map((track, i) => (
            <Reveal key={track.slug} delay={i * 60}>
              <Link
                href={`/programs/${track.slug}`}
                className="group relative flex h-full min-h-[360px] flex-col justify-end overflow-hidden rounded-2xl lg:min-h-[460px]"
              >
                <Image
                  src={track.image}
                  alt={track.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="group-hover-zoom object-cover transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
                <div className="relative z-10 p-8">
                  <p className="label text-terracotta">{track.region}</p>
                  <div className="mt-2 flex items-start justify-between gap-4">
                    <h3 className="font-display text-2xl text-text-on-ink">
                      {track.program}
                    </h3>
                    <ArrowUpRight
                      size={22}
                      weight="light"
                      className="mt-1 shrink-0 text-text-on-ink transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-text-on-ink-muted">
                    {track.tagline}
                  </p>
                  <div className="mt-5 flex items-center gap-2 border-t border-line-on-ink pt-4">
                    <span className="font-mono tabular-nums text-lg text-text-on-ink">
                      {track.stat.value}
                    </span>
                    <span className="label text-text-on-ink-muted">{track.stat.label}</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
