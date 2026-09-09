# GHL — Deployment Plan (EIQ-GHL2)

> Ticket: **EIQ-GHL2** (deployment-exclusive)
> Status: **DEV DEPLOYED** — prod deferred

## Decisions

| Item | Decision |
|---|---|
| Project name | **GHL** (not PowerRateIndex) |
| Resource suffix | **PRI-** (capital) |
| Hosting | **Amplify Hosting** (build + CI/CD + serving) |
| Serving | CloudFront (standalone, no-cache) |
| Ticket | EIQ-GHL2 (deployment-exclusive) |
| Environment | DEV (suffix on all names) |
| Branch → env | `dev` → dev (default); `prod` → later |
| Domain | Custom domain via CloudFront — later |

## Architecture

```
GitHub EIQServices2/GHL
  ├─ dev branch  ──► Amplify app ──► CloudFront (dev)
  └─ prod branch ──► Amplify app ──► CloudFront (prod, later)
```

## CloudFront

- **DEV:** `https://d3mum7bh9mb6m5.cloudfront.net` (no-cache)
- **PROD:** not yet set up

## Build spec

- Root `amplify.yml` (applications format): `appRoot: web`, `npm ci` → `npm run build`, output `out`
- `web/` is independent (own `package-lock.json` + `node_modules`)

## Pending

- CloudFront PROD distribution
- Custom domain + ACM cert
- `/api/*` behavior → backend (later)
