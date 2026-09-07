# GHL — Architecture

> Canonical architecture doc for the GHL decommission frontend. One source of truth.

## Layered structure (extensible)

The app is organized into 4 layers + data + types + lib. Each layer composes the one below it.

```
app/            # pages (dynamic route, static export) + SEO
  [utility]/page.tsx   # one dynamic page, driven by generateStaticParams + generateMetadata
  page.tsx             # home page (full powerrateindex.org clone)
  layout.tsx           # root layout (fonts, global metadata, viewport)
  sitemap.ts           # sitemap.xml (home + 6 utilities)
  robots.ts            # robots.txt (allow all + sitemap ref)
  globals.css          # Tailwind v4 + brand tokens + cursor rules

sections/       # reusable page sections (compose components/elements)
  HomeHeader.tsx        # home header (logo + Login)
  HomeHero.tsx          # hero (headline + count-up stats + 2 CTAs)
  HomeScrape.tsx        # data-scraping band (illustration + 3 bullets)
  HomeFeatures.tsx      # 4 feature cards
  HomePlatform.tsx      # state selector + TDU bar chart (interactive)
  HomeContact.tsx       # contact form band
  HeaderSection.tsx     # utility-page header (logo → home)
  HeroSection.tsx       # utility hero (navy bg + hero-wide image)
  RateComparisonSection.tsx  # previous/current rate cards + arrow
  WhyItMattersSection.tsx    # purple heading + 3 checkmark bullets
  TrialFormSection.tsx  # CTA band (button opens modal form)
  FooterSection.tsx     # ditto powerrateindex.org footer (shared)

components/     # reusable components (compose elements)
  Logo.tsx
  RateCard.tsx
  ContactForm.tsx        # shared lead form (used by modal + home contact)

elements/       # atomic elements
  Button.tsx
  Link.tsx
  Modal.tsx              # reusable dialog (backdrop/Escape/X close)

data/           # dummy JSON (source of truth for this iteration)
  home.json             # stats, states, tduRates, featureCards
  utilities.json        # 6 utilities
  rate-changes/{slug}.json

types/          # domain types (one file per domain)
  utility.ts
  rate.ts
  page.ts
  home.ts
  index.ts

lib/            # i18n, data access, utils, hooks
  i18n.ts
  data.ts
  utils.ts
  useCountUp.ts         # count-up animation hook (mirrors GHL CountUp)
```

## Layer rules

1. **Page** → composes `sections/` only. No direct component/element usage.
2. **Section** → composes `components/` + `elements/`. One section = one visual band.
3. **Component** → composes `elements/` + primitives. Reusable across sections.
4. **Element** → atomic, no composition of other app layers (Button, Link, Modal).

## Extensibility

- **Add a utility** → add one JSON file in `data/rate-changes/` + one entry in `data/utilities.json`. No code change (page is data-driven via `generateStaticParams`).
- **Add a section** → new file in `sections/`, export from `sections/index.ts`, compose in the page.
- **Add a component** → new file in `components/`, export from `components/index.ts`.
- **Add an element** → new file in `elements/`, export from `elements/index.ts`.

## Static export

- `next.config.ts` → `output: "export"`.
- `[utility]/page.tsx` uses `generateStaticParams` → SSG (prerendered static HTML).
- `sitemap.ts` + `robots.ts` use `export const dynamic = "force-static"` (required for `output: export`).
- Deploy `web/out/` to S3 + CloudFront (`powerrateindex.org`).

## Design tokens (ditto GHL)

- **Font:** Plus Jakarta Sans (single family, headline + content)
- **Colors:** navy `#221A76` (hero/CTA bg), purple `#624BFF` (rates/buttons/headings), lavender `#C4C4E3` (hero second-line), grey-blue `#8893A8` (hero body), light `#F1F4FA` (footer bg), blue `#188bf6` (checkmarks only)
- **Background images:** `background-size: 100% auto` + no-repeat (`.bgCover100`), text left-aligned

## powerrateindex.org (target host)

The existing `powerrateindex.org` is a CRA SPA (React) with routes: `market`, `plan-insight`, `plan-detail`, `my-plan`, `utility-insight`, `contact-us`, `login`, `register`, `deals`, `sellers`, `documents`, `events`, `chat`, `mail`, `messages`.

Our GHL sub-pages (`/[utility]`) will be added under this domain. The home page is a ditto clone of the existing SPA home. The existing SPA is a separate app — the GHL clone is a new NextJS app that will either replace or coexist with it (TBD with user).

## Form

- `ContactForm` is a shared lead form (First/Last Name, Company, Email, Message).
- `TrialFormSection` button opens a `Modal` containing `ContactForm` (GHL `openPopup` behavior).
- `HomeContact` renders `ContactForm` inline.
- Wire to backend/lead-capture later (gateway/ TBD).

## SEO

- `layout.tsx` → global metadata (title template, description, keywords, OpenGraph, Twitter, canonical, robots, `metadataBase`).
- `page.tsx` + `[utility]/page.tsx` → per-page `generateMetadata` (utility pages get unique title + description with actual rates).
- `sitemap.ts` → home + 6 utility URLs.
- `robots.ts` → allow all + sitemap reference.
