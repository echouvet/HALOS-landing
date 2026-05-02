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
    <main className="min-h-screen bg-halos-paper text-halos-ink dark:bg-halos-ink-900 dark:text-halos-ink-100">
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
      <header className="sticky top-0 z-20 border-b border-white/30 bg-white/30 shadow-[inset_0_-1px_0_0_rgba(47,71,99,0.05),0_8px_24px_-12px_rgba(47,71,99,0.15)] [-webkit-backdrop-filter:url(#liquid-glass)_blur(8px)_saturate(180%)] [backdrop-filter:url(#liquid-glass)_blur(8px)_saturate(180%)] dark:border-halos-ink-700/50 dark:bg-halos-ink-900/40 dark:shadow-[inset_0_-1px_0_0_rgba(255,255,255,0.04),0_8px_24px_-12px_rgba(0,0,0,0.6)]">
        <div className="relative mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-5 md:px-10">
          <a href="/" className="flex items-center gap-2.5 text-halos-ink no-underline dark:text-halos-ink-100" aria-label="HALOS Bio home">
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
      <section className="relative flex min-h-screen flex-col overflow-hidden border-b border-halos-ink-200 dark:border-halos-ink-700">
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
            so the gradient blobs remain crisp on top. Light: white; Dark: deep ink. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background: isDark
              ? "linear-gradient(to bottom, rgba(30,46,67,0) 0%, rgba(30,46,67,0) 5%, rgba(30,46,67,0.95) 100%)"
              : "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 5%, rgba(255,255,255,0.95) 100%)",
          }}
        />

        {/* Ambient gradient blobs — positions match reference standalone HTML */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-[120px] -top-20 h-[380px] w-[380px] rounded-full opacity-55 blur-[60px] will-change-transform animate-blob-a motion-reduce:animate-none"
          style={{ background: "radial-gradient(circle, #A9B3F6, transparent 70%)" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[6%] right-[14%] h-[340px] w-[340px] rounded-full opacity-60 blur-[60px] will-change-transform animate-blob-b motion-reduce:animate-none"
          style={{ background: "radial-gradient(circle, #E1B0EC, transparent 70%)" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[26%] top-[38%] h-[300px] w-[300px] rounded-full opacity-55 blur-[60px] will-change-transform animate-blob-c motion-reduce:animate-none"
          style={{ background: "radial-gradient(circle, #C7CEF9, transparent 70%)" }}
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
          {/* Eyebrow — liquid-glass pill (matches button glass treatment, no hover) + pulsating gradient dot */}
          <div className="mb-7 inline-flex self-start items-center gap-2.5 rounded-full border border-halos-ink-200 bg-white/5 px-3.5 py-[7px] font-sans text-[11px] font-bold uppercase leading-none tracking-[0.16em] text-halos-ink-500 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.55),inset_0_-1px_0_0_rgba(47,71,99,0.04),0_10px_30px_-10px_rgba(47,71,99,0.18)] [-webkit-backdrop-filter:url(#liquid-glass)_blur(4px)_saturate(180%)] [backdrop-filter:url(#liquid-glass)_blur(4px)_saturate(180%)] dark:border-halos-ink-700 dark:bg-halos-ink-100/5 dark:text-halos-ink-300 dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),inset_0_-1px_0_0_rgba(0,0,0,0.4),0_10px_30px_-10px_rgba(0,0,0,0.6)]">
            <span
              aria-hidden="true"
              className="inline-block h-2 w-2 rounded-full bg-halos-gradient shadow-[0_0_0_0_rgba(169,179,246,0.55)] animate-dot-pulse motion-reduce:animate-none"
            />
            <span>Human fetal plasma + engineered at scale</span>
          </div>

          {/* H1 */}
          <h1 className="m-0 max-w-[1100px] text-balance font-display text-[clamp(44px,6.2vw,96px)] font-light leading-[1.02] tracking-[-0.022em] text-halos-ink dark:text-halos-ink-100">
            We are engineering the most <b className="font-bold">regenerative</b> biochemical envir
            <span
              className="bg-halos-gradient bg-clip-text text-transparent dark:bg-halos-gradient-dark"
              aria-hidden="true"
            >
              o
            </span>
            <span className="sr-only">o</span>
            nment in human biology.
          </h1>

          {/* Sub */}
          <p className="mb-10 mt-7 max-w-[1000px] text-[20px] font-light leading-[1.45] text-halos-ink-600 dark:text-halos-ink-300">
            Pioneering the world's first lab-grown human fetal plasma: a synthetic, scalable, and
            ethical recreation of the most regenerative biochemical environment in human biology as a platform
            technology for cell culture and regenerative medicine.
          </p>

          {/* Actions — liquid-glass (SVG displacement-map refraction) */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setDialogOpen(true)}
              className="group inline-flex items-center gap-2 rounded-full border border-white/45 bg-white/5 px-6 py-3 text-[14px] font-bold tracking-[0.01em] text-halos-ink shadow-[inset_0_1px_0_0_rgba(255,255,255,0.55),inset_0_-1px_0_0_rgba(0,0,0,0.08),0_10px_30px_-10px_rgba(47,71,99,0.25)] transition-all duration-200 hover:bg-halos-ink/5 active:scale-[0.98] [-webkit-backdrop-filter:url(#liquid-glass)_blur(4px)_saturate(180%)] [backdrop-filter:url(#liquid-glass)_blur(4px)_saturate(180%)] dark:border-halos-ink-100/20 dark:bg-halos-ink-100/5 dark:text-halos-ink-100 dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),inset_0_-1px_0_0_rgba(0,0,0,0.4),0_10px_30px_-10px_rgba(0,0,0,0.6)] dark:hover:bg-halos-ink-100/10"
            >
              Join waitlist
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </button>
            <a
              href="mailto:eloi@halos.bio"
              className="inline-flex items-center gap-2 rounded-full border border-white/45 bg-halos-ink/10 px-6 py-3 text-[14px] font-bold tracking-[0.01em] text-halos-ink shadow-[inset_0_1px_0_0_rgba(255,255,255,0.55),inset_0_-1px_0_0_rgba(47,71,99,0.04),0_10px_30px_-10px_rgba(47,71,99,0.18)] transition-all duration-200 hover:bg-halos-ink/15 active:scale-[0.98] [-webkit-backdrop-filter:url(#liquid-glass)_blur(4px)_saturate(180%)] [backdrop-filter:url(#liquid-glass)_blur(4px)_saturate(180%)] dark:border-halos-ink-100/20 dark:bg-halos-ink-100/10 dark:text-halos-ink-100 dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),inset_0_-1px_0_0_rgba(0,0,0,0.4),0_10px_30px_-10px_rgba(0,0,0,0.6)] dark:hover:bg-halos-ink-100/15"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Investor / Partner inquiry
            </a>
          </div>

          {/* Trust indicators (restored from origin/main, light-theme styling) */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-halos-ink-500 dark:text-halos-ink-400">
            <div className="flex items-center gap-2">
              <FlaskConical className="h-4 w-4 text-halos-ink-400 dark:text-halos-ink-500" aria-hidden="true" />
              <span>Research-Focused</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-halos-ink-400 dark:text-halos-ink-500" aria-hidden="true" />
              <span>Ethically Rigorous</span>
            </div>
          </div>

          {/* Compliance / disclaimer — anchored at the bottom of the hero */}
          <p className="mt-auto flex max-w-3xl items-start gap-2.5 pt-16 text-[13px] leading-[1.55] text-halos-ink-500 dark:text-halos-ink-400">
            <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-halos-ink-400 dark:text-halos-ink-500" aria-hidden="true" />
            <span>
              <strong className="font-bold text-halos-ink dark:text-halos-ink-100">R&amp;D stage.</strong> All information is exploratory and
              subject to change. This site does not constitute medical advice, a solicitation for investment, or a
              promise of product availability.
            </span>
          </p>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <hr className="m-0 h-0.5 border-0 bg-halos-gradient" aria-hidden="true" />
      <footer className="bg-white pb-16 pt-12 dark:bg-halos-ink-900">
        <div className="mx-auto max-w-[1280px] px-5 md:px-10">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-[2fr_1fr_1fr]">
            <div className="col-span-2 flex items-start gap-4 md:col-span-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.svg" alt="HALOS" className="h-9 w-auto flex-shrink-0" />
              <p className="max-w-[280px] text-[12px] leading-[1.5] text-halos-ink-500 dark:text-halos-ink-400">
                HALOS Biosciences, Inc. Pioneering artificial human fetal serum for longevity and regenerative
                medicine.
              </p>
            </div>
            <div>
              <h5 className="mb-3 text-[11px] font-bold uppercase tracking-[0.12em] text-halos-ink-500 dark:text-halos-ink-400">Company</h5>
              <ul className="m-0 list-none space-y-1 p-0 leading-tight">
                <li>
                  <a href="/privacy" className="text-[13px] leading-tight text-halos-ink no-underline transition-opacity hover:opacity-70 dark:text-halos-ink-100">
                    Privacy policy
                  </a>
                </li>
                {/* <li>
                  <a href="/terms" className="text-[13px] leading-tight text-halos-ink no-underline transition-opacity hover:opacity-70">
                    Terms of use
                  </a>
                </li> */}
              </ul>
            </div>
            <div>
              <h5 className="mb-3 text-[11px] font-bold uppercase tracking-[0.12em] text-halos-ink-500 dark:text-halos-ink-400">Contact</h5>
              <ul className="m-0 list-none space-y-1 p-0 leading-tight">
                <li>
                  <a
                    href="mailto:eloi@halos.bio"
                    className="text-[13px] leading-tight text-halos-ink no-underline transition-opacity hover:opacity-70 dark:text-halos-ink-100"
                  >
                    eloi@halos.bio
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setDialogOpen(true)}
                    className="bg-transparent p-0 text-[13px] leading-tight text-halos-ink transition-opacity hover:opacity-70 dark:text-halos-ink-100"
                  >
                    Join waitlist
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col justify-between gap-2 border-t border-halos-ink-200 pt-5 text-[11px] uppercase tracking-[0.08em] text-halos-ink-500 dark:border-halos-ink-700 dark:text-halos-ink-400 sm:flex-row">
            <span>&copy; {new Date().getFullYear()} HALOS Biosciences, Inc.</span>
            <span>www.halos.bio</span>
          </div>
        </div>
      </footer>

      <EmailCaptureDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </main>
  );
}

