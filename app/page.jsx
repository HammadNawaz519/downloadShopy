import { Download, ShieldCheck } from "lucide-react";
import Nav from "../components/Nav";
import Reveal from "../components/Reveal";

const APK = "/Shopy.apk";

// Small tracked uppercase label — Web's editorial sign-off.
function Eyebrow({ children, light = false }) {
  return (
    <span
      className={`block text-[10px] sm:text-[11px] font-light uppercase tracking-[0.4em] ${
        light ? "text-shopy-light/50" : "text-shopy-muted"
      }`}
    >
      {children}
    </span>
  );
}

// Quiet, numbered capability list — real, editorial feature copy (no demo).
const capabilities = [
  {
    n: "01",
    title: "Offline-first",
    body: "The catalog, your cart and recent look-book are mirrored on-device, so the store stays alive between signals.",
  },
  {
    n: "02",
    title: "Private by default",
    body: "Your cart, wishlist and fit notes live on your phone. Nothing is sent until you choose to sign in.",
  },
  {
    n: "03",
    title: "Quiet by design",
    body: "No badges, no nags, no motion that fights for attention. The atelier simply waits where you left it.",
  },
  {
    n: "04",
    title: "Secure checkout",
    body: "Sessions, pricing and payment are server-authoritative and encrypted end to end. No card data on the phone.",
  },
  {
    n: "05",
    title: "The full archive",
    body: "Every past season, look-book and fitting note travels with you — the entire maison, not just the new drop.",
  },
  {
    n: "06",
    title: "Calm updates",
    body: "New collections land quietly in the background. You never see a “please update” blocking the store.",
  },
];

const trust = [
  "Signed build",
  "Verified checksum",
  "Updated Sep 2026",
  "No ads, no tracking",
];

