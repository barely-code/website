import type { Screenshot } from "@/content/work";

const ratioClass: Record<NonNullable<Screenshot["ratio"]>, string> = {
  wide: "aspect-[16/10]",
  tall: "aspect-[4/5]",
  square: "aspect-square",
};

/**
 * Clean, framed image placeholder — a faux browser chrome with a dot-grid fill.
 * Swap the inner block for a real <Image /> when screenshots are ready.
 */
export function ScreenshotFrame({ shot }: { shot: Screenshot }) {
  return (
    <figure className="overflow-hidden rounded-xl border border-border bg-surface">
      {/* faux window chrome */}
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
        <span className="ml-3 font-mono text-[11px] text-faint">
          {/* [TODO: replace placeholder with real screenshot] */}
          preview.png
        </span>
      </div>
      <div
        className={`bg-dotgrid flex items-center justify-center ${
          ratioClass[shot.ratio ?? "wide"]
        }`}
      >
        <span className="font-mono text-xs text-faint">[ screenshot ]</span>
      </div>
      <figcaption className="border-t border-border px-4 py-3 text-sm text-muted">
        {shot.caption}
      </figcaption>
    </figure>
  );
}
