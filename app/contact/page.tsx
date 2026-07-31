import type { Metadata } from "next";
import { Clock, EnvelopeSimple, Phone } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { ProposalForm } from "@/components/proposal-form";
import { contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "Request a Proposal",
  description:
    "Send your headcount, budget band, and objective. Frontier Tourism delivers a structural blueprint within 48 hours.",
};

const details = [
  {
    icon: Clock,
    title: "Response time",
    body: "A structural blueprint within 48 hours of your brief. Sooner for anything with a flagged deadline.",
  },
  {
    icon: EnvelopeSimple,
    title: "Email",
    body: `${contact.emailPrimary}, or ${contact.emailSecondary} for the MICE team directly.`,
  },
  {
    icon: Phone,
    title: "Phone",
    body: `${contact.phone}. Ask for the Frontier Tourism desk, not general leisure bookings.`,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Send a headcount and an objective. Get a blueprint back."
        lede="Fill in the brief below, or reach the MICE desk directly by phone or email. Either way, a named delivery lead responds, not a shared inbox."
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
                      <d.icon size={22} weight="light" className="mt-0.5 shrink-0 text-terracotta-strong" />
                      <div>
                        <h3 className="font-display text-xl text-text-on-paper">{d.title}</h3>
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
