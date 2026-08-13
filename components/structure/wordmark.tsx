import Link from "next/link";
import { LogoMark } from "./logo-mark";
import { cn } from "@/lib/utils";

/**
 * The mark takes the stamp token rather than its original fixed cyan, so it
 * holds against both grounds. It supports an inverted mode when rendered over dark scrims.
 */
export function Wordmark({
  href = "/",
  inverted = false,
  className,
}: {
  readonly href?: string;
  readonly inverted?: boolean;
  readonly className?: string;
}) {
  return (
    <Link
      href={href}
      data-slot="wordmark"
      style={inverted ? { color: "#ffffff" } : undefined}
      className={cn(
        "group flex items-center gap-2.5 no-underline transition-colors duration-200",
        inverted ? "!text-white hover:!text-white/90" : "text-ink-900",
        className,
      )}
    >
      <LogoMark
        size={26}
        className={cn(
          "transition-colors duration-200",
          inverted
            ? "!text-stamp-500 group-hover:!text-stamp-400"
            : "text-stamp-600 group-hover:text-stamp-500",
        )}
      />
      <span
        style={inverted ? { color: "#ffffff" } : undefined}
        className="font-display text-[1.1875rem] font-medium tracking-[-0.01em]"
      >
        Ultra Pharma
      </span>
    </Link>
  );
}

