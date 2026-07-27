import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { pillars, destinations } from "@/lib/data";

export function generateStaticParams() {
  return pillars.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pillar = pillars.find((p) => p.slug === slug);
  if (!pillar) return {};
  return {
    title: pillar.name,
    description: pillar.short,
  };
}

export default async function PillarPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pillar = pillars.find((p) => p.slug === slug);
  if (!pillar) notFound();

  const otherPillars = pillars.filter((p) => p.slug !== slug);
  const featuredDestinations = destinations.slice(0, 3);

  return (
    <>
      <PageHero eyebrow={`Services / ${pillar.name}`} title={pillar.hero} lede={pillar.short} />

      <section className="bg-paper py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <Reveal>
              <div className="relative h-72 overflow-hidden rounded-2xl lg:h-full lg:min-h-[420px]">
                <Image
                  src={`https://picsum.photos/seed/${pillar.imageSeed}-detail/1000/1100`}
                  alt=""
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <div>
              <Reveal>
                <div className="inline-flex items-center gap-3 rounded-xl border border-line px-5 py-4">
                  <span className="font-mono text-2xl text-text-on-paper">
                    {pillar.stat.value}
                  </span>
                  <span className="label text-text-muted">{pillar.stat.label}</span>
                </div>
              </Reveal>

              <div className="mt-8 space-y-8">
                {pillar.points.map((point, i) => (
                  <Reveal key={point.title} delay={i * 60}>
                    <div className="border-t border-line pt-6">
                      <h2 className="font-display text-xl text-text-on-paper">
                        {point.title}
                      </h2>
                      <p className="pretty mt-2 leading-relaxed text-text-muted">
                        {point.body}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={200}>
                <Link
                  href="/contact"
                  className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-text-on-ink transition-all duration-150 ease-out hover:bg-ink-2 active:scale-[0.97]"
                >
                  Request a {pillar.name.toLowerCase()} proposal
                  <ArrowRight size={16} weight="bold" />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper-2 py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal className="max-w-xl">
            <h2 className="font-display balance text-[clamp(1.75rem,2vw+1rem,2.5rem)] leading-tight tracking-[-0.02em] text-text-on-paper">
              Where {pillar.name.toLowerCase()} run best
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {featuredDestinations.map((d, i) => (
              <Reveal key={d.slug} delay={i * 50}>
                <Link
                  href={`/destinations#${d.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-line bg-paper"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={`https://picsum.photos/seed/${d.imageSeed}/700/500`}
                      alt=""
                      fill
                      sizes="(min-width: 640px) 30vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <p className="label text-text-muted">{d.region}</p>
                    <h3 className="font-display mt-1 text-lg text-text-on-paper">{d.name}</h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="label text-text-on-ink-muted">Other services</p>
          <div className="mt-6 flex flex-wrap gap-4">
            {otherPillars.map((p) => (
              <Link
                key={p.slug}
                href={`/services/${p.slug}`}
                className="group inline-flex items-center gap-2 rounded-full border border-line-on-ink px-5 py-2.5 text-sm text-text-on-ink transition-colors duration-150 hover:border-brass hover:text-brass"
              >
                {p.name}
                <ArrowUpRight size={14} weight="bold" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
