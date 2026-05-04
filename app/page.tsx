"use client";

import { useState } from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { EmailCaptureDialog } from "@/components/email-capture-dialog";
import { ThemeToggle } from "@/components/theme-toggle";
import { ShieldCheck, ArrowRight, Mail, FlaskConical } from "lucide-react";

// Particle palettes — light: brand periwinkle→lilac, dark: grayscale
const PARTICLE_COLORS_LIGHT = ["#6B73C9", "#8A6FC9", "#A87BC2", "#C68BC9"];
const PARTICLE_COLORS_DARK = ["#9CA3AF", "#B0B6BD", "#C7CCD3", "#E2E5E8"];

export default function Home() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const isDark = theme === "dark";

  return (
    <main className="min-h-screen bg-canvas text-ink">
      {/* SVG filter used by the liquid-glass buttons (refraction via feDisplacementMap).
          Inspired by https://codepen.io/lucasromerodb/pen/vEOWpYM */}
      <svg aria-hidden="true" className="pointer-events-none absolute h-0 w-0">
        <defs>
          <filter id="liquid-glass" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.008 0.008"
              numOctaves="2"
              seed="92"
              result="noise"
            />
            <feGaussianBlur in="noise" stdDeviation="2" result="blurred" />
            <feDisplacementMap
              in="SourceGraphic"
              in2="blurred"
              scale="77"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>
      {/* --- HEADER --- */}
      <header className="glass-blur-strong header-shadow sticky top-0 z-20 border-b border-white/30 bg-white/30 dark:border-halos-ink-700/50 dark:bg-halos-ink-900/40">
        <div className="relative mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-5 md:px-10">
          <a href="/" className="flex items-center gap-2.5 text-ink no-underline" aria-label="HALOS Bio home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="HALOS" className="h-9 w-auto" />
            <span className="text-[40px] font-bold tracking-[0.06em]">HALOS</span>
          </a>
        </div>
        {/* Theme toggle pinned to the viewport's right edge, vertically centered in the header */}
        <nav className="absolute right-5 top-1/2 -translate-y-1/2 md:right-10">
          <ThemeToggle onChange={setTheme} />
        </nav>
      </header>

      {/* --- HERO --- */}
      <section className="relative flex min-h-screen flex-col overflow-hidden border-b border-ink-line">
        {/* Sparkles — float across the entire hero background */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <SparklesCore
            id="hero-sparkles"
            background="transparent"
            minSize={0.4}
            maxSize={2.4}
            particleDensity={100}
            particleColor={isDark ? PARTICLE_COLORS_DARK : PARTICLE_COLORS_LIGHT}
            speed={0.6}
            className="h-full w-full"
          />
        </div>

        {/* Fade overlay over sparkles only — fully transparent at top, easing to the
            page background toward the bottom of the hero. Painted before the blobs
            so the gradient blobs remain crisp on top. Light/dark variants live in
            globals.css under `.hero-fade` / `.dark .hero-fade`. */}
        <div aria-hidden="true" className="hero-fade pointer-events-none absolute inset-0" />

        {/* Ambient gradient blobs — positions match reference standalone HTML.
            Color + filter live in `.blob*` classes (globals.css). */}
        <div
          aria-hidden="true"
          className="blob blob--periwinkle pointer-events-none absolute -left-[120px] -top-20 h-[380px] w-[380px] opacity-55 animate-blob-a motion-reduce:animate-none"
        />
        <div
          aria-hidden="true"
          className="blob blob--lilac pointer-events-none absolute bottom-[6%] right-[14%] h-[340px] w-[340px] opacity-60 animate-blob-b motion-reduce:animate-none"
        />
        <div
          aria-hidden="true"
          className="blob blob--mist pointer-events-none absolute right-[26%] top-[38%] h-[300px] w-[300px] opacity-55 animate-blob-c motion-reduce:animate-none"
        />

        {/* Rotating halo ring + bar (periwinkle→lilac) — positioned so its center sits at the
            top-right corner of the viewport, leaving only the bottom-left quadrant visible. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[320px] -top-[360px] h-[1000px] w-[1000px] opacity-70 animate-halo-spin motion-reduce:animate-none"
        >
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full"
          >
            <defs>
              <linearGradient id="halo-grad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#A9B3F6" />
                <stop offset="100%" stopColor="#E1B0EC" />
              </linearGradient>
            </defs>
            <circle
              cx="100"
              cy="90"
              r="70"
              fill="none"
              stroke="url(#halo-grad)"
              strokeWidth="9"
            />
            <line
              x1="60"
              y1="170"
              x2="140"
              y2="170"
              stroke="url(#halo-grad)"
              strokeWidth="4.5"
            />
          </svg>
        </div>

        <div className="relative mx-auto flex w-full max-w-[1280px] flex-1 flex-col px-5 py-20 md:px-10 md:py-24">
          {/* Eyebrow — liquid-glass pill (recipe in globals.css) + pulsating gradient dot */}
          <div className="eyebrow-pill mb-7 self-start">
            <span
              aria-hidden="true"
              className="inline-block h-2 w-2 rounded-full bg-halos-gradient shadow-[0_0_0_0_rgba(169,179,246,0.55)] animate-dot-pulse motion-reduce:animate-none"
            />
            <span>Human fetal plasma + engineered at scale</span>
          </div>

          {/* H1 */}
          <h1 className="h1-display m-0 max-w-[1100px] text-balance text-ink">
            We are engineering the most <b className="font-bold">regenerative</b> biochemical envir
            <span className="bg-halos-gradient bg-clip-text text-transparent dark:bg-halos-gradient-dark" aria-hidden="true">
              o
            </span>
            <span className="sr-only">o</span>
            nment in human biology.
          </h1>

          {/* Sub */}
          <p className="lede mb-10 mt-7 max-w-[1000px] text-ink-muted">
            Pioneering the world's first lab-grown human fetal plasma: a synthetic, scalable, and
            ethical recreation of the most regenerative biochemical environment in human biology as a platform
            technology for cell culture and regenerative medicine.
          </p>

          {/* Actions — liquid-glass (SVG displacement-map refraction) */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setDialogOpen(true)}
              className="btn-glass btn-glass--primary group"
            >
              Join waitlist
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </button>
            <a href="mailto:eloi@halos.bio" className="btn-glass btn-glass--secondary">
              <Mail className="h-4 w-4" aria-hidden="true" />
              Investor / Partner inquiry
            </a>
          </div>

          {/* Trust indicators (restored from origin/main, light-theme styling) */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-ink-subtle">
            <div className="flex items-center gap-2">
              <FlaskConical className="h-4 w-4 text-ink-icon" aria-hidden="true" />
              <span>Research-Focused</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-ink-icon" aria-hidden="true" />
              <span>Ethically Rigorous</span>
            </div>
          </div>

          {/* Compliance / disclaimer — anchored at the bottom of the hero */}
          <p className="mt-auto flex max-w-3xl items-start gap-2.5 pt-16 text-[13px] leading-[1.55] text-ink-subtle">
            <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-ink-icon" aria-hidden="true" />
            <span>
              <strong className="font-bold text-ink">R&amp;D stage.</strong> All information is exploratory and
              subject to change. This site does not constitute medical advice, a solicitation for investment, or a
              promise of product availability.
            </span>
          </p>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <hr className="m-0 h-0.5 border-0 bg-halos-gradient" aria-hidden="true" />
      <footer className="bg-canvas pb-16 pt-12">
        <div className="mx-auto max-w-[1280px] px-5 md:px-10">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-[2fr_1fr_1fr]">
            <div className="col-span-2 flex items-start gap-4 md:col-span-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.svg" alt="HALOS" className="h-9 w-auto flex-shrink-0" />
              <p className="max-w-[280px] text-[12px] leading-[1.5] text-ink-subtle">
                HALOS Biosciences, Inc. Pioneering artificial human fetal serum for longevity and regenerative
                medicine.
              </p>
            </div>
            <div>
              <h5 className="eyebrow-caps mb-3 text-ink-subtle">Company</h5>
              <ul className="m-0 list-none space-y-1 p-0 leading-tight">
                <li>
                  <a href="/privacy" className="footer-link">
                    Privacy policy
                  </a>
                </li>
                {/* <li>
                  <a href="/terms" className="footer-link">
                    Terms of use
                  </a>
                </li> */}
              </ul>
            </div>
            <div>
              <h5 className="eyebrow-caps mb-3 text-ink-subtle">Contact</h5>
              <ul className="m-0 list-none space-y-1 p-0 leading-tight">
                <li>
                  <a href="mailto:eloi@halos.bio" className="footer-link">
                    eloi@halos.bio
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setDialogOpen(true)}
                    className="footer-link bg-transparent p-0"
                  >
                    Join waitlist
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col justify-between gap-2 border-t border-ink-line pt-5 text-[11px] uppercase tracking-[0.08em] text-ink-subtle sm:flex-row">
            <span>&copy; {new Date().getFullYear()} HALOS Biosciences, Inc.</span>
            <span>www.halos.bio</span>
          </div>
        </div>
      </footer>

      <EmailCaptureDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </main>
  );
}

