# GHL — Deployment Plan (EIQ-GHL2)

> Ticket: **EIQ-GHL2** (deployment-exclusive)
> Owner: H5M (h5) · Account: EIQ_AWS (`515817635309`, profile `aws_eiq_vishal`)
> Status: **DEV DEPLOYED** — prod deferred (user said prod later)

## Decisions (user-confirmed)

| Item | Decision |
|---|---|
| Project name | **GHL** (not PowerRateIndex) |
| Resource suffix | **PRI-** (capital) |
| Hosting | **Amplify Hosting** (build + CI/CD + serving) |
| Serving | CloudFront-backed (Amplify's managed CloudFront — included, no extra cost) |
| Ticket | EIQ-GHL2 (deployment-exclusive) |
| Tags (all resources) | `Resource-Group=EIQServices`, `Resource-Person=Vishal` (exact values, no hyphens) |
| Environment | DEV (suffix on all names) |
| GitHub connection | **User performs** (after resources created) |
| Branch → env | `dev` → dev (default); `prod` → later (separate app/CloudFront) |
| Domain | Custom domain via CloudFront — **later** |

## Architecture (target)

```
GitHub EIQServices2/GHL
  ├─ dev branch  ──► Amplify app "GHL-PowerRateIndex"  ──► managed CloudFront ──► dev URL
  └─ prod branch ──► Amplify app (prod) ──► separate CloudFront ──► prod URL (later)
```

## Resources created (dev)

- **Amplify app:** `GHL-PowerRateIndex` (appId `d3vs9tepwepcng`, WEB, us-east-1)
  - defaultDomain: `d3vs9tepwepcng.amplifyapp.com`
  - dev URL: `https://dev.d3vs9tepwepcng.amplifyapp.com`
- **IAM service role:** `EIQS-Amplify-GHL-PRI-ServiceRole`
  - ARN: `arn:aws:iam::515817635309:role/EIQS-Amplify-GHL-PRI-ServiceRole`
  - Trust: `amplify.amazonaws.com`; Policy: `AdministratorAccess-Amplify` (AWS managed)
- **Repository connected:** `https://github.com/eiqservices2/ghl` (clone method TOKEN)
- **Branches:** `dev` (stage NONE), `prod` (stage PRODUCTION), both auto-build ON

## Build spec (the key change)

- Root cause of failures: Amplify monorepo mode requires `applications:` format in `amplify.yml`
- Decoupled `web/` from npm workspaces → own `package-lock.json` + `node_modules`
- Root `amplify.yml` (applications format): `appRoot: web`, `npm ci` → `npm run build`, output `out`
- Removed old single-app `web/amplify.yml`
- Root `package.json` scripts now use `--prefix web` (not `--workspace=web`)

## Deploy status

- **dev:** SUCCEED (job 5, commit 05e9793) — HTTP 200, title "PowerRateIndex | Retail Energy Pricing & Competitive Analysis"
- **prod:** FAILED (job 1, old monorepo spec error) — needs same fix pushed to prod (deferred)

## Amplify console settings (for reference)

- Monorepo root: `/web` (console checkbox → `AMPLIFY_MONOREPO_APP_ROOT=/web`)
- Build command: `npm run build`
- Output directory: `out`
- SSR: DISABLED (static export, not SSR)
- Full-stack deploys: UNCHECK (no backend)

## Pending

- Push deployment fix to `prod` branch (deferred — user said prod later).
- CloudFront standalone distribution + no-cache policy (deferred — needs domain).
- Custom domain (dev subdomain) + ACM cert (later).

## Notes

- `powerrateindex.org` hosted zone is NOT in EIQ/CSE/AE/GC accounts — domain ownership unresolved (only matters for custom domain, not for `*.amplifyapp.com` dev URL).
- Repo `output: "export"` (static). Amplify Hosting supports this via `baseDirectory=out`.
- us-west-2 is SCP-denied → all resources in us-east-1.
