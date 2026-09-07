import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * The drawing ground. Each field has one job, so a page never repeats the same
 * ruling twice in a row: `grid` for anything structural, `ledger` for anything
 * documentary, `graticule` for place, `hatch` for texture.
 */
export type PlateField = "grid" | "ledger" | "graticule" | "hatch";

/** Which paper the plate is printed on. `deep` is the inverted band only. */
export type PlateTone = "sunk" | "raised" | "wash" | "deep";

/**
 * Aspect comes from a class rather than an inline style. The motion layer
 * clears inline styles on `[data-media-in]` when a visitor has reduced motion
 * set, and a plate has no intrinsic size to fall back on the way an image
 * does, so an inline ratio would collapse the slot for exactly those visitors.
 */
const aspects = {
  "16/9": "aspect-[16/9]",
  "5/2": "aspect-[5/2]",
  "3/2": "aspect-[3/2]",
  "4/3": "aspect-[4/3]",
  "4/5": "aspect-[4/5]",
  "1/1": "aspect-square",
} as const;

export type PlateAspect = keyof typeof aspects;

export type FigurePlateProps = {
  /** A Phosphor icon, rendered duotone at watermark weight. `04 §9`. */
  readonly icon: ElementType;
  /** Mono eyebrow. The category this plate stands for. */
  readonly label?: string;
  /** Mono index, set at figure size. Only where the thing is numbered. */
  readonly index?: string;
  /** One display line. Never a sentence, never a repeat of the card's heading. */
  readonly title?: string;
  /** Mono footer line, for a checkable value: a date, a coordinate, a count. */
  readonly note?: string;
  /** Anything else the caller needs in the foreground, below the title. */
  readonly children?: ReactNode;
  /** Matches the aspect of the slot the plate stands in, so nothing reflows. */
  readonly aspect?: PlateAspect;
  readonly field?: PlateField;
  readonly tone?: PlateTone;
  /** Watermark size. Scales with the plate, not with the type. */
  readonly markSize?: number;
  readonly className?: string;
};

/**
 * A plate: the typographic answer to an image slot.
 *
 * It occupies the geometry a photograph occupied and carries the same visual
 * weight, but it is made of the system's own materials rather than of a
 * stranger's photograph. Nothing here is decorative for its own sake. The icon
 * labels the category, the index numbers the stage, the note carries a fact.
 */
export function FigurePlate({
  icon: Icon,
  label,
  index,
  title,
  note,
  children,
  aspect,
  field = "grid",
  tone = "sunk",
  markSize = 240,
  className,
}: FigurePlateProps) {
  return (
    <div
      data-slot="figure-plate"
      data-media-in
      className={cn("plate", `plate-${tone}`, aspect && aspects[aspect], className)}
    >
      <span aria-hidden className={cn("plate-field", `plate-field-${field}`)} />
      <Icon
        aria-hidden
        weight="duotone"
        size={markSize}
        className="plate-mark"
      />

      <div className="plate-body">
        <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
          {label && (
            <span className="t-label font-mono uppercase tracking-[0.14em] text-[0.6875rem] text-[color:var(--plate-label)]">
              {label}
            </span>
          )}
          {index && (
            <span className="font-mono text-[1.75rem] font-light leading-none text-[color:var(--plate-numeral)]">
              {index}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-3">
          {title && (
            <p className="m-0 max-w-[22ch] font-display text-[1.375rem] font-medium leading-[1.28] tracking-[-0.01em] text-balance">
              {title}
            </p>
          )}
          {children}
          {note && (
            <span className="t-data text-[0.75rem] text-[color:var(--plate-label)]">
              {note}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
