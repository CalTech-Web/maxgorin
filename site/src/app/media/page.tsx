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
      <section className="relative bg-gradient-to-br from-navy via-navy-light to-navy-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(212,168,67,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 text-center relative">
          <nav className="text-sm text-gray-400 mb-6">
            <a href="/" className="hover:text-white transition-colors duration-300">Home</a>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gold">Media</span>
          </nav>
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold/10 mb-6 animate-float">
            <Newspaper size={40} className="text-gold" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            Media & <span className="text-gold">Press</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto animate-fade-in-up-delay-1">
            News, press mentions, and media coverage about Max Gorin and his
            ventures.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-24 text-center">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-12 border border-gray-100">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-5">
              <Newspaper size={32} className="text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-navy mb-3">
              Media Coverage Coming Soon
            </h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Check back for the latest press mentions and media features about
              Max Gorin, LifeLine Ambulance, and his community initiatives.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-dark font-semibold transition-colors duration-300"
            >
              Media inquiries <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
