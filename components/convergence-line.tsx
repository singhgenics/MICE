"use client";

import { motion, useReducedMotion } from "framer-motion";

const HERO_PATHS = [
  "M -20 30 C 220 30 260 210 420 224",
  "M -20 400 C 220 400 260 240 420 224",
  "M 820 10 C 560 10 480 190 420 224",
  "M 820 420 C 560 420 480 250 420 224",
  "M 380 -20 C 380 110 405 170 420 224",
  "M 460 440 C 440 320 425 270 420 224",
];

const DIVIDER_PATHS = [
  "M 0 6 C 90 6 108 34 132 22",
  "M 264 6 C 174 6 156 34 132 22",
];

const DATA_PATHS = ["M 0 18 C 30 18 34 2 60 2", "M 0 18 C 30 18 34 34 60 34"];

type Variant = "hero" | "divider" | "data";

export function ConvergenceLine({
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
        viewBox="0 0 264 40"
        className={className}
        aria-hidden="true"
        preserveAspectRatio="xMidYMid meet"
      >
        {DIVIDER_PATHS.map((d) => (
          <path
            key={d}
            d={d}
            stroke="var(--brass)"
            strokeWidth={1}
            fill="none"
            strokeLinecap="round"
            opacity={0.55}
          />
        ))}
        <circle cx={132} cy={22} r={2.5} fill="var(--brass)" />
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
            stroke="var(--brass)"
            strokeWidth={1}
            fill="none"
            strokeLinecap="round"
            opacity={0.6}
          />
        ))}
        <circle cx={60} cy={18} r={2} fill="var(--brass)" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 800 440"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      {HERO_PATHS.map((d, i) => (
        <motion.path
          key={d}
          d={d}
          stroke="var(--brass)"
          strokeWidth={1.25}
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.65 }}
          transition={{
            duration: reduceMotion ? 0 : 1.2,
            delay: reduceMotion ? 0 : i * 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
      ))}
      <motion.circle
        cx={420}
        cy={224}
        r={4}
        fill="var(--brass)"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: reduceMotion ? 0 : 0.4,
          delay: reduceMotion ? 0 : 0.95,
          ease: [0.16, 1, 0.3, 1],
        }}
      />
    </svg>
  );
}
