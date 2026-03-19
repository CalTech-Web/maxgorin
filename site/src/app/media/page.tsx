import type { Metadata } from "next";
import Link from "next/link";
import { Newspaper, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Media",
  description:
    "Media coverage and press mentions about Max Gorin, founder of LifeLine Ambulance and community leader in Los Angeles County.",
  alternates: { canonical: "https://maxgorin.com/media" },
  openGraph: {
    title: "Media - Max Gorin",
    description: "Press and media coverage about Max Gorin.",
    url: "https://maxgorin.com/media",
  },
};

export default function MediaPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-navy-dark text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 text-center">
          <nav className="text-sm text-gray-300 mb-4">
            <a href="/" className="hover:text-white">Home</a>
            <span className="mx-2">/</span>
            <span className="text-gold">Media</span>
          </nav>
          <Newspaper size={56} className="text-gold mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Media & <span className="text-gold">Press</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            News, press mentions, and media coverage about Max Gorin and his ventures.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-20 text-center">
          <div className="bg-gray-50 rounded-2xl p-10">
            <Newspaper size={40} className="text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-navy mb-3">
              Media Coverage Coming Soon
            </h2>
            <p className="text-gray-600 mb-6">
              Check back for the latest press mentions and media features about Max Gorin, LifeLine Ambulance, and his community initiatives.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-dark font-semibold transition-colors"
            >
              Media inquiries <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
