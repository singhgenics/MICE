import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { ConvergenceLine } from "@/components/convergence-line";
import { Reveal } from "@/components/reveal";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 md:py-28">
      <ConvergenceLine
        variant="hero"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.18]"
      />
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 text-center">
        <Reveal>
          <h2 className="font-display balance mx-auto max-w-2xl text-display-l text-text-on-ink">
            Tell us the brief. We&rsquo;ll tell you which destination fits it.
          </h2>
        </Reveal>
        <Reveal delay={60}>
          <p className="on-ink-copy pretty mx-auto mt-5 max-w-lg text-base text-text-on-ink-muted">
            Five minutes on the form gets you a shortlist and a named contact —
            not a brochure.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-brass px-7 py-3.5 text-sm font-medium text-ink transition-all duration-150 ease-out hover:bg-brass-strong active:scale-[0.97]"
          >
            Request a Proposal
            <ArrowRight size={16} weight="bold" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
