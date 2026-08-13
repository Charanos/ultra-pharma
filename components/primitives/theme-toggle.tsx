"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

export function ThemeToggle({
  inverted = false,
  className,
}: {
  readonly inverted?: boolean;
  readonly className?: string;
}) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";
  const label = isDark ? "Switch to light theme" : "Switch to dark theme";

  return (
    <button
      type="button"
      data-slot="theme-toggle"
      className={cn(
        "icon-btn",
        inverted &&
          "border-white/20 text-white/90 bg-white/10 hover:border-white/40 hover:bg-white/20 hover:text-white backdrop-blur-md",
        className,
      )}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={label}
      title={label}
    >
      {/* Renders the light icon until mounted so server and client agree. */}
      {mounted && isDark ? (
        <Sun size={16} aria-hidden />
      ) : (
        <Moon size={16} aria-hidden />
      )}
    </button>
  );
}

