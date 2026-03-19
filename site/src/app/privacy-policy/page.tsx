import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for maxgorin.com",
  alternates: { canonical: "https://maxgorin.com/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy to-navy-dark text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <nav className="text-sm text-gray-300 mb-4">
            <a href="/" className="hover:text-white">Home</a>
            <span className="mx-2">/</span>
            <span className="text-gold">Privacy Policy</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold">
            Privacy <span className="text-gold">Policy</span>
          </h1>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-20 prose prose-lg max-w-none text-gray-600">
          <p><strong>Effective Date:</strong> March 18, 2026</p>

          <h2 className="text-navy">Information We Collect</h2>
          <p>
            When you visit maxgorin.com, we may collect certain information automatically, including your IP address, browser type, and pages visited. If you submit a contact form, we collect your name, email address, and message content.
          </p>

          <h2 className="text-navy">How We Use Your Information</h2>
          <p>
            We use the information we collect to respond to your inquiries, improve our website, and communicate with you about relevant updates. We do not sell or share your personal information with third parties for marketing purposes.
          </p>

          <h2 className="text-navy">Cookies</h2>
          <p>
            This website may use cookies and similar technologies to enhance your browsing experience. You can control cookie settings through your browser preferences.
          </p>

          <h2 className="text-navy">Third-Party Services</h2>
          <p>
            We may use third-party services such as analytics tools to help us understand how visitors use our site. These services may collect information sent by your browser as part of a web page request.
          </p>

          <h2 className="text-navy">Data Security</h2>
          <p>
            We take reasonable measures to protect your personal information from unauthorized access, alteration, or destruction. However, no method of transmission over the internet is 100% secure.
          </p>

          <h2 className="text-navy">Contact</h2>
          <p>
            If you have questions about this privacy policy, please <a href="/contact" className="text-gold hover:text-gold-dark">contact us</a>.
          </p>
        </div>
      </section>
    </>
  );
}
