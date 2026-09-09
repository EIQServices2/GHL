# GHL — Project Context

> Quick orientation for new sessions. Full details in `~/Project_State/D0045/`.

## What is this?

Decommission GoHighLevel (GHL) and rebuild its TDU rate-change notification pages as a NextJS frontend on `powerrateindex.org`.

**Repo:** `~/EIQ-Projects/Repo-EIQ/GHL/` (branch `dev`)
**WIP worktree:** `~/EIQ-Projects/Repo-EIQ/GHL-pri-wip-v2.0.0/` (branch `develop/pri-wip-v2.0.0`)
**Remote:** `github-eiq:EIQServices2/GHL`

## Stack

- **Frontend:** Next.js 16.2.3 (App Router, static export), TypeScript, Tailwind CSS 4, shadcn/ui (radix-nova), lucide-react
- **i18n:** `lib/i18n.ts` (en + es locales, `{var}` interpolation)
- **Data:** JSON in `web/data/` served through single `getData()` accessor (no Firestore wiring yet)
- **Hosting:** S3 + CloudFront / Amplify → `powerrateindex.org`

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
| `/` | Home — ditto clone of powerrateindex.org (hero + stats + features + platform + contact) |
| `/[utility]` | Rate-change landing page (e.g. `/aepcentral`) |
| `/login` | Login page (ditto clone, UI only — not wired to Cognito yet) |
| `/reset-password` | Reset-password page (UI only) |
| `/sitemap.xml` | Sitemap (home + 6 utilities + login + reset-password) |
| `/robots.txt` | Robots (allow all + sitemap ref) |

Shared chrome (Header + UtilityLinksSection + FooterSection) renders in `layout.tsx` on every page.

## Utilities (6)

Oncor, CenterPoint, AEP Texas North, AEP Texas Central, TNMP, Lubbock Power & Light.

## Build / Deploy

```bash
npm install          # from repo root (workspaces)
npm run build        # builds web/ → web/out/
# deploy web/out/ to S3 + CloudFront / Amplify (powerrateindex.org)
```

## Auth (login / reset-password)

UI-only ditto clones for now. Live site uses AWS Amplify Auth (Cognito). Endpoints captured in `data/site.json` → `auth` (API base, user pool `us-east-2_sTXcVV4cC`, web client `2f3qaqno4o6faa90j0tvjos2fe`). Wiring later = client-side Amplify Auth (static export has no server).

## Reference docs (in ~/Project_State/D0045/)

| File | Content |
|---|---|
| `project.md` | Project metadata, stack, architecture |
| `h5.notes.md` | Session coordination log |
| `rules.md` | Project-specific rules |
