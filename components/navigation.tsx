"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/theme-toggle";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#services" },
  { name: "Contact", href: "/#contact" },
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
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-0 right-0 z-50 transition-all duration-300"
    >
      <div className="container mx-auto px-6">
        <motion.div
          animate={{
            backgroundColor: isScrolled ? "rgba(var(--background-rgb), 0.8)" : "transparent",
            backdropFilter: isScrolled ? "blur(20px)" : "blur(0px)",
          }}
          transition={{ duration: 0.3 }}
          className={`mx-auto max-w-9xl overflow-hidden transition-all ${
            isScrolled
              ? "rounded-3xl border border-white/10 shadow-lg"
              : ""
          }`}
        >
          {/* Desktop */}
          <div className="hidden md:grid grid-cols-3 items-center h-16 px-8 py-1">
            {/* Left: Logo */}
            <div className="flex items-center justify-start">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-12 h-12 rounded-xl flex items-center gap-0">
                  <Image
                    src="/logo.svg"
                    alt="Ultra Pharma Logo"
                    width={32}
                    height={32}
                  />
                </div>
                <span className="-ml-3.5 font-semibold uppercase">
                  Ultra <span className="text-[#30d5c8]">Pharma</span>
                </span>
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
          <div className="md:hidden flex items-center justify-between h-16 px-4 py-2">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-12 h-12 rounded-xl flex items-center gap-0">
                <Image
                  src="/logo.svg"
                  alt="Ultra Pharma Logo"
                  width={30}
                  height={30}
                />
              </div>
              <span className="-ml-3.5 font-semibold uppercase">
                Ultra <span className="text-[#30d5c8]">Pharma</span>
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
          <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden py-6 px-4 border-t border-white/10 bg-background/90 backdrop-blur-xl overflow-hidden"
            >
              <div className="flex flex-col space-y-8 items-center">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                  <Link
                    href={item.href}
                    className={`text-small text-muted-foreground hover:text-foreground transition-colors font-semibold uppercase ${
                      pathname === item.href ? "text-brand-primary" : ""
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.nav>
  );
}
