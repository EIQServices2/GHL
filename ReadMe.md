# GHL

EIQ-GHL1 — Decommission GoHighLevel (GHL) and rebuild its TDU rate-change notification pages as a NextJS frontend on `powerrateindex.org`.

## Monorepo

```
GHL/
├── web/          # NextJS frontend (static export → Amplify + CloudFront)
├── gateway/      # backend (TBD)
├── ai/           # AI documentation (README.md, CONTEXT.md)
└── package.json  # root scripts
```

## Quick start

```bash
npm install      # from repo root
npm run dev      # start web/ dev server
npm run build    # build web/ → web/out/
```

## Docs

- `ai/README.md` — knowledge index (read first)
- `ai/CONTEXT.md` — quick orientation for new sessions
- `~/Project_State/D0045/` — project state (h5.notes.md, project.md, rules.md)
