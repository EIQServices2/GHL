# GHL — Knowledge Index

> Entry point for understanding the GHL decommission project. Read this first.

## What is this project?

Decommission GoHighLevel (GHL) and migrate its TDU rate-change notification pages to our own infra. The pages are rebuilt as a NextJS frontend (pure clone, better tech) hosted on `powerrateindex.org` (S3 + CloudFront).

## Knowledge hierarchy

```
PRODUCT → ARCHITECTURE → TRACKING → PROJECT STATE → IMPLEMENTATION
```

## Monorepo layout

```
GHL/
├── web/          # NextJS frontend (static export → S3 + CloudFront)
├── gateway/      # backend (TBD — user will create)
├── ai/           # this folder — context for new sessions
└── package.json  # npm workspaces root
```

## Canonical documents

| Subject | Document |
|---|---|
| Product model | `ai/product/product-model.md` |
| Architecture | `ai/architecture/architecture.md` |
| Feature map | `ai/tracking/feature-map.md` |

**One source of truth per subject.** If a fact appears twice, the canonical doc wins.

## Project state

Current work, blockers, pending decisions live in `~/Project_State/D0045/` (not this repo). See `h5.notes.md`, `project.md`, `rules.md`.

## Key conventions (user-mandated)

- **Types** in `web/types/` — one file per domain, plain interfaces, barrel `index.ts`.
- **i18n** via `web/lib/i18n.ts` — `locales` const + `translations: Record<Locale, Record<string,string>>`, human-readable keys, never hardcode English.
- **Dummy data** in `web/data/` — `utilities.json` index + `rate-changes/{slug}.json`.
- **Static export** (`output: 'export'`) → S3 + CloudFront.
- **Extensible** — one `[utility]/page.tsx` driven by `generateStaticParams`, not N hardcoded pages.
