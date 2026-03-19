import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, ExternalLink, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Max Gorin Scholarship",
  description:
    "The Max Gorin Scholarship supports aspiring students and future leaders. Apply today at maxgorinscholarship.com.",
  alternates: { canonical: "https://maxgorin.com/scholarship" },
  openGraph: {
    title: "Max Gorin Scholarship",
    description:
      "Supporting the next generation of leaders. Apply for the Max Gorin Scholarship today.",
    url: "https://maxgorin.com/scholarship",
  },
};

export default function ScholarshipPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy via-navy-light to-navy-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(212,168,67,0.1),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 text-center relative">
          <nav className="text-sm text-gray-400 mb-6">
            <a href="/" className="hover:text-white transition-colors duration-300">Home</a>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gold">Scholarship</span>
          </nav>
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold/10 mb-6 animate-float">
            <GraduationCap size={40} className="text-gold" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            Max Gorin <span className="text-gold">Scholarship</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto animate-fade-in-up-delay-1">
            Investing in the future by supporting aspiring students and the next
            generation of leaders.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Applications Are Open
          </h2>
          <div className="w-20 h-1 gold-shimmer mb-10 rounded-full" />
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>
              The Max Gorin Scholarship was established to give back to the
              community by supporting students who demonstrate leadership,
              academic excellence, and a commitment to making a difference in
              the lives of others.
            </p>
            <p>
              Max Gorin believes that education is the foundation of a better
              future. Through this scholarship, he aims to remove financial
              barriers for deserving students who show promise and dedication to
              their goals.
            </p>
          </div>

          <div className="mt-12 bg-gradient-to-br from-navy/5 to-gold/5 rounded-2xl p-10 md:p-12 text-center border border-gold/10">
            <h3 className="text-2xl font-bold text-navy mb-3">
              Ready to Apply?
            </h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Visit the official Max Gorin Scholarship website for eligibility
              requirements, application details, and deadlines.
            </p>
            <a
              href="https://maxgorinscholarship.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-navy-dark font-semibold px-9 py-4 rounded-full transition-all duration-300 hover:shadow-[0_8px_30px_rgba(212,168,67,0.4)] hover:-translate-y-0.5"
            >
              Apply Now <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center">
          <h2 className="text-2xl font-bold text-navy mb-2">
            Have Questions About the Scholarship?
          </h2>
          <p className="text-gray-500 mb-6">We would love to hear from you.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-dark font-semibold transition-colors duration-300"
          >
            Contact us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
