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
    description: "Insights from Max Gorin on business, leadership, and education.",
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
      <section className="bg-gradient-to-br from-navy to-navy-dark text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <nav className="text-sm text-gray-300 mb-4">
            <a href="/" className="hover:text-white">Home</a>
            <span className="mx-2">/</span>
            <span className="text-gold">Blog</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Blog & <span className="text-gold">Insights</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Thoughts on business, leadership, education, and making a meaningful impact.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white border rounded-xl overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="h-2 bg-gradient-to-r from-navy to-gold" />
                <div className="p-6">
                  <span className="inline-block text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full mb-4">
                    {post.category}
                  </span>
                  <h2 className="text-xl font-semibold text-navy group-hover:text-gold transition-colors mb-3">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-gold group-hover:gap-2 transition-all">
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
