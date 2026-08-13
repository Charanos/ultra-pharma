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
  const menuRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const isAnimatingRef = useRef(false);

  // Smooth close animation helper
  const handleClose = useCallback(() => {
    if (!open || isAnimatingRef.current) {
      if (!open) return;
    }

    if (menuRef.current && backdropRef.current) {
      isAnimatingRef.current = true;
      const items = menuRef.current.querySelectorAll("[data-mobile-item]");
      const cta = menuRef.current.querySelector("[data-mobile-cta]");

      const closeTl = gsap.timeline({
        defaults: { ease: "power2.inOut" },
        onComplete: () => {
          setOpen(false);
          isAnimatingRef.current = false;
          if (menuRef.current) gsap.set(menuRef.current, { display: "none" });
          if (backdropRef.current) gsap.set(backdropRef.current, { display: "none" });
        },
      });

      if (items.length > 0) {
        closeTl.to(items, {
          opacity: 0,
          y: -6,
          duration: 0.16,
          stagger: 0.02,
        });
      }

      if (cta) {
        closeTl.to(cta, { opacity: 0, y: -4, duration: 0.14 }, "<");
      }

      closeTl.to(
        menuRef.current,
        {
          opacity: 0,
          y: -10,
          scale: 0.96,
          duration: 0.24,
          ease: "power3.inOut",
        },
        "<0.04"
      );

      closeTl.to(
        backdropRef.current,
        {
          opacity: 0,
          duration: 0.22,
          ease: "power2.inOut",
        },
        "<"
      );
    } else {
      setOpen(false);
    }
  }, [open]);

  // Close menu gracefully on route change
  useEffect(() => {
    if (open) {
      handleClose();
    }
  }, [pathname, open, handleClose]);

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
        handleClose();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
        burgerRef.current?.focus();
      }
    };

    const handleScroll = () => {
      if (open) {
        handleClose();
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768 && open) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [open, handleClose]);

  // Dedicated GSAP timeline for silky-smooth mobile dropdown animations
  useGSAP(() => {
    if (!menuRef.current || !backdropRef.current) return;

    if (!open) {
      gsap.set(backdropRef.current, { display: "none", opacity: 0 });
      gsap.set(menuRef.current, {
        display: "none",
        opacity: 0,
        y: -14,
        scale: 0.96,
      });
      return;
    }

    isAnimatingRef.current = true;
    const items = menuRef.current.querySelectorAll("[data-mobile-item]");
    const cta = menuRef.current.querySelector("[data-mobile-cta]");

    gsap.set(backdropRef.current, { display: "block" });
    gsap.set(menuRef.current, { display: "block" });

    const openTl = gsap.timeline({
      onComplete: () => {
        isAnimatingRef.current = false;
      },
    });

    // 1. Soft atmospheric backdrop fade-in
    openTl.fromTo(
      backdropRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.32,
        ease: "power2.out",
      }
    );

    // 2. Glassmorphic card expand and drop
    openTl.fromTo(
      menuRef.current,
      {
        opacity: 0,
        y: -14,
        scale: 0.95,
        rotateX: 4,
        transformOrigin: "top right",
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        duration: 0.44,
        ease: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      "<0.04"
    );

    // 3. Staggered navigation links slide & fade
    if (items.length > 0) {
      openTl.fromTo(
        items,
        {
          opacity: 0,
          y: 12,
          x: -6,
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 0.34,
          stagger: 0.045,
          ease: "power3.out",
        },
        "<0.08"
      );
    }

    // 4. Action button slide up
    if (cta) {
      openTl.fromTo(
        cta,
        {
          opacity: 0,
          y: 10,
          scale: 0.97,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.32,
          ease: "power3.out",
        },
        "<0.12"
      );
    }

    return () => {
      openTl.kill();
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
                "icon-btn relative md:hidden transition-all duration-300 cursor-pointer overflow-hidden",
                onHero
                  ? "border-white/20 !text-white bg-white/10 hover:bg-white/20 backdrop-blur-md"
                  : "text-ink-900 border-rule hover:border-rule-strong hover:bg-paper-sunk",
                open && "rotate-90 border-stamp-600/50 bg-paper-sunk text-stamp-700"
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
      <div
        ref={backdropRef}
        className="fixed inset-0 z-40 bg-ink-950/20 dark:bg-black/45 backdrop-blur-[3px] md:hidden cursor-pointer"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Mobile Floating Dropdown Navigation Drawer */}
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
                    ? "bg-stamp-600/10 text-stamp-800 dark:bg-stamp-500/15 dark:text-stamp-300 font-semibold shadow-xs"
                    : "text-ink-700 hover:bg-paper-sunk/80 hover:text-ink-900 hover:translate-x-1",
                )}
              >
                <div className="flex items-center gap-3">
                  <span className={cn(
                    "text-[0.6875rem] font-mono",
                    active ? "text-stamp-600 dark:text-stamp-400 font-semibold" : "text-ink-400 group-hover:text-stamp-600"
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
    </>
  );
}

