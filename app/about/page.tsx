import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { ConvergenceLine } from "@/components/convergence-line";

export const metadata: Metadata = {
  title: "About",
  description:
    "Confluence is a MICE destination gateway founded on a simple complaint: most event destinations are chosen for their conference centre and apologized for everywhere else.",
};

const process = [
  {
    step: "01",
    title: "Brief",
    body: "A 20-minute call or a written brief — delegate count, dates, budget band, and the one thing that would make this event actually memorable.",
  },
  {
    step: "02",
    title: "Shortlist",
    body: "Three destinations, matched to the brief, with named venues and real capacity numbers — not a 40-page destination guide to read yourself.",
  },
  {
    step: "03",
    title: "Site visit",
    body: "We arrange the visit, brief the venue teams ahead of time, and sit in on it — so you're evaluating the space, not managing the itinerary.",
  },
  {
    step: "04",
    title: "Delivery",
    body: "One delivery lead owns the event from contract to teardown, with a named on-site crisis contact for every session day.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Confluence"
        title="We book the destination, not just the dates."
        lede="Most MICE gateways sell square footage. We start from the belief that a destination people are reluctant to visit will always feel like a chore to run an event in — no matter how good the AV is."
      />

      <section className="bg-paper py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div className="relative h-72 overflow-hidden rounded-2xl lg:h-full lg:min-h-[380px]">
                <Image
                  src="https://picsum.photos/seed/confluence-about-team/1000/900"
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
                <p className="label text-text-muted">Why we exist</p>
                <h2 className="font-display balance mt-3 text-[clamp(1.75rem,2vw+1rem,2.75rem)] leading-tight tracking-[-0.02em] text-text-on-paper">
                  Founded on a scheduling complaint, not a market study.
                </h2>
                <p className="pretty mt-5 leading-relaxed text-text-muted">
                  Confluence started from a repeated pattern: planners quietly dreading
                  their own annual conference, because the destination itself had
                  nothing going for it beyond a conference centre with decent Wi-Fi.
                  Attendance suffered. Feedback scores suffered more.
                </p>
                <p className="pretty mt-4 leading-relaxed text-text-muted">
                  We now work with five destinations and their venue operators
                  directly, on the belief that the desirability of the place is a
                  logistics input, not a nice-to-have — it changes who shows up, and
                  whether they show up next year.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="mt-24 flex justify-center opacity-70 md:mt-32">
            <ConvergenceLine variant="divider" className="h-8 w-56" />
          </div>

          <div className="mt-20 md:mt-24">
            <Reveal className="max-w-xl">
              <p className="label text-text-muted">How we work</p>
              <h2 className="font-display balance mt-3 text-[clamp(1.75rem,2vw+1rem,2.75rem)] leading-tight tracking-[-0.02em] text-text-on-paper">
                Four steps, in this order, every time.
              </h2>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((p, i) => (
                <Reveal key={p.step} delay={i * 60}>
                  <div className="border-t border-line pt-6">
                    <p className="font-mono text-sm text-brass-strong">{p.step}</p>
                    <h3 className="font-display mt-2 text-xl text-text-on-paper">
                      {p.title}
                    </h3>
                    <p className="pretty mt-2 text-sm leading-relaxed text-text-muted">
                      {p.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-2 gap-8 md:grid-cols-4">
          {[
            { label: "Years operating", value: "9" },
            { label: "Destinations", value: "5" },
            { label: "Delegates hosted", value: "1.4M" },
            { label: "Repeat client rate", value: "68%" },
          ].map((stat) => (
            <Reveal key={stat.label}>
              <p className="font-mono text-3xl text-text-on-ink">{stat.value}</p>
              <p className="label mt-2 text-text-on-ink-muted">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-paper py-20 md:py-24 text-center">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal>
            <h2 className="font-display balance mx-auto max-w-lg text-[clamp(1.75rem,2.5vw+1rem,2.75rem)] leading-tight tracking-[-0.02em] text-text-on-paper">
              Bring us a brief. We'll bring back a shortlist.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-text-on-ink transition-all duration-150 ease-out hover:bg-ink-2 active:scale-[0.97]"
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
