/**
 * Fonts for the generated favicon / OG images.
 *
 * next/og's default font loader builds an invalid `file:` URL on Windows
 * (ERR_INVALID_URL on noto-sans...ttf) under the Node runtime, which 500s the
 * image routes. The image routes therefore run on the edge runtime, where we
 * load the vendored GeistMono files via `fetch(new URL(...))` — the official
 * next/og pattern for bundling a local font. GeistMono keeps the OG art's
 * on-brand monospace look and provides a full weight range (400/700/800).
 */
export const OG_FONT_FAMILY = "Geist Mono";

export async function ogFonts() {
  const [regular, bold, black] = await Promise.all([
    fetch(new URL("../assets/fonts/GeistMono-Regular.ttf", import.meta.url)).then(
      (r) => r.arrayBuffer(),
    ),
    fetch(new URL("../assets/fonts/GeistMono-Bold.ttf", import.meta.url)).then(
      (r) => r.arrayBuffer(),
    ),
    fetch(new URL("../assets/fonts/GeistMono-Black.ttf", import.meta.url)).then(
      (r) => r.arrayBuffer(),
    ),
  ]);

  return [
    { name: OG_FONT_FAMILY, data: regular, weight: 400 as const, style: "normal" as const },
    { name: OG_FONT_FAMILY, data: bold, weight: 700 as const, style: "normal" as const },
    { name: OG_FONT_FAMILY, data: black, weight: 800 as const, style: "normal" as const },
  ];
}
