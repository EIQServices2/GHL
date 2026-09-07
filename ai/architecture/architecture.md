# GHL — Architecture

> Canonical architecture doc for the GHL decommission frontend. One source of truth.

## Layered structure (extensible)

The app is organized into 4 layers + data + types + lib. Each layer composes the one below it.

```
app/            # pages (dynamic route, static export) + SEO + shared chrome
  layout.tsx           # root layout: fonts, global metadata, viewport, icons
                       #   + shared chrome (Header + UtilityLinksSection + FooterSection)
  page.tsx             # home page (full powerrateindex.org clone)
  [utility]/page.tsx   # one dynamic page, driven by generateStaticParams + generateMetadata
  login/page.tsx       # login page (ditto clone, UI only — not wired to Cognito yet)
  reset-password/page.tsx  # reset-password page (UI only)
  not-found.tsx        # global 404 (static export → 404.html)
  sitemap.ts           # sitemap.xml (home + 6 utilities + login + reset-password)
  robots.ts            # robots.txt (allow all + sitemap ref)
  globals.css          # Tailwind v4 + brand tokens + cursor rules
  favicon.ico          # from eiqdigital.com

sections/       # reusable page sections (compose components/elements)
  Header.tsx            # common header (logo → home + Login → /login) — in layout
  HomeHero.tsx          # hero (headline + count-up stats + 2 CTAs)
  HomeScrape.tsx        # data-scraping band (illustration + 3 bullets)
  HomeFeatures.tsx      # 4 feature cards
  HomePlatform.tsx      # state selector + TDU bar chart (interactive)
  HomeContact.tsx       # contact form band (id="contact")
  HeroSection.tsx       # utility hero (navy bg + hero-wide image)
  RateComparisonSection.tsx  # previous/current rate cards + arrow
  WhyItMattersSection.tsx    # purple heading + 3 checkmark bullets
  TrialFormSection.tsx  # CTA band (button opens modal form)
  UtilityLinksSection.tsx    # "Explore Utility Rate Changes" buttons (in layout)
  FooterSection.tsx     # ditto powerrateindex.org footer (in layout)

components/     # reusable components (compose elements)
  Logo.tsx              # single logo (logo-powerrateindex.png), optional href wrap
  RateCard.tsx          # rate display card (default/current variants)
  ContactForm.tsx       # shared lead form (used by modal + home contact)
  Checkmark.tsx         # customizable checkmark (lucide Check, blue) — not emoji

elements/       # atomic elements
  Button.tsx            # button (cva variants + asChild via Radix Slot)
  Link.tsx              # internal (next/link) vs external (<a>) navigation
  Modal.tsx             # reusable dialog (backdrop/Escape/X close, scrollable)
  Container.tsx         # shared content container (wide/narrow/form) — alignment

data/           # dummy JSON (source of truth for this iteration)
  home.json             # stats, states, tduRates, featureCards
  utilities.json        # 6 utilities
  rate-changes/{slug}.json
  site.json             # non-translatable config: ctaHref, footer links, social, auth

types/          # domain types (one file per domain)
  utility.ts            # slug: string (dynamic — no hardcoded union)
  rate.ts
  page.ts
  home.ts
  site.ts               # SiteConfig / AuthConfig
  index.ts

lib/            # i18n, data access, utils, hooks
  i18n.ts               # en + es locales, human-readable keys, {var} interpolation
  data.ts               # single getData() accessor → AppData (mimics API)
  utils.ts              # cn() class merge
  useCountUp.ts         # count-up animation hook (mirrors GHL CountUp)
```

## Layer rules

1. **Page** → composes `sections/` only. No direct component/element usage.
2. **Section** → composes `components/` + `elements/`. One section = one visual band.
3. **Component** → composes `elements/` + primitives. Reusable across sections.
4. **Element** → atomic, no composition of other app layers (Button, Link, Modal, Container).

## Shared chrome (single source of truth)

`Header`, `UtilityLinksSection`, and `FooterSection` are rendered **once** in `app/layout.tsx`, so every page (home, `[utility]`, login, reset-password, 404) gets identical header/footer/utility-links. Pages render only their own content between them.

## Data access (single accessor)

`lib/data.ts` exposes **one** function — `getData()` — returning `AppData { utilities, rateChanges, home, site }`. All `/data/*.json` is read through this function only (mimics a server API). No scattered imports, no workarounds.

- **Dynamic slugs:** `getData()` uses `fs.readdirSync` on `data/rate-changes/` to discover utilities at build time. Adding a utility = drop a JSON file (no code change).
- **i18n vs data:** translatable strings live in `lib/i18n.ts`; non-translatable config (URLs, brand names, footer products, auth endpoints) lives in `data/site.json`.

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
- **Colors (tokenized in globals.css, no hardcoded hex in components):**
  - `--pri-navy` `#221A76` (hero/CTA bg)
  - `--pri-purple` `#624BFF` (rates/buttons/headings)
  - `--pri-lavender` `#C4C4E3` (hero second-line)
  - `--pri-ink-muted` `#8893A8` (hero body)
  - `--pri-bg-light` (light section bg)
  - `--pri-surface` `#F1F4FA` (footer bg)
  - `--pri-blue` `#188bf6` (checkmarks only)
- **Background images:** `background-size: 100% auto` + no-repeat (`.bgCover100`) on desktop; `bg-cover` on mobile (mobile-first).
- **Mobile-first:** base styles = mobile, `md:`/`lg:` = desktop escalation. No fixed large text/widths without a smaller mobile base.

## powerrateindex.org (target host)

The existing `powerrateindex.org` is a CRA SPA (React) with routes: `market`, `plan-insight`, `plan-detail`, `my-plan`, `utility-insight`, `contact-us`, `login`, `register`, `deals`, `sellers`, `documents`, `events`, `chat`, `mail`, `messages`.

Our GHL sub-pages (`/[utility]`) will be added under this domain. The home page is a ditto clone of the existing SPA home. The existing SPA is a separate app — the GHL clone is a new NextJS app that will either replace or coexist with it (TBD with user).

## Auth (login / reset-password)

- `/login` + `/reset-password` are **UI-only** ditto clones (forms not wired).
- The live site uses AWS Amplify Auth (Cognito). Endpoints captured in `data/site.json` → `auth`:
  - API base: `https://7vu0h6rh6d.execute-api.us-east-2.amazonaws.com/v1/`
  - User pool: `us-east-2_sTXcVV4cC` (region `us-east-2`)
  - Web client: `2f3qaqno4o6faa90j0tvjos2fe`
  - Methods: `signIn`, `forgotPassword`, `forgotPasswordSubmit`, `signOut`, `currentSession`, `federatedSignIn`, `forceNewPassword`
- **Wiring later** = client-side Amplify Auth (static export has no server; Cognito web client is public by design).

## Form

- `ContactForm` is a shared lead form (First/Last Name, Company, Email, Message).
- `TrialFormSection` button opens a `Modal` containing `ContactForm` (GHL `openPopup` behavior).
- `HomeContact` renders `ContactForm` inline.
- Wire to backend/lead-capture later (gateway/ TBD).

## SEO

- `layout.tsx` → global metadata (title template, description, keywords, OpenGraph, Twitter, canonical, robots, `metadataBase`, icons/favicon).
- `page.tsx` + `[utility]/page.tsx` → per-page `generateMetadata` (utility pages get unique title + description with actual rates).
- `sitemap.ts` → home + 6 utility URLs + login + reset-password.
- `robots.ts` → allow all + sitemap reference.
