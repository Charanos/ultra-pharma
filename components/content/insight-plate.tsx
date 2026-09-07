import type { Insight } from "@/content/insights";
import type { IconName } from "@/lib/icons";
import { FigurePlate, type PlateField, type PlateTone } from "./figure-plate";
import { cn } from "@/lib/utils";

/**
 * The cover of an article, drawn rather than photographed.
 *
 * Four categories, four covers, and deliberately **not** the four pathway
 * marks. An article about reimbursement is a piece of writing about a subject,
 * not the reimbursement service, and putting the service mark on its cover
 * would quietly claim that it is. Keeping the families apart also leaves the
 * pathway marks meaning exactly one thing each, which is the whole point of
 * `04 §9`.
 *
 * Field and paper vary with the category too, which is what keeps a grid of
 * four cards from reading as one tile repeated.
 */
const covers: Record<
  Insight["category"],
  { icon: IconName; field: PlateField; tone: PlateTone }
> = {
  Reimbursement: { icon: "topicReimbursement", field: "ledger", tone: "wash" },
  Policy: { icon: "topicPolicy", field: "grid", tone: "sunk" },
  Approval: { icon: "topicApproval", field: "hatch", tone: "raised" },
  "Market entry": { icon: "topicMarketEntry", field: "graticule", tone: "sunk" },
};

/**
 * The mark for a category, so a pill or a byline can carry the same one its
 * cover does. One subject, one mark, wherever it appears.
 */
export function topicMark(category: Insight["category"]): IconName {
  return covers[category].icon;
}

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
