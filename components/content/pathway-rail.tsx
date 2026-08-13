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
            className="relative border-l border-rule pl-6 pr-7 pt-7"
          >
            <span
              aria-hidden
              className="absolute -left-1 -top-1 h-[7px] w-[7px] rounded-full bg-stamp-600"
            />
            <div className="t-numeral">{stage.n}</div>
            <div className="mt-5 flex items-center gap-2.5 text-ink-500">
              <StageIcon name={stage.icon} />
              <span className="t-label text-ink-900">{stage.name}</span>
            </div>
            <p className="mt-3.5 font-display text-xl font-medium leading-[1.35] text-ink-700">
              {stage.question}
            </p>
            {stage.isNew && (
              <span className="stamp-pill t-label mt-4">New capability</span>
            )}
            <ul className="mt-6 flex list-none flex-col gap-2.5 p-0">
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
            <Link
              href={stage.href}
              className="t-body-sm group mt-6 inline-flex items-center gap-1.5 text-ink-700 no-underline transition-colors hover:text-ink-900"
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
        ))}
      </div>
    </div>
  );
}
