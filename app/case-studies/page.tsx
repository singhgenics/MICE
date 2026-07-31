import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Quotes, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { caseStudies, testimonials } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Four companies, four real MICE trips delivered by Frontier Tourism, plus client testimonials in their own words.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        title="What actually happened, with the dates attached."
        lede="Every entry below is a real trip Frontier Tourism delivered, named client and all. No placeholder detail, no invented numbers."
      />

      <section className="bg-paper py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 space-y-16">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.slug} delay={i * 40}>
              <article
                className={`grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative h-72 overflow-hidden rounded-2xl lg:h-[380px]">
                  <Image
                    src={`https://picsum.photos/seed/${cs.imageSeed}/1000/850`}
                    alt=""
                    fill
                    priority={i === 0}
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="label text-text-muted">
                    {cs.client} · {cs.destination}
                  </p>
                  <h2 className="font-display balance mt-3 text-display-s text-text-on-paper">
                    {cs.headline}
                  </h2>
                  <p className="pretty mt-4 max-w-lg leading-relaxed text-text-muted">
                    {cs.summary}
                  </p>
                  <div className="mt-7 flex flex-wrap gap-x-10 gap-y-4 border-t border-line pt-6">
                    {cs.stats.map((s) => (
                      <div key={s.label}>
                        <p className="font-mono tabular-nums text-xl text-text-on-paper">{s.value}</p>
                        <p className="label mt-1 text-text-muted">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-paper-2 py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal className="max-w-xl">
            <p className="label text-text-muted">Testimonials</p>
            <h2 className="font-display balance mt-3 text-display-s text-text-on-paper">
              In the traveler&rsquo;s own words
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 60}>
                <div className="flex h-full flex-col rounded-2xl border border-line bg-paper p-6">
                  <Quotes size={22} weight="fill" className="text-terracotta-soft" />
                  <p className="pretty mt-4 flex-1 text-sm leading-relaxed text-text-muted">
                    {t.quote}
                  </p>
                  <p className="mt-5 border-t border-line pt-4 text-sm font-medium text-text-on-paper">
                    {t.name}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 md:py-24 text-center">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal>
            <h2 className="font-display balance mx-auto max-w-lg text-display-s text-text-on-ink">
              Want a proposal built around your own brief?
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-terracotta px-6 py-3.5 text-sm font-medium text-ink transition-[background-color,transform] duration-150 ease-out hover:bg-terracotta-strong active:scale-[0.97]"
            >
              Request a Proposal
              <ArrowRight size={16} weight="bold" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
