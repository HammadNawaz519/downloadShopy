"use client";

import { useEffect, useState } from "react";
import { Download } from "lucide-react";

const APK = "/Shopy.apk";

/**
 * Scroll-aware top bar — mirrors the Web app's navbar: transparent over the
 * dark hero (light text), then resolves to the beige surface with a hairline
 * once the page scrolls. A persistent, quiet "Download" CTA sits right.
 */
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const overHero = !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 select-none pt-[env(safe-area-inset-top)] ${
        overHero
          ? "bg-gradient-to-b from-black/30 to-transparent text-shopy-light"
          : "bg-shopy-bg/90 backdrop-blur-md border-b border-shopy-muted/30 text-shopy-dark"
      }`}
    >
      <div className="mx-auto max-w-[1720px] px-6 sm:px-12 h-16 sm:h-20 flex items-center justify-between">
        {/* Wordmark */}
        <a
          href="#top"
          className="font-serif text-xl sm:text-2xl font-light tracking-[0.35em] transition-opacity hover:opacity-70"
        >
          SHOPY<span className={overHero ? "text-shopy-light/40" : "text-shopy-muted"}>.</span>
        </a>

        {/* Persistent quiet download CTA */}
        <a
          href={APK}
          download="Shopy.apk"
          className={`group inline-flex items-center gap-2.5 text-[11px] sm:text-xs uppercase tracking-[0.24em] font-light transition-opacity hover:opacity-60 ${
            overHero ? "text-shopy-light" : "text-shopy-dark"
          }`}
        >
          <Download
            className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5"
            strokeWidth={1.5}
          />
          <span>Download</span>
        </a>
      </div>
    </header>
  );
}
