import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            ← Back to Home
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-invert max-w-none space-y-6 text-neutral-300">
          <p className="text-sm text-neutral-500">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Introduction</h2>
            <p>
              Halos Bio (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to 
              protecting your personal information. This Privacy Policy explains how we collect, 
              use, and safeguard your information when you visit our website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Information We Collect</h2>
            <p>
              When you join our waitlist, we collect:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your areas of interest (if provided)</li>
              <li>Date and time of submission</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">How We Use Your Information</h2>
            <p>
              We use your information to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Send you research updates and company news</li>
              <li>Notify you when products or services become available</li>
              <li>Respond to your inquiries</li>
              <li>Improve our services</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Data Protection</h2>
            <p>
              We implement appropriate security measures to protect your personal information 
              from unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Your Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal data</li>
              <li>Request correction of your data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of communications at any time</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:{" "}
              <a href="mailto:privacy@halosbio.com" className="text-neutral-100 underline">
                privacy@halosbio.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

