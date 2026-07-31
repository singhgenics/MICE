import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { tracks } from "@/lib/data";

export function generateStaticParams() {
  return tracks.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const track = tracks.find((t) => t.slug === slug);
  if (!track) return {};
  return {
    title: track.program,
    description: track.tagline,
  };
}

export default async function ProgramPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const track = tracks.find((t) => t.slug === slug);
  if (!track) notFound();

  const otherTrack = tracks.find((t) => t.slug !== slug)!;

  return (
    <>
      <PageHero title={track.hero} lede={track.description} />

      <section className="bg-paper py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <Reveal>
              <div className="relative h-72 overflow-hidden rounded-2xl lg:h-full lg:min-h-[420px]">
                <Image
                  src={`https://picsum.photos/seed/${track.imageSeed}-detail/1000/1100`}
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
                  <span className="font-mono tabular-nums text-2xl text-text-on-paper">
                    {track.stat.value}
                  </span>
                  <span className="label text-text-muted">{track.stat.label}</span>
                </div>
              </Reveal>

              <div className="mt-8 space-y-8">
                {track.experiences.map((point, i) => (
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
                <div className="mt-8 rounded-xl bg-paper-2 p-5">
                  <p className="label text-terracotta-strong">The Frontier Tourism advantage</p>
                  <p className="pretty mt-2 text-sm leading-relaxed text-text-muted">
                    {track.advantage}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={260}>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-text-on-ink transition-[background-color,transform] duration-150 ease-out hover:bg-ink-2 active:scale-[0.97]"
                >
                  Request a proposal for {track.region}
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
            <h2 className="font-display balance text-display-s text-text-on-paper">
              Cities on the {track.region} track
            </h2>
          </Reveal>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {track.cities.map((city, i) => (
              <Reveal key={city} delay={i * 30}>
                <span className="inline-flex rounded-full border border-line bg-paper px-4 py-2 text-sm text-text-on-paper">
                  {city}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="label text-text-on-ink-muted">The other track</p>
          <div className="mt-6">
            <Link
              href={`/programs/${otherTrack.slug}`}
              className="group inline-flex items-center gap-2 rounded-full border border-line-on-ink px-5 py-2.5 text-sm text-text-on-ink transition-colors duration-150 hover:border-terracotta hover:text-terracotta"
            >
              {otherTrack.program}
              <ArrowUpRight size={14} weight="bold" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
