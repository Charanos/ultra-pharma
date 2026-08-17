import Link from "next/link";
import { stages } from "@/content/pathway";
import { StageIcon } from "./stage-icon";

/**
 * The four stages. The site's spine, stated once and early. Horizontal at `lg`,
 * vertical below. Iconography and rules only: no photography, because this is
 * the structural beat in the homepage rhythm.
 */
export function PathwayRail() {
  return (
    <div className="relative mt-[72px]">
      <div
        aria-hidden
        data-draw
        className="absolute inset-x-0 top-0 h-px bg-rule-strong"
      />
      <div
        data-reveal-group
        className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))]"
      >
        {stages.map((stage) => (
          <div
            key={stage.n}
            className="relative flex flex-col border-l border-rule pl-6 pr-7 pt-7 pb-2"
          >
            <span
              aria-hidden
              data-dot-pop
              className="absolute -left-[5px] -top-[5px] h-[9px] w-[9px] rounded-full bg-stamp-500 shadow-[0_0_8px_rgba(20,136,114,0.4)]"
            />
            <div
              data-icon-pop
              className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-rule bg-paper-sunk shadow-sm text-stamp-600"
            >
              <StageIcon name={stage.icon} size={28} />
            </div>
            
            <div className="flex items-center justify-between gap-2">
              <span className="t-label text-ink-900">{stage.name}</span>
              {stage.isNew && (
                <span className="stamp-pill text-[0.6875rem] py-0.5 px-2.5 font-medium leading-none">
                  New capability
                </span>
              )}
            </div>

            <p className="mt-3.5 font-display text-xl font-medium leading-[1.35] text-ink-700 min-h-[54px]">
              {stage.question}
            </p>

            <ul className="mt-6 flex flex-1 list-none flex-col gap-2.5 p-0">
              {stage.deliverables.map((item) => (
                <li
                  key={item}
                  className="t-body-sm flex gap-2.5 text-ink-500"
                >
                  <span
                    aria-hidden
                    className="mt-3 block h-px w-2 flex-none bg-rule-strong"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-8">
              <Link
                href={stage.href}
                className="t-body-sm group inline-flex items-center gap-1.5 text-ink-700 no-underline transition-colors hover:text-ink-900"
              >
                {stage.name} in detail
                <span
                  aria-hidden
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  &rarr;
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
