"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { List, X } from "@phosphor-icons/react";
import { navItems } from "@/lib/data";
import { basePath } from "@/lib/base-path";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const solid = scrolled || !isHome || menuOpen;

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div
        className={`transition-colors duration-300 ${
          solid
            ? "bg-ink/95 backdrop-blur border-b border-line-on-ink"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-18 flex items-center justify-between py-4">
          <Link href="/" aria-label="Frontier Tourism, home" className="block">
            <Image
              src={`${basePath}/brand/logo-white.png`}
              alt="Frontier Tourism"
              width={359}
              height={234}
              priority
              className="h-11 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-text-on-ink-muted hover:text-text-on-ink transition-colors duration-150"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-terracotta px-5 py-2.5 text-sm font-medium text-ink transition-transform duration-150 ease-out hover:bg-terracotta-strong active:scale-[0.97]"
            >
              Request a Proposal
            </Link>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden text-text-on-ink p-2 -mr-2"
          >
            {menuOpen ? <X size={24} weight="light" /> : <List size={24} weight="light" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.button
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 bg-ink/60"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            // transform string, not the x shorthand: this can run while a
            // route change kicks off (tapping a nav link closes the panel),
            // so it needs to stay off the main thread.
            initial={{ transform: "translateX(100%)" }}
            animate={{ transform: "translateX(0%)" }}
            exit={{ transform: "translateX(100%)" }}
            transition={{ duration: 0.32, ease: [0.32, 0.72, 0, 1] }}
            className="lg:hidden fixed inset-y-0 right-0 w-full max-w-sm bg-ink border-l border-line-on-ink px-8 pt-28 pb-10 flex flex-col justify-between"
          >
            <nav className="flex flex-col gap-1">
              {navItems.map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{ transitionDelay: `${i * 40}ms` }}
                  className="py-3 text-2xl font-display text-text-on-ink border-b border-line-on-ink/60"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-terracotta px-5 py-3 text-sm font-medium text-ink"
            >
              Request a Proposal
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
