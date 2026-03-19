import type { Metadata } from "next";
import Link from "next/link";
import {
  GraduationCap,
  ExternalLink,
  ArrowRight,
  ChevronRight,
  BookOpen,
  Trophy,
  Star,
} from "lucide-react";

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
      <section className="relative bg-gradient-to-br from-navy via-navy-light to-navy-dark text-white overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(212,168,67,0.15),transparent_60%)]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 text-center relative w-full">
          <nav className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-8">
            <a href="/" className="hover:text-white transition-colors duration-300">Home</a>
            <ChevronRight size={14} className="text-gray-500" />
            <span className="text-gold font-medium">Scholarship</span>
          </nav>
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gold/10 mb-8 animate-float">
            <GraduationCap size={48} className="text-gold" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
            Max Gorin <span className="text-gold">Scholarship</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto animate-fade-in-up-delay-1">
            Investing in the future by supporting aspiring students and the next
            generation of leaders.
          </p>
        </div>
      </section>

      {/* Values Cards */}
      <section className="relative bg-white -mt-8 mx-4 md:mx-8 lg:mx-auto lg:max-w-4xl rounded-2xl shadow-xl border border-gray-100 z-10">
        <div className="grid grid-cols-3 divide-x divide-gray-100">
          {[
            { icon: BookOpen, label: "Academic Excellence" },
            { icon: Trophy, label: "Leadership" },
            { icon: Star, label: "Community Impact" },
          ].map((item) => (
            <div key={item.label} className="px-6 py-8 text-center">
              <item.icon size={28} className="text-gold mx-auto mb-3" />
              <p className="text-sm font-semibold text-navy">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Content */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 pt-20 pb-20 md:pt-24 md:pb-24">
          <span className="inline-block text-xs font-bold text-gold uppercase tracking-widest mb-4">Apply Now</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6">
            Applications Are Open
          </h2>
          <div className="w-24 h-1 gold-shimmer mb-10 rounded-full" />
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

          <div className="mt-14 relative bg-gradient-to-br from-navy to-navy-dark rounded-2xl p-10 md:p-14 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,168,67,0.1),transparent_60%)]" />
            <div className="relative">
              <h3 className="text-2xl font-bold text-white mb-3">
                Ready to Apply?
              </h3>
              <p className="text-gray-300 mb-8 max-w-md mx-auto">
                Visit the official Max Gorin Scholarship website for eligibility
                requirements, application details, and deadlines.
              </p>
              <a
                href="https://maxgorinscholarship.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy-dark font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:shadow-[0_8px_30px_rgba(212,168,67,0.5)] hover:-translate-y-1 text-base"
              >
                Apply Now <ExternalLink size={18} />
              </a>
            </div>
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
