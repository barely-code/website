import { ImageResponse } from "next/og";
import { ogFonts, OG_FONT_FAMILY } from "./og-fonts";

// Favicon — generated, on-brand "<>" mark in brand violet on near-black.
// Edge runtime: avoids the Windows Node-runtime font-path bug in @vercel/og.
export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          color: "#818cf8",
          fontSize: 22,
          fontWeight: 700,
          fontFamily: OG_FONT_FAMILY,
          borderRadius: 6,
        }}
      >
        {"<>"}
      </div>
    ),
    { ...size, fonts: await ogFonts() },
  );
}
