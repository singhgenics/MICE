import type { Metadata } from "next";
import { EnvelopeSimple, Clock, MapPinLine } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { ProposalForm } from "@/components/proposal-form";

export const metadata: Metadata = {
  title: "Request a Proposal",
  description:
    "Send a short event brief and get a shortlist of two or three matched destinations back within one business day.",
};

const details = [
  {
    icon: Clock,
    title: "Response time",
    body: "One business day for a shortlist. Same day for anything with a deadline flagged in the brief.",
  },
  {
    icon: EnvelopeSimple,
    title: "Direct line",
    body: "proposals@confluence-mice.example — for planners who'd rather email a brief than fill out a form.",
  },
  {
    icon: MapPinLine,
    title: "Coverage",
    body: "Five destinations across three regions, each with a resident delivery team — not a fly-in account manager.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Request a Proposal"
        title="Five minutes here gets you a shortlist, not a brochure."
        lede="Send the brief below. A delivery lead — not a chatbot, not a rotating inbox — replies with two or three matched destinations and a named contact."
      />

      <section className="bg-paper py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.3fr]">
            <div>
              <Reveal>
                <p className="label text-text-muted">Before you submit</p>
              </Reveal>
              <div className="mt-6 space-y-8">
                {details.map((d, i) => (
                  <Reveal key={d.title} delay={i * 60}>
                    <div className="flex gap-4">
                      <d.icon size={22} weight="light" className="mt-0.5 shrink-0 text-brass-strong" />
                      <div>
                        <h3 className="font-display text-lg text-text-on-paper">{d.title}</h3>
                        <p className="pretty mt-1 text-sm leading-relaxed text-text-muted">
                          {d.body}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal delay={80}>
              <ProposalForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
