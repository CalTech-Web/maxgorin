import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights from Max Gorin on business, leadership, education, and making a difference.",
  alternates: { canonical: "https://maxgorin.com/blog" },
  openGraph: {
    title: "Blog - Max Gorin",
    description:
      "Insights from Max Gorin on business, leadership, and education.",
    url: "https://maxgorin.com/blog",
  },
};

const posts = [
  {
    title: "Proven Ways to Get Admitted into College",
    slug: "proven-ways-to-get-admitted-into-college",
    category: "Education",
    excerpt:
      "Getting into college requires more than just good grades. Discover proven strategies that can help you stand out in the admissions process and secure your spot at the school of your dreams.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400",
  },
  {
    title: "7 Ways to Improve Your Decision-Making Process",
    slug: "7-ways-to-improve-your-decision-making-process",
    category: "Leadership",
    excerpt:
      "Strong decision-making is a cornerstone of effective leadership. Learn seven practical methods to improve how you evaluate options and make choices that drive success.",
    gradient: "from-gold/20 to-amber-600/20",
    iconColor: "text-gold",
  },
  {
    title: "Top 10 Ways to Run Your Business",
    slug: "top-10-ways-to-run-your-business",
    category: "Business",
    excerpt:
      "Running a successful business takes vision, discipline, and adaptability. Here are ten key strategies for building and sustaining a thriving enterprise.",
    gradient: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-400",
  },
];

export default function BlogPage() {
  return (
    <div className="grain">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 mesh-bg" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-20 md:pt-40 md:pb-24 w-full">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-10">
            <a href="/" className="hover:text-white transition-colors duration-300">Home</a>
            <ChevronRight size={14} className="text-gray-600" />
            <span className="text-gold font-medium">Blog</span>
          </nav>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            Blog &<br />
            <span className="text-gradient-gold">Insights</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Thoughts on business, leadership, education, and making a meaningful impact.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="relative border-t border-white/5">
        <div className="absolute inset-0 mesh-bg-alt" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 0.15} direction="up">
                <Link
                  href={`/blog/${post.slug}`}
                  className="group glass-card rounded-2xl overflow-hidden block h-full"
                >
                  <div className={`h-2 bg-gradient-to-r ${post.gradient}`} />
                  <div className="p-7">
                    <span className={`inline-block text-xs font-bold ${post.iconColor} uppercase tracking-wider mb-4`}>
                      {post.category}
                    </span>
                    <h2 className="text-xl font-bold text-white group-hover:text-gold transition-colors duration-300 mb-3 leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 group-hover:text-gold transition-colors duration-300">
                      Read more
                      <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
