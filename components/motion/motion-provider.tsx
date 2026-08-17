"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DUR, EASE_OUT, STAGGER, STAGGER_CAP, prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

const REVEAL_HIDDEN_SELECTOR =
  "[data-reveal], [data-reveal-group] > *, [data-hero] > *, [data-hero-stages] > *, [data-icon-pop], [data-dot-pop], [data-slide-in]";

/**
 * One motion layer for the whole site, driven by data attributes rather than
 * per-component wiring, so a section opts in by markup and nothing has to be
 * imported at the call site.
 *
 *   [data-reveal]           opacity plus a rise, once
 *   [data-reveal-group]     the same, staggered across its children, capped at six,
 *                           with the stagger itself eased so the wave has motion
 *   [data-media-in]         image settle, scale to 1.0, the one place scale is used
 *                           for a whole element rather than an accent
 *   [data-draw]             a rule that draws left to right
 *   [data-hero]              the hero timeline, on load rather than on scroll
 *   [data-icon-pop]         a badge or icon settling in with a touch of overshoot,
 *                           timed to land as its section finishes fading in
 *   [data-dot-pop]          markers on a [data-draw] rule, popping in step with
 *                           the line as it reaches them
 *   [data-slide-in="left|right"]  a directional entrance for a split layout,
 *                           image and copy arriving from opposite sides
 *   [data-magnetic]         pointer-follow pull on a large call to action.
 *                           Desktop pointer only; inert on touch
 *
 * No parallax, no scroll-jacking, no counting-up figures: a statistic that
 * animates from zero is briefly wrong, and this firm sells accuracy.
 */
