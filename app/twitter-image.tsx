// Reuse the OpenGraph image for the Twitter/X card.
// `runtime` is route-segment config read via per-file static analysis, so it
// must be declared here directly — a re-export from opengraph-image isn't
// picked up, and the Node runtime breaks the font fetch during prerender.
export const runtime = "edge";
export { default, alt, size, contentType } from "./opengraph-image";
