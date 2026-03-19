import type { Metadata } from "next";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for maxgorin.com",
  alternates: { canonical: "https://maxgorin.com/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 pt-28 pb-16 md:pt-36 md:pb-20">
          <nav className="flex items-center gap-2 text-sm text-foreground/30 mb-10">
            <a href="/" className="hover:text-foreground transition-colors">Home</a>
            <ChevronRight size={14} />
            <span className="text-foreground/60">Privacy Policy</span>
          </nav>
          <div className="accent-line mb-8" />
          <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-foreground">
            Privacy <span className="text-gold">Policy</span>
          </h1>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-24">
          <p className="text-foreground/30 text-sm mb-12">
            <span className="text-foreground/60 font-semibold">Effective Date:</span> March 18, 2026
          </p>
          <div className="space-y-10">
            {[
              { title: "Information We Collect", text: "When you visit maxgorin.com, we may collect certain information automatically, including your IP address, browser type, and pages visited. If you submit a contact form, we collect your name, email address, and message content." },
              { title: "How We Use Your Information", text: "We use the information we collect to respond to your inquiries, improve our website, and communicate with you about relevant updates. We do not sell or share your personal information with third parties for marketing purposes." },
              { title: "Cookies", text: "This website may use cookies and similar technologies to enhance your browsing experience. You can control cookie settings through your browser preferences." },
              { title: "Third-Party Services", text: "We may use third-party services such as analytics tools to help us understand how visitors use our site. These services may collect information sent by your browser as part of a web page request." },
              { title: "Data Security", text: "We take reasonable measures to protect your personal information from unauthorized access, alteration, or destruction. However, no method of transmission over the internet is 100% secure." },
            ].map((s) => (
              <div key={s.title}>
                <h2 className="text-lg font-bold text-foreground mb-3">{s.title}</h2>
                <p className="text-foreground/50 leading-relaxed">{s.text}</p>
              </div>
            ))}
            <div>
              <h2 className="text-lg font-bold text-foreground mb-3">Contact</h2>
              <p className="text-foreground/50 leading-relaxed">
                If you have questions about this privacy policy, please{" "}
                <a href="/contact" className="text-gold hover:text-gold-dark transition-colors font-medium">contact us</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
