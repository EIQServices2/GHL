# GHL — Knowledge Index

> Entry point for understanding the GHL decommission project. Read this first.

## What is this project?

Decommission GoHighLevel (GHL) and migrate its TDU rate-change notification pages to our own infra. The pages are rebuilt as a NextJS frontend (pure clone, better tech) hosted on `powerrateindex.org` (S3 + CloudFront / Amplify).

## Knowledge hierarchy

```
ARCHITECTURE → REFERENCE → PROJECT STATE → IMPLEMENTATION
```

## Monorepo layout

```
GHL/
├── web/          # NextJS frontend (static export → S3 + CloudFront / Amplify)
├── gateway/      # backend (TBD — user will create)
├── ai/           # this folder — context for new sessions
└── package.json  # npm workspaces root
```

## Canonical documents

| Subject | Document |
|---|---|
| Architecture | `ai/architecture/architecture.md` |
| Deployment plan | `ai/architecture/deployment-plan.md` |
| Ditto-clone spec | `ai/reference/ghl-ditto-spec.md` |
| Source HTML (GHL) | `ai/reference/ghl-aepcentral-source.html` |

**One source of truth per subject.** If a fact appears twice, the canonical doc wins.

## Project state

Current work, blockers, pending decisions live in `~/Project_State/D0045/` (not this repo). See `h5.notes.md`, `project.md`, `rules.md`.

## Key conventions (user-mandated)

- **Types** in `web/types/` — one file per domain, plain interfaces, barrel `index.ts`.
- **i18n** via `web/lib/i18n.ts` — `locales` const + `translations: Record<Locale, Record<string,string>>`, human-readable keys, never hardcode English.
- **Dummy data** in `web/data/` — `home.json` + `utilities.json` + `rate-changes/{slug}.json`.
- **Static export** (`output: 'export'`) → S3 + CloudFront / Amplify.
- **Extensible** — one `[utility]/page.tsx` driven by `generateStaticParams`, not N hardcoded pages.
- **4-layer architecture** — page → sections → components → elements (see `architecture.md`).
- **Work in isolated worktree** — never modify the main checkout directly (project rule).

## Branches

| Branch | Purpose |
|---|---|
| `dev` | Integration branch (user-managed) |
| `develop/pri-wip-v2.0.0` | H5M WIP (isolated worktree) |
| `prod` | Production (later) |
