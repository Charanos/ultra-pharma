import { Mark } from "@/components/primitives/mark";

/**
 * The three funds, drawn.
 *
 * This stands where the reimbursement band's photograph stood. A photograph of
 * capsules illustrated nothing specific and so failed the first rule in
 * `04 §1`; the structure of SHA coverage is the actual subject of the block,
 * and it is a diagram, which `04 §10` permits and prefers. Built from rules,
 * mono indices and a stamp marker, in the design system's own vocabulary.
 */
const funds = [
  {
    n: "01",
    name: "Primary Healthcare Fund",
    note: "Primary healthcare services",
  },
  {
    n: "02",
    name: "Social Health Insurance Fund",
    note: "Benefits at the tariff set for each service",
  },
  {
    n: "03",
    name: "Emergency, Chronic and Critical Illness Fund",
    note: "Cover beyond the insurance benefit",
  },
] as const;

export function FundsDiagram() {
  return (
    <div className="plate plate-deep min-h-[420px] rounded-[24px] ring-1 ring-white/10 shadow-2xl">
      <span aria-hidden className="plate-field plate-field-ledger" />
      {/* Coins, not the reimbursement scales: the subject here is the money,
          and the scales already mean the stage everywhere else. */}
      <Mark name="funds" weight="duotone" size={240} className="plate-mark" />

      <div className="plate-body">
        <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
          <span className="t-label font-mono uppercase tracking-[0.14em] text-[0.6875rem] text-deep-ink-soft">
            SHA coverage
          </span>
          <span className="t-data text-[0.75rem] text-deep-ink-soft">
            Social Health Insurance Act 2023
          </span>
        </div>

        <ul className="m-0 flex list-none flex-col p-0">
          {funds.map((fund, index) => (
            <li
              key={fund.n}
              className="relative flex gap-5 border-t border-deep-rule/60 py-5 first:border-t-0 first:pt-0 last:pb-0"
            >
              {/* The marker, and the line that carries the eye to the next one. */}
              <span className="relative flex-none pt-1.5">
                <span
                  aria-hidden
                  className="block h-[7px] w-[7px] rounded-full bg-deep-stamp"
                />
                {index < funds.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute bottom-[-22px] left-[3px] top-[13px] block w-px bg-deep-stamp/30"
                  />
                )}
              </span>

              <div className="min-w-0">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[0.8125rem] font-light text-deep-stamp">
                    {fund.n}
                  </span>
                  <p className="m-0 font-display text-[1.0625rem] font-medium leading-snug text-deep-ink">
                    {fund.name}
                  </p>
                </div>
                <p className="t-body-sm m-0 mt-1.5 font-light leading-relaxed text-deep-ink-soft">
                  {fund.note}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t border-deep-rule/60 pt-4">
          <span className="t-label font-mono uppercase tracking-[0.14em] text-[0.6875rem] text-deep-ink-soft">
            Assessed by
          </span>
          <span className="t-data text-[0.75rem] text-deep-ink">
            Benefits Package and Tariffs Advisory Panel
          </span>
        </div>
      </div>
    </div>
  );
}
