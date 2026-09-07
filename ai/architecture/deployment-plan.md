# GHL — Deployment Plan (EIQ-GHL2)

> Ticket: **EIQ-GHL2** (deployment-exclusive)
> Owner: H5M (h5) · Account: EIQ_AWS (`515817635309`, profile `aws_eiq_vishal`)
> Status: **PLANNING** — read-only recon done, awaiting approval before any write.

## Decisions (user-confirmed)

| Item | Decision |
|---|---|
| Project name | **GHL** (not PowerRateIndex) |
| Resource suffix | **PRI-** (capital) |
| Hosting | **Amplify Hosting** (build + CI/CD + serving) |
| Serving | CloudFront-backed (Amplify's managed CloudFront — included, no extra cost) |
| Ticket | EIQ-GHL2 (deployment-exclusive) |
| Tags (all resources) | `Resource-Group=EIQ-Services`, `Resource-Person=EIQ-Vishal` |
| Environment | DEV (suffix on all names) |
| GitHub connection | **User performs** (after resources created) |
| Branch → env | `dev` → dev (default); `prod` → later (separate app/CloudFront) |
| Domain | Custom domain via CloudFront — **later** |

## Architecture (target)

```
GitHub EIQServices2/GHL
  ├─ dev branch  ──► Amplify app "GHL-PRI-dev"  ──► managed CloudFront ──► dev URL
  └─ prod branch ──► Amplify app "GHL-PRI-prod" ──► separate CloudFront ──► prod URL (later)
```

## Key facts (cost/simplicity)

- **Amplify Hosting already serves through CloudFront** — no separate distribution needed, no extra cost. This is the simplest + least-cost path.
- **No-cache caveat:** Amplify's managed CloudFront does NOT expose a full cache policy. No-cache is limited to `customHeaders.yml` (Cache-Control headers). If true no-cache becomes a hard requirement later, we add a standalone CloudFront in front (extra cost) or switch to S3+CloudFront.
- **Prod isolation:** separate Amplify app = separate managed CloudFront = separate domain. Matches "prod on different cloudfront."

## Phases

### Phase 0 — Prereqs (read-only, mostly done)
- [x] EIQ_AWS identity confirmed (`515817635309`)
- [x] Amplify reachable in `us-east-1` / `us-east-2` (us-west-2 SCP-denied)
- [x] Repo confirmed: monorepo, `web/` = NextJS 16.2.3, `output: export`
- [x] IAM: user `vishal` has `AdministratorAccess` + `AmazonEC2FullAccess` + `AWSLambda_FullAccess`
- [ ] ⚠️ **SCP check** — org SCP `p-s6dsy8z8` explicitly denies `amplify:*` in `us-west-2`; `simulate-principal-policy` also shows `explicitDeny` for `amplify:CreateApp`/`cloudfront:CreateDistribution`. `amplify:ListApps` *works* in us-east-1 (verified), so the deny is region/action-scoped — must confirm `CreateApp` succeeds in us-east-1 at create time (first write action will reveal it).
- [ ] (GitHub connection — user performs after Phase 1)

### Phase 1 — Amplify app (dev)
- Create app `GHL-PRI-dev` (us-east-1)
- Platform: WEB (static export, `baseDirectory=out`)
- Build settings: `appRoot=web`, build `npm run build`
- Tags: `Resource-Group=EIQ-Services`, `Resource-Person=EIQ-Vishal`
- **STOP** → user connects GitHub `EIQServices2/GHL` (dev branch)

### Phase 2 — Serving / no-cache
- Amplify managed CloudFront (default)
- `customHeaders.yml` for Cache-Control (no-cache) if needed

### Phase 3 — Domain (later)
- Custom domain via CloudFront/Amplify (dev subdomain TBD)
- ACM cert (DNS validation)

### Phase 4 — Verification
- Health check on Amplify dev URL
- Confirm tags on all resources
- Confirm build/deploy pipeline works (after user connects GitHub)

## Naming convention

| Resource | Name |
|---|---|
| Amplify app (dev) | `GHL-PRI-dev` |
| Amplify app (prod, later) | `GHL-PRI-prod` |

## Notes

- `powerrateindex.org` hosted zone is NOT in EIQ/CSE/AE/GC accounts — domain ownership unresolved (only matters for custom domain, not for `*.amplifyapp.com` dev URL).
- Repo currently `output: "export"` (static). Amplify Hosting supports this via `baseDirectory=out`.
- us-west-2 is SCP-denied → all resources in us-east-1.
