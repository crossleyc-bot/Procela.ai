# Procela.ai

Marketing site for **Procela** — the enterprise data governance orchestration
platform. Built with **Next.js 14 (App Router)**, **TypeScript**, and
**Tailwind CSS**, and deployed on **AWS Amplify**.

## Tech stack

- **Next.js 14** — App Router, React Server Components, statically prerendered
- **TypeScript**
- **Tailwind CSS** — brand tokens configured in `tailwind.config.ts`
- **next/font** — self-hosted Inter + JetBrains Mono (no external font requests)

## Brand

| Token           | Value     |
| --------------- | --------- |
| `--navy`        | `#0D1F17` |
| `--green`       | `#4A8C6A` |
| `--green-light` | `#70C090` |

Primary typeface: **Inter**. Monospace accents: **JetBrains Mono**.

## Project structure

```
app/
  layout.tsx        # Root layout, fonts, metadata / SEO
  page.tsx          # Homepage (server component)
  globals.css       # Brand tokens + component styles (Tailwind layers)
components/
  Logo.tsx          # Inline-SVG brand mark (renders wordmark in Inter)
  PlatformTabs.tsx  # Interactive platform tabs (client component)
  Faq.tsx           # Interactive FAQ accordion (client component)
public/
  procela-logo.svg              # Full logo (icon + wordmark), vector
  procela-icon.svg              # Icon-only mark (favicon)
  procela_logo_transparent.png  # Raster logo, transparent background
amplify.yml         # AWS Amplify build spec
```

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
```

## Production build

```bash
npm run build
npm run start
```

## Deploying to AWS Amplify

1. In the AWS Amplify console, **create a new app → Host a web app** and connect
   this GitHub repository / branch.
2. Amplify auto-detects Next.js. The included [`amplify.yml`](./amplify.yml)
   defines the build (`npm ci` → `npm run build`), artifact directory (`.next`),
   and caches `node_modules` and `.next/cache`.
3. Amplify provisions the Next.js **SSR (WEB_COMPUTE)** runtime automatically —
   no extra configuration required.
4. Save and deploy. Add your custom domain (`procela.ai`) under
   **App settings → Domain management**.

## Notes on brand assets

The brand mark is recreated as clean vector art in `Logo.tsx` /
`public/procela-*.svg` (tile-grid icon + wordmark). Drop the official logo files
into `public/` and update `Logo.tsx` if the source artwork changes.
