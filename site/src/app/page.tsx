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
  ChevronRight,
} from "lucide-react";

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
      "Founded in 2002, LifeLine Ambulance provides 24/7 emergency medical services across Los Angeles County with a fleet of 70 ambulances and over 300 dedicated employees.",
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
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy via-navy-light to-navy-dark text-white overflow-hidden min-h-[85vh] flex items-center">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,168,67,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(42,77,122,0.5),transparent_40%)]" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-navy-light/30 rounded-full blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 relative w-full">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8">
                <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                <span className="text-sm text-gray-200 font-medium">Founder of LifeLine Ambulance</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
                Max <span className="text-gold">Gorin</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-4 font-light">
                EMS Entrepreneur & Community Leader
              </p>
              <p className="text-gray-400 leading-relaxed mb-10 max-w-lg text-base">
                With 19+ years of emergency medical services leadership, making a difference in the lives of others through service, innovation, and community engagement.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy-dark font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_8px_30px_rgba(212,168,67,0.5)] hover:-translate-y-1 text-base"
                >
                  Learn More <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 hover:border-gold/50 hover:bg-white/15 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="flex justify-center animate-fade-in-up-delay-2">
              <div className="relative">
                <div className="absolute -inset-8 bg-gradient-to-br from-gold/20 to-navy-light/20 rounded-3xl blur-3xl animate-pulse-glow" />
                <div className="absolute -inset-1 bg-gradient-to-br from-gold/40 to-navy-light/40 rounded-2xl" />
                <Image
                  src="/max-gorin.jpeg"
                  alt="Max Gorin - Founder of LifeLine Ambulance"
                  width={420}
                  height={420}
                  className="relative rounded-2xl shadow-2xl object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative bg-white -mt-8 mx-4 md:mx-8 lg:mx-auto lg:max-w-5xl rounded-2xl shadow-xl border border-gray-100 z-10">
        <div className="px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`text-center group ${i < stats.length - 1 ? "md:border-r md:border-gray-100" : ""}`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/10 to-gold/5 mb-4 group-hover:from-gold/20 group-hover:to-gold/10 transition-all duration-300">
                  <stat.icon
                    size={28}
                    className="text-gold group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-navy">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In the Beginning */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-20 md:pt-28 md:pb-24">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-xs font-bold text-gold uppercase tracking-widest mb-4">Our Story</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6">
              In the Beginning
            </h2>
            <div className="w-24 h-1 gold-shimmer mx-auto mb-8 rounded-full" />
            <p className="text-gray-600 leading-relaxed text-lg">
              Max Gorin founded LifeLine Ambulance in 2002 in Los Angeles
              County. Starting with just 6 staff members and 2 ambulances, Max
              personally held every role - EMT, dispatcher, and marketer. Today,
              LifeLine has grown to a fleet of 70 ambulances with over 300
              employees, providing 24/7 patient care and critical transport
              services.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:border-gold/20 hover:shadow-xl transition-all duration-500">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-gold/15 to-gold/5 mb-5 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp size={26} className="text-gold" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">
                Pandemic Response
              </h3>
              <p className="text-gray-600 leading-relaxed">
                In March 2020, Max partnered with Spencer Health to distribute
                sanitizing products and founded LifeLine Supply to provide
                personal protective equipment during the COVID-19 pandemic.
              </p>
            </div>
            <div className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:border-gold/20 hover:shadow-xl transition-all duration-500">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-gold/15 to-gold/5 mb-5 group-hover:scale-110 transition-transform duration-300">
                <Heart size={26} className="text-gold" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">
                Giving Back
              </h3>
              <p className="text-gray-600 leading-relaxed">
                As a member of the American Heart Association and appointed to
                the Orange County AHA Executive Leadership Team, Max offers free
                blood pressure screenings for seniors and CPR classes for the
                community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-gradient-to-b from-gray-50 to-gray-100/50">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold text-gold uppercase tracking-widest mb-4">What We Do</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6">
              What Drives Max Gorin
            </h2>
            <div className="w-24 h-1 gold-shimmer mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-gold/30 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-navy to-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-navy/5 to-navy/10 group-hover:from-gold/10 group-hover:to-gold/20 transition-all duration-500 mb-6">
                  <item.icon
                    size={30}
                    className="text-navy group-hover:text-gold transition-colors duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {item.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
                  Learn more <ChevronRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <span className="inline-block text-xs font-bold text-gold uppercase tracking-widest mb-4">From the Blog</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy">
                Latest Insights
              </h2>
              <div className="w-24 h-1 gold-shimmer mt-5 rounded-full" />
            </div>
            <Link
              href="/blog"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold border border-gray-200 hover:border-gold/30 px-5 py-2.5 rounded-full transition-all duration-300"
            >
              View all posts <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Proven Ways to Get Admitted into College",
                slug: "proven-ways-to-get-admitted-into-college",
                category: "Education",
                color: "from-blue-500 to-blue-600",
              },
              {
                title: "7 Ways to Improve Your Decision-Making Process",
                slug: "7-ways-to-improve-your-decision-making-process",
                category: "Leadership",
                color: "from-gold to-gold-dark",
              },
              {
                title: "Top 10 Ways to Run Your Business",
                slug: "top-10-ways-to-run-your-business",
                category: "Business",
                color: "from-navy to-navy-light",
              },
            ].map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gold/30 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`h-32 bg-gradient-to-br ${post.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.15),transparent_60%)]" />
                  <div className="absolute bottom-4 left-6">
                    <span className="inline-block text-xs font-bold text-white/90 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="text-lg font-bold text-navy group-hover:text-gold transition-colors duration-300 leading-snug mb-4">
                    {post.title}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
                    Read article <ChevronRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="sm:hidden mt-8 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold border border-gray-200 hover:border-gold/30 px-5 py-2.5 rounded-full transition-all duration-300"
            >
              View all posts <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,168,67,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(42,77,122,0.4),transparent_50%)]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 text-center relative text-white">
          <span className="inline-block text-xs font-bold text-gold uppercase tracking-widest mb-4">Connect</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Get in Touch</h2>
          <p className="text-gray-300 mb-12 max-w-lg mx-auto text-lg">
            Interested in learning more about Max Gorin or the Max Gorin
            Scholarship? Reach out today.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy-dark font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:shadow-[0_8px_30px_rgba(212,168,67,0.5)] hover:-translate-y-1 text-base"
          >
            Contact Max <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>
    </>
  );
}
