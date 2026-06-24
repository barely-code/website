import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Generated OG/social image — dark, technical, on-brand. No binary asset needed.
export default function OpengraphImage() {
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
            "radial-gradient(60% 60% at 50% 0%, rgba(0,229,153,0.12) 0%, rgba(0,229,153,0) 70%)",
          padding: "72px",
          fontFamily: "monospace",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, color: "#00e599" }}>
          {"<BarelyCode />"}
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
              color: "#00e599",
              letterSpacing: "-0.03em",
            }}
          >
            More outcomes.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#a1a1aa" }}>
          A two-person software studio that ships fast · {site.domain}
        </div>
      </div>
    ),
    { ...size },
  );
}
