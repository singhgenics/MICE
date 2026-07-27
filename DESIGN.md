# Design

## Concept

**Confluence** — a MICE destination gateway. The brand metaphor is the name itself: a confluence is the point where separate rivers become one. Every meeting, incentive trip, conference, and exhibition is the same shape: people converging from many origins onto one destination. That shape is the site's one signature motif, used at three scales (see Signature).

Color strategy: **Committed**. One deep ink surface carries the hero and structural moments; one warm brass accent carries every call to action and every data highlight. No second competing accent.

Physical scene forcing the theme choice: a planner is comparing destinations late at night, laptop-lit, tired of brochure sameness. The site needs to feel like the lights of a harbor city at dusk, not a SaaS dashboard and not a sunny stock-photo brochure — confident, a little cinematic, unmistakably premium.

## Color

Defined in OKLCH, applied as CSS variables in `app/globals.css`.

| Token | OKLCH | Hex (approx) | Role |
|---|---|---|---|
| `--ink` | `oklch(19% 0.025 230)` | `#101823` | Primary dark surface (hero, footer, CTA band) |
| `--ink-2` | `oklch(24% 0.025 230)` | `#182231` | Elevated dark surface (cards on ink) |
| `--paper` | `oklch(97% 0.006 230)` | `#F5F6F7` | Primary light surface (content sections) |
| `--paper-2` | `oklch(94% 0.008 230)` | `#E9ECEE` | Muted light surface (subtle section break) |
| `--brass` | `oklch(72% 0.13 70)` | `#B8863F` | Accent — CTAs, links on ink, data highlights, signature motif |
| `--brass-strong` | `oklch(64% 0.14 68)` | `#9C6F30` | Accent hover/active |
| `--text-on-paper` | `oklch(22% 0.02 230)` | `#131B26` | Body text on paper |
| `--text-muted` | `oklch(42% 0.02 230)` | `#414C59` | Secondary text on paper |
| `--text-on-ink` | `oklch(96% 0.005 230)` | `#F0F1F2` | Body text on ink |
| `--text-on-ink-muted` | `oklch(72% 0.015 230)` | `#A9B1BA` | Secondary text on ink |
| `--line` | `oklch(88% 0.01 230)` | `#CDD2D6` | Borders/dividers on paper |
| `--line-on-ink` | `oklch(32% 0.02 230)` | `#232E3B` | Borders/dividers on ink |

Contrast checked: `--text-on-paper` on `--paper` ≈ 15:1. `--text-muted` on `--paper` ≈ 7.4:1. `--text-on-ink` on `--ink` ≈ 15:1. `--brass` on `--ink` ≈ 5.1:1 (passes for text and large UI). `--brass` used for small text always sits on `--ink`, never on `--paper` (fails there) — on paper, brass is used only for fills/icons/borders ≥3:1 contexts, never small text.

## Typography

Three families, one job each. Loaded via `next/font/google`, self-hosted at build time (no runtime third-party requests).

- **Display — Fraunces** (variable serif, optical sizing on). Hero headlines, section headlines, pull quotes. Used sparingly — never body copy. Weight 480-560, optical size `"opsz" 32-72` for display sizes. Letter-spacing no tighter than `-0.02em`.
- **UI/Body — Geist**. Navigation, body copy, buttons, forms, all product-style UI chrome. Weights 400/500/600. This is the workhorse face; 90% of text on the page is Geist.
- **Data/Label — Geist Mono**. Stat callouts, capacity numbers, dates, form field labels styled as departure-board data (`12,000 DELEGATES`, `340 ROOMS`, `Q3 2027`). Uppercase, `tracking-[0.08em]`, small size. This is the one place uppercase-tracked text is allowed — it's doing a real job (reads as data), not decorating a section like a kicker would.

Type scale (clamp, mobile → desktop):
- Display XL (hero H1): `clamp(2.75rem, 5vw + 1rem, 5.25rem)`, leading 1.02, tracking `-0.03em`
- Display L (section H2): `clamp(2rem, 2.5vw + 1rem, 3.25rem)`, leading 1.05, tracking `-0.025em`
- Body L (lede paragraphs): `clamp(1.125rem, 0.5vw + 1rem, 1.375rem)`, leading 1.5
- Body (default): `1rem`, leading 1.6, max-width `65ch`
- Label (mono): `0.8125rem`, leading 1.4, tracking `0.08em`, uppercase

## Layout

