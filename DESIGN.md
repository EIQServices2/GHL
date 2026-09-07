# DESIGN.md — PowerRateIndex (GHL clone)

> Design token spec for the GHL decommission frontend. Single source of truth for visual language.
> Source: extracted from the GHL page (`eiqdigital.info/home-577156-...`) + implemented in `web/app/globals.css`.

## 1. Brand

- **Product:** PowerRateIndex
- **Company:** EIQdigital
- **Tagline:** "AI-First, Data and Technology Leader. Powering the Energy Industry's Digital and Sustainability Transition."

## 2. Color Palette

### Brand accents
| Token | Hex | Usage |
|---|---|---|
| `--pri-blue` | `#188bf6` | Primary blue — current rate, checkmark icons, link hover |
| `--pri-purple` | `#624bff` | CTA band background |
| `--pri-purple-light` | `#7e6cff` | Purple accent (hover/light) |
| `--pri-purple-deep` | `#383cc2` | Deep purple accent |
| `--pri-accent` | `#ff6240` | Accent orange (sparing) |

### Neutrals
| Token | Hex | Usage |
|---|---|---|
| `--pri-body` | `#2c3345` | Body text / headings |
| `--pri-muted` | `#8893a8` | Muted / secondary text |
| `--pri-surface` | `#f1f4fa` | Hero section background |
| `--background` | `#ffffff` | Page background |
| `--border` | `#e5e7eb` | Card borders |

## 3. Typography

- **Font:** Raleway (Google Font, `next/font/google`)
- **Scale:**
  - Hero headline: `text-4xl md:text-5xl` bold
  - Section heading: `text-2xl` bold
  - CTA heading: `text-3xl` bold
  - Rate numbers: `text-3xl` bold
  - Eyebrow (CTA): `text-sm` uppercase tracking-wider
  - Body: `text-lg` / `text-sm` muted

## 4. Layout

- Single-column, centered, max-width `max-w-3xl` content container.
- Sections stacked vertically, separated by background color:
  1. Hero (pale `--pri-surface` band)
  2. Rate comparison (white)
  3. Why It Matters (white)
  4. CTA (purple band)
  5. Footer (dark `--pri-body` band)

## 5. Components

| Component | File | Notes |
|---|---|---|
| `RateChangeHero` | `components/rate-change/RateChangeHero.tsx` | Utility name + title + subtitle |
| `RateComparison` | `components/rate-change/RateComparison.tsx` | Previous vs current rate cards |
| `WhyItMatters` | `components/rate-change/WhyItMatters.tsx` | 3 value props with check icons |
| `CtaSection` | `components/rate-change/CtaSection.tsx` | Purple band + white pill button |
| `Footer` | `components/rate-change/Footer.tsx` | Dark band + copyright + tagline |
| `Button` | `components/ui/button.tsx` | shadcn/ui primitive (radix-nova) |

## 6. Radius & Spacing

- Card radius: `rounded-xl`
- Button (CTA): `rounded-full` (pill)
- Section padding: `py-12` / `py-16`
- Card padding: `p-6`

## 7. Iconography

- **Library:** lucide-react
- Checkmark: `Check` (in `--pri-blue/10` circle, `--pri-blue` icon)

## 8. i18n

- All copy via `lib/i18n.ts` `t()` — never hardcode English.
- Locales: `en` (extensible to `hi`, `es`).
