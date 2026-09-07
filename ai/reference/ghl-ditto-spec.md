# GHL AEP Central — Ditto-Clone Spec (kimi-k3 audit)

Source: `ai/reference/ghl-aepcentral-source.html`

## Globals
- Font: `Plus Jakarta Sans` (single family, headline + content)
- Colors: `--white` #ffffff, `--black` #000000, `--gray` #cbd5e0
- `--color-mcmavs6f` = #221A76 (navy — hero + CTA bg)
- `--color-m4ad474b` = #FFFFFFE6 (header bg)
- `--color-mcl11j68` = #F1F4FA (footer bg)
- `--color-m4aaqoj9` = #252525 (footer text)

## Sections (DOM order)
1. **Header** `LzHRYt-Xvw` — bg #FFFFFFE6, shadow `0 1px 3px 0 #03004717`, padding 10px 0. Logo `image-OXojOxOq0T` (68644f), col 60.5% width.
2. **Hero mobile** `JvWIOpHOh_` — `mobile-only tablet-hide`, bg image 689a4a (marketing laptop), bgCover100.
3. **Hero desktop** `EjUrkJcvV6` — `desktop-only`, bg #221A76, bg image 689a4b (hero-wide), bgCover100. Heading `heading-AyX3MwL1dx` = 48px (mobile 32px), #ffffff, fw400, letter-spacing -1px, text-align left. Paragraph `paragraph-uqyxdjN_ae` = 20px.
4. **Rates** `STUSQVbz4k` — bg #ffffff, padding 80px 0. Desktop row `row-D2Ul3br9l-` width 70%, padding `0 0 40px`:
   - `col-z0KVTCzeI7` (41.1%): sub-heading "Previous Rate" #171717 20px fw600 center; counter `5.7824¢/kWh` 44px fw700 #171717 (mobile 30px)
   - `col-AG0ROpgGJA` (42.8%): sub-heading "Current"; counter `5.7554¢/kWh` 44px fw700 **#624BFF** (purple)
   - Arrow icon `image-Zv3dnij_iW` (6942ee) between them
   - "Updated as of September 1, 2026" paragraph
   - "Why It Matters" heading + body + 3 checkmarks
5. **CTA** `e-Pnk76BjC` — bg #221A76, padding 60px 0 40px. Sub-heading "EXPERIENCE IT FOR FREE" + heading "Start monitoring smarter today." (48px). Button `button-OHkhGQRus5` = "Start 30-day free trial", action **openPopup** (popup `KAtMabSoGZ`, 720px contact form). Dashboard screenshot `image-HMKa2ymSLM` (686795af) = **img width 80%, centered, margin-top 20px** (NOT background).
6. **Footer** `I1KZBFhshM` — bg #F1F4FA, padding 20px 0 32px. Row width 80%:
   - `col-ZO_dctuqim` (62.3%): logo (68644f, 180px) + "Powered by EIQdigital" badge (6865a2, 164px)
   - `col-UXyGBzmAFp` (37.7%): "2025 © EIQdigital. All Rights Reserved." + tagline

## Media files
| ID | Use |
|---|---|
| 68644f | logo (header + footer) |
| 6865a2 | "Powered by EIQdigital" badge (footer) |
| 686795af | dashboard screenshot (CTA, img 80%) |
| 686bee1f | NOT used in this page |
| 689a4a | marketing laptop (hero mobile bg) |
| 689a4b | hero-wide (hero desktop bg) |
| 6942ee | arrow icon (rates) |
