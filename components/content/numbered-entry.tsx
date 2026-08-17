import type { Entry, EntryIcon } from "@/content/entries";
import { Reveal } from "@/components/primitives/reveal";
import {
  Target,
  Lightning,
  Compass,
  ShieldCheck,
  Handshake,
  GraduationCap,
} from "@phosphor-icons/react/dist/ssr";
import type { ElementType } from "react";
import { cn } from "@/lib/utils";

const iconMap: Record<EntryIcon, ElementType> = {
  Target,
  Lightning,
  Compass,
  ShieldCheck,
  Handshake,
  GraduationCap,
};

/**
 * The "why partners choose us" treatment.
 * Alternating Phosphor icon badges on left and right for an organic, elegant rhythm.
 */
export function NumberedEntry({
  entry,
  offset = false,
}: {
  readonly entry: Entry;
  readonly offset?: boolean;
}) {
  const Icon = iconMap[entry.icon];

  return (
    <Reveal
      className={cn(
        "grid grid-cols-1 items-start gap-6 lg:gap-12",
        offset
          ? "lg:grid-cols-[1fr_120px]"
          : "lg:grid-cols-[120px_1fr]"
      )}
    >
      {/* Unboxed Free-standing Icon */}
      <div
        className={cn(
          "flex pt-1",
          offset ? "lg:order-2 lg:justify-end" : "lg:order-1 lg:justify-start"
        )}
      >
        <Icon
          size={88}
          weight="duotone"
          data-icon-pop
          className="text-stamp-600 transition-transform duration-300 hover:scale-110"
          aria-hidden
        />
      </div>

      {/* Content */}
      <div className={cn(offset ? "lg:order-1" : "lg:order-2")}>
        <h3 className="t-h3 m-0 text-ink-900">{entry.heading}</h3>
        <div aria-hidden className="mb-6 mt-5 h-px bg-rule/80" />
        <p className="t-body m-0 max-w-[68ch] text-ink-700 font-light leading-relaxed">
          {entry.body}
        </p>
        <p className="t-label mb-2 mt-7 text-stamp-700 font-medium tracking-[0.08em] uppercase text-xs">
          Why it matters
        </p>
        <p className="t-body-lg m-0 max-w-[60ch] text-ink-900 font-medium leading-snug">
          {entry.why}
        </p>
      </div>
    </Reveal>
  );
}
