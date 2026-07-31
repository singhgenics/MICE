"use client";

import { motion, useReducedMotion } from "framer-motion";

/* One origin, two routes: Frontier Tourism forking into the Northeast
   India track and the Southeast Asia track. Matches the site's real
   two-track structure instead of decorating for its own sake. */
const HERO_PATHS = [
  "M -20 220 C 160 220 220 120 380 108 C 520 98 620 70 840 40",
  "M -20 220 C 160 220 220 200 340 210 C 460 220 520 200 620 150",
  "M -20 220 C 160 220 220 260 340 260 C 460 260 520 300 620 330",
  "M -20 220 C 160 220 220 300 380 320 C 520 338 620 360 840 400",
];

const DIVIDER_PATHS = [
  "M 0 20 C 60 20 70 6 132 6",
  "M 0 20 C 60 20 70 34 132 34",
];

const DATA_PATHS = ["M 0 18 C 30 18 34 2 60 2", "M 0 18 C 30 18 34 34 60 34"];

type Variant = "hero" | "divider" | "data";

export function TrailLine({
  variant = "hero",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  if (variant === "divider") {
    return (
      <svg
        viewBox="0 0 132 40"
        className={className}
        aria-hidden="true"
        preserveAspectRatio="xMidYMid meet"
      >
        {DIVIDER_PATHS.map((d) => (
          <path
            key={d}
            d={d}
            stroke="var(--terracotta)"
            strokeWidth={1}
            fill="none"
            strokeLinecap="round"
            opacity={0.55}
          />
        ))}
        <circle cx={0} cy={20} r={2.5} fill="var(--terracotta)" />
      </svg>
    );
  }

  if (variant === "data") {
    return (
      <svg
        viewBox="0 0 60 36"
        className={className}
        aria-hidden="true"
        preserveAspectRatio="xMidYMid meet"
      >
        {DATA_PATHS.map((d) => (
          <path
            key={d}
            d={d}
            stroke="var(--terracotta)"
            strokeWidth={1}
            fill="none"
            strokeLinecap="round"
            opacity={0.6}
          />
        ))}
        <circle cx={60} cy={18} r={2} fill="var(--terracotta)" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 840 440"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      {HERO_PATHS.map((d, i) => (
        <motion.path
          key={d}
          d={d}
          stroke="var(--terracotta)"
          strokeWidth={1.25}
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.65 }}
          transition={{
            duration: reduceMotion ? 0 : 1.2,
            delay: reduceMotion ? 0 : i * 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
      ))}
      <motion.circle
        cx={-20}
        cy={220}
        r={5}
        fill="var(--terracotta)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: reduceMotion ? 0 : 0.4, delay: reduceMotion ? 0 : 0.1 }}
      />
    </svg>
  );
}
