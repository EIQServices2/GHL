# GHL — Architecture

> Canonical architecture doc for the GHL decommission frontend. One source of truth.

## Layered structure (extensible)

The app is organized into 4 layers + data + types. Each layer composes the one below it.

```
app/            # pages (dynamic route, static export)
  [utility]/page.tsx   # one dynamic page, driven by generateStaticParams
  page.tsx             # index (lists utilities)
  layout.tsx           # root layout (fonts, metadata)

sections/       # reusable page sections (compose components)
  HeroSection.tsx
  RateComparisonSection.tsx
  WhyItMattersSection.tsx
  TrialFormSection.tsx      # form section (email + submit)
  FooterSection.tsx

components/     # reusable components (compose elements)
  Logo.tsx
  RateCard.tsx
  CheckItem.tsx

elements/       # atomic elements (buttons, links)
  Button.tsx
  Link.tsx

data/           # dummy JSON (source of truth for this iteration)
  utilities.json
  rate-changes/{slug}.json

types/          # domain types (one file per domain)
  utility.ts
  rate.ts
  page.ts
  index.ts

lib/            # i18n, data access, utils
  i18n.ts
  data.ts
  utils.ts
```

## Layer rules

1. **Page** → composes `sections/` only. No direct component/element usage.
2. **Section** → composes `components/` + `elements/`. One section = one visual band.
3. **Component** → composes `elements/` + primitives. Reusable across sections.
4. **Element** → atomic, no composition of other app layers (Button, Link).

## Extensibility

- **Add a utility** → add one JSON file in `data/rate-changes/` + one entry in `data/utilities.json`. No code change (page is data-driven via `generateStaticParams`).
- **Add a section** → new file in `sections/`, export from `sections/index.ts`, compose in the page.
- **Add a component** → new file in `components/`, export from `components/index.ts`.
- **Add an element** → new file in `elements/`, export from `elements/index.ts`.

## Static export

- `next.config.ts` → `output: "export"`.
- `[utility]/page.tsx` uses `generateStaticParams` → SSG (prerendered static HTML).
- Deploy `web/out/` to S3 + CloudFront (`powerrateindex.org`).

## powerrateindex.org (target host)

The existing `powerrateindex.org` is a CRA SPA (React) with these routes (from its JS bundle):
`market`, `plan-insight`, `plan-detail`, `my-plan`, `utility-insight`, `contact-us`, `login`, `register`, `deals`, `sellers`, `documents`, `events`, `chat`, `mail`, `messages`.

Our GHL sub-pages (`/[utility]`) will be added under this domain. The existing SPA is a separate app — the GHL clone is a new NextJS app that will either replace or coexist with it (TBD with user).

## Form

- `TrialFormSection` renders an email + submit form (placeholder, `method="get"` to `cta.href`).
- Wire to backend/lead-capture later (gateway/ TBD).
