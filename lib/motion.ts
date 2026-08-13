/**
 * Motion tokens, matching the CSS in `globals.css` so a GSAP tween and a CSS
 * transition on the same element never disagree.
 */
export const DUR = {
  fast: 0.16,
  base: 0.24,
  slow: 0.4,
  slower: 0.7,
} as const;

/** The CSS `--ease-out` curve, as GSAP understands it. */
export const EASE_OUT = "cubic-bezier(0.16, 1, 0.3, 1)";
export const EASE_STANDARD = "cubic-bezier(0.2, 0, 0, 1)";

/** 60ms between children, capped at six, per `03 §5`. */
export const STAGGER = { each: 0.06, from: "start" as const };
export const STAGGER_CAP = 6;

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
