import Link from "next/link";
import { LogoMark } from "./logo-mark";

/**
 * The mark takes the stamp token rather than its original fixed cyan, so it
 * holds against both grounds. It is the one place the accent appears in the
 * header besides the primary action.
 */
export function Wordmark({ href = "/" }: { readonly href?: string }) {
  return (
    <Link
      href={href}
      data-slot="wordmark"
      className="group flex items-center gap-2.5 text-ink-900 no-underline"
    >
      <LogoMark
        size={26}
        className="text-stamp-600 transition-colors duration-200 group-hover:text-stamp-500"
      />
      <span className="font-display text-[1.1875rem] font-medium tracking-[-0.01em]">
        Ultra Pharma
      </span>
    </Link>
  );
}
