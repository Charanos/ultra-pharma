"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "@phosphor-icons/react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";
  const label = isDark ? "Switch to light theme" : "Switch to dark theme";

  return (
    <button
      type="button"
      data-slot="theme-toggle"
      className="icon-btn"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={label}
      title={label}
    >
      {/* Renders the light icon until mounted so server and client agree. */}
      {mounted && isDark ? (
        <Sun size={20} aria-hidden />
      ) : (
        <Moon size={20} aria-hidden />
      )}
    </button>
  );
}
