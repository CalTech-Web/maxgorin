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
  ArrowUpRight,
} from "lucide-react";
import FadeIn from "@/components/FadeIn";

const stats = [
  { value: "19+", label: "Years", icon: Shield },
  { value: "70", label: "Ambulances", icon: Ambulance },
  { value: "300+", label: "Employees", icon: Users },
  { value: "24/7", label: "Care", icon: Heart },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-cream overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-28 pb-20 md:pt-36 md:pb-28 w-full">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Text - takes 7 columns */}
            <div className="md:col-span-7 md:pr-12">
              <div className="accent-line mb-8" />
              <p className="text-sm font-medium text-foreground/40 uppercase tracking-[0.2em] mb-6">
                Founder of LifeLine Ambulance
              </p>
              <h1 className="heading-display text-6xl md:text-7xl lg:text-[6.5rem] text-foreground mb-8">
                Max<br />
                <span className="text-gold">Gorin</span>
              </h1>
              <p className="heading-editorial text-2xl md:text-3xl text-foreground/50 mb-8 max-w-lg">
                EMS Entrepreneur &<br />Community Leader
              </p>
              <p className="text-foreground/40 leading-relaxed mb-12 max-w-md text-sm">
                19+ years of emergency medical services leadership. Making a
                difference through service, innovation, and community
                engagement in Los Angeles County.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-3 bg-foreground text-background font-medium text-sm px-7 py-4 rounded-full hover:bg-navy transition-colors duration-300"
                >
                  Learn More
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 border border-foreground/15 text-foreground font-medium text-sm px-7 py-4 rounded-full hover:border-foreground/40 transition-colors duration-300"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Image - takes 5 columns, offset */}
            <div className="md:col-span-5">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full bg-gold/10 rounded-3xl" />
                <Image
                  src="/max-gorin.jpeg"
                  alt="Max Gorin - Founder of LifeLine Ambulance"
                  width={480}
                  height={580}
                  className="relative rounded-3xl object-cover w-full shadow-[0_30px_80px_rgba(0,0,0,0.12)]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Stats Strip */}
      <section className="bg-foreground text-white py-6 overflow-hidden">
        <div className="flex">
          <div className="marquee-track flex items-center gap-12 whitespace-nowrap px-6">
            {[...stats, ...stats, ...stats].map((stat, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-2xl font-extrabold tracking-tight">{stat.value}</span>
                <span className="text-xs font-medium text-white/40 uppercase tracking-wider">{stat.label}</span>
                <span className="text-white/10 mx-4">|</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In the Beginning */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4">
              <FadeIn>
                <div className="accent-line mb-6" />
                <p className="text-[11px] font-semibold text-foreground/30 uppercase tracking-[0.2em] mb-4">Our Story</p>
                <h2 className="heading-display text-4xl md:text-5xl text-foreground">
                  In the<br />Beginning
                </h2>
              </FadeIn>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <FadeIn delay={0.1}>
                <p className="text-foreground/50 leading-relaxed text-lg mb-10">
                  Max Gorin founded LifeLine Ambulance in 2002 in Los Angeles
                  County. Starting with just 6 staff members and 2 ambulances,
                  Max personally held every role - EMT, dispatcher, and
                  marketer. Today, LifeLine has grown to a fleet of 70
                  ambulances with over 300 employees, providing 24/7 patient
                  care and critical transport services.
                </p>
              </FadeIn>
              <div className="grid sm:grid-cols-2 gap-5">
                <FadeIn delay={0.2}>
                  <div className="editorial-card rounded-2xl p-7">
                    <TrendingUp size={22} className="text-gold mb-4" />
                    <h3 className="text-base font-bold text-foreground mb-2">
                      Pandemic Response
                    </h3>
                    <p className="text-foreground/40 text-sm leading-relaxed">
                      In March 2020, Max partnered with Spencer Health to
                      distribute sanitizing products and founded LifeLine Supply
                      for PPE distribution during COVID-19.
                    </p>
                  </div>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <div className="editorial-card rounded-2xl p-7">
                    <Heart size={22} className="text-gold mb-4" />
                    <h3 className="text-base font-bold text-foreground mb-2">
                      Giving Back
                    </h3>
                    <p className="text-foreground/40 text-sm leading-relaxed">
                      As an AHA Executive Leadership Team member, Max offers
                      free blood pressure screenings for seniors and CPR
                      classes for the community.
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="accent-line mx-auto mb-6" />
              <p className="text-[11px] font-semibold text-foreground/30 uppercase tracking-[0.2em] mb-4">Focus Areas</p>
              <h2 className="heading-display text-4xl md:text-5xl text-foreground">
                What Drives Max Gorin
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                title: "LifeLine Ambulance",
                description:
                  "Founded in 2002, providing 24/7 EMS across Los Angeles County with a fleet of 70 ambulances and over 300 dedicated employees.",
                icon: Ambulance,
                href: "/about",
              },
              {
                title: "Community Service",
                description:
                  "Active member of the American Heart Association, Montebello Chamber of Commerce, and San Gabriel Valley Economic Partnership.",
                icon: Heart,
                href: "/about#community",
              },
              {
                title: "Max Gorin Scholarship",
                description:
                  "Supporting the next generation of leaders through scholarship programs. Applications are now open.",
                icon: GraduationCap,
                href: "/scholarship",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1} direction="up">
                <Link
                  href={item.href}
                  className="group editorial-card rounded-2xl p-8 block h-full"
                >
                  <div className="flex items-center justify-between mb-6">
                    <item.icon size={24} className="text-gold" />
                    <ArrowUpRight
                      size={18}
                      className="text-foreground/20 group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-foreground/40 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
              <div>
                <div className="accent-line mb-6" />
                <p className="text-[11px] font-semibold text-foreground/30 uppercase tracking-[0.2em] mb-4">From the Blog</p>
                <h2 className="heading-display text-4xl md:text-5xl text-foreground">
                  Latest Insights
                </h2>
              </div>
              <Link
                href="/blog"
                className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-foreground/40 hover:text-foreground border border-foreground/10 hover:border-foreground/30 px-5 py-2.5 rounded-full transition-all duration-300"
              >
                All posts <ArrowRight size={14} />
              </Link>
            </div>
          </FadeIn>

          {/* Blog list - editorial style */}
          <div className="divide-y divide-black/5">
            {[
              {
                title: "Proven Ways to Get Admitted into College",
                slug: "proven-ways-to-get-admitted-into-college",
                category: "Education",
                number: "01",
              },
              {
                title: "7 Ways to Improve Your Decision-Making Process",
                slug: "7-ways-to-improve-your-decision-making-process",
                category: "Leadership",
                number: "02",
              },
              {
                title: "Top 10 Ways to Run Your Business",
                slug: "top-10-ways-to-run-your-business",
                category: "Business",
                number: "03",
              },
            ].map((post, i) => (
              <FadeIn key={post.slug} delay={i * 0.1}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex items-center justify-between py-8 gap-6"
                >
                  <div className="flex items-center gap-8">
                    <span className="text-3xl font-extrabold text-foreground/10 group-hover:text-gold transition-colors duration-300 hidden sm:block">
                      {post.number}
                    </span>
                    <div>
                      <span className="text-[11px] font-semibold text-gold uppercase tracking-wider">
                        {post.category}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-gold transition-colors duration-300 mt-1">
                        {post.title}
                      </h3>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={24}
                    className="text-foreground/15 group-hover:text-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0"
                  />
                </Link>
              </FadeIn>
            ))}
          </div>

          <div className="sm:hidden mt-6 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground/40 border border-foreground/10 px-5 py-2.5 rounded-full"
            >
              All posts <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-10 h-[3px] bg-gold mb-8" />
                <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                  Let&apos;s<br />Connect
                </h2>
                <p className="text-white/40 max-w-sm text-sm leading-relaxed">
                  Interested in learning more about Max Gorin or the Max Gorin
                  Scholarship? Reach out today.
                </p>
              </div>
              <div className="md:text-right">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 bg-gold hover:bg-gold-light text-foreground font-medium px-10 py-5 rounded-full transition-all duration-300 text-sm"
                >
                  Contact Max
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
