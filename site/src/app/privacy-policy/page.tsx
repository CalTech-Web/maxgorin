import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for maxgorin.com",
  alternates: { canonical: "https://maxgorin.com/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-navy via-navy-light to-navy-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(212,168,67,0.06),transparent_50%)]" />
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 relative">
          <nav className="text-sm text-gray-400 mb-6 animate-fade-in-up">
            <a href="/" className="hover:text-white transition-colors duration-300">Home</a>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gold">Privacy Policy</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold animate-fade-in-up">
            Privacy <span className="text-gold">Policy</span>
          </h1>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-24">
          <p className="text-gray-500 text-sm mb-10">
            <strong className="text-navy">Effective Date:</strong> March 18,
            2026
          </p>

          <div className="space-y-10">
            <div>
              <h2 className="text-xl font-semibold text-navy mb-3">
                Information We Collect
              </h2>
              <p className="text-gray-600 leading-relaxed">
                When you visit maxgorin.com, we may collect certain information
                automatically, including your IP address, browser type, and
                pages visited. If you submit a contact form, we collect your
                name, email address, and message content.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-navy mb-3">
                How We Use Your Information
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We use the information we collect to respond to your inquiries,
                improve our website, and communicate with you about relevant
                updates. We do not sell or share your personal information with
                third parties for marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-navy mb-3">Cookies</h2>
              <p className="text-gray-600 leading-relaxed">
                This website may use cookies and similar technologies to enhance
                your browsing experience. You can control cookie settings through
                your browser preferences.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-navy mb-3">
                Third-Party Services
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We may use third-party services such as analytics tools to help
                us understand how visitors use our site. These services may
                collect information sent by your browser as part of a web page
                request.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-navy mb-3">
                Data Security
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We take reasonable measures to protect your personal information
                from unauthorized access, alteration, or destruction. However, no
                method of transmission over the internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-navy mb-3">Contact</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have questions about this privacy policy, please{" "}
                <a
                  href="/contact"
                  className="text-gold hover:text-gold-dark transition-colors duration-300 font-medium"
                >
                  contact us
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
