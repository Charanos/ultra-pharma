"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { List, X, Check, ArrowRight } from "@phosphor-icons/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { navItems } from "@/content/site";
import { ThemeToggle } from "@/components/primitives/theme-toggle";
import { Wordmark } from "./wordmark";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Click-outside and Escape key listener to close mobile menu
  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        burgerRef.current &&
        !burgerRef.current.contains(target)
      ) {
        setOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        burgerRef.current?.focus();
      }
    };

    const handleScroll = () => {
      setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [open]);

  // Robust GSAP-based scroll tracking for header visibility and styling
  useGSAP(() => {
    let lastDirection = 0;
    
    ScrollTrigger.create({
      start: "top top",
      end: 99999, // practically infinite
      onUpdate: (self) => {
        const currentScrollY = self.scroll();
        
        // Handle visual scrolled state (glassmorphism vs transparent)
        if (currentScrollY > 24 !== scrolled) {
          setScrolled(currentScrollY > 24);
        }

        // Only act if direction changed or at the very top
        if (currentScrollY < 50) {
          gsap.to(headerRef.current, { yPercent: 0, duration: 0.4, ease: "power3.out", overwrite: "auto" });
          lastDirection = 0;
        } else if (self.direction !== lastDirection) {
          lastDirection = self.direction;
          
          if (self.direction === 1) {
            // Scrolling down -> Hide
            gsap.to(headerRef.current, { yPercent: -100, duration: 0.4, ease: "power3.inOut", overwrite: "auto" });
          } else if (self.direction === -1) {
            // Scrolling up -> Show
            gsap.to(headerRef.current, { yPercent: 0, duration: 0.4, ease: "power3.out", overwrite: "auto" });
          }
        }
      },
    });
  }, [scrolled]);

  const isHomePage = pathname === "/";
  const onHero = isHomePage && !scrolled;

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        ref={headerRef}
        data-slot="site-header"
        data-scrolled={scrolled || undefined}
        data-on-hero={onHero || undefined}
        className={cn(
          "fixed top-0 right-0 left-0 z-50 w-full transition-colors duration-300 ease-out",
          onHero
            ? "border-b border-transparent bg-transparent py-4 md:py-5"
            : cn(
                "border-b border-rule/80 py-3 md:py-3.5",
                "bg-paper/85 backdrop-blur-xl shadow-xs",
              ),
        )}
      >
        <div className="mx-auto flex h-14 w-full max-w-[1440px] items-center justify-between gap-4 px-6 md:px-8">
          {/* Brand Wordmark */}
          <Wordmark inverted={onHero} />

          {/* Centered Pill Navigation (Desktop) */}
          <nav
            aria-label="Primary"
            className={cn(
              "hidden items-center gap-1 rounded-full p-1.5 transition-all duration-300 md:flex",
              onHero
                ? "bg-white/12 border border-white/20 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"
                : "bg-paper-sunk/80 border border-rule/70 shadow-xs backdrop-blur-md",
            )}
          >
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  style={
                    onHero
                      ? {
                          color: active ? "#ffffff" : "rgba(255, 255, 255, 0.85)",
                          backgroundColor: active ? "rgba(255, 255, 255, 0.22)" : undefined,
                        }
                      : undefined
                  }
                  className={cn(
                    "rounded-full px-4 py-1.5 text-[0.875rem] font-medium no-underline transition-all duration-200",
                    onHero
                      ? active
                        ? "!text-white bg-white/20 shadow-sm"
                        : "!text-white/85 hover:bg-white/12 hover:!text-white"
                      : active
                        ? "bg-paper-raised text-ink-900 shadow-sm"
                        : "text-ink-500 hover:text-ink-900",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2.5">
            <ThemeToggle inverted={onHero} />

            <Link
              href="/contact"
              style={onHero ? { color: "#ffffff" } : undefined}
              className={cn(
                "btn btn-sm hidden md:inline-flex",
                onHero ? "btn-on-image-primary shadow-sm !text-white" : "btn-primary",
              )}
            >
              Talk to us
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              ref={burgerRef}
              type="button"
              style={onHero ? { color: "#ffffff" } : undefined}
              className={cn(
                "icon-btn md:hidden transition-colors cursor-pointer",
                onHero
                  ? "border-white/20 !text-white bg-white/10 hover:bg-white/20 backdrop-blur-md"
                  : "text-ink-900 border-rule hover:border-rule-strong hover:bg-paper-sunk",
              )}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X size={20} aria-hidden /> : <List size={20} aria-hidden />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Floating Dropdown Navigation Drawer */}
      {open && (
        <div
          ref={menuRef}
          id="mobile-nav"
          className="fixed top-20 right-4 left-4 z-50 rounded-2xl border border-rule bg-paper-raised/95 dark:bg-paper-raised/95 backdrop-blur-2xl p-4 shadow-2xl transition-all duration-200 animate-in fade-in slide-in-from-top-2 sm:left-auto sm:w-84 md:hidden"
        >
          <nav aria-label="Mobile Primary" className="flex flex-col gap-1">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center justify-between rounded-xl px-4 py-3 text-[0.9375rem] font-medium no-underline transition-colors",
                    active
                      ? "bg-paper-sunk text-ink-900"
                      : "text-ink-700 hover:bg-paper-sunk/60 hover:text-ink-900",
                  )}
                >
                  <span>{item.label}</span>
                  {active && (
                    <Check
                      size={16}
                      weight="bold"
                      className="text-stamp-600 shrink-0 ml-2"
                      aria-hidden
                    />
                  )}
                </Link>
              );
            })}

            <div className="mt-3 border-t border-rule pt-3">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn btn-primary w-full justify-center gap-2"
              >
                <span>Talk to us</span>
                <ArrowRight size={16} weight="bold" aria-hidden />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
