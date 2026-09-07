import {
  GlobeHemisphereEast,
  Scales,
  SealCheck,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";
import type { ElementType } from "react";
import type { Insight } from "@/content/insights";
import { FigurePlate, type PlateField, type PlateTone } from "./figure-plate";
import { cn } from "@/lib/utils";

/**
 * The cover of an article, drawn rather than photographed.
 *
 * Four categories, four covers. The icon is the same one that labels the
 * matching pathway stage elsewhere on the site, so the mark a reader learns on
 * the homepage still means the same thing on an article card. Field and paper
 * vary with it, which is what keeps a grid of four cards from reading as one
 * repeated tile.
 */
const covers: Record<
  Insight["category"],
  { icon: ElementType; field: PlateField; tone: PlateTone }
> = {
  Reimbursement: { icon: Scales, field: "ledger", tone: "wash" },
  Policy: { icon: UsersThree, field: "grid", tone: "sunk" },
  Approval: { icon: SealCheck, field: "hatch", tone: "raised" },
  "Market entry": { icon: GlobeHemisphereEast, field: "graticule", tone: "sunk" },
};

export function InsightPlate({
  post,
  size = "card",
  className,
}: {
  readonly post: Insight;
  /** `card` in a grid, `feature` the cover on the featured article. */
  readonly size?: "card" | "feature";
  readonly className?: string;
}) {
  const cover = covers[post.category];

  return (
    <FigurePlate
      icon={cover.icon}
      field={cover.field}
      tone={cover.tone}
      aspect={size === "card" ? "16/9" : "4/5"}
      /* The card's own meta row already names the category. A larger plate
         carries the label itself, because at that size it needs an anchor. */
      label={size === "card" ? undefined : post.category}
      markSize={size === "card" ? 200 : 260}
      className={cn("rounded-none shadow-none", className)}
    />
  );
}
