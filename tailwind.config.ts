import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        halos: {
          ink: {
            DEFAULT: "#2F4763",
            50: "#F4F6F9",
            100: "#EAEEF3",
            200: "#D7DDE6",
            300: "#BAC4D0",
            400: "#94A3B4",
            500: "#6B7E95",
            600: "#4A5F7A",
            700: "#2F4763",
            800: "#263A54",
            900: "#1E2E43",
          },
          periwinkle: "#A9B3F6",
          lilac: "#E1B0EC",
          paper: "#FFFFFF",
          bone: "#FAFAFA",
          fog: "#F4F5F7",
          ok: "#B5E660",
          warn: "#F1EC55",
          error: "#FB8A80",
        },
      },
      backgroundImage: {
        "halos-gradient": "linear-gradient(90deg, #A9B3F6 0%, #E1B0EC 100%)",
        "halos-gradient-135": "linear-gradient(135deg, #A9B3F6 0%, #E1B0EC 100%)",
        "halos-gradient-dark": "linear-gradient(90deg, #7989F1 0%, #D288E2 100%)",
      },
      fontFamily: {
        sans: ["var(--font-roboto)", '"Helvetica Neue"', "Arial", "sans-serif"],
        display: ["var(--font-roboto)", '"Helvetica Neue"', "Arial", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "halo-spin": {
          to: { transform: "rotate(360deg)" },
        },
        "dot-pulse": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(169,179,246,0.55)" },
          "50%": { boxShadow: "0 0 0 8px rgba(225,176,236,0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "halo-spin": "halo-spin 60s linear infinite",
        "blob-a": "blob-float-a 16s cubic-bezier(0.65,0,0.35,1) infinite",
        "blob-b": "blob-float-b 22s cubic-bezier(0.65,0,0.35,1) infinite",
        "blob-c": "blob-float-c 28s cubic-bezier(0.65,0,0.35,1) infinite",
        "dot-pulse": "dot-pulse 2.6s cubic-bezier(0.65,0,0.35,1) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

