import type { ReactNode } from "react";

/**
 * Editorial body for MDX. Headings stay in the display face, body copy holds
 * the 16px floor, and the measure caps at 72 characters.
 */
export function Prose({ children }: { readonly children: ReactNode }) {
  return (
    <div
      data-slot="prose"
      className="
        mt-12 max-w-[72ch]
        [&_h2]:mb-4 [&_h2]:mt-12 [&_h2]:font-display [&_h2]:text-[1.75rem] [&_h2]:font-medium [&_h2]:leading-[1.2]
        [&_h3]:mb-3 [&_h3]:mt-10 [&_h3]:text-xl [&_h3]:font-medium
        [&_p]:mt-5 [&_p]:text-[1.0625rem] [&_p]:leading-[1.65] [&_p]:text-ink-700
        [&_ul]:mt-5 [&_ul]:flex [&_ul]:list-none [&_ul]:flex-col [&_ul]:gap-2.5 [&_ul]:p-0
        [&_li]:flex [&_li]:gap-3 [&_li]:text-[1.0625rem] [&_li]:leading-[1.6] [&_li]:text-ink-700
        [&_li]:before:mt-[0.7em] [&_li]:before:block [&_li]:before:h-px [&_li]:before:w-2 [&_li]:before:flex-none [&_li]:before:bg-rule-strong [&_li]:before:content-['']
        [&_strong]:font-medium [&_strong]:text-ink-900
      "
    >
      {children}
    </div>
  );
}
