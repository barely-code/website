import { ImageResponse } from "next/og";
import { site } from "@/content/site";
import { ogFonts, OG_FONT_FAMILY } from "./og-fonts";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
// Edge runtime: avoids the Windows Node-runtime font-path bug in @vercel/og.
export const runtime = "edge";

// Generated OG/social image — dark, technical, on-brand. No binary asset needed.
export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0a",
          backgroundImage:
            "radial-gradient(60% 60% at 50% 0%, rgba(129,140,248,0.16) 0%, rgba(129,140,248,0) 70%)",
          padding: "72px",
          fontFamily: OG_FONT_FAMILY,
        }}
      >
        <div style={{ display: "flex", fontSize: 30 }}>
          <span style={{ color: "#818cf8" }}>{"</> "}</span>
          <span style={{ color: "#ededed" }}>barely</span>
          <span style={{ color: "#818cf8" }}>code</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 92,
              fontWeight: 800,
              color: "#ededed",
              letterSpacing: "-0.03em",
            }}
          >
            Less code.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 92,
              fontWeight: 800,
              color: "#818cf8",
              letterSpacing: "-0.03em",
            }}
          >
            More outcomes.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#a1a1aa" }}>
          AI agents &amp; automations, shipped in days · {site.domain}
        </div>
      </div>
    ),
    { ...size, fonts: await ogFonts() },
  );
}
