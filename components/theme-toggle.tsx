"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

/**
 * Header dark/light switch. Persists choice in localStorage and toggles the
 * `dark` class on <html>. The initial class is set pre-hydration by the
 * bootstrap script in `app/layout.tsx`, so this component just reflects /
 * mutates that state.
 *
 * Calls the optional `onChange` callback whenever the resolved theme changes,
 * which lets the page swap things that can't be expressed as `dark:` Tailwind
 * variants (e.g. the sparkles particle palette).
 */
export function ThemeToggle({ onChange }: { onChange?: (theme: Theme) => void }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initial: Theme = document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
    setTheme(initial);
    setMounted(true);
    onChange?.(initial);
    // intentionally only on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    const root = document.documentElement;
    if (next === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    try {
      localStorage.setItem("theme", next);
    } catch {}
    onChange?.(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-halos-ink-200 bg-white/40 text-halos-ink transition-colors hover:bg-white/70 dark:border-halos-ink-700 dark:bg-halos-ink-800/60 dark:text-halos-ink-100 dark:hover:bg-halos-ink-700/70"
    >
      {/* Render a stable icon until mounted to avoid hydration mismatch */}
      {mounted && theme === "dark" ? (
        <Sun className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Moon className="h-4 w-4" aria-hidden="true" />
      )}
    </button>
  );
}

