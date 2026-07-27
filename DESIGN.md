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

- **Display — Bitter** (variable slab serif). Hero headlines, section headlines, sub-page H1s. Used sparingly — never body copy. Fixed weight 650 (baked into the `.font-display` class, not left to render at whatever default the variable font resolves to). A slab serif reads as sturdy and precise rather than literary/editorial — it also echoes the site's own departure-board data idiom (Geist Mono stat labels) instead of contradicting it with a boutique-editorial serif. *Changed from Fraunces*, which was on the brand register's reflex-reject font list and, combined with the mono-label-as-eyebrow pattern below, pulled the whole page into the reflex-reject "editorial-typographic" aesthetic lane. Letter-spacing fixed at `-0.02em` across every display step — this is a hard floor, not a per-size choice, so it can't drift per component again.
- **UI/Body — Geist**. Navigation, body copy, buttons, forms, all product-style UI chrome. Weight 400 default, 500 for nav/button emphasis. This is the workhorse face; 90% of text on the page is Geist.
- **Data/Label — Geist Mono**. Stat callouts, capacity numbers, dates. Uppercase, `tracking-[0.08em]`, small size (`.label` class). **This is the one place uppercase-tracked text is allowed, and only when it sits directly beside a real value** (a stat number, a region/dateline, a client/industry tag). It must never stand alone above a headline as a kicker — that usage was audited out of every page (see Anti-patterns).

Type scale — named tokens defined once in `app/globals.css`'s `@theme inline` block (Tailwind v4's paired `--text-*` / `--text-*--line-height` / `--text-*--letter-spacing` keys), so a component uses one class (e.g. `text-display-l`) instead of retyping a `clamp()` + `leading-[...]` + `tracking-[...]` triplet. This is what stops the scale from drifting per-component:

- `text-display-xl` — `clamp(2.75rem, 5vw + 1rem, 5.25rem)`, leading 1.02, tracking `-0.02em`. Home hero H1 only.
- `text-display-m` — `clamp(2.5rem, 4vw + 1rem, 4.25rem)`, leading 1.04, tracking `-0.02em`. Every sub-page's H1 (via `<PageHero>`).
- `text-display-l` — `clamp(2rem, 2.5vw + 1rem, 3.25rem)`, leading 1.05, tracking `-0.02em`. Section H2s (bento intro, destinations/case-studies preview headings, CTA band).
- `text-display-s` — `clamp(1.75rem, 2vw + 1rem, 2.75rem)`, leading 1.15, tracking `-0.015em`. In-content headings within a two-column layout (about-page sub-sections, destination/case-study names, pillar-page "where X run best").
- `text-body-l` — `clamp(1.125rem, 0.5vw + 1rem, 1.375rem)`, leading 1.5. Lede paragraphs under a `<PageHero>`.
- Body (default): `1rem` minimum for any genuine reading paragraph (never smaller, even in a compact card), leading 1.6, max-width constrained (`max-w-md`/`max-w-lg`/`max-w-xl` — every body paragraph gets one, no exceptions).
- Label (mono): `0.8125rem`, leading 1.4, tracking `0.08em`, uppercase.

Light-on-dark compensation: any body/lede copy sitting on `--ink` gets the `.on-ink-copy` utility (line-height 1.7, letter-spacing `0.012em`) instead of the plain `leading-relaxed` used on paper backgrounds — light type reads as lighter weight and needs the extra room.

`tabular-nums` on every isolated stat/number callout (hero stats, destination/case-study/venue stat blocks, process step numerals) so aligned figures don't visually wobble.

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
- **Nav:** fixed, transparent over the hero, gains `--ink` background + `--line-on-ink` bottom border after scrolling past the hero. Mobile: full-height edge panel, slide-in from the right, with a click-outside backdrop and Escape-key dismiss (not just the X button).
- **Cards (case studies, destination tiles):** `rounded-2xl` (not 32px+), a single 1px `--line` border OR a tinted shadow — never both.
- **Forms (Request a Proposal):** label above input, helper text present, error inline below field, `gap-2` per field block, visible focus ring in `--brass` at 2px offset.
- **Icons:** Phosphor icons (`@phosphor-icons/react`), `weight="light"` or `"regular"` throughout — no emoji, ever.

## Anti-patterns ruled out for this project

Gradient text, side-stripe card borders, ghost-card border+shadow combos (pick one, never both — audited off the case-study cards specifically), numbered 01/02/03 scaffolding outside the one genuine sequence (the About page's 4-step process, which is a real ordered workflow), identical 3-up card grids, glassmorphism as default, sketchy/hand-drawn SVG illustration, decorative dot-grid backgrounds, cream/sand default background, pure black (`#000`), Inter as the UI face, Fraunces/Playfair Display/other reflex-reject serifs.

**Tiny tracked eyebrows above every section** — this project shipped this exact anti-pattern for a while (the `<PageHero>` component's `eyebrow` prop, instantiated on 7 pages, plus standalone kicker lines in the CTA band and two About-page sub-sections: 11+ instances total) before a `typeset` pass caught it. It's since been removed everywhere except the home hero's "Meetings · Incentives · Conferences · Exhibitions" line, which is the one deliberate, named exception: it states the real 4-item taxonomy once, site-wide, not a per-section decoration. If a future edit is tempted to add a mono label above a new heading purely for rhythm, don't — that's exactly how this drifted back in last time.
