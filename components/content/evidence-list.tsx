import type { EvidenceItem } from "@/content/reimbursement";
import { Mark } from "@/components/primitives/mark";

/**
 * The HTA evidence requirements. Ruled rows, mono markers, no bullets. Listing
 * these correctly is the credibility proof on the reimbursement page, so the
 * numbering is content rather than decoration and stays in the markup.
 *
 * Each row also carries the mark for its own domain of proof: clinical,
 * safety, economic, budgetary, epidemiological, equity, operational. Seven
 * requirements that a reader can tell apart at a glance, rather than seven
 * identical rows.
 */
export function EvidenceList({ items }: { readonly items: readonly EvidenceItem[] }) {
  if (items.length === 0) return null;

  return (
    <ol
      data-slot="evidence-list"
      className="m-0 list-none border-t border-rule-strong p-0"
    >
      {items.map((item) => (
        <li
          key={item.n}
          className="group flex items-baseline gap-5 border-b border-rule py-[22px]"
        >
          <span className="t-index flex-none text-stamp-700">{item.n}</span>
          <span className="flex-none self-center text-ink-400 transition-colors duration-200 group-hover:text-stamp-600">
            <Mark name={item.icon} size={20} />
          </span>
          <span className="t-body-lg leading-[1.55] text-ink-900">{item.requirement}</span>
        </li>
      ))}
    </ol>
  );
}
