"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DUR, EASE_OUT, STAGGER, STAGGER_CAP, prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

/**
 * One motion layer for the whole site, driven by data attributes rather than
 * per-component wiring, so a section opts in by markup and nothing has to be
 * imported at the call site.
 *
 *   [data-reveal]         opacity plus a 16px rise, once
 *   [data-reveal-group]   the same, staggered across its children, capped at six
 *   [data-media-in]       image settle, 1.04 to 1.0, the one place scale is used
 *   [data-draw]           a rule that draws left to right
 *   [data-hero]           the hero timeline, on load rather than on scroll
 *
 * No parallax, no scroll-jacking, no counting-up figures: a statistic that
 * animates from zero is briefly wrong, and this firm sells accuracy.
 */
export function MotionProvider() {
  const pathname = usePathname();

  useEffect(() => {
    if (prefersReducedMotion()) {
      // Everything sits at its end state. CSS already handles the reveal case.
      gsap.set("[data-reveal], [data-reveal-group] > *, [data-hero] > *", {
        clearProps: "all",
        opacity: 1,
        y: 0,
      });
      gsap.set("[data-media-in]", { clearProps: "all", opacity: 1, scale: 1 });
      return;
    }

    const context = gsap.context(() => {
      /* Hero. Runs on load, not on scroll: it is already in view. */
      const heroChildren = gsap.utils.toArray<HTMLElement>("[data-hero] > *");
      if (heroChildren.length > 0) {
        gsap.set(heroChildren, { opacity: 0, y: 20 });
        gsap.to(heroChildren, {
          opacity: 1,
          y: 0,
          duration: DUR.slower,
          ease: EASE_OUT,
          stagger: 0.08,
          delay: 0.1,
        });
      }

      /* Single elements. */
      for (const el of gsap.utils.toArray<HTMLElement>("[data-reveal]")) {
        gsap.set(el, { opacity: 0, y: 16 });
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: DUR.slow,
          ease: EASE_OUT,
          scrollTrigger: { trigger: el, start: "top 92%", once: true },
        });
      }

      /* Groups, staggered across children. */
      for (const group of gsap.utils.toArray<HTMLElement>("[data-reveal-group]")) {
        const children = Array.from(group.children) as HTMLElement[];
        if (children.length === 0) continue;
        gsap.set(children, { opacity: 0, y: 16 });
        gsap.to(children, {
          opacity: 1,
          y: 0,
          duration: DUR.slow,
          ease: EASE_OUT,
          stagger: { each: STAGGER.each, amount: Math.min(children.length, STAGGER_CAP) * STAGGER.each },
          scrollTrigger: { trigger: group, start: "top 88%", once: true },
        });
      }

      /* Image settle. Opacity plus a 1.04 to 1.0 scale. */
      for (const el of gsap.utils.toArray<HTMLElement>("[data-media-in]")) {
        const inner = el.querySelector("img") ?? el;
        gsap.set(inner, { scale: 1.04, opacity: 0 });
        gsap.to(inner, {
          scale: 1,
          opacity: 1,
          duration: 0.9,
          ease: EASE_OUT,
          scrollTrigger: { trigger: el, start: "top 94%", once: true },
        });
      }

      /* A rule drawing left to right. */
      for (const el of gsap.utils.toArray<HTMLElement>("[data-draw]")) {
        gsap.set(el, { scaleX: 0, transformOrigin: "left center" });
        gsap.to(el, {
          scaleX: 1,
          duration: 0.8,
          ease: EASE_OUT,
          scrollTrigger: { trigger: el, start: "top 95%", once: true },
        });
      }
    });

    ScrollTrigger.refresh();

    return () => {
      context.revert();
    };
  }, [pathname]);

  return null;
}
