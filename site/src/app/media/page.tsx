import type { Metadata } from "next";
import Link from "next/link";
import { Newspaper, ArrowRight, ChevronRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";

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
    <div className="grain">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 mesh-bg" />
        <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-20 md:pt-40 md:pb-24 text-center w-full">
          <nav className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-10">
            <a href="/" className="hover:text-white transition-colors duration-300">Home</a>
            <ChevronRight size={14} className="text-gray-600" />
            <span className="text-gold font-medium">Media</span>
          </nav>
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full glass mb-8 animate-float">
            <Newspaper size={36} className="text-gold" />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            Media &<br />
            <span className="text-gradient-gold">Press</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            News, press mentions, and media coverage about Max Gorin and his ventures.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="relative border-t border-white/5">
        <div className="absolute inset-0 mesh-bg-alt" />
        <div className="relative mx-auto max-w-3xl px-6 py-24 md:py-32 text-center">
          <FadeIn>
            <div className="glass-strong rounded-2xl p-14 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.02] to-transparent" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 mb-6">
                  <Newspaper size={28} className="text-gray-500" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">
                  Media Coverage Coming Soon
                </h2>
                <p className="text-gray-500 mb-8 max-w-md mx-auto">
                  Check back for the latest press mentions and media features
                  about Max Gorin, LifeLine Ambulance, and his community
                  initiatives.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-semibold transition-colors duration-300"
                >
                  Media inquiries <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
