import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { pillars } from "@/lib/data";
import { Reveal } from "@/components/reveal";

const spans: Record<string, string> = {
  meetings: "lg:col-start-1 lg:row-start-1",
  incentives: "lg:col-start-2 lg:row-start-1",
  conferences: "lg:col-start-1 lg:row-start-2",
  exhibitions: "lg:col-start-2 lg:row-start-2",
};

export function ServicesBento() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="font-display balance text-[clamp(2rem,2.5vw+1rem,3.25rem)] leading-[1.05] tracking-[-0.025em] text-text-on-paper">
              Four ways an event converges here.
            </h2>
          </Reveal>
          <Reveal delay={60}>
            <p className="pretty mt-4 max-w-xl text-lg leading-relaxed text-text-muted">
              Meetings, Incentives, Conferences, Exhibitions — the same destinations,
              built out differently depending on what your event actually needs.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-[1.3fr_1fr] lg:grid-rows-[340px_420px]">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.slug} delay={i * 60} className={spans[pillar.slug]}>
              <Link
                href={`/services/${pillar.slug}`}
                className="group relative flex h-full min-h-[280px] flex-col justify-end overflow-hidden rounded-2xl"
              >
                <Image
                  src={`https://picsum.photos/seed/${pillar.imageSeed}/1000/900`}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
                <div className="relative z-10 p-7">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-2xl text-text-on-ink">{pillar.name}</h3>
                    <ArrowUpRight
                      size={20}
                      weight="light"
                      className="text-text-on-ink transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-text-on-ink-muted">
                    {pillar.short}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
