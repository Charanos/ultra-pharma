"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { navItems } from "@/content/site";
import { ThemeToggle } from "@/components/primitives/theme-toggle";
import { Wordmark } from "./wordmark";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const burgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setOpen(false), [pathname]);

  /* The rule and ground fade in after 8px, so the header is weightless at rest. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        burgerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      data-slot="site-header"
      data-scrolled={scrolled || undefined}
      className={cn(
        "sticky top-0 z-60 transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled || open
          ? "border-b border-rule bg-paper/85 backdrop-blur-xl"
          : "border-b border-transparent bg-paper",
      )}
      style={{ transitionTimingFunction: "var(--ease-out)" }}
    >
      <div className="mx-auto flex h-16 max-w-[1440px] items-center gap-8 px-6">
        <Wordmark />

        <nav aria-label="Primary" className="ml-auto hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative rounded-lg px-3 py-2 text-[0.9375rem] no-underline transition-colors duration-200",
                  active ? "text-ink-900" : "text-ink-500 hover:text-ink-900",
                )}
              >
                {item.label}
                {active && (
                  <span
                    aria-hidden
                    className="absolute inset-x-3 -bottom-0.5 h-[1.5px] rounded-full bg-stamp-600"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2 md:ml-4">
          <ThemeToggle />
          <Link href="/contact" className="btn btn-primary btn-sm hidden md:inline-flex">
            Talk to us
          </Link>
          <button
            ref={burgerRef}
            type="button"
            className="icon-btn text-ink-900 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={19} aria-hidden /> : <List size={19} aria-hidden />}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-rule bg-paper-raised px-6 pb-6 pt-2 md:hidden"
        >
          <nav aria-label="Primary">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "flex items-center justify-between border-b border-rule py-3.5 text-[1.0625rem] no-underline",
                  isActive(item.href) ? "text-ink-900" : "text-ink-700",
                )}
              >
                {item.label}
                {isActive(item.href) && (
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-stamp-600" />
                )}
              </Link>
            ))}
          </nav>
          <Link href="/contact" className="btn btn-primary mt-5 w-full">
            Talk to us
          </Link>
        </div>
      )}
    </header>
  );
}
