import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const title = "Halos Bio | Pioneering Artificial Human Fetal Serum"
const description = "Halos Bio is redefining the biotech landscape by changing the artificial plasma space."

export const metadata: Metadata = {
  title,
  description: description + " Join our waitlist for research updates.",
  keywords: ["biotech", "artificial plasma", "human serum", "research", "life sciences"],
  authors: [{ name: "Halos Bio" }],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
    siteName: "Halos Bio",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Inline pre-hydration script: applies the persisted (or system-preferred)
  // theme to <html> before first paint to avoid a flash of the wrong theme.
  const themeBootstrap = `(() => {
    try {
      const stored = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const isDark = stored ? stored === 'dark' : prefersDark;
      if (isDark) document.documentElement.classList.add('dark');
    } catch {}
  })();`;

  return (
    <html lang="en" className={roboto.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
