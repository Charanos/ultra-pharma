import type { EvidenceItem } from "@/content/reimbursement";

/**
 * The HTA evidence requirements. Ruled rows, mono markers, no bullets. Listing
 * these correctly is the credibility proof on the reimbursement page, so the
 * numbering is content rather than decoration and stays in the markup.
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
          className="flex items-baseline gap-6 border-b border-rule py-[22px]"
        >
          <span className="t-index flex-none text-stamp-700">{item.n}</span>
          <span className="t-body-lg leading-[1.55] text-ink-900">{item.requirement}</span>
        </li>
      ))}
    </ol>
  );
}
