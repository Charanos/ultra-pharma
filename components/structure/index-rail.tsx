"use client";

import { useEffect, useState } from "react";

export type IndexRailProps = {
  /** Section index numbers, in document order. */
  readonly sections: readonly string[];
  /**
   * The id prefix each section's anchor uses. Defaults to "sec", matching
   * `Section`'s own `id={sec-${index}}`. `/services` reuses `stage-XX` ids
   * instead, since other pages already link to `/services#stage-01`.
   */
  readonly idPrefix?: string;
};

/**
 * The sticky numbered rail. Decorative in the accessibility tree: section
 * numbers are announced as part of each heading block instead, so a screen
 * reader user gets the structure without a duplicated navigation list.
 *
 * Below `lg` it collapses to the progress bar under the header.
 */
export function IndexRail({ sections, idPrefix = "sec" }: IndexRailProps) {
  const [active, setActive] = useState(sections[0] ?? "");

  useEffect(() => {
    const onScroll = () => {
      const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-sec]"));
      let current = "";
      for (const node of nodes) {
        if (node.getBoundingClientRect().top <= 140) {
          current = node.dataset.sec ?? current;
        }
      }
      if (current) setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-hidden
      data-slot="index-rail"
      className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-2.5 lg:flex"
    >
      {sections.map((n) => {
        const on = n === active;
        return (
          <a
            key={n}
            href={`#${idPrefix}-${n}`}
            tabIndex={-1}
            className="t-index flex items-center gap-2.5 text-ink-400 no-underline transition-colors hover:text-ink-900"
          >
            <span
              className="block w-[3px] rounded-sm transition-colors"
              style={{
                height: 18,
                background: on ? "var(--stamp-600)" : "var(--rule-strong)",
              }}
            />
            <span>{n}</span>
          </a>
        );
      })}
    </nav>
  );
}
