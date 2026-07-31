"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { TrailLine } from "@/components/trail-line";
import { ArrowRight } from "@phosphor-icons/react";
import { basePath } from "@/lib/base-path";

export function Hero() {
  const reduceMotion = useReducedMotion();

  const fadeUp = (delay: number) => ({
    // transform as a literal string (not the x/y shorthand) so this runs on
    // the compositor instead of the main thread during page-load hydration.
    initial: { opacity: 0, transform: "translateY(16px)" },
    animate: { opacity: 1, transform: "translateY(0px)" },
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
          <motion.p {...fadeUp(0)} className="label text-terracotta">
            Northeast India · Southeast Asia
          </motion.p>
          <motion.h1
            {...fadeUp(0.08)}
            className="font-display balance mt-5 text-display-xl text-text-on-ink"
          >
            MICE, run separately from leisure travel.
          </motion.h1>
          <motion.p
            {...fadeUp(0.18)}
            className="on-ink-copy pretty mt-6 max-w-md text-lg text-text-on-ink-muted"
          >
            Frontier Tourism is the corporate retreat division of The Traveller Co.,
            built for Return on Engagement, not a getaway. Two tracks, a deep focus
            program in Northeast India and a scale program in Southeast Asia, run by
            the same team that has already delivered this exact kind of trip for OSK
            Group, GlaxoSmithKline, and more.
          </motion.p>
          <motion.div {...fadeUp(0.28)} className="mt-9 flex flex-wrap items-center gap-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-terracotta px-6 py-3.5 text-sm font-medium text-ink transition-[background-color,transform] duration-150 ease-out hover:bg-terracotta-strong active:scale-[0.97]"
            >
              Request a Proposal
              <ArrowRight size={16} weight="bold" />
            </Link>
            <Link
              href="/programs"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-text-on-ink"
            >
              Explore the programs
              <span className="relative overflow-hidden">
                <span className="block h-px w-6 bg-text-on-ink transition-transform duration-200 ease-out group-hover:translate-x-1" />
              </span>
            </Link>
          </motion.div>
          <motion.p {...fadeUp(0.34)} className="mt-3 text-sm text-text-on-ink-muted">
            Share your headcount and objective. Get a structural blueprint back
            within 48 hours.
          </motion.p>

          <motion.dl
            {...fadeUp(0.4)}
            className="mt-14 grid grid-cols-3 gap-6 border-t border-line-on-ink pt-6"
          >
            <div>
              <dt className="label text-text-on-ink-muted">Retreat programs</dt>
              <dd className="font-mono tabular-nums mt-1 text-2xl text-text-on-ink">2</dd>
            </div>
            <div>
              <dt className="label text-text-on-ink-muted">Trips delivered</dt>
              <dd className="font-mono tabular-nums mt-1 text-2xl text-text-on-ink">100+</dd>
            </div>
            <div>
              <dt className="label text-text-on-ink-muted">Delivering since</dt>
              <dd className="font-mono tabular-nums mt-1 text-2xl text-text-on-ink">2020</dd>
            </div>
          </motion.dl>
        </div>

        <div className="relative h-[46vh] lg:h-[74vh] rounded-3xl overflow-hidden">
          <Image
            src={`${basePath}/photos/resort-pool.jpg`}
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-ink/10" />
          <TrailLine
            variant="hero"
            className="absolute inset-0 h-full w-full opacity-90 mix-blend-screen"
          />
        </div>
      </div>
    </section>
  );
}
