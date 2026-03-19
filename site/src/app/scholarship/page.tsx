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
      <section className="bg-gradient-to-br from-navy to-navy-dark text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 text-center">
          <nav className="text-sm text-gray-300 mb-4">
            <a href="/" className="hover:text-white">Home</a>
            <span className="mx-2">/</span>
            <span className="text-gold">Scholarship</span>
          </nav>
          <GraduationCap size={56} className="text-gold mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Max Gorin <span className="text-gold">Scholarship</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Investing in the future by supporting aspiring students and the next generation of leaders.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Applications Are Open
          </h2>
          <div className="w-16 h-1 bg-gold mb-8 rounded-full" />
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              The Max Gorin Scholarship was established to give back to the community by supporting students who demonstrate leadership, academic excellence, and a commitment to making a difference in the lives of others.
            </p>
            <p>
              Max Gorin believes that education is the foundation of a better future. Through this scholarship, he aims to remove financial barriers for deserving students who show promise and dedication to their goals.
            </p>
          </div>

          <div className="mt-10 bg-gradient-to-br from-navy/5 to-gold/5 rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-bold text-navy mb-3">
              Ready to Apply?
            </h3>
            <p className="text-gray-600 mb-6">
              Visit the official Max Gorin Scholarship website for eligibility requirements, application details, and deadlines.
            </p>
            <a
              href="https://maxgorinscholarship.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-navy-dark font-semibold px-8 py-3 rounded-full transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Apply Now <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center">
          <h2 className="text-2xl font-bold text-navy mb-4">
            Have Questions About the Scholarship?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-dark font-semibold transition-colors"
          >
            Contact us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
