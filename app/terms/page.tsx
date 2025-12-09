import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            ← Back to Home
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-8">Terms of Use</h1>
        
        <div className="prose prose-invert max-w-none space-y-6 text-neutral-300">
          <p className="text-sm text-neutral-500">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by the 
              terms and provision of this agreement.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Research Use Only</h2>
            <p className="font-semibold text-yellow-400">
              IMPORTANT: All information on this website is for research and informational 
              purposes only.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>This site does not provide medical advice</li>
              <li>Products are not intended for diagnostic or therapeutic use</li>
              <li>Information is subject to change without notice</li>
              <li>No products are currently available for commercial use</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">No Investment Solicitation</h2>
            <p>
              Nothing on this website constitutes a solicitation for investment, an offer to 
              sell securities, or financial advice. Any inquiries regarding investment 
              opportunities will be handled in accordance with applicable securities laws.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and software, is 
              the property of Halos Bio and is protected by copyright and other intellectual 
              property laws.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Disclaimer of Warranties</h2>
            <p>
              This website and all information are provided &quot;as is&quot; without any representations 
              or warranties, express or implied. Halos Bio makes no representations or warranties 
              regarding the accuracy, completeness, or reliability of any information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Limitation of Liability</h2>
            <p>
              Halos Bio shall not be liable for any damages arising from the use or inability 
              to use this website or any information contained herein.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Your continued use of 
              the website following any changes indicates your acceptance of the new terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Contact</h2>
            <p>
              For questions about these Terms of Use, contact:{" "}
              <a href="mailto:legal@halosbio.com" className="text-neutral-100 underline">
                legal@halosbio.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

