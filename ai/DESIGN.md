# DESIGN.md — PowerRateIndex

## 1. Brand

- **Product:** PowerRateIndex
- **Company:** EIQdigital
- **Tagline:** "AI-First, Data and Technology Leader. Powering the Energy Industry's Digital and Sustainability Transition."

## 2. Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--pri-navy` | `#221a76` | Hero + CTA section background |
| `--pri-blue` | `#188bf6` | Current rate, checkmarks, CTA button |
| `--pri-surface` | `#f1f4fa` | Footer background |
| `--pri-footer-text` | `#252525` | Footer text |
| `--pri-muted` | `#8893a8` | Muted / secondary text |
| `--pri-header` | `#ffffffe6` | Header/nav background (white 90%) |

## 3. Typography

- **Font:** Plus Jakarta Sans (Google Font, `next/font/google`) — matches GHL `--contentfont` / `--headlinefont`.
- **Scale:**
  - Hero headline: `text-4xl md:text-5xl` bold, white
  - Section heading: `text-2xl` bold
  - CTA heading: `text-3xl` bold, white
  - Rate numbers: `text-3xl` bold
  - Eyebrow (CTA): `text-sm` uppercase tracking-wider
  - Body: `text-lg` / `text-sm` muted

## 4. Layout (section order, matches GHL)

1. **Header** — white (`#ffffffe6`), subtle shadow `0 1px 3px 0 #03004717`, centered logo
2. **Hero** — deep navy (`#221a76`), white headline + subtitle
3. **Rate comparison** — white, previous vs current cards
4. **Why It Matters** — white, heading + body + 3 checkmarks
5. **CTA** — deep navy (`#221a76`), eyebrow + heading + email form + blue button
6. **Footer** — light (`#f1f4fa`), two columns: logo (left) + copyright/tagline (right), dark text

## 5. Components

| Layer | File | Notes |
|---|---|---|
| **Page** | `app/[utility]/page.tsx` | dynamic route, static export |
| **Section** | `sections/HeaderSection.tsx` | white header + logo |
| **Section** | `sections/HeroSection.tsx` | navy hero |
| **Section** | `sections/RateComparisonSection.tsx` | rate cards |
| **Section** | `sections/WhyItMattersSection.tsx` | value props |
| **Section** | `sections/TrialFormSection.tsx` | navy CTA + form |
| **Section** | `sections/FooterSection.tsx` | light footer, 2-col |
| **Component** | `components/Logo.tsx` | wordmark |
| **Component** | `components/RateCard.tsx` | rate display card |
| **Component** | `components/CheckItem.tsx` | checkmark bullet |
| **Element** | `elements/Button.tsx` | shadcn button |
| **Element** | `elements/Link.tsx` | anchor link |

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
