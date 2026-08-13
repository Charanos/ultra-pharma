import type { Entry } from "@/content/entries";
import { Reveal } from "@/components/primitives/reveal";

/**
 * The "why partners choose us" treatment. `03 §11`.
 *
 * Plex Mono numeral in `--stamp-700`, its own column at `lg` and above the
 * heading below it. A hairline under the heading. The consequence is the
 * darkest text in the entry, because it is the payload. No card, no shadow,
 * no box.
 */
export function NumberedEntry({
  entry,
  offset = false,
}: {
  readonly entry: Entry;
  readonly offset?: boolean;
}) {
  return (
    <Reveal
      className="grid grid-cols-1 gap-5 lg:grid-cols-[160px_1fr]"
      style={offset ? { marginInlineStart: "var(--entry-offset, 0px)" } : undefined}
    >
      <div data-slot="numeral" className="t-numeral">
        {entry.n}
      </div>
      <div>
        <h3 className="t-h3 m-0">{entry.heading}</h3>
        <div aria-hidden className="mb-6 mt-5 h-px bg-rule" />
        <p className="t-body m-0 max-w-[68ch] text-ink-700">{entry.body}</p>
        <p className="t-label mb-2 mt-7 text-ink-500">Why it matters</p>
        <p className="t-body-lg m-0 max-w-[60ch] text-ink-900">{entry.why}</p>
      </div>
    </Reveal>
  );
}
