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

## Demo form (AWS SES)

The **Request a demo** form (`/demo`) POSTs to the API route
[`app/api/demo/route.ts`](./app/api/demo/route.ts), which emails each
submission via **AWS SES**. Configure it with these environment variables (see
[`.env.example`](./.env.example)):

| Variable         | Purpose                                              |
| ---------------- | ---------------------------------------------------- |
| `SES_FROM_EMAIL` | Verified SES sender identity (email or domain)       |
| `DEMO_TO_EMAIL`  | Address that receives demo requests                  |
| `SES_REGION`     | SES region (falls back to `AWS_REGION`, `us-east-1`) |

Setup:

1. In **SES**, verify the sender identity used for `SES_FROM_EMAIL` (and the
   recipient too, while your account is in the **SES sandbox** — request
   production access to email arbitrary recipients).
2. Grant the runtime permission to send. On Amplify, attach an IAM policy with
   `ses:SendEmail` (and `ses:SendRawEmail`) to the app's **compute role** — no
   access keys needed. Locally, use your normal AWS credentials/profile.
3. Set `SES_FROM_EMAIL` and `DEMO_TO_EMAIL` in the Amplify console
   (**App settings → Environment variables**) and redeploy.

If the variables are unset the form fails gracefully with a "not configured"
message; the submitter never sees a raw error. A hidden honeypot field drops
obvious bot submissions.

## Notes on brand assets

The brand mark is recreated as clean vector art in `Logo.tsx` /
`public/procela-*.svg` (tile-grid icon + wordmark). Drop the official logo files
into `public/` and update `Logo.tsx` if the source artwork changes.
