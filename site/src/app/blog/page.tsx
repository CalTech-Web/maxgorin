import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
  },
  {
    title: "7 Ways to Improve Your Decision-Making Process",
    slug: "7-ways-to-improve-your-decision-making-process",
    category: "Leadership",
    excerpt:
      "Strong decision-making is a cornerstone of effective leadership. Learn seven practical methods to improve how you evaluate options and make choices that drive success.",
  },
  {
    title: "Top 10 Ways to Run Your Business",
    slug: "top-10-ways-to-run-your-business",
    category: "Business",
    excerpt:
      "Running a successful business takes vision, discipline, and adaptability. Here are ten key strategies for building and sustaining a thriving enterprise.",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy via-navy-light to-navy-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,168,67,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 relative">
          <nav className="text-sm text-gray-400 mb-6 animate-fade-in-up">
            <a href="/" className="hover:text-white transition-colors duration-300">Home</a>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gold">Blog</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            Blog & <span className="text-gold">Insights</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl animate-fade-in-up-delay-1">
            Thoughts on business, leadership, education, and making a meaningful
            impact.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group card-lift bg-white rounded-2xl overflow-hidden border border-gray-100"
              >
                <div className="h-1.5 bg-gradient-to-r from-navy via-navy-light to-gold" />
                <div className="p-7">
                  <span className="inline-block text-xs font-semibold text-gold bg-gold/10 px-3 py-1.5 rounded-full mb-4">
                    {post.category}
                  </span>
                  <h2 className="text-xl font-semibold text-navy group-hover:text-gold transition-colors duration-300 mb-3 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gold group-hover:gap-3 transition-all duration-300">
                    Read more <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
