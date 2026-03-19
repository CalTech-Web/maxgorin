import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights from Max Gorin on business, leadership, education, and making a difference.",
  alternates: { canonical: "https://maxgorin.com/blog" },
  openGraph: { title: "Blog - Max Gorin", description: "Insights on business, leadership, and education.", url: "https://maxgorin.com/blog" },
};

const posts = [
  { title: "Proven Ways to Get Admitted into College", slug: "proven-ways-to-get-admitted-into-college", category: "Education", excerpt: "Getting into college requires more than just good grades. Discover proven strategies that can help you stand out in the admissions process.", number: "01" },
  { title: "7 Ways to Improve Your Decision-Making Process", slug: "7-ways-to-improve-your-decision-making-process", category: "Leadership", excerpt: "Strong decision-making is a cornerstone of effective leadership. Learn seven practical methods to improve how you evaluate options.", number: "02" },
  { title: "Top 10 Ways to Run Your Business", slug: "top-10-ways-to-run-your-business", category: "Business", excerpt: "Running a successful business takes vision, discipline, and adaptability. Here are ten key strategies for building a thriving enterprise.", number: "03" },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 pt-28 pb-20 md:pt-36 md:pb-28">
          <nav className="flex items-center gap-2 text-sm text-foreground/30 mb-10">
            <a href="/" className="hover:text-foreground transition-colors">Home</a>
            <ChevronRight size={14} />
            <span className="text-foreground/60">Blog</span>
          </nav>
          <div className="accent-line mb-8" />
          <h1 className="heading-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
            Blog &<br /><span className="text-gold">Insights</span>
          </h1>
          <p className="text-foreground/40 text-lg max-w-xl">
            Thoughts on business, leadership, education, and making a meaningful impact.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="divide-y divide-black/5">
            {posts.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 0.1}>
                <Link href={`/blog/${post.slug}`} className="group grid md:grid-cols-12 gap-6 py-10 items-start">
                  <span className="text-4xl font-extrabold text-foreground/8 group-hover:text-gold transition-colors duration-300 md:col-span-1 hidden md:block">
                    {post.number}
                  </span>
                  <div className="md:col-span-4">
                    <span className="text-[11px] font-bold text-gold uppercase tracking-wider">{post.category}</span>
                    <h2 className="text-2xl font-bold text-foreground group-hover:text-gold transition-colors duration-300 mt-2">{post.title}</h2>
                  </div>
                  <div className="md:col-span-6">
                    <p className="text-foreground/40 text-sm leading-relaxed">{post.excerpt}</p>
                  </div>
                  <div className="md:col-span-1 md:text-right">
                    <ArrowUpRight size={22} className="text-foreground/15 group-hover:text-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 inline-block" />
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
