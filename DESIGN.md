# Design

## Concept

**Frontier Tourism** is a real operator's dedicated MICE division, run separately from its leisure travel business. Its existing wordmark ("FRONTIER TOURISM, Horizons are calling") is hand-cut and rugged, closer to an expedition dispatch than a hospitality brochure. The site follows that lead rather than inventing a new premium-hospitality identity from scratch.

The brand's real shape is two tracks, not one: a Northeast India deep-focus program and a Southeast Asia scale program, both routed through the same operator. The signature motif follows that shape directly: a single hand-drawn trail line that starts at one point and forks into two distinct routes, used at three scales (see Signature).

Color strategy: **Committed**. One deep, mossy dark surface (not navy, not black) carries the hero and structural moments; one warm terracotta accent carries every call to action and every data highlight. No second competing accent.

Physical scene forcing the theme choice: an HR lead is comparing MICE proposals late in the day, three browser tabs open, tired of every operator's site looking like the same luxury-hotel template. This one needs to read as a specialist field operation, not a five-star brochure and not a SaaS dashboard. Deep forest and rust instead of navy and gold; a paper background with a whisper of green in it, not the reflex cream.

## Color

Defined in OKLCH, applied as CSS variables in `app/globals.css`.

| Token | OKLCH | Hex (approx) | Role |
|---|---|---|---|
| `--ink` | `oklch(22% 0.035 155)` | `#12231C` | Primary dark surface (hero, footer, CTA band) |
| `--ink-2` | `oklch(27% 0.035 155)` | `#1B3128` | Elevated dark surface (cards on ink) |
| `--paper` | `oklch(96% 0.008 155)` | `#F1F4F1` | Primary light surface (content sections) |
| `--paper-2` | `oklch(93% 0.01 155)` | `#E6EAE5` | Muted light surface (subtle section break) |
| `--terracotta` | `oklch(62% 0.15 45)` | `#BC5A2E` | Accent, CTAs, links on ink, data highlights, signature motif |
| `--terracotta-strong` | `oklch(54% 0.16 43)` | `#9E4A24` | Accent hover and active |
| `--text-on-paper` | `oklch(20% 0.02 155)` | `#101C15` | Body text on paper |
| `--text-muted` | `oklch(40% 0.02 155)` | `#3C4A41` | Secondary text on paper |
| `--text-on-ink` | `oklch(96% 0.01 155)` | `#EFF3EF` | Body text on ink |
| `--text-on-ink-muted` | `oklch(74% 0.02 155)` | `#A8B5AC` | Secondary text on ink |
| `--line` | `oklch(87% 0.012 155)` | `#CBD3CC` | Borders and dividers on paper |
| `--line-on-ink` | `oklch(33% 0.03 155)` | `#213A2E` | Borders and dividers on ink |

Contrast checked: `--text-on-paper` on `--paper` about 14.8 to 1. `--text-muted` on `--paper` about 7.1 to 1. `--text-on-ink` on `--ink` about 14.5 to 1. `--terracotta` on `--ink` about 4.9 to 1, which passes for text and large UI. `--terracotta` used for small text always sits on `--ink`, never on `--paper` since it fails contrast there. On paper, terracotta is used only for fills, icons, and borders at 3 to 1 or better, never small text.

## Typography

Three families, one job each, loaded via `next/font/google` and self-hosted at build time.

- **Display, Bitter** (variable slab serif). Hero headlines, section headlines, sub-page H1s, used sparingly and never for body copy. Fixed weight 650, baked into the `.font-display` class. A slab serif reads as a field-report typeface, sturdy and legible on a trail sign, not a boutique-editorial serif. Letter-spacing fixed at `-0.02em` across every display step.
- **UI and Body, Geist**. Navigation, body copy, buttons, forms, all product-style UI chrome. Weight 400 default, 500 for nav and button emphasis.
- **Data and Label, Geist Mono**. Stat callouts, dates, percentages, workflow years. Uppercase, `tracking-[0.08em]`, small size (`.label` class). This is the one place uppercase-tracked text is allowed, and only beside a real value, never standing alone above a headline as a kicker.

Type scale, named tokens defined once in `app/globals.css`'s `@theme inline` block:

- `text-display-xl`, `clamp(2.75rem, 5vw + 1rem, 5.25rem)`, leading 1.02, tracking `-0.02em`. Home hero H1 only.
- `text-display-m`, `clamp(2.5rem, 4vw + 1rem, 4.25rem)`, leading 1.04, tracking `-0.02em`. Every sub-page's H1 via `<PageHero>`.
- `text-display-l`, `clamp(2rem, 2.5vw + 1rem, 3.25rem)`, leading 1.05, tracking `-0.02em`. Section H2s.
- `text-display-s`, `clamp(1.75rem, 2vw + 1rem, 2.75rem)`, leading 1.15, tracking `-0.015em`. In-content headings within a two-column layout.
- `text-body-l`, `clamp(1.125rem, 0.5vw + 1rem, 1.375rem)`, leading 1.5. Lede paragraphs under a `<PageHero>`.
- Body default: `1rem` minimum for any genuine reading paragraph, leading 1.6, max-width constrained.
- Label mono: `0.8125rem`, leading 1.4, tracking `0.08em`, uppercase.

