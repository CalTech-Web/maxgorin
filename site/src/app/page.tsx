import Image from "next/image";
import Link from "next/link";
import {
  Ambulance,
  Heart,
  Users,
  GraduationCap,
  ArrowRight,
  Shield,
  TrendingUp,
} from "lucide-react";
import FadeIn from "@/components/FadeIn";

const stats = [
  { value: "19+", label: "Years of Leadership", icon: Shield },
  { value: "70", label: "Ambulances", icon: Ambulance },
  { value: "300+", label: "Employees", icon: Users },
  { value: "24/7", label: "Patient Care", icon: Heart },
];

const highlights = [
  {
    title: "LifeLine Ambulance",
    description:
      "Founded in 2002, providing 24/7 emergency medical services across Los Angeles County with a fleet of 70 ambulances and over 300 dedicated employees.",
    icon: Ambulance,
    href: "/about",
  },
  {
    title: "Community Service",
    description:
      "Active member of the American Heart Association, Montebello Chamber of Commerce ambassador, and board member of the San Gabriel Valley Economic Partnership.",
    icon: Heart,
    href: "/about#community",
  },
  {
    title: "Max Gorin Scholarship",
    description:
      "Supporting the next generation of leaders through the Max Gorin Scholarship program. Applications are now open for aspiring students.",
    icon: GraduationCap,
    href: "/scholarship",
  },
];

