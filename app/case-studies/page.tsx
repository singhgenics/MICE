import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { caseStudies } from "@/lib/data";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Three companies, three different reasons to book a MICE destination through Confluence — with the numbers behind each one.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        title="What actually happened, with the numbers attached."
        lede="Proof on hand today is illustrative — placeholder detail standing in for verified client results until real case data is supplied and published."
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
                    {cs.client} · {cs.industry} · {cs.destination}
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

      <section className="bg-ink py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 text-center">
          <Reveal>
            <h2 className="font-display balance mx-auto max-w-lg text-display-s text-text-on-ink">
              Want a shortlist built around your own brief?
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brass px-6 py-3.5 text-sm font-medium text-ink transition-all duration-150 ease-out hover:bg-brass-strong active:scale-[0.97]"
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
