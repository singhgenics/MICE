import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { pillars } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Meetings, Incentives, Conferences, Exhibitions — the same destinations, built out differently depending on what your event actually needs.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="The MICE acronym, actually built out."
        lede="Meetings, Incentives, Conferences, Exhibitions are four different logistics problems wearing one abbreviation. We staff, price, and deliver each one differently."
      />

      <section className="bg-paper py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.slug} delay={i * 60}>
                <Link
                  href={`/services/${pillar.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-paper"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={`https://picsum.photos/seed/${pillar.imageSeed}/900/600`}
                      alt=""
                      fill
                      priority={i === 0}
                      sizes="(min-width: 768px) 45vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <div className="flex items-start justify-between gap-4">
                      <h2 className="font-display text-2xl text-text-on-paper">
                        {pillar.name}
                      </h2>
                      <ArrowUpRight
                        size={20}
                        weight="light"
                        className="mt-1 shrink-0 text-text-muted transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brass-strong"
                      />
                    </div>
                    <p className="pretty mt-3 flex-1 leading-relaxed text-text-muted">
                      {pillar.short}
                    </p>
                    <div className="mt-6 flex items-center gap-2 border-t border-line pt-4">
                      <span className="font-mono tabular-nums text-lg text-text-on-paper">
                        {pillar.stat.value}
                      </span>
                      <span className="label text-text-muted">{pillar.stat.label}</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
