import { Download, Search, ShoppingBag, ShieldCheck } from "lucide-react";
import Reveal from "../components/Reveal";

const APK = "/shopy.apk";

function Label({ children, light = false }) {
  return (
    <span
      className={
        "text-[10px] sm:text-[11px] uppercase tracking-[0.32em] font-semibold " +
        (light ? "text-shopy-light/50" : "text-shopy-muted")
      }
    >
      {children}
    </span>
  );
}

function DownloadButton() {
  return (
    <a
      href={APK}
      download="shopy.apk"
      className="group inline-flex items-center justify-center gap-2.5 bg-shopy-dark text-shopy-light hover:bg-shopy-darker active:translate-y-px transition-all duration-200 uppercase tracking-[0.18em] text-[11px] sm:text-xs font-medium px-6 sm:px-8 py-4 sm:py-4.5 rounded-full shadow-card"
    >
      <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
      <span>Download for Android</span>
      <span className="opacity-50 text-[10px] sm:text-[11px]">· v1.0</span>
    </a>
  );
}

// A miniature SHOPY storefront rendered inside a device frame (not a photo).
function PhoneMock() {
  return (
    <div className="relative lg:translate-y-24">
      <div className="absolute -inset-6 sm:-inset-10 -z-10 bg-gradient-to-br from-shopy-surface via-transparent to-shopy-muted/20 blur-2xl opacity-70" />
      <div className="animate-floaty">
        <div className="mx-auto w-[240px] sm:w-[300px] aspect-[9/19] rounded-[2.9rem] border border-shopy-muted/40 bg-shopy-light shadow-soft ring-1 ring-white/50 overflow-hidden relative">
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-shopy-ink/90 rounded-full" />
          <div className="h-full bg-shopy-bg p-5 pt-10 flex flex-col overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="font-serif text-lg tracking-[0.22em] text-shopy-ink">SHOPY</span>
              <div className="flex items-center gap-3 text-shopy-dark/70">
                <Search className="w-4 h-4" strokeWidth={1.5} />
                <ShoppingBag className="w-4 h-4" strokeWidth={1.5} />
              </div>
            </div>

            <div className="mt-6">
              <p className="text-[9px] uppercase tracking-[0.3em] text-shopy-muted">New Arrivals</p>
              <p className="mt-1 font-serif text-xl text-shopy-ink tracking-tight">Autumn Edit</p>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div>
                <div className="relative aspect-[3/4] bg-shopy-surface overflow-hidden">
                  <img src="/product-a.jpg" alt="Linen overshirt" className="w-full h-full object-cover" />
                </div>
                <p className="mt-2 text-[9px] text-shopy-ink">Linen Overshirt</p>
                <p className="text-[9px] text-shopy-muted tracking-wide">PKR 24,000</p>
              </div>
              <div>
                <div className="relative aspect-[3/4] bg-shopy-surface overflow-hidden">
                  <img src="/product-b.jpg" alt="Linen trousers" className="w-full h-full object-cover" />
                </div>
                <p className="mt-2 text-[9px] text-shopy-ink">Linen Trousers</p>
                <p className="text-[9px] text-shopy-muted tracking-wide">PKR 21,000</p>
              </div>
            </div>

            <div className="mt-auto">
              <div className="flex items-center justify-between border border-shopy-muted/40 rounded-full px-4 py-2.5">
                <span className="text-[9px] uppercase tracking-[0.2em] text-shopy-dark">
                  Add to Bag
                </span>
                <ShoppingBag className="w-3.5 h-3.5 text-shopy-dark" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Quiet, numbered capability list — an editorial treatment rather than boxed cards.
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
    <main className="relative">
      {/* Fixed top bar */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 bg-shopy-bg/70 backdrop-blur-md border-b border-shopy-muted/20 -mx-5 sm:-mx-8 px-5 sm:px-8">
            <div className="font-serif text-lg sm:text-xl tracking-[0.18em] text-shopy-ink">
              SHOPY<span className="text-shopy-muted">.</span>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="download" className="relative pt-16 sm:pt-24 pb-16 sm:pb-24">
        <div className="absolute inset-x-0 -top-32 h-[480px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(73,84,100,0.10),transparent_70%)] pointer-events-none" />
        <div className="mx-auto max-w-6xl px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <Reveal>
            <div>
              <Label>SHOPY Atelier · Android</Label>
              <h1 className="mt-5 font-serif font-light text-[2.75rem] sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight text-shopy-ink">
                The atelier,
                <br />
                <span className="text-shopy-dark">in your pocket.</span>
              </h1>
              <p className="mt-6 max-w-md text-sm sm:text-base leading-relaxed text-shopy-dark/70">
                Instant, offline-first and beautifully quiet. SHOPY opens the moment you tap it and
                keeps the store with you — even without a connection.
              </p>

              <div className="mt-8 sm:mt-9">
                <DownloadButton />
              </div>
            </div>
          </Reveal>

          {/* Device mock: stacked below the copy on mobile, offset right + down on desktop */}
          <Reveal delay={120} className="justify-self-center lg:justify-self-end mt-4 sm:mt-8 lg:mt-0">
            <PhoneMock />
          </Reveal>
        </div>
      </section>

      {/* hairline */}
      <div className="hairline mx-auto max-w-6xl" />

      {/* MANIFESTO — quiet editorial statement */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <Reveal>
            <Label>The Atelier Standard</Label>
            <p className="mt-6 font-serif font-light text-3xl sm:text-5xl leading-[1.15] tracking-tight text-shopy-ink">
              Fewer screens. Quieter sound.
              <br className="hidden sm:block" /> Nothing between you and the piece.
            </p>
            <p className="mt-6 text-sm sm:text-base leading-relaxed text-shopy-dark/70 max-w-xl mx-auto">
              It is the SHOPY you already know — the same pieces, the same calm. Only now it lives
              on your home screen, and it keeps working whether or not the network does.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CAPABILITIES — numbered, hairline-separated */}
      <section className="py-4 sm:py-6">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <Label>What the app holds for you</Label>
              <h2 className="mt-4 font-serif font-light text-4xl sm:text-5xl tracking-tight text-shopy-ink">
                Considered in quiet places.
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 sm:mt-14">
            {capabilities.map((c, i) => (
              <Reveal key={c.n} delay={i * 40}>
                <div className="grid grid-cols-[auto_1fr] sm:grid-cols-[3rem_14rem_1fr] gap-x-4 sm:gap-x-8 gap-y-1 sm:gap-y-0 items-baseline py-5 sm:py-6 border-b border-shopy-muted/20">
                  <span className="font-serif text-sm sm:text-base text-shopy-muted tabular-nums">
                    {c.n}
                  </span>
                  <span className="font-serif text-lg sm:text-2xl tracking-tight text-shopy-ink">
                    {c.title}
                  </span>
                  <p className="col-start-2 sm:col-start-3 text-sm leading-relaxed text-shopy-dark/70">
                    {c.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="relative overflow-hidden mt-16 sm:mt-20">
        <div className="bg-shopy-dark">
          <div className="mx-auto max-w-4xl px-5 sm:px-8 py-20 sm:py-28 text-center">
            <Reveal>
              <Label light>Download</Label>
              <h2 className="mt-5 font-serif font-light text-4xl sm:text-6xl tracking-tight text-shopy-light">
                Take the atelier with you.
              </h2>
              <p className="mt-5 text-sm sm:text-base text-shopy-light/60 max-w-md mx-auto">
                Install SHOPY on your phone in under a minute. It will already be there when you
                open it.
              </p>
              <div className="mt-10 flex justify-center">
                <a
                  href={APK}
                  download="shopy.apk"
                  className="group inline-flex items-center gap-2.5 bg-shopy-light text-shopy-ink hover:bg-white transition-colors duration-200 uppercase tracking-[0.18em] text-[11px] sm:text-xs font-medium px-8 sm:px-10 py-4 sm:py-4.5 rounded-full shadow-soft"
                >
                  <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                  <span>Download shopy.apk</span>
                </a>
              </div>

              {/* quiet trust strip */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
                {trust.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-1.5 text-[11px] text-shopy-light/45 uppercase tracking-[0.18em]"
                  >
                    <ShieldCheck className="w-3 h-3" strokeWidth={1.4} />
                    {t}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-[11px] text-shopy-light/40 uppercase tracking-[0.2em]">
                Android 7.0+ · ≈ 44 MB · v1.0
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-shopy-ink text-shopy-light/60">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-12 sm:py-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <div className="font-serif text-2xl tracking-[0.2em] text-shopy-light">
                SHOPY<span className="text-shopy-muted">.</span>
              </div>
              <p className="mt-3 text-xs max-w-xs leading-relaxed">
                Architectural elegance &amp; high-fashion ready-to-wear. The atelier, now in your
                pocket.
              </p>
            </div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-shopy-light/40 leading-relaxed">
              © {new Date().getFullYear()} SHOPY Atelier
              <br />
              Made for the SHOPY app experience
            </div>
          </div>
          <div className="mt-10 hairline !bg-white/10" />
          <div className="mt-6 text-[11px] text-shopy-light/30 tracking-wide">
            Independent download build. Sign in with your SHOPY account to sync your cart and orders.
          </div>
        </div>
      </footer>
    </main>
  );
}
