import { Reveal } from "@/components/reveal";

export function PageHero({
  title,
  lede,
}: {
  title: string;
  lede?: string;
}) {
  return (
    <section className="bg-ink pt-40 pb-20 md:pt-48 md:pb-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <Reveal>
          <h1 className="font-display balance max-w-3xl text-display-m text-text-on-ink">
            {title}
          </h1>
        </Reveal>
        {lede ? (
          <Reveal delay={60}>
            <p className="on-ink-copy pretty mt-6 max-w-xl text-lg text-text-on-ink-muted">
              {lede}
            </p>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
