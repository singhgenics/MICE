import { Reveal } from "@/components/reveal";

export function Mandate() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <p className="label text-text-muted">The 2026 MICE mandate</p>
            <h2 className="font-display balance mt-3 text-display-l text-text-on-paper">
              This is not leisure travel with a conference room attached.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="flex flex-col justify-center gap-5">
              <p className="pretty text-lg leading-relaxed text-text-muted">
                Corporate planners are no longer judged only on flawless logistics.
                In 2026 they are evaluated on Return on Engagement (ROE). With
                remote and hybrid work now standard, face to face connection
                is a premium asset, and offsites have to cure burnout, build real
                cross functional collaboration, and hold to strict ESG goals at
                the same time.
              </p>
              <p className="pretty text-base leading-relaxed text-text-muted">
                That is a different discipline from booking a holiday. It is why
                Frontier Tourism operates as its own division inside The
                Traveller Co., run separately from leisure travel, with its own
                delivery team, its own vendor relationships, and its own track
                record.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
