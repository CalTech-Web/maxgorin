import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";

const posts: Record<
  string,
  { title: string; category: string; content: string[] }
> = {
  "proven-ways-to-get-admitted-into-college": {
    title: "Proven Ways to Get Admitted into College",
    category: "Education",
    content: [
      "Getting admitted into college is a significant milestone that requires careful planning and preparation. While the process may seem daunting, there are proven strategies that can significantly improve your chances of acceptance.",
      "Start early by building a strong academic foundation. Colleges look for students who have consistently performed well throughout high school, not just during their senior year. Take challenging courses that demonstrate your ability to handle rigorous academic work.",
      "Extracurricular activities play a crucial role in the admissions process. Colleges want to see well-rounded individuals who contribute to their communities. Whether it is sports, music, volunteer work, or leadership roles, find activities that genuinely interest you and commit to them.",
      "Your personal essay is your opportunity to stand out. Use it to tell your unique story - what drives you, what challenges you have overcome, and what you hope to achieve. Be authentic and let your personality shine through.",
      "Letters of recommendation carry significant weight. Build strong relationships with teachers and mentors who can speak to your character, work ethic, and potential. Give them plenty of time to write thoughtful recommendations.",
      "Research your target schools thoroughly. Understand what each institution values and tailor your application accordingly. Demonstrating knowledge about a school shows genuine interest and can set you apart from other applicants.",
      "Finally, do not underestimate the importance of standardized test preparation. While many schools have moved to test-optional policies, strong test scores can still strengthen your application. Dedicate time to studying and consider taking practice tests.",
    ],
  },
  "7-ways-to-improve-your-decision-making-process": {
    title: "7 Ways to Improve Your Decision-Making Process",
    category: "Leadership",
    content: [
      "Effective decision-making is one of the most important skills a leader can develop. Whether you are running a business, leading a team, or navigating personal challenges, the quality of your decisions directly impacts your outcomes.",
      "1. Gather comprehensive information before deciding. The best decisions are informed decisions. Take time to research, consult experts, and understand all angles of a situation before committing to a course of action.",
      "2. Consider the long-term consequences. It is easy to focus on immediate results, but the best leaders think several steps ahead. Ask yourself how each option will play out over months and years, not just days.",
      "3. Seek diverse perspectives. Surround yourself with people who think differently than you. Diverse viewpoints challenge assumptions and often reveal blind spots that could lead to better outcomes.",
      "4. Trust your instincts, but verify with data. Experienced leaders develop strong intuition, but it is important to back up gut feelings with evidence. Use data to validate or challenge your initial reactions.",
      "5. Set clear criteria for success. Before making a decision, define what a good outcome looks like. Having clear benchmarks helps you evaluate options objectively rather than emotionally.",
      "6. Learn from past decisions. Keep a record of important decisions and their outcomes. Reviewing what worked and what did not builds a foundation of experience that improves future decision-making.",
      "7. Do not be afraid to change course. The ability to recognize when a decision is not working and pivot accordingly is a strength, not a weakness. Flexibility and adaptability are hallmarks of great leadership.",
    ],
  },
  "top-10-ways-to-run-your-business": {
    title: "Top 10 Ways to Run Your Business",
    category: "Business",
    content: [
      "Running a successful business requires a combination of strategic thinking, hard work, and adaptability. Drawing from 19+ years of entrepreneurial experience, here are ten essential strategies for building and sustaining a thriving enterprise.",
      "1. Start with a clear vision. Every successful business begins with a compelling vision. Know exactly what you want to build and why it matters. This clarity will guide every decision you make.",
      "2. Be willing to wear every hat. When Max Gorin founded LifeLine Ambulance, he served as EMT, dispatcher, and marketer. Understanding every aspect of your business makes you a more effective leader.",
      "3. Hire the right people. Your team is your greatest asset. Invest time in finding people who share your values and bring complementary skills to the table. A strong team can take your business further than you ever could alone.",
      "4. Focus on customer service. In any industry, the quality of your service defines your reputation. Go above and beyond for your customers, and they will become your strongest advocates.",
      "5. Adapt to change. The business landscape is constantly evolving. Whether it is a pandemic, new regulations, or shifting market demands, the ability to pivot quickly is essential for survival.",
      "6. Invest in your community. Business success and community engagement go hand in hand. Being an active member of your community builds trust, creates connections, and opens doors to new opportunities.",
      "7. Manage finances carefully. Cash flow is the lifeblood of any business. Keep a close eye on your finances, plan for contingencies, and make strategic investments that will pay off in the long run.",
      "8. Never stop learning. The most successful entrepreneurs are lifelong learners. Stay curious, seek out mentors, and continuously develop your skills and knowledge.",
      "9. Build strategic partnerships. Collaboration can accelerate growth. Look for partners whose strengths complement your weaknesses and whose values align with your own.",
      "10. Stay true to your mission. In the pursuit of growth, it is easy to lose sight of why you started. Always keep your core mission at the center of everything you do. For Max Gorin, that mission has always been making a difference in the lives of others.",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return {};
  return {
    title: post.title,
    description: post.content[0],
    alternates: { canonical: `https://maxgorin.com/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.content[0],
      url: `https://maxgorin.com/blog/${slug}`,
      type: "article",
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy via-navy-light to-navy-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,168,67,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-28 relative">
          <nav className="text-sm text-gray-400 mb-6 animate-fade-in-up">
            <a href="/" className="hover:text-white transition-colors duration-300">Home</a>
            <span className="mx-2 text-gray-500">/</span>
            <a href="/blog" className="hover:text-white transition-colors duration-300">Blog</a>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gold">{post.category}</span>
          </nav>
          <span className="inline-block text-xs font-semibold text-navy bg-gold px-3 py-1.5 rounded-full mb-5 animate-fade-in-up">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight animate-fade-in-up-delay-1">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-24">
          <article className="space-y-6 text-gray-600 text-lg leading-relaxed">
            {post.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </article>

          <div className="mt-14 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-navy hover:text-gold transition-colors duration-300 font-medium"
            >
              <ArrowLeft size={16} /> Back to all posts
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-dark transition-colors duration-300 font-medium"
            >
              Get in touch <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
