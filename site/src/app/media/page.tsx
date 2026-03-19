import type { Metadata } from "next";
import Link from "next/link";
import { Newspaper, ArrowRight, ChevronRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Media",
  description: "Media coverage and press mentions about Max Gorin, founder of LifeLine Ambulance.",
  alternates: { canonical: "https://maxgorin.com/media" },
  openGraph: { title: "Media - Max Gorin", description: "Press and media coverage about Max Gorin.", url: "https://maxgorin.com/media" },
};

export default function MediaPage() {
  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 pt-28 pb-20 md:pt-36 md:pb-28 text-center">
          <nav className="flex items-center justify-center gap-2 text-sm text-foreground/30 mb-10">
            <a href="/" className="hover:text-foreground transition-colors">Home</a>
            <ChevronRight size={14} />
            <span className="text-foreground/60">Media</span>
          </nav>
          <div className="accent-line mx-auto mb-8" />
          <h1 className="heading-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
            Media &<br /><span className="text-gold">Press</span>
          </h1>
          <p className="text-foreground/40 text-lg max-w-xl mx-auto">
            News, press mentions, and media coverage about Max Gorin and his ventures.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32 text-center">
          <FadeIn>
            <div className="editorial-card rounded-2xl p-14">
              <Newspaper size={28} className="text-foreground/15 mx-auto mb-5" />
              <h2 className="text-2xl font-bold text-foreground mb-3">Coming Soon</h2>
              <p className="text-foreground/40 mb-8 max-w-md mx-auto text-sm">
                Check back for the latest press mentions and media features about Max Gorin and LifeLine Ambulance.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-gold hover:text-gold-dark font-medium text-sm transition-colors">
                Media inquiries <ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