- Container: `max-w-[1400px] mx-auto px-6 md:px-10`.
- Grid over flex-math for anything 2D; flex for 1D rows (nav, button groups, logo strip).
- No `h-screen` — hero and any full-bleed section uses `min-h-[100dvh]` or a fixed clamp height, never raw viewport height.
- Section rhythm: `py-24 md:py-32` for major sections, `py-16` for tighter transitional ones. Vary it — not every section gets the same vertical padding.
- Hero: asymmetric split, ~44/56, text left on `--ink`, full-bleed destination image right with the Convergence Line overlay. Not centered, not a card.
- Services (Meetings / Incentives / Conferences / Exhibitions): asymmetric bento — a real 2×2 grid at `grid-template-columns: 1.3fr 1fr` / `grid-template-rows: 1fr 1.2fr` so no two tiles are identical in shape, each with its own image treatment and copy length. This is a genuine 4-item taxonomy (the MICE acronym itself), so naming the four is informative, not decorative — but they are not numbered 01-04; each is labeled by name only.
- Destinations: horizontal `scroll-snap-x` gallery, variable card widths, mono stat callouts, drag-to-scroll on desktop.
- Proof / case studies: `position: sticky` stacking cards — each case study sticks near the top and the next slides over it, so scrolling physically stacks proof points.
- Proposal CTA band: full-width `--ink` section, quiet Convergence Line watermark, single strong CTA.
- Cards are used only where elevation communicates real hierarchy (case-study stack, destination gallery tiles). No nested cards, no card-in-card.

## Signature: The Convergence Line

One SVG line system, three scales, always brass on ink:

1. **Hero (large, animated on load):** 5-7 thin paths starting from the four screen edges, curving inward with eased bezier paths to converge on a single point positioned near the primary CTA. Draws in via `stroke-dashoffset` animation, 900-1400ms, staggered 60-90ms per path, `cubic-bezier(0.16, 1, 0.3, 1)`. Reduced motion: render fully drawn, no animation.
2. **Section divider (small, static):** a condensed 3-path version used in place of a plain `<hr>` between major sections — a quiet brand mark, not a repeated eyebrow.
3. **Data visualization (destinations section):** the same path logic drives a minimal connector between a destination's stat callouts (flight connections converging on the destination name), reinforcing the metaphor as information rather than decoration.

Never used purely decoratively past these three placements — if a fourth use doesn't carry a real convergence idea (multiple → one), it doesn't get the motif.

## Motion

- Custom eases only: `--ease-out: cubic-bezier(0.16, 1, 0.3, 1)` for entrances, `--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1)` for on-screen movement. No default `ease-in` on anything.
- UI feedback (buttons, links, nav): 120-200ms, `transform`/`opacity`/`color` only.
- Scroll reveals: fade + `translateY(12-16px)` → resting state, one IntersectionObserver-driven pass, staggered 40-70ms within a group. Content is visible by default in markup/no-JS; the class only enhances an already-present element (never gates visibility).
- Logo strip: continuous linear-eased horizontal scroll (a legitimate constant-motion case), pauses on hover and under `prefers-reduced-motion`.
- Every animation has a `prefers-reduced-motion: reduce` fallback: convergence line renders static, scroll reveals become instant, marquee freezes.
- Buttons: `:active` → `scale(0.97)`, 150ms ease-out. Popovers/menus (nav dropdown, mobile menu) scale in from their trigger origin, not center; the mobile menu panel (edge-anchored, not trigger-anchored) is the one exception and keeps a slide-from-edge transform instead.

## Components (conventions)

- **Buttons:** primary = brass fill, ink text, on ink backgrounds; on paper backgrounds primary = ink fill, paper text, with a brass 2px focus/hover underline detail. Secondary = text link with animated underline. No ghost-card double-decoration (no 1px border + soft wide shadow stacked together).
- **Nav:** fixed, transparent over the hero, gains `--ink` background + `--line-on-ink` bottom border after scrolling past the hero. Mobile: full-height edge panel, slide-in from the right.
- **Cards (case studies, destination tiles):** `rounded-2xl` (not 32px+), a single 1px `--line` border OR a tinted shadow — never both.
- **Forms (Request a Proposal):** label above input, helper text present, error inline below field, `gap-2` per field block, visible focus ring in `--brass` at 2px offset.
- **Icons:** Phosphor icons (`@phosphor-icons/react`), `weight="light"` or `"regular"` throughout — no emoji, ever.

## Anti-patterns ruled out for this project

Gradient text, side-stripe card borders, tiny tracked eyebrows above every section, numbered 01/02/03 scaffolding outside the one genuine sequence (if any timeline appears), identical 3-up card grids, glassmorphism as default, sketchy/hand-drawn SVG illustration, decorative dot-grid backgrounds, cream/sand default background, pure black (`#000`), Inter as the UI face, Playfair Display (too common in this exact "premium travel" brief to read as a choice).
