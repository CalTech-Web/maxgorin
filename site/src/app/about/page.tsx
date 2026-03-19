import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Ambulance,
  Heart,
  Users,
  Award,
  Building2,
  Handshake,
  ShieldCheck,
  Package,
  ChevronRight,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "About Max Gorin",
  description:
    "Learn about Max Gorin, founder of LifeLine Ambulance, EMS entrepreneur with 19+ years of leadership, and community leader in Los Angeles County.",
  alternates: { canonical: "https://maxgorin.com/about" },
  openGraph: {
    title: "About Max Gorin",
    description:
      "Founder of LifeLine Ambulance with 19+ years of EMS leadership in Los Angeles County.",
    url: "https://maxgorin.com/about",
  },
};

const timeline = [
  {
    year: "2002",
    title: "LifeLine Ambulance Founded",
    description:
      "Founded in Los Angeles County with just 6 staff members and 2 ambulances. Max served as EMT, dispatcher, and marketer.",
    icon: Ambulance,
  },
  {
    year: "2010s",
    title: "Growth & Expansion",
    description:
      "Grew to a fleet of 70 ambulances with over 300 employees, providing 24/7 patient care across Los Angeles County.",
    icon: Users,
  },
  {
    year: "2020",
    title: "Pandemic Response",
    description:
      "Partnered with Spencer Health and founded LifeLine Supply for PPE distribution during COVID-19.",
    icon: Package,
  },
  {
    year: "Present",
    title: "Community Leadership",
    description:
      "Serving on the AHA Executive Leadership Team, Montebello Chamber, and San Gabriel Valley Economic Partnership Board.",
    icon: Award,
  },
];

const communityItems = [
  {
    org: "American Heart Association",
    role: "OC Executive Leadership Team",
    description:
      "Offering free blood pressure screenings for seniors and CPR classes for the community.",
    icon: Heart,
  },
  {
    org: "Montebello Chamber of Commerce",
    role: "Ambassador",
    description:
      "Supporting local business development and community events as a chamber ambassador.",
    icon: Building2,
  },
  {
    org: "San Gabriel Valley Economic Partnership",
    role: "Board Member",
    description:
      "Promoting economic development and regional collaboration in the San Gabriel Valley.",
    icon: Handshake,
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 pt-28 pb-20 md:pt-36 md:pb-28">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <nav className="flex items-center gap-2 text-sm text-foreground/30 mb-10">
                <a href="/" className="hover:text-foreground transition-colors">Home</a>
                <ChevronRight size={14} />
                <span className="text-foreground/60">About</span>
              </nav>
              <div className="accent-line mb-8" />
              <h1 className="heading-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-8">
                About<br />Max <span className="text-gold">Gorin</span>
              </h1>
              <p className="text-foreground/40 leading-relaxed text-lg max-w-lg">
                With 19+ years of emergency medical services leadership, Max
                Gorin built LifeLine Ambulance from the ground up - transforming
                a two-ambulance operation into one of LA County&apos;s most
                trusted EMS providers.
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full bg-gold/10 rounded-3xl" />
                <Image
                  src="/max-gorin.jpeg"
                  alt="Max Gorin - Founder of LifeLine Ambulance"
                  width={460}
                  height={540}
                  className="relative rounded-3xl object-cover w-full shadow-[0_30px_80px_rgba(0,0,0,0.12)]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biography */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <FadeIn>
                <div className="accent-line mb-6" />
                <p className="text-[11px] font-semibold text-foreground/30 uppercase tracking-[0.2em] mb-4">Biography</p>
                <h2 className="heading-display text-4xl md:text-5xl text-foreground">
                  The<br />Journey
                </h2>
              </FadeIn>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <FadeIn delay={0.1}>
                <div className="space-y-6 text-foreground/50 text-lg leading-relaxed">
                  <p>
                    Max Gorin is the founder of LifeLine Ambulance, a leading EMS
                    company based in Los Angeles County. Since 2002, Max has
                    dedicated himself to making a difference through healthcare,
                    innovation, and community engagement.
                  </p>
                  <p>
                    Starting with just 6 staff members and 2 ambulances, Max wore
                    every hat - serving as an EMT, dispatcher, and marketer. His
                    hands-on approach fueled the company&apos;s growth into one of
                    the region&apos;s most trusted ambulance services, now
                    operating 70 ambulances with 300+ employees.
                  </p>
                  <p>
                    When COVID-19 struck in March 2020, Max pivoted quickly -
                    partnering with Spencer Health and founding LifeLine Supply for
                    critical PPE distribution.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="accent-line mx-auto mb-6" />
              <p className="text-[11px] font-semibold text-foreground/30 uppercase tracking-[0.2em] mb-4">History</p>
              <h2 className="heading-display text-4xl md:text-5xl text-foreground">Milestones</h2>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {timeline.map((item, i) => (
              <FadeIn key={item.year} delay={i * 0.1} direction="up">
                <div className="editorial-card rounded-2xl p-7 h-full">
                  <span className="text-[11px] font-bold text-gold uppercase tracking-wider">{item.year}</span>
                  <item.icon size={22} className="text-foreground/20 mt-4 mb-3" />
                  <h3 className="text-base font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-foreground/40 text-sm leading-relaxed">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section id="community" className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="accent-line mx-auto mb-6" />
              <p className="text-[11px] font-semibold text-foreground/30 uppercase tracking-[0.2em] mb-4">Giving Back</p>
              <h2 className="heading-display text-4xl md:text-5xl text-foreground">Community Involvement</h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-5 mb-16">
            {communityItems.map((item, i) => (
              <FadeIn key={item.org} delay={i * 0.1} direction="up">
                <div className="editorial-card rounded-2xl p-8 h-full">
                  <item.icon size={22} className="text-gold mb-5" />
                  <h3 className="text-base font-bold text-foreground mb-1">{item.org}</h3>
                  <p className="text-sm font-semibold text-gold mb-3">{item.role}</p>
                  <p className="text-foreground/40 text-sm leading-relaxed">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="bg-foreground rounded-2xl p-10 md:p-14 max-w-3xl mx-auto text-center text-white">
              <ShieldCheck size={32} className="text-gold mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Community Health Programs</h3>
              <p className="text-white/40 leading-relaxed max-w-xl mx-auto mb-6">
                Free blood pressure screenings for seniors and CPR classes through
                the American Heart Association partnership.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-medium text-sm transition-colors"
              >
                Get involved <ArrowUpRight size={14} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
