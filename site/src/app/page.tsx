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
      <section className="relative bg-gradient-to-br from-navy via-navy-light to-navy-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,168,67,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(212,168,67,0.06),transparent_40%)]" />
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <p className="text-gold font-medium text-sm tracking-widest uppercase mb-4">
                Founder of LifeLine Ambulance
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Max <span className="text-gold">Gorin</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-4">
                EMS Entrepreneur & Community Leader
              </p>
              <p className="text-gray-300 leading-relaxed mb-8 max-w-lg">
                Founder of LifeLine Ambulance, with 19+ years of emergency
                medical services leadership. Making a difference in the lives of
                others through service, innovation, and community engagement.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-navy-dark font-semibold px-7 py-3.5 rounded-full transition-all duration-300 hover:shadow-[0_8px_30px_rgba(212,168,67,0.4)] hover:-translate-y-0.5"
                >
                  Learn More <ArrowRight size={18} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-gold text-white hover:text-gold font-semibold px-7 py-3.5 rounded-full transition-all duration-300 hover:bg-white/5"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="flex justify-center animate-fade-in-up-delay-2">
              <div className="relative">
                <div className="absolute -inset-6 bg-gold/15 rounded-2xl blur-3xl animate-pulse-glow" />
                <Image
                  src="/max-gorin.jpeg"
                  alt="Max Gorin - Founder of LifeLine Ambulance"
                  width={400}
                  height={400}
                  className="relative rounded-2xl shadow-2xl object-cover ring-1 ring-white/10"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/10 mb-3 group-hover:bg-gold/20 transition-colors duration-300">
                  <stat.icon
                    size={26}
                    className="text-gold group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="text-3xl font-bold text-navy">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </section>

      {/* In the Beginning */}
      <section className="bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              In the Beginning
            </h2>
            <div className="w-20 h-1 gold-shimmer mx-auto mb-6 rounded-full" />
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
            <div className="card-lift bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gold/10 mb-4">
                <TrendingUp size={24} className="text-gold" />
              </div>
              <h3 className="text-lg font-semibold text-navy mb-2">
                Pandemic Response
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                In March 2020, Max partnered with Spencer Health to distribute
                sanitizing products and founded LifeLine Supply to provide
                personal protective equipment during the COVID-19 pandemic.
              </p>
            </div>
            <div className="card-lift bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gold/10 mb-4">
                <Heart size={24} className="text-gold" />
              </div>
              <h3 className="text-lg font-semibold text-navy mb-2">
                Giving Back
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
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
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-4">
            What Drives Max Gorin
          </h2>
          <div className="w-20 h-1 gold-shimmer mx-auto mb-14 rounded-full" />
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group card-lift bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-navy/5 group-hover:bg-gold/10 transition-colors duration-300 mb-5">
                  <item.icon
                    size={28}
                    className="text-gold group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2 group-hover:text-gold transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {item.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gold group-hover:gap-3 transition-all duration-300">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy">
                Latest Insights
              </h2>
              <div className="w-20 h-1 gold-shimmer mt-4 rounded-full" />
            </div>
            <Link
              href="/blog"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-navy hover:text-gold transition-colors duration-300"
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
              },
              {
                title: "7 Ways to Improve Your Decision-Making Process",
                slug: "7-ways-to-improve-your-decision-making-process",
                category: "Leadership",
              },
              {
                title: "Top 10 Ways to Run Your Business",
                slug: "top-10-ways-to-run-your-business",
                category: "Business",
              },
            ].map((post) => (
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
                  <h3 className="text-lg font-semibold text-navy group-hover:text-gold transition-colors duration-300 leading-snug">
                    {post.title}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gold mt-4 group-hover:gap-3 transition-all duration-300">
                    Read article <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="sm:hidden mt-8 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm font-medium text-navy hover:text-gold transition-colors duration-300"
            >
              View all posts <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-gradient-to-br from-navy via-navy-light to-navy-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(212,168,67,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl px-6 py-20 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <div className="w-16 h-1 gold-shimmer mx-auto mb-6 rounded-full" />
          <p className="text-gray-300 mb-10 max-w-lg mx-auto text-lg">
            Interested in learning more about Max Gorin or the Max Gorin
            Scholarship? Reach out today.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-navy-dark font-semibold px-9 py-4 rounded-full transition-all duration-300 hover:shadow-[0_8px_30px_rgba(212,168,67,0.4)] hover:-translate-y-0.5"
          >
            Contact Max <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
