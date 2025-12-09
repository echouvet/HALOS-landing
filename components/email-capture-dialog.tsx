"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

interface EmailCaptureDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function EmailCaptureDialog({ open, onOpenChange }: EmailCaptureDialogProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const interestOptions = ["Research", "Clinical", "Investor", "Talent"];

  const toggleInterest = (interest: string) => {
    setInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (!name.trim() || !email.trim()) {
      setError("Please fill in all required fields.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Using Formspree for form submission (free tier: 50 submissions/month)
      // Alternative: Use mailto link or integrate with your email service
      // To set up: Sign up at formspree.io and replace YOUR_FORM_ID below
      const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/mrbyloan";
      
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          interests: interests.join(", "),
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        // Reset form after 2 seconds and close dialog
        setTimeout(() => {
          setName("");
          setEmail("");
          setInterests([]);
          setIsSuccess(false);
          onOpenChange(false);
        }, 2000);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
            <DialogTitle className="text-2xl mb-2">Thank You!</DialogTitle>
            <DialogDescription>
              We&apos;ll be in touch with research updates soon.
            </DialogDescription>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Join the Waitlist</DialogTitle>
              <DialogDescription>
                Be the first to know when Halos Bio launches. By submitting, you
                consent to receive research updates and agree to our privacy policy.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name <span className="text-red-500">*</span>
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email <span className="text-red-500">*</span>
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Areas of Interest</label>
                <div className="flex flex-wrap gap-2">
                  {interestOptions.map((interest) => (
                    <Badge
                      key={interest}
                      variant={interests.includes(interest) ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => !isSubmitting && toggleInterest(interest)}
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>

              {error && (
                <p className="text-sm text-red-500" role="alert">
                  {error}
                </p>
              )}

              <DialogFooter>
                <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
                  {isSubmitting ? "Submitting..." : "Join Waitlist"}
                </Button>
              </DialogFooter>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

