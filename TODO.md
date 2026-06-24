# Before launch — placeholders to fill in

Everything below is clearly marked `[TODO]` in the source. Nothing here is
fabricated — replace with real details before going live.

## Content

- **`content/site.ts`**
  - `social.linkedin` — real LinkedIn company URL (currently a guess).
- **`content/about.ts`**
  - Vyom's bio (`[TODO: bio]`) + optional LinkedIn.
  - Samarth's bio (`[TODO: bio]`) + optional LinkedIn.
- **`content/work.ts`** — Dr Diet case study:
  - The client — one-line description of the practice.
  - What we built — actual deliverables (site, booking, etc.).
  - The result — a real metric/outcome.
  - Replace the screenshot placeholders with real images (see below).

## Assets

- **Dr Diet screenshots** — drop real images into `public/` and swap the
  placeholder block inside `components/ScreenshotFrame.tsx` for a Next.js
  `<Image />`. The "selected work" preview on the homepage (`app/page.tsx`) also
  uses a placeholder tile.
- **Favicon / OG image** — currently generated on-brand placeholders
  (`app/icon.tsx`, `app/opengraph-image.tsx`). Replace if you commission a logo.

## Email delivery

- **`app/api/contact/route.ts`** — `// TODO: wire Resend`. Install `resend`,
  add `RESEND_API_KEY` to the environment, and uncomment the send block.

## Domain / deploy

- Point `barelycode.in` at the Vercel project.
- Confirm `site.url` in `content/site.ts` matches the live URL (used for
  canonical/OG/sitemap). Currently `https://barelycode.in`.
