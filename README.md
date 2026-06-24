# BarelyCode — Website

Marketing site for **BarelyCode**, a two-person software studio.
_Less code. More outcomes._

Built with **Next.js (App Router) + TypeScript + Tailwind CSS**. Dark, technical,
developer-tool aesthetic. Deployable to Vercel with zero config.

---

## Stack

- **Next.js 15** (App Router, React 19)
- **TypeScript** (strict)
- **Tailwind CSS 3**
- **next/font** — Inter (sans) + JetBrains Mono (mono)
- **next/og** — generated favicon + OpenGraph/Twitter image (no binary assets)
- No UI libraries, no animation libraries — scroll reveals use a tiny
  `IntersectionObserver` component.

## Run locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # next lint
```

## Deploy to Vercel

1. Push this repo to GitHub (already wired to `barely-code/website`).
2. In [Vercel](https://vercel.com/new), **Import** the repo. Framework
   auto-detects as **Next.js** — no config needed.
3. Deploy. That's it.
4. Add the domain `barelycode.in` under **Project → Settings → Domains**.
5. When you wire email (see below), add `RESEND_API_KEY` under
   **Project → Settings → Environment Variables**, then redeploy.

## Project structure

```
app/
  layout.tsx            # root layout: fonts, SEO metadata, JSON-LD, nav, footer
  page.tsx              # Home
  services/page.tsx     # Services
  work/page.tsx         # Work / case studies
  about/page.tsx        # About
  contact/page.tsx      # Contact (form)
  api/contact/route.ts  # Contact API route (stubbed email — see TODO)
  sitemap.ts            # /sitemap.xml
  robots.ts             # /robots.txt
  icon.tsx              # generated favicon
  opengraph-image.tsx   # generated OG image
  twitter-image.tsx     # reuses the OG image
  not-found.tsx         # branded 404
components/             # Nav, Footer, Reveal, ContactForm, cards, etc.
content/                # ALL editable copy lives here (see below)
```

## Editing content

You don't need to touch JSX to change copy. Everything lives in `content/`:

| File                  | Controls                                            |
| --------------------- | --------------------------------------------------- |
| `content/site.ts`     | Brand name, tagline, email, domain, nav, footer     |
| `content/home.ts`     | Hero, "how we work", "why", closing CTA             |
| `content/services.ts` | The six service cards                               |
| `content/work.ts`     | Case studies (add #2, #3 by appending to the array) |
| `content/about.ts`    | Manifesto + founder bios                            |

Brand colors and fonts are in `tailwind.config.ts` and `app/globals.css`.

## Wiring the contact email

The form (`components/ContactForm.tsx`) submits directly to **Web3Forms** from the
browser (free, no domain/DNS setup), delivering each enquiry to
`hello.barelycode@gmail.com` with the sender as reply-to. When no key is set it falls
back to `app/api/contact/route.ts`, which validates and **logs** so the flow stays
testable.

To turn on real delivery:

1. Go to <https://web3forms.com>, enter `hello.barelycode@gmail.com`, and copy the
   access key it emails you (no account needed).
2. Add it to `.env.local` (see `.env.example`):
   ```
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-key-here
   ```
3. Add the same variable in **Vercel → Settings → Environment Variables**, then redeploy.
4. (Recommended) In the Web3Forms dashboard, restrict the key to your domain and enable
   spam protection — the key is public by design, so lock it down there.

No credentials are invented or committed. To use a branded from-address instead
(e.g. Resend on the `barelycode.in` domain), do the send server-side in the API route
and point the form back at `/api/contact`.

## Accessibility & SEO

- Semantic HTML, keyboard-navigable, visible focus rings, skip-to-content link.
- WCAG AA contrast on the dark palette; `prefers-reduced-motion` respected.
- Per-page `<title>` / meta description, OpenGraph + Twitter tags,
  `sitemap.xml`, `robots.txt`, and JSON-LD `Organization` schema on the homepage.

## Before launch — fill in the `[TODO]` placeholders

See **`TODO.md`** for the full list of placeholders to replace before going live.
```
```
