import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-halos-paper py-16 text-halos-ink dark:bg-halos-ink-900 dark:text-halos-ink-100">
      <div className="container mx-auto max-w-4xl">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            ← Back to home
          </Button>
        </Link>

        <h1 className="mb-8 font-display text-4xl font-light tracking-[-0.015em] text-halos-ink dark:text-halos-ink-100">Privacy Policy</h1>

        <div className="max-w-none space-y-6 text-halos-ink-600 dark:text-halos-ink-300">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-halos-ink dark:text-halos-ink-100">Introduction</h2>
            <p>
              HALOS Bio respects your privacy and is committed to protecting your personal information. This Privacy
              Policy explains how we collect, use, and safeguard your information when you visit our website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-halos-ink dark:text-halos-ink-100">Information We Collect</h2>
            <p>When you join our waitlist, we collect:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your areas of interest (if provided)</li>
              <li>Date and time of submission</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-halos-ink dark:text-halos-ink-100">How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Send you research updates and company news</li>
              <li>Notify you when products or services become available</li>
              <li>Respond to your inquiries</li>
              <li>Improve our services</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-halos-ink dark:text-halos-ink-100">Data Protection</h2>
            <p>
              We implement appropriate security measures to protect your personal information from unauthorized
              access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-halos-ink dark:text-halos-ink-100">Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Access your personal data</li>
              <li>Request correction of your data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of communications at any time</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