export default function Page() {
  return (
    <>
      <Nav />

      <main id="top" className="relative">
        {/* ══════════════ CINEMATIC HERO ══════════════ */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-shopy-ink select-none">
          {/* Editorial vignette + soft top light */}
          <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_18%,rgba(73,84,100,0.35),transparent_70%)] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/25 pointer-events-none" />

          <Reveal className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
            <span className="mb-7 text-[10px] sm:text-[11px] font-light uppercase tracking-[0.4em] text-shopy-light/60">
              SHOPY Atelier · Android
            </span>

            <h1
              className="font-serif font-light tracking-wide leading-[1.05] text-shopy-light drop-shadow-sm"
              style={{ fontSize: "clamp(2.8rem, 8vw, 6rem)" }}
            >
              The atelier,
              <br />
              in your pocket.
            </h1>

            <p className="mt-7 max-w-md text-sm sm:text-base font-light leading-relaxed text-shopy-light/60">
              Instant, offline-first and beautifully quiet. SHOPY opens the moment you tap it and
              keeps the store with you — even without a connection.
            </p>

            {/* Outlined minimal CTA — Web's hero button language */}
            <a
              href={APK}
              download="Shopy.apk"
              className="group mt-10 inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 border border-shopy-light/60 text-shopy-light hover:scale-[1.02] hover:border-shopy-light hover:bg-shopy-light/5 transition-all duration-300 uppercase tracking-[0.24em] text-[11px] sm:text-xs font-light"
            >
              <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" strokeWidth={1.5} />
              <span>Download for Android</span>
              <span className="text-shopy-light/40 text-[10px] sm:text-[11px]">· v1.0</span>
            </a>
          </Reveal>

          {/* Delicate scroll cue — Web's bottom indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2.5 text-shopy-light/45">
            <span className="text-[9px] font-light tracking-[0.3em] uppercase">Scroll</span>
            <div className="w-[1px] h-5 bg-shopy-light/35" />
          </div>
        </section>

        {/* ══════════════ MANIFESTO — quiet editorial statement ══════════════ */}
        <section className="relative py-24 sm:py-32 bg-shopy-bg">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <Reveal>
              <Eyebrow>The Atelier Standard</Eyebrow>
              <p className="mt-7 font-serif font-light text-3xl sm:text-5xl leading-[1.15] tracking-tight text-shopy-ink">
                Fewer screens. Quieter sound.
                <br className="hidden sm:block" /> Nothing between you and the piece.
              </p>
              <p className="mt-8 text-sm sm:text-base font-light leading-relaxed text-shopy-dark/70 max-w-xl mx-auto">
                It is the SHOPY you already know — the same pieces, the same calm. Only now it lives
                on your home screen, and it keeps working whether or not the network does.
              </p>
            </Reveal>
          </div>
        </section>

        {/* hairline */}
        <div className="hairline mx-auto max-w-6xl" />

        {/* ══════════════ CAPABILITIES — numbered, hairline-separated ══════════════ */}
        <section className="py-14 sm:py-20 bg-shopy-bg">
          <div className="mx-auto max-w-6xl px-6 sm:px-12">
            <Reveal>
              <div className="max-w-2xl">
                <Eyebrow>What the app holds for you</Eyebrow>
                <h2 className="mt-5 font-serif font-light text-4xl sm:text-5xl tracking-tight text-shopy-ink">
                  Considered in quiet places.
                </h2>
              </div>
            </Reveal>

            <div className="mt-14 sm:mt-16">
              {capabilities.map((c, i) => (
                <Reveal key={c.n} delay={i * 40}>
                  <div className="grid grid-cols-[auto_1fr] sm:grid-cols-[3rem_14rem_1fr] gap-x-4 sm:gap-x-8 gap-y-1 sm:gap-y-0 items-baseline py-5 sm:py-6 border-b border-shopy-muted/20">
                    <span className="font-serif text-sm sm:text-base text-shopy-muted tabular-nums">
                      {c.n}
                    </span>
                    <span className="font-serif text-lg sm:text-2xl tracking-tight text-shopy-ink">
                      {c.title}
                    </span>
                    <p className="col-start-2 sm:col-start-3 text-sm font-light leading-relaxed text-shopy-dark/70">
                      {c.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════ CTA BAND — dark, signature closing ══════════════ */}
        <section className="relative overflow-hidden">
          <div className="bg-shopy-ink">
            <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_0%,rgba(73,84,100,0.3),transparent_70%)] pointer-events-none" />
            <div className="relative mx-auto max-w-4xl px-6 py-24 sm:py-32 text-center">
              <Reveal>
                <Eyebrow light>Download</Eyebrow>
                <h2 className="mt-6 font-serif font-light text-4xl sm:text-6xl tracking-tight text-shopy-light">
                  Take the atelier with you.
                </h2>
                <p className="mt-5 text-sm sm:text-base font-light text-shopy-light/55 max-w-md mx-auto">
                  Install SHOPY on your phone in under a minute. It will already be there when you
                  open it.
                </p>

                <div className="mt-10 flex justify-center">
                  <a
                    href={APK}
                    download="Shopy.apk"
                    className="group inline-flex items-center gap-3 bg-shopy-light text-shopy-ink hover:bg-white transition-colors duration-300 uppercase tracking-[0.24em] text-[11px] sm:text-xs font-light px-8 sm:px-10 py-4 sm:py-5 shadow-card"
                  >
                    <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" strokeWidth={1.5} />
                    <span>Download shopy.apk</span>
                  </a>
                </div>

                {/* Quiet trust strip */}
                <div className="mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
                  {trust.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-1.5 text-[11px] font-light text-shopy-light/45 uppercase tracking-[0.18em]"
                    >
                      <ShieldCheck className="w-3 h-3" strokeWidth={1.4} />
                      {t}
                    </span>
                  ))}
                </div>
                <p className="mt-6 text-[11px] font-light text-shopy-light/40 uppercase tracking-[0.2em]">
                  Android 7.0+ · ≈ 44 MB · v1.0
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ══════════════ FOOTER — beige, giant cropped wordmark ══════════════ */}
        <footer className="relative bg-shopy-bg text-shopy-dark overflow-hidden select-none">
          {/* Small info row */}
          <div className="mx-auto max-w-[1720px] px-6 sm:px-16 pt-16">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] uppercase tracking-[0.2em] font-light text-shopy-dark/50">
              <span>Independent download build · Sign in to sync your cart</span>
              <span>No ads · No tracking</span>
            </div>
          </div>

          {/* MANDATORY GIANT OVERSIZED CROPPED SHOPY SIGNATURE TYPOGRAPHY */}
          <div className="w-full relative overflow-hidden pointer-events-none flex justify-center items-end leading-none pt-6 pb-0">
            <span
              className="font-serif text-shopy-dark/10 font-bold tracking-tight select-none block text-center whitespace-nowrap -mb-[0.18em]"
              style={{
                fontSize: "clamp(8rem, 25vw, 32rem)",
                lineHeight: "0.72",
                letterSpacing: "-0.04em",
              }}
            >
              SHOPY
            </span>
          </div>

          {/* Minimal final row */}
          <div className="border-t border-shopy-muted/30 py-6 px-6 sm:px-16 text-[11px] font-light text-shopy-dark/60 tracking-widest uppercase">
            <div className="max-w-[1720px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
              <span>© {new Date().getFullYear()} SHOPY Atelier — All rights reserved</span>
              <span>Made for the SHOPY app experience</span>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
