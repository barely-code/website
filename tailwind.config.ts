import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Near-black canvas + layered surfaces
        bg: "#0a0a0a",
        surface: "#0f0f0f",
        elevated: "#141414",
        border: "#1f1f1f",
        "border-strong": "#2a2a2a",
        // Text
        fg: "#ededed",
        muted: "#a1a1aa",
        faint: "#71717a",
        // Accent — drawn from the logo's violet→blue gradient
        accent: "#818cf8",
        "accent-dim": "#6366f1",
        // Gradient endpoints for the brand wordmark
        "brand-from": "#a78bfa",
        "brand-to": "#5b8def",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "72rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        blink: "blink 1.1s step-end infinite",
      },
    },
  },
  plugins: [],
};

export default config;
