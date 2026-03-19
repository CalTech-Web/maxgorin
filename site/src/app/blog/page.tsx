import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

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
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "7 Ways to Improve Your Decision-Making Process",
    slug: "7-ways-to-improve-your-decision-making-process",
    category: "Leadership",
    excerpt:
      "Strong decision-making is a cornerstone of effective leadership. Learn seven practical methods to improve how you evaluate options and make choices that drive success.",
    color: "from-gold to-gold-dark",
  },
  {
    title: "Top 10 Ways to Run Your Business",
    slug: "top-10-ways-to-run-your-business",
    category: "Business",
    excerpt:
      "Running a successful business takes vision, discipline, and adaptability. Here are ten key strategies for building and sustaining a thriving enterprise.",
    color: "from-navy to-navy-light",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy via-navy-light to-navy-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,168,67,0.1),transparent_50%)]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 relative">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8 animate-fade-in-up">
            <a href="/" className="hover:text-white transition-colors duration-300">Home</a>
            <ChevronRight size={14} className="text-gray-500" />
            <span className="text-gold font-medium">Blog</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in-up">
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
                className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gold/30 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`h-36 bg-gradient-to-br ${post.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.15),transparent_60%)]" />
                  <div className="absolute bottom-4 left-6">
                    <span className="inline-block text-xs font-bold text-white/90 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-7">
                  <h2 className="text-xl font-bold text-navy group-hover:text-gold transition-colors duration-300 mb-3 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
                    Read more <ChevronRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
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
