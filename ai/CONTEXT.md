# GHL — Project Context

> Quick orientation for new sessions. Full details in `~/Project_State/D0045/`.

## What is this?

Decommission GoHighLevel (GHL) and rebuild its TDU rate-change notification pages as a NextJS frontend on `powerrateindex.org`.

**Repo:** `~/EIQ-Projects/Repo-EIQ/GHL/` (branch `dev`)
**Remote:** `github-eiq:EIQServices2/GHL`

## Stack

- **Frontend:** Next.js 16.2.3 (App Router, static export), TypeScript, Tailwind CSS 4, shadcn/ui (radix-nova)
- **i18n:** `lib/i18n.ts` (en only for now, extensible)
- **Data:** dummy JSON in `web/data/` (no Firestore wiring yet)
- **Hosting:** S3 + CloudFront → `powerrateindex.org`

## Monorepo layout

```
GHL/
├── web/          # NextJS frontend (static export)
├── gateway/      # backend (TBD)
├── ai/           # this folder
└── package.json  # npm workspaces
```

## Pages

| Path | Description |
|---|---|
| `/` | Index — lists all utilities |
| `/[utility]` | Rate-change landing page (e.g. `/aepcentral`) |

## Utilities (6)

Oncor, CenterPoint, AEP Texas North, AEP Texas Central, TNMP, Lubbock Power & Light.

## Build / Deploy

```bash
npm install          # from repo root (workspaces)
npm run build        # builds web/ → web/out/
# deploy web/out/ to S3 + CloudFront (powerrateindex.org)
```

## Reference docs (in ~/Project_State/D0045/)

| File | Content |
|---|---|
| `project.md` | Project metadata, stack, architecture |
| `h5.notes.md` | Session coordination log |
| `rules.md` | Project-specific rules |