Light-on-dark compensation: body and lede copy on `--ink` gets the `.on-ink-copy` utility (line-height 1.7, letter-spacing `0.012em`).

`tabular-nums` on every isolated stat or number callout.

**Copy rule, hard constraint:** no em dashes anywhere on the site. Use a period, a comma, a colon, or a parenthetical instead. This applies to every heading, body paragraph, label, and alt text.

## Layout

- Container: `max-w-[1400px] mx-auto px-6 md:px-10`.
- Grid over flex-math for anything two-dimensional; flex for one-dimensional rows.
- No `h-screen`, hero and full-bleed sections use `min-h-[100dvh]`.
- Section rhythm varies: `py-24 md:py-32` for major sections, `py-16` for tighter transitional ones.
- Hero: asymmetric split, roughly 44/56, text on `--ink` with a full-bleed destination image and the trail-line overlay. Not centered, not a card.
- Retreat programs (two tracks: Northeast India, Southeast Asia): an asymmetric two-panel split, not a bento grid. Two is a real count, not four, so the layout should read as one fork, not a generic feature grid.
- Destinations: horizontal `scroll-snap-x` gallery per track, variable card widths, mono stat callouts, drag-to-scroll on desktop.
- Work experience (case studies): `position: sticky` stacking cards, each entry sticks near the top and the next slides over it.
- Proposal CTA band: full-width `--ink` section, quiet trail-line watermark, single strong CTA.
- Cards only where elevation communicates real hierarchy. No nested cards.

## Signature: The Trail Line

One SVG line system, three scales, always terracotta on ink. The shape is a fork: one origin, two routes, matching the site's real two-track structure.

1. **Hero (large, animated on load):** a handful of thin paths start from a single point near the primary CTA and fork outward toward two labeled endpoints (Northeast India, Southeast Asia). Draws in via `stroke-dashoffset`, 900 to 1400ms, staggered 60 to 90ms per path, `cubic-bezier(0.16, 1, 0.3, 1)`. Reduced motion: render fully drawn, no animation.
2. **Section divider (small, static):** a condensed version used in place of a plain `<hr>` between major sections.
3. **Data visualization:** the same path logic drives connectors in the workflow timeline (year to year) and the booking-share breakdown, reinforcing the motif as real information rather than decoration.

## Motion

- Custom eases only: `--ease-out: cubic-bezier(0.16, 1, 0.3, 1)` for entrances, `--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1)` for on-screen movement.
- UI feedback (buttons, links, nav): 120 to 200ms, `transform`, `opacity`, or `color` only, never `transition: all`.
- Scroll reveals: fade plus `translateY(12 to 16px)`, IntersectionObserver-driven, staggered 40 to 70ms within a group. Content is visible by default in markup; the class only enhances an already-present element.
- Every hover-triggered animation (image zoom, color swap) is gated behind `@media (hover: hover) and (pointer: fine)` so touch devices never get a stuck hover state.
- Framer Motion entrances use literal `transform` strings, not the `x`/`y`/`scale` shorthand, wherever the animation can compete with hydration or a route change (hero entrance, mobile nav panel).
- Every animation has a `prefers-reduced-motion: reduce` fallback.
- Buttons: `:active` to `scale(0.97)`, 150ms ease-out.

## Components (conventions)

- **Buttons:** primary is terracotta fill with ink text on ink backgrounds, or ink fill with paper text on paper backgrounds. Secondary is a text link with an animated underline. No ghost-card double-decoration.
- **Nav:** fixed, transparent over the hero, gains an `--ink` background and bottom border after scrolling. Mobile: full-height edge panel, slide-in from the right, with a click-outside backdrop and Escape-key dismiss.
- **Cards:** `rounded-2xl`, a single 1px `--line` border or a tinted shadow, never both.
- **Forms:** label above input, helper text present, error inline below field, `gap-2` per field block, visible focus ring in `--terracotta` at 2px offset.
- **Icons:** Phosphor icons, `weight="light"` or `"regular"` throughout, no emoji.

## Anti-patterns ruled out for this project

Gradient text, side-stripe card borders, ghost-card border and shadow combos, numbered scaffolding outside a genuine sequence, identical three-up card grids, glassmorphism as default, sketchy hand-drawn SVG illustration, decorative dot-grid backgrounds, cream and sand default background, pure black, Inter as the UI face, reflex-reject serifs, tiny tracked eyebrows above every section, and em dashes anywhere in copy.

Reused stock photography from the source pitch deck is out of scope for this rebuild: several of its images carry Getty Images or other stock-library copyright metadata, so none of the deck's embedded photography is reused here. The one asset carried over is the operator's own logo mark, since that is their original brand property, not licensed stock.
