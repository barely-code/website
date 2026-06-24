# Before launch — placeholders to fill in

Everything below is clearly marked `[TODO]` in the source. Nothing here is
fabricated — replace with real details before going live.

## Content

- **`content/about.ts`** — founder bios:
  - Vyom Narsana's bio (`[TODO: bio]`). Name + LinkedIn already filled in.
  - Samarth Vaghela's bio (`[TODO: bio]`). Name + LinkedIn already filled in.
- **`content/work.ts`** — The Laundry Mill case study (written, public-safe):
  - ⚠️ **Client sign-off:** confirm The Laundry Mill is happy to be featured by
    name/logo before the site goes live (and before pushing to a *public* repo).
    Until then, consider anonymising to "a Delhi-based doorstep laundry service".
  - "The result" currently says "Launching soon" — add real outcome metrics once
    the platform is live, and remove the `status: "Launching soon"` badge.
  - Add real screenshots once available (see Assets) — none shown yet (not live).
- **`content/site.ts`** — socials not ready yet:
  - `social.linkedin` — company LinkedIn URL (hidden until filled).

## Assets

- **The Laundry Mill screenshots** — drop real images into `public/` and swap the
  placeholder block inside `components/ScreenshotFrame.tsx` for a Next.js
  `<Image />`. The "selected work" preview on the homepage (`app/page.tsx`) also
  uses a placeholder tile.
- **Favicon / OG image** — currently generated on-brand placeholders
  (`app/icon.tsx`, `app/opengraph-image.tsx`). Replace if you commission a logo.

## Email delivery

- **`app/api/contact/route.ts`** — `// TODO: wire Resend`. Install `resend`,
  add `RESEND_API_KEY` to the environment, and uncomment the send block.
  (Contact email is `hello.barelycode@gmail.com`; WhatsApp +91 83205 36581.)

## Domain / deploy

- Point `barelycode.in` at the Vercel project.
- Confirm `site.url` in `content/site.ts` matches the live URL (used for
  canonical/OG/sitemap). Currently `https://barelycode.in`.
