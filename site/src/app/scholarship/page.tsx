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
import FadeIn from "@/components/FadeIn";

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

const values = [
  { icon: BookOpen, label: "Academic Excellence" },
  { icon: Trophy, label: "Leadership" },
  { icon: Star, label: "Community Impact" },
];

export default function ScholarshipPage() {
  return (
    <div className="grain">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 mesh-bg" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-20 md:pt-40 md:pb-28 text-center w-full">
          <nav className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-10">
            <a href="/" className="hover:text-white transition-colors duration-300">Home</a>
            <ChevronRight size={14} className="text-gray-600" />
            <span className="text-gold font-medium">Scholarship</span>
          </nav>
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full glass mb-8 animate-float">
            <GraduationCap size={44} className="text-gold" />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            Max Gorin<br />
            <span className="text-gradient-gold">Scholarship</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Investing in the future by supporting aspiring students and the next
            generation of leaders.
          </p>
        </div>
      </section>

      {/* Values Strip */}
      <section className="relative border-t border-b border-white/5">
        <div className="absolute inset-0 bg-surface/50" />
        <div className="relative mx-auto max-w-4xl px-6 py-10">
          <div className="grid grid-cols-3 gap-6">
            {values.map((item, i) => (
              <FadeIn key={item.label} delay={i * 0.1} direction="up">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl glass mb-3">
                    <item.icon size={26} className="text-gold" />
                  </div>
                  <p className="text-sm font-semibold text-gray-300">{item.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="relative">
        <div className="absolute inset-0 mesh-bg-alt" />
        <div className="relative mx-auto max-w-3xl px-6 py-24 md:py-32">
          <FadeIn>
            <span className="inline-block text-xs font-bold text-gold uppercase tracking-[0.2em] mb-4">Apply Now</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Applications Are Open
            </h2>
            <div className="w-24 h-0.5 gold-shimmer mb-10 rounded-full" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                The Max Gorin Scholarship was established to give back to the
                community by supporting students who demonstrate leadership,
                academic excellence, and a commitment to making a difference in
                the lives of others.
              </p>
              <p>
                Max Gorin believes that education is the foundation of a better
                future. Through this scholarship, he aims to remove financial
                barriers for deserving students who show promise and dedication
                to their goals.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-14 glass-strong rounded-2xl p-10 md:p-14 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.04] to-transparent" />
              <div className="relative">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Ready to Apply?
                </h3>
                <p className="text-gray-400 mb-8 max-w-md mx-auto">
                  Visit the official Max Gorin Scholarship website for eligibility
                  requirements, application details, and deadlines.
                </p>
                <a
                  href="https://maxgorinscholarship.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-gold hover:bg-gold-light text-background font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,168,67,0.3)]"
                >
                  Apply Now <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="relative border-t border-white/5">
        <div className="absolute inset-0 bg-background" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">
            Have Questions About the Scholarship?
          </h2>
          <p className="text-gray-500 mb-6">We would love to hear from you.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-semibold transition-colors duration-300"
          >
            Contact us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
