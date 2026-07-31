import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { TrailLine } from "@/components/trail-line";
import { whatWeOffer, workflow, guarantees } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Frontier Tourism is the MICE division of The Traveller Co., run separately from leisure travel, with a dated track record since 2020.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Not a leisure travel desk that also does conferences."
        lede="Frontier Tourism is a separate division inside The Traveller Co. Leisure travel is booked on the other desk. This one only runs MICE: meetings, incentives, conferences, and exhibitions."
      />

      <section className="bg-paper py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div className="relative h-72 overflow-hidden rounded-2xl lg:h-full lg:min-h-[380px]">
                <Image
                  src="https://picsum.photos/seed/frontier-tourism-team/1000/900"
                  alt=""
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={60}>
              <div className="flex flex-col justify-center">
                <h2 className="font-display balance text-display-s text-text-on-paper">
                  Why the split matters
                </h2>
                <p className="pretty mt-5 max-w-lg leading-relaxed text-text-muted">
                  A holiday and a corporate offsite solve different problems.
                  A holiday needs to be enjoyable. An offsite needs to be
                  enjoyable and defensible: it has to justify a budget line,
                  meet an ESG target, and produce a measurable outcome for
                  the people who approved it.
                </p>
                <p className="pretty mt-4 max-w-lg leading-relaxed text-text-muted">
                  Running both out of the same desk means one of them gets
                  treated as an afterthought. Frontier Tourism exists so
                  that MICE never is: its own team, its own vendor
                  relationships, and its own delivery record, dated back to
                  2020.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="mt-24 flex justify-center opacity-70 md:mt-32">
            <TrailLine variant="divider" className="h-8 w-32" />
          </div>

          <div className="mt-20 md:mt-24">
            <Reveal className="max-w-xl">
              <h2 className="font-display balance text-display-s text-text-on-paper">
                What we offer
              </h2>
            </Reveal>
            <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-3">
              {whatWeOffer.map((item, i) => (
                <Reveal key={item.title} delay={i * 60}>
                  <div className="border-t border-line pt-6">
                    <h3 className="font-display text-xl text-text-on-paper">
                      {item.title}
                    </h3>
                    <p className="pretty mt-2 leading-relaxed text-text-muted">
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper-2 py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal className="max-w-xl">
            <p className="label text-text-muted">Since 2020</p>
            <h2 className="font-display balance mt-3 text-display-s text-text-on-paper">
              A dated record, not a claimed one.
            </h2>
          </Reveal>

          <div className="mt-12 space-y-8">
            {workflow.map((entry, i) => (
              <Reveal key={entry.date} delay={i * 50}>
                <div className="grid grid-cols-1 gap-2 border-t border-line pt-6 sm:grid-cols-[100px_140px_1fr] sm:gap-6">
                  <p className="font-mono tabular-nums text-lg text-terracotta-strong">
                    {entry.year}
                  </p>
                  <p className="label text-text-muted">{entry.date}</p>
                  <p className="pretty text-sm leading-relaxed text-text-on-paper sm:text-base">
                    {entry.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal className="max-w-xl">
            <h2 className="font-display balance text-display-s text-text-on-paper">
              Our guarantees
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
            {guarantees.map((g, i) => (
              <Reveal key={g} delay={i * 30}>
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} weight="light" className="mt-0.5 shrink-0 text-terracotta-strong" />
                  <p className="text-text-on-paper">{g}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-2 gap-8 md:grid-cols-4">
          {[
            { label: "Delivering since", value: "2020" },
            { label: "Trips delivered", value: "100+" },
            { label: "Cities across both tracks", value: "15" },
            { label: "Retreat programs", value: "2" },
          ].map((stat) => (
            <Reveal key={stat.label}>
              <p className="font-mono tabular-nums text-3xl text-text-on-ink">{stat.value}</p>
              <p className="label mt-2 text-text-on-ink-muted">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-paper py-20 md:py-24 text-center">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal>
            <h2 className="font-display balance mx-auto max-w-lg text-display-s text-text-on-paper">
              Bring us a brief. We&rsquo;ll bring back a blueprint.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-text-on-ink transition-[background-color,transform] duration-150 ease-out hover:bg-ink-2 active:scale-[0.97]"
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
