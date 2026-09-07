import type { IconWeight } from "@phosphor-icons/react";
import { icons, type IconName } from "@/lib/icons";

export type MarkProps = {
  /** A concept from the registry, never a Phosphor component directly. */
  readonly name: IconName;
  readonly size?: number;
  /**
   * Weight is tied to role, not picked at random: `duotone` for decorative
   * badges and watermarks, `bold` for small inline utility marks, `regular`
   * everywhere else. `03 §8`.
   */
  readonly weight?: IconWeight;
  readonly className?: string;
};

/**
 * Renders a registry mark by name.
 *
 * Going through the registry rather than importing a Phosphor component
 * directly is what keeps `04 §9` true: a concept resolves to one mark, and the
 * uniqueness guard can see every binding in one file.
 *
 * Always decorative. Every caller so far pairs the mark with a visible text
 * label, so it is hidden from assistive technology; a mark that ever has to
 * carry meaning alone needs a label at the call site, not here.
 */
export function Mark({
  name,
  size = 20,
  weight = "regular",
  className,
}: MarkProps) {
  const Component = icons[name];
  return <Component size={size} weight={weight} className={className} aria-hidden />;
}
