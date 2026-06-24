import { ImageResponse } from "next/og";

// Favicon — generated, on-brand "<>" mark in accent green on near-black.
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          color: "#00e599",
          fontSize: 22,
          fontWeight: 700,
          fontFamily: "monospace",
          borderRadius: 6,
        }}
      >
        {"<>"}
      </div>
    ),
    { ...size },
  );
}