export default function Home() {
  return (
    <div className="grain">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated mesh background */}
        <div className="absolute inset-0 mesh-bg" />
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-navy/30 rounded-full blur-[120px]" />

        {/* Decorative ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/[0.02] rounded-full animate-spin-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold/[0.03] rounded-full animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "30s" }} />

        <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-24 md:pt-40 md:pb-32 w-full">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-3 glass rounded-full px-5 py-2.5 mb-10">
                <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                <span className="text-sm text-gray-400 font-medium tracking-wide">Founder of LifeLine Ambulance</span>
              </div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6 tracking-tight">
                Max<br />
                <span className="text-gradient-gold">Gorin</span>
              </h1>
              <p className="text-xl text-gray-400 mb-4 font-light">
                EMS Entrepreneur & Community Leader
              </p>
              <p className="text-gray-500 leading-relaxed mb-12 max-w-md">
                19+ years of emergency medical services leadership. Making a
                difference through service, innovation, and community
                engagement.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-3 bg-gold hover:bg-gold-light text-background font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,168,67,0.3)]"
                >
                  Learn More
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 glass hover:bg-white/10 text-white font-medium px-8 py-4 rounded-full transition-all duration-300"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute -inset-8 bg-gradient-to-br from-gold/10 to-transparent rounded-3xl blur-3xl animate-pulse-glow" />
                <div className="absolute -inset-[2px] bg-gradient-to-br from-gold/30 via-transparent to-navy-light/30 rounded-2xl" />
                <Image
                  src="/max-gorin.jpeg"
                  alt="Max Gorin - Founder of LifeLine Ambulance"
                  width={440}
                  height={440}
                  className="relative rounded-2xl object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative border-t border-b border-white/5">
        <div className="absolute inset-0 bg-surface/50" />
        <div className="relative mx-auto max-w-7xl px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1} direction="up">
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl glass mb-4 group-hover:border-gold/20 transition-all duration-500">
                    <stat.icon size={28} className="text-gold" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* In the Beginning */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg-alt" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block text-xs font-bold text-gold uppercase tracking-[0.2em] mb-4">Our Story</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                In the Beginning
              </h2>
              <div className="w-24 h-0.5 gold-shimmer mx-auto mb-8 rounded-full" />
              <p className="text-gray-400 leading-relaxed text-lg">
                Max Gorin founded LifeLine Ambulance in 2002 in Los Angeles
                County. Starting with just 6 staff members and 2 ambulances,
                Max personally held every role - EMT, dispatcher, and marketer.
                Today, LifeLine has grown to a fleet of 70 ambulances with over
                300 employees, providing 24/7 patient care and critical
                transport services.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <FadeIn delay={0.1} direction="left">
              <div className="glass-card rounded-2xl p-8 h-full">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gold/10 mb-5">
                  <TrendingUp size={22} className="text-gold" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Pandemic Response
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  In March 2020, Max partnered with Spencer Health to distribute
                  sanitizing products and founded LifeLine Supply to provide
                  personal protective equipment during the COVID-19 pandemic.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="right">
              <div className="glass-card rounded-2xl p-8 h-full">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gold/10 mb-5">
                  <Heart size={22} className="text-gold" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Giving Back
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  As a member of the American Heart Association and appointed to
                  the Orange County AHA Executive Leadership Team, Max offers
                  free blood pressure screenings for seniors and CPR classes for
                  the community.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Highlights - Bento Grid */}
      <section className="relative">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/[0.03] rounded-full blur-[100px]" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="inline-block text-xs font-bold text-gold uppercase tracking-[0.2em] mb-4">Focus Areas</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                What Drives Max Gorin
              </h2>
              <div className="w-24 h-0.5 gold-shimmer mx-auto rounded-full" />
            </div>
          </FadeIn>

          {/* Bento layout */}
          <div className="grid md:grid-cols-3 gap-5">
            {highlights.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.15} direction="up">
                <Link
                  href={item.href}
                  className="group glass-card rounded-2xl p-8 block h-full relative overflow-hidden"
                >
                  {/* Hover gradient reveal */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 group-hover:bg-gold/10 transition-all duration-500 mb-6">
                      <item.icon
                        size={28}
                        className="text-gold"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed mb-6">
                      {item.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold">
                      Learn more
                      <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="relative border-t border-white/5">
        <div className="absolute inset-0 mesh-bg-alt" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
              <div>
                <span className="inline-block text-xs font-bold text-gold uppercase tracking-[0.2em] mb-4">From the Blog</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                  Latest Insights
                </h2>
              </div>
              <Link
                href="/blog"
                className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white glass px-5 py-2.5 rounded-full transition-all duration-300"
              >
                View all posts <ArrowRight size={14} />
              </Link>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                title: "Proven Ways to Get Admitted into College",
                slug: "proven-ways-to-get-admitted-into-college",
                category: "Education",
                gradient: "from-blue-500/20 to-cyan-500/20",
                iconColor: "text-blue-400",
              },
              {
                title: "7 Ways to Improve Your Decision-Making Process",
                slug: "7-ways-to-improve-your-decision-making-process",
                category: "Leadership",
                gradient: "from-gold/20 to-amber-600/20",
                iconColor: "text-gold",
              },
              {
                title: "Top 10 Ways to Run Your Business",
                slug: "top-10-ways-to-run-your-business",
                category: "Business",
                gradient: "from-emerald-500/20 to-teal-500/20",
                iconColor: "text-emerald-400",
              },
            ].map((post, i) => (
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
                    <h3 className="text-lg font-bold text-white group-hover:text-gold transition-colors duration-300 leading-snug mb-5">
                      {post.title}
                    </h3>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 group-hover:text-gold transition-colors duration-300">
                      Read article
                      <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          <div className="sm:hidden mt-8 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 glass px-5 py-2.5 rounded-full"
            >
              View all posts <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 mesh-bg" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/[0.04] rounded-full blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-36 text-center">
          <FadeIn>
            <span className="inline-block text-xs font-bold text-gold uppercase tracking-[0.2em] mb-4">Connect</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Get in Touch
            </h2>
            <p className="text-gray-500 mb-12 max-w-md mx-auto text-lg">
              Interested in learning more about Max Gorin or the Max Gorin
              Scholarship? Reach out today.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-gold hover:bg-gold-light text-background font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,168,67,0.3)]"
            >
              Contact Max
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
