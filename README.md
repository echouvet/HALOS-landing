# Halos Bio Landing Page

A modern, accessible, and performant landing page for Halos Bio - a stealth-mode biotech company redefining artificial human serum.

## Features

- ✨ Beautiful particle effect background using SparklesCore
- 📱 Fully responsive design (mobile-first)
- ♿ WCAG 2.1 AA accessibility compliant
- 🎨 Dark mode with Tailwind CSS
- 🚀 Optimized for performance (LCP < 2.5s target)
- 📧 Email capture with interest tagging
- 🔒 Privacy-focused with proper disclaimers
- 🎭 Respects prefers-reduced-motion

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui + Radix UI
- **Animations**: Framer Motion
- **Particles**: @tsparticles
- **Icons**: Lucide React
- **Validation**: Zod

## Getting Started

### Prerequisites

- Node.js 18+ or compatible runtime
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd halosbiolanding
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.local.example .env.local
   # Edit .env.local with your values
   ```

4. Run the development server:
   ```bash
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                      # Next.js App Router pages
│   ├── api/lead/            # Email capture API route
│   ├── privacy/             # Privacy policy page
│   ├── terms/               # Terms of use page
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Landing page
│   └── globals.css          # Global styles
├── components/
│   ├── ui/                  # UI components (shadcn)
│   │   ├── sparkles.tsx    # Particle background component
│   │   ├── button.tsx      # Button component
│   │   ├── dialog.tsx      # Dialog component
│   │   ├── input.tsx       # Input component
│   │   └── badge.tsx       # Badge component
│   └── email-capture-dialog.tsx  # Email capture form
├── lib/
│   └── utils.ts             # Utility functions (cn helper)
└── public/                  # Static assets
```

## Key Components

### SparklesCore
A customizable particle effect component that creates the cinematic background. Props include:
- `particleDensity`: Number of particles (default: 100)
- `minSize` / `maxSize`: Particle size range
- `speed`: Animation speed
- `particleColor`: Particle color (hex)

### EmailCaptureDialog
A form dialog for capturing waitlist signups with:
- Name and email fields
- Interest tag selection (Research, Clinical, Investor, Talent)
- Validation and error handling
- Success state feedback

## Performance Optimization

- Server-side rendering where possible
- Optimized particle density for mobile devices
- Lazy loading of non-critical components
- Reduced motion support for accessibility
- Target: LCP < 2.5s, JS bundle < 200KB

## Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states on all interactive elements
- Color contrast meets WCAG 2.1 AA standards
- Respects `prefers-reduced-motion`

## Compliance & Legal

The site includes proper disclaimers:
- "For research use only. Not for diagnostic or therapeutic use."
- No medical claims or efficacy statements
- Clear privacy policy and terms of use
- Not a solicitation for investment

## Email Integration

The `/api/lead` route currently logs submissions. To integrate with an email service:

1. Choose a provider (e.g., SendGrid, Mailchimp, ConvertKit, Resend)
2. Add your API key to `.env.local`
3. Update the API route in `app/api/lead/route.ts`

Example with Resend:
```typescript
import { Resend } from 'resend';
const resend = new Resend(process.env.EMAIL_SERVICE_API_KEY);
// ... add implementation
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add environment variables
4. Deploy!

The build configuration is pre-configured for Vercel.

### Other Platforms

Build command: `pnpm build`  
Output directory: `.next`  
Install command: `pnpm install`

## Environment Variables

See `.env.local.example` for all available environment variables.

## License

Copyright © 2025 Halos Bio. All rights reserved.

## Support

For questions or issues, contact: [contact@halosbio.com](mailto:contact@halosbio.com)

