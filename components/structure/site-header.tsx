"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useCallback } from "react";
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
  const [mounted, setMounted] = useState(false);
  const prevPathnameRef = useRef(pathname);
  const menuRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const isClosingRef = useRef(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Smooth close animation helper
  const handleClose = useCallback(() => {
    if (!open || isClosingRef.current) return;

    if (menuRef.current && backdropRef.current) {
      isClosingRef.current = true;
      const items = menuRef.current.querySelectorAll("[data-mobile-item]");
      const cta = menuRef.current.querySelector("[data-mobile-cta]");

      const closeTl = gsap.timeline({
        defaults: { ease: "power2.inOut" },
        onComplete: () => {
          setOpen(false);
          isClosingRef.current = false;
        },
      });

      if (items.length > 0) {
        closeTl.to(items, {
          opacity: 0,
          y: -4,
          duration: 0.12,
          stagger: 0.015,
        });
      }

      if (cta) {
        closeTl.to(cta, { opacity: 0, y: -4, duration: 0.12 }, "<");
      }

      closeTl.to(
        menuRef.current,
        {
          opacity: 0,
          y: -8,
          scale: 0.97,
          duration: 0.2,
          ease: "power3.inOut",
        },
        "<0.03"
      );

      closeTl.to(
        backdropRef.current,
        {
          opacity: 0,
          duration: 0.18,
          ease: "power2.inOut",
        },
        "<"
      );
    } else {
      setOpen(false);
    }
  }, [open]);

  // Close menu ONLY when route actually changes
  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname;
      setOpen(false);
    }
  }, [pathname]);

  // Close menu when user scrolls away (with threshold to avoid touch jitter)
  const openScrollYRef = useRef(0);

  useEffect(() => {
    if (!open) return;

    openScrollYRef.current = window.scrollY;

    const handleScroll = () => {
      if (Math.abs(window.scrollY - openScrollYRef.current) > 25) {
        handleClose();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [open, handleClose]);

  // Click-outside, Escape key, and resize listeners
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
        handleClose();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
        burgerRef.current?.focus();
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside, { passive: true });
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [open, handleClose]);

  // GSAP animation for opening the dropdown
  useGSAP(() => {
    if (!open || !menuRef.current || !backdropRef.current) return;

    const items = menuRef.current.querySelectorAll("[data-mobile-item]");
    const cta = menuRef.current.querySelector("[data-mobile-cta]");

    const openTl = gsap.timeline({
      defaults: { ease: "power3.out" },
    });

    // 1. Backdrop fade-in
    openTl.fromTo(
      backdropRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.28,
        ease: "power2.out",
      }
    );

    // 2. Glassmorphic menu card drop & scale
    openTl.fromTo(
      menuRef.current,
      {
        opacity: 0,
        y: -12,
        scale: 0.96,
        transformOrigin: "top right",
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.38,
        ease: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      "<0.03"
    );

    // 3. Staggered navigation links
    if (items.length > 0) {
      openTl.fromTo(
        items,
        {
          opacity: 0,
          y: 8,
          x: -4,
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 0.28,
          stagger: 0.035,
          ease: "power3.out",
        },
        "<0.06"
      );
    }

    // 4. CTA button
    if (cta) {
      openTl.fromTo(
        cta,
        {
          opacity: 0,
          y: 8,
          scale: 0.97,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.28,
          ease: "power3.out",
        },
        "<0.08"
      );
    }

    return () => {
      openTl.kill();
    };
  }, [open]);

  // Robust GSAP-based scroll tracking for header visibility and styling
  useGSAP(() => {
    if (!mounted) return;

    let lastDirection = 0;

    const trigger = ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: (self) => {
        const currentScrollY = self.scroll();

        if (currentScrollY > 24 !== scrolled) {
          setScrolled(currentScrollY > 24);
        }

        if (currentScrollY < 50) {
          gsap.to(headerRef.current, { yPercent: 0, duration: 0.4, ease: "power3.out", overwrite: "auto" });
          lastDirection = 0;
        } else if (self.direction !== lastDirection) {
          lastDirection = self.direction;

          if (self.direction === 1) {
            gsap.to(headerRef.current, { yPercent: -100, duration: 0.4, ease: "power3.inOut", overwrite: "auto" });
          } else if (self.direction === -1) {
            gsap.to(headerRef.current, { yPercent: 0, duration: 0.4, ease: "power3.out", overwrite: "auto" });
          }
        }
      },
    });

    return () => {
      trigger.kill();
    };
  }, [mounted, scrolled]);

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
                "icon-btn relative md:hidden transition-all duration-300 cursor-pointer overflow-hidden",
                onHero
                  ? "border-white/20 !text-white bg-white/10 hover:bg-white/20 backdrop-blur-md"
                  : "text-ink-900 border-rule hover:border-rule-strong hover:bg-paper-sunk",
                open && "border-stamp-600/50 bg-paper-sunk text-stamp-700"
              )}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => {
                if (open) {
                  handleClose();
                } else {
                  setOpen(true);
                }
              }}
            >
              <span className={cn("transition-transform duration-300 inline-flex items-center justify-center", open ? "rotate-90 scale-95" : "rotate-0 scale-100")}>
                {open ? <X size={20} weight="bold" aria-hidden /> : <List size={20} weight="bold" aria-hidden />}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Atmospheric Soft Backdrop Overlay */}
      {open && (
        <div
          ref={backdropRef}
          className="fixed inset-0 z-40 bg-ink-950/20 dark:bg-black/45 backdrop-blur-[3px] md:hidden cursor-pointer"
          onClick={handleClose}
          aria-hidden="true"
        />
      )}

      {/* Mobile Floating Dropdown Navigation Drawer */}
      {open && (
        <div
          ref={menuRef}
          id="mobile-nav"
          className="fixed top-[74px] right-4 left-4 z-50 rounded-[24px] border border-rule/90 bg-paper-raised/95 dark:bg-paper-raised/95 backdrop-blur-2xl p-4 sm:p-5 shadow-[0_24px_54px_-12px_rgba(0,0,0,0.18),0_4px_16px_rgba(0,0,0,0.06)] dark:shadow-[0_24px_54px_-12px_rgba(0,0,0,0.6),0_4px_16px_rgba(0,0,0,0.3)] sm:left-auto sm:w-[360px] md:hidden origin-top-right"
          aria-hidden={!open}
        >
          <div className="flex items-center justify-between pb-3 mb-2 border-b border-rule/60 px-1">
            <span className="text-[0.6875rem] font-mono tracking-widest text-ink-400 uppercase font-medium">
              Navigation
            </span>
            <span className="text-[0.6875rem] font-mono text-stamp-700 tracking-wider font-medium">
              Ultra Pharma
            </span>
          </div>

          <nav aria-label="Mobile Primary" className="flex flex-col gap-1.5">
            {navItems.map((item, index) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  data-mobile-item
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={handleClose}
                  className={cn(
                    "group relative flex items-center justify-between rounded-xl px-4 py-3 text-[0.9375rem] font-medium no-underline transition-all duration-200",
                    active
                      ? "bg-stamp-600/10 text-stamp-800 dark:bg-stamp-500/15 dark:text-stamp-300 font-medium shadow-xs"
                      : "text-ink-700 hover:bg-paper-sunk/80 hover:text-ink-900 hover:translate-x-1",
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span className={cn(
                      "text-[0.6875rem] font-mono",
                      active ? "text-stamp-600 dark:text-stamp-400 font-medium" : "text-ink-400 group-hover:text-stamp-600"
                    )}>
                      0{index + 1}
                    </span>
                    <span>{item.label}</span>
                  </div>
                  {active ? (
                    <Check
                      size={16}
                      weight="bold"
                      className="text-stamp-600 dark:text-stamp-400 shrink-0 ml-2"
                      aria-hidden
                    />
                  ) : (
                    <span
                      className="text-ink-400/60 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-stamp-600 text-xs font-mono"
                      aria-hidden
                    >
                      &rarr;
                    </span>
                  )}
                </Link>
              );
            })}

            <div data-mobile-cta className="mt-3 border-t border-rule/80 pt-3">
              <Link
                href="/contact"
                onClick={handleClose}
                className="btn btn-primary w-full justify-center gap-2 group shadow-sm"
              >
                <span>Talk to us</span>
                <ArrowRight
                  size={16}
                  weight="bold"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
