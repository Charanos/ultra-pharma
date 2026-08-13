"use client";

import { useEffect, useState } from "react";

export type IndexRailProps = {
  /** Section index numbers, in document order. */
  readonly sections: readonly string[];
};

/**
 * The sticky numbered rail. Decorative in the accessibility tree: section
 * numbers are announced as part of each heading block instead, so a screen
 * reader user gets the structure without a duplicated navigation list.
 *
 * Below `lg` it collapses to the progress bar under the header.
 */
export function IndexRail({ sections }: IndexRailProps) {
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

  const activeIndex = sections.indexOf(active);
  const progress =
    sections.length > 1 ? (Math.max(activeIndex, 0) / (sections.length - 1)) * 100 : 0;

  return (
    <>
      <div
        aria-hidden
        className="sticky top-[72px] z-[55] h-0.5 bg-rule lg:hidden"
        data-slot="index-progress"
      >
        <div
          className="h-full bg-stamp-600 transition-[width] duration-300"
          style={{ width: `${progress}%`, transitionTimingFunction: "var(--ease-out)" }}
        />
      </div>

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
              href={`#sec-${n}`}
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
    </>
  );
}
