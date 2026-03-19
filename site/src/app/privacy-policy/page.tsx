import type { Metadata } from "next";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for maxgorin.com",
  alternates: { canonical: "https://maxgorin.com/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="grain">
      <section className="relative min-h-[40vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 mesh-bg" />
        <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-16 md:pt-40 md:pb-20 w-full">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <a href="/" className="hover:text-white transition-colors duration-300">Home</a>
            <ChevronRight size={14} className="text-gray-600" />
            <span className="text-gold font-medium">Privacy Policy</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Privacy <span className="text-gradient-gold">Policy</span>
          </h1>
        </div>
      </section>

      <section className="relative border-t border-white/5">
        <div className="absolute inset-0 bg-surface/50" />
        <div className="relative mx-auto max-w-3xl px-6 py-20 md:py-24">
          <p className="text-gray-500 text-sm mb-12">
            <span className="text-gray-300 font-semibold">Effective Date:</span>{" "}
            March 18, 2026
          </p>

          <div className="space-y-10">
            {[
              {
                title: "Information We Collect",
                text: "When you visit maxgorin.com, we may collect certain information automatically, including your IP address, browser type, and pages visited. If you submit a contact form, we collect your name, email address, and message content.",
              },
              {
                title: "How We Use Your Information",
                text: "We use the information we collect to respond to your inquiries, improve our website, and communicate with you about relevant updates. We do not sell or share your personal information with third parties for marketing purposes.",
              },
              {
                title: "Cookies",
                text: "This website may use cookies and similar technologies to enhance your browsing experience. You can control cookie settings through your browser preferences.",
              },
              {
                title: "Third-Party Services",
                text: "We may use third-party services such as analytics tools to help us understand how visitors use our site. These services may collect information sent by your browser as part of a web page request.",
              },
              {
                title: "Data Security",
                text: "We take reasonable measures to protect your personal information from unauthorized access, alteration, or destruction. However, no method of transmission over the internet is 100% secure.",
              },
            ].map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-bold text-white mb-3">
                  {section.title}
                </h2>
                <p className="text-gray-400 leading-relaxed">{section.text}</p>
              </div>
            ))}

            <div>
              <h2 className="text-xl font-bold text-white mb-3">Contact</h2>
              <p className="text-gray-400 leading-relaxed">
                If you have questions about this privacy policy, please{" "}
                <a
                  href="/contact"
                  className="text-gold hover:text-gold-light transition-colors duration-300 font-medium"
                >
                  contact us
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
