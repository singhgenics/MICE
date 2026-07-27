import { Reveal } from "@/components/reveal";

export function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <section className="bg-ink pt-40 pb-20 md:pt-48 md:pb-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <Reveal>
          <p className="label text-brass">{eyebrow}</p>
        </Reveal>
        <Reveal delay={60}>
          <h1 className="font-display balance mt-5 max-w-3xl text-[clamp(2.5rem,4vw+1rem,4.25rem)] leading-[1.04] tracking-[-0.03em] text-text-on-ink">
            {title}
          </h1>
        </Reveal>
        {lede ? (
          <Reveal delay={120}>
            <p className="pretty mt-6 max-w-xl text-lg leading-relaxed text-text-on-ink-muted">
              {lede}
            </p>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
