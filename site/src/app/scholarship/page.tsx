import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, ExternalLink, ArrowRight, ChevronRight, BookOpen, Trophy, Star } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Max Gorin Scholarship",
  description: "The Max Gorin Scholarship supports aspiring students and future leaders. Apply today at maxgorinscholarship.com.",
  alternates: { canonical: "https://maxgorin.com/scholarship" },
  openGraph: { title: "Max Gorin Scholarship", description: "Supporting the next generation of leaders.", url: "https://maxgorin.com/scholarship" },
};

export default function ScholarshipPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 pt-28 pb-20 md:pt-36 md:pb-28 text-center">
          <nav className="flex items-center justify-center gap-2 text-sm text-foreground/30 mb-10">
            <a href="/" className="hover:text-foreground transition-colors">Home</a>
            <ChevronRight size={14} />
            <span className="text-foreground/60">Scholarship</span>
          </nav>
          <div className="accent-line mx-auto mb-8" />
          <GraduationCap size={44} className="text-gold mx-auto mb-6" />
          <h1 className="heading-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
            Max Gorin<br /><span className="text-gold">Scholarship</span>
          </h1>
          <p className="text-foreground/40 text-lg max-w-xl mx-auto">
            Investing in the future by supporting aspiring students and the next generation of leaders.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-foreground text-white py-10">
        <div className="mx-auto max-w-3xl px-6">
          <div className="grid grid-cols-3 gap-6">
            {[
              { icon: BookOpen, label: "Academic Excellence" },
              { icon: Trophy, label: "Leadership" },
              { icon: Star, label: "Community Impact" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <item.icon size={22} className="text-gold mx-auto mb-2" />
                <p className="text-xs font-medium text-white/50 uppercase tracking-wider">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
          <FadeIn>
            <div className="accent-line mb-6" />
            <p className="text-[11px] font-semibold text-foreground/30 uppercase tracking-[0.2em] mb-4">Apply Now</p>
            <h2 className="heading-display text-4xl md:text-5xl text-foreground mb-10">Applications Are Open</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="space-y-6 text-foreground/50 text-lg leading-relaxed mb-14">
              <p>The Max Gorin Scholarship was established to give back to the community by supporting students who demonstrate leadership, academic excellence, and a commitment to making a difference.</p>
              <p>Max Gorin believes that education is the foundation of a better future. Through this scholarship, he aims to remove financial barriers for deserving students.</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="bg-cream rounded-2xl p-10 md:p-14 text-center border border-black/5">
              <h3 className="text-2xl font-bold text-foreground mb-3">Ready to Apply?</h3>
              <p className="text-foreground/40 mb-8 max-w-md mx-auto text-sm">Visit the official website for eligibility requirements, application details, and deadlines.</p>
              <a href="https://maxgorinscholarship.com" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 bg-foreground text-background font-medium text-sm px-8 py-4 rounded-full hover:bg-navy transition-colors duration-300">
                Apply Now <ExternalLink size={16} />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center">
          <h2 className="text-xl font-bold text-foreground mb-2">Have Questions?</h2>
          <Link href="/contact" className="inline-flex items-center gap-2 text-gold hover:text-gold-dark font-medium text-sm transition-colors">
            Contact us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
