import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { caseStudies } from "@/lib/data";
import { Reveal } from "@/components/reveal";

export function CaseStudiesStack() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <Reveal className="max-w-2xl">
          <h2 className="font-display balance text-display-l text-text-on-paper">
            Proof, stacked.
          </h2>
          <p className="pretty mt-4 max-w-xl text-lg leading-relaxed text-text-muted">
            Four companies, four real trips. Read them in order and watch the
            record build.
          </p>
        </Reveal>

        <div className="mt-16 space-y-6">
          {caseStudies.map((cs, i) => (
            <div
              key={cs.slug}
              className="sticky"
              style={{ top: `${96 + i * 24}px` }}
            >
              <Reveal delay={i * 40}>
                <Link
                  href="/case-studies"
                  className="group grid grid-cols-1 overflow-hidden rounded-2xl bg-paper shadow-[0_20px_50px_-25px_rgba(16,24,35,0.35)] md:grid-cols-[1fr_1.2fr]"
                >
                  <div className="relative h-64 md:h-full">
                    <Image
                      src={`https://picsum.photos/seed/${cs.imageSeed}/900/700`}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 45vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-8 md:p-10">
                    <p className="label text-text-muted">
                      {cs.client} · {cs.destination}
                    </p>
                    <h3 className="font-display balance mt-3 text-2xl leading-tight text-text-on-paper md:text-3xl">
                      {cs.headline}
                    </h3>
                    <p className="pretty mt-4 text-base leading-relaxed text-text-muted">
                      {cs.summary}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-5">
                      {cs.stats.map((s) => (
                        <div key={s.label}>
                          <p className="font-mono tabular-nums text-lg text-text-on-paper">{s.value}</p>
                          <p className="label text-text-muted">{s.label}</p>
                        </div>
                      ))}
                    </div>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-terracotta-strong">
                      Read the full account
                      <ArrowUpRight
                        size={16}
                        weight="bold"
                        className="transition-transform duration-150 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </div>
                </Link>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