export function MotionProvider() {
  const pathname = usePathname();

  useEffect(() => {
    if (prefersReducedMotion()) {
      // Everything sits at its end state. CSS already handles the reveal case.
      gsap.set(REVEAL_HIDDEN_SELECTOR, {
        clearProps: "all",
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotate: 0,
      });
      gsap.set("[data-media-in]", { clearProps: "all", opacity: 1, scale: 1 });
      gsap.set("[data-draw]", { clearProps: "all", scaleX: 1 });
      return;
    }

    const magneticCleanups: Array<() => void> = [];

    const context = gsap.context(() => {
      /* Site header entrance. */
      const header = document.querySelector<HTMLElement>("[data-slot='site-header']");
      if (header) {
        gsap.fromTo(
          header,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.75, ease: EASE_OUT, delay: 0.05 },
        );
      }

      /* Hero content. Runs on load: it is already in view. */
      const heroChildren = gsap.utils.toArray<HTMLElement>("[data-hero] > *");
      if (heroChildren.length > 0) {
        gsap.fromTo(
          heroChildren,
          { opacity: 0, y: 18, filter: "blur(8px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.85,
            ease: EASE_OUT,
            stagger: 0.09,
            delay: 0.15,
          },
        );
      }

      /* Hero stages bottom ribbon. */
      const heroStages = gsap.utils.toArray<HTMLElement>("[data-hero-stages] > *");
      if (heroStages.length > 0) {
        gsap.fromTo(
          heroStages,
          { opacity: 0, y: 12, filter: "blur(6px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.7,
            ease: EASE_OUT,
            stagger: 0.06,
            delay: 0.42,
          },
        );
      }

      /* Single elements. */
      for (const el of gsap.utils.toArray<HTMLElement>("[data-reveal]")) {
        gsap.set(el, { opacity: 0, y: 24, filter: "blur(8px)" });
        gsap.to(el, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: DUR.slow,
          ease: EASE_OUT,
          scrollTrigger: { trigger: el, start: "top 92%", once: true },
        });
      }

      /*
       * Groups, staggered across children. The stagger's own easing (as
       * opposed to each tween's easing) means later items close the gap on
       * earlier ones rather than arriving at a strict metronome interval, so
       * a row of cards reads as one wave rather than a typewriter.
       */
      for (const group of gsap.utils.toArray<HTMLElement>("[data-reveal-group]")) {
        const children = Array.from(group.children) as HTMLElement[];
        if (children.length === 0) continue;
        gsap.set(children, { opacity: 0, y: 24, filter: "blur(8px)" });
        gsap.to(children, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: DUR.slow,
          ease: EASE_OUT,
          stagger: {
            each: STAGGER.each,
            from: "start",
            ease: "power1.out",
            amount: Math.min(children.length, STAGGER_CAP) * STAGGER.each,
          },
          scrollTrigger: { trigger: group, start: "top 88%", once: true },
        });
      }

      /* Image settle. Opacity plus a scale-down to rest, the one place scale carries a whole element. */
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

      /*
       * Icon and badge pop. A little overshoot (back.out) rather than the
       * house ease, because a mark settling into place reads as placed, not
       * merely faded, and this is the one spot in the system that earns the
       * extra character. Delayed so it lands as the surrounding reveal is
       * most of the way through rather than racing it.
       */
      for (const el of gsap.utils.toArray<HTMLElement>("[data-icon-pop]")) {
        const host = el.closest<HTMLElement>("[data-reveal], [data-reveal-group]") ?? el;
        gsap.set(el, { opacity: 0, scale: 0.55, rotate: -10, transformOrigin: "center" });
        gsap.to(el, {
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 0.65,
          delay: 0.22,
          ease: "back.out(1.8)",
          scrollTrigger: { trigger: host, start: "top 90%", once: true },
        });
      }

      /* Markers on a draw-line, popping in sequence as the line would reach them. */
      const dotGroups = new Map<Element, HTMLElement[]>();
      for (const dot of gsap.utils.toArray<HTMLElement>("[data-dot-pop]")) {
        const host = dot.closest<HTMLElement>("[data-reveal-group]") ?? dot.parentElement ?? dot;
        const list = dotGroups.get(host) ?? [];
        list.push(dot);
        dotGroups.set(host, list);
      }
      for (const [host, dots] of dotGroups) {
        gsap.set(dots, { opacity: 0, scale: 0 });
        gsap.to(dots, {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: "back.out(2.2)",
          stagger: 0.8 / Math.max(dots.length, 1),
          scrollTrigger: { trigger: host, start: "top 90%", once: true },
        });
      }

      /* Directional entrance for a split layout: image and copy from opposite sides. */
      for (const el of gsap.utils.toArray<HTMLElement>('[data-slide-in="left"]')) {
        gsap.set(el, { opacity: 0, x: -48 });
        gsap.to(el, {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: EASE_OUT,
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        });
      }
      for (const el of gsap.utils.toArray<HTMLElement>('[data-slide-in="right"]')) {
        gsap.set(el, { opacity: 0, x: 48 });
        gsap.to(el, {
          opacity: 1,
          x: 0,
          duration: 0.9,
          delay: 0.12,
          ease: EASE_OUT,
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        });
      }

      /*
       * Magnetic pull on a hero-scale call to action: the button leans toward
       * the pointer within a small radius, and eases back on leave. Desktop
       * pointer only, never on a touch device, and never the sole affordance
       * for anything since it is purely decorative.
       */
      if (!window.matchMedia("(pointer: coarse)").matches) {
        for (const el of gsap.utils.toArray<HTMLElement>("[data-magnetic]")) {
          const xTo = gsap.quickTo(el, "x", { duration: 0.55, ease: "power3" });
          const yTo = gsap.quickTo(el, "y", { duration: 0.55, ease: "power3" });

          const onMove = (event: MouseEvent) => {
            const rect = el.getBoundingClientRect();
            const relX = event.clientX - rect.left - rect.width / 2;
            const relY = event.clientY - rect.top - rect.height / 2;
            xTo(relX * 0.28);
            yTo(relY * 0.4);
          };
          const onLeave = () => {
            xTo(0);
            yTo(0);
          };

          el.addEventListener("mousemove", onMove);
          el.addEventListener("mouseleave", onLeave);
          magneticCleanups.push(() => {
            el.removeEventListener("mousemove", onMove);
            el.removeEventListener("mouseleave", onLeave);
          });
        }
      }
    });

    ScrollTrigger.refresh();

    return () => {
      for (const cleanup of magneticCleanups) cleanup();
      context.revert();
    };
  }, [pathname]);

  return null;
}
