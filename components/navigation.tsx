"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Pill } from "lucide-react";
import { ModeToggle } from "@/components/theme-toggle";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about" },
  { name: "Contact us", href: "/contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 dark:bg-background/40 backdrop-blur-lg shadow-md shadow-gray-50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        {/* Desktop */}
        <div className="hidden md:grid grid-cols-3 items-center h-18">
          {/* Left: Logo */}
          <div className="flex items-center justify-start">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-9 h-9 bg-cyan-600 rounded-xl flex items-center justify-center">
                <Pill className="w-5 h-5 text-white" />
              </div>
              <span className="ml-2 font-semibold uppercase">Ultra Pharma</span>
            </Link>
          </div>

          {/* Center: Nav links */}
          <div className="flex items-center justify-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-small font-semibold text-muted-foreground hover:text-foreground transition-colors uppercase ${
                  pathname === item.href ? "text-brand-primary" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right: Theme toggle */}
          <div className="flex items-center justify-end">
            <ModeToggle />
          </div>
        </div>

        {/* Mobile header */}
        <div className="md:hidden flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-9 h-9 bg-cyan-600 rounded-xl flex items-center justify-center">
              <Pill className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm font-semibold uppercase">
              Ultra Pharma
            </span>
          </Link>

          {/* Controls */}
          <div className="flex items-center space-x-2">
            <ModeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 cursor-pointer"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-8 border-t border-border bg-background">
            <div className="flex flex-col space-y-8 items-center">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-small text-muted-foreground hover:text-foreground transition-colors font-semibold uppercase ${
                    pathname === item.href ? "text-brand-primary" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
