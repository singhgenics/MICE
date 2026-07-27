"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ConvergenceLine } from "@/components/convergence-line";
import { ArrowRight } from "@phosphor-icons/react";

export function Hero() {
  const reduceMotion = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduceMotion ? 0 : 0.7,
      delay: reduceMotion ? 0 : delay,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  });

  return (
    <section className="relative min-h-[100dvh] bg-ink overflow-hidden pt-16">
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 grid min-h-[calc(100dvh-4rem)] grid-cols-1 lg:grid-cols-[0.85fr_1fr] items-center gap-10 lg:gap-4">
        <div className="py-16 lg:py-0 max-w-xl">
          <motion.p {...fadeUp(0)} className="label text-brass">
            Meetings · Incentives · Conferences · Exhibitions
          </motion.p>
          <motion.h1
            {...fadeUp(0.08)}
            className="font-display balance mt-5 text-display-xl text-text-on-ink"
          >
            Business trips people actually want to take.
          </motion.h1>
          <motion.p
            {...fadeUp(0.18)}
            className="on-ink-copy pretty mt-6 max-w-md text-lg text-text-on-ink-muted"
          >
            Confluence connects meeting planners with the destinations, venues, and
            delivery partners built for events at any scale — from a 40-person
            offsite to a 22,000-delegate congress.
          </motion.p>
          <motion.div {...fadeUp(0.28)} className="mt-9 flex flex-wrap items-center gap-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brass px-6 py-3.5 text-sm font-medium text-ink transition-all duration-150 ease-out hover:bg-brass-strong active:scale-[0.97]"
            >
              Request a Proposal
              <ArrowRight size={16} weight="bold" />
            </Link>
            <Link
              href="/destinations"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-text-on-ink"
            >
              Explore destinations
              <span className="relative overflow-hidden">
                <span className="block h-px w-6 bg-text-on-ink transition-transform duration-200 ease-out group-hover:translate-x-1" />
              </span>
            </Link>
          </motion.div>
          <motion.p {...fadeUp(0.34)} className="mt-3 text-sm text-text-on-ink-muted">
            Five minutes gets you a shortlist and a named contact — not a brochure.
          </motion.p>

          <motion.dl
            {...fadeUp(0.4)}
            className="mt-14 grid grid-cols-3 gap-6 border-t border-line-on-ink pt-6"
          >
            <div>
              <dt className="label text-text-on-ink-muted">Destinations</dt>
              <dd className="font-mono tabular-nums mt-1 text-2xl text-text-on-ink">12</dd>
            </div>
            <div>
              <dt className="label text-text-on-ink-muted">Delegates hosted</dt>
              <dd className="font-mono tabular-nums mt-1 text-2xl text-text-on-ink">1.4M</dd>
            </div>
            <div>
              <dt className="label text-text-on-ink-muted">Largest floor</dt>
              <dd className="font-mono tabular-nums mt-1 text-2xl text-text-on-ink">184k m²</dd>
            </div>
          </motion.dl>
        </div>

        <div className="relative h-[46vh] lg:h-[74vh] rounded-3xl overflow-hidden">
          <Image
            src="https://picsum.photos/seed/meridian-bay-skyline-hero/1400/1600"
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-ink/10" />
          <ConvergenceLine
            variant="hero"
            className="absolute inset-0 h-full w-full opacity-90 mix-blend-screen"
          />
        </div>
      </div>
    </section>
  );
}
