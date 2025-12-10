import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

