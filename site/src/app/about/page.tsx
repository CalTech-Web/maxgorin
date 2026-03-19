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
      "Max Gorin founded LifeLine Ambulance in Los Angeles County with just 6 staff members and 2 ambulances. He personally served as EMT, dispatcher, and marketer.",
    icon: Ambulance,
  },
  {
    year: "2010s",
    title: "Growth & Expansion",
    description:
      "LifeLine grew to a fleet of 70 ambulances with over 300 employees, providing 24/7 patient care and critical transport across Los Angeles County.",
    icon: Users,
  },
  {
    year: "2020",
    title: "Pandemic Response",
    description:
      "Partnered with Spencer Health for sanitizing products and founded LifeLine Supply for PPE distribution during COVID-19.",
    icon: Package,
  },
  {
    year: "Present",
    title: "Community Leadership",
    description:
      "Continues to lead LifeLine Ambulance while serving on the AHA Executive Leadership Team, the Montebello Chamber of Commerce, and the San Gabriel Valley Economic Partnership Board.",
    icon: Award,
  },
];

const communityItems = [
  {
    org: "American Heart Association",
    role: "Member, Orange County Executive Leadership Team",
    description:
      "Appointed to the OC AHA Executive Leadership Team, offering free blood pressure screenings for seniors and CPR classes.",
    icon: Heart,
  },
  {
    org: "Montebello Chamber of Commerce",
    role: "Ambassador",
    description:
      "Actively supports local business development and community events as a chamber ambassador.",
    icon: Building2,
  },
  {
    org: "San Gabriel Valley Economic Partnership",
    role: "Board Member",
    description:
      "Serves on the board to promote economic development and regional collaboration in the San Gabriel Valley.",
    icon: Handshake,
  },
];

export default function AboutPage() {
  return (
    <div className="grain">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 mesh-bg" />
        <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-20 md:pt-40 md:pb-28 w-full">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <nav className="flex items-center gap-2 text-sm text-gray-500 mb-10">
                <a href="/" className="hover:text-white transition-colors duration-300">Home</a>
                <ChevronRight size={14} className="text-gray-600" />
                <span className="text-gold font-medium">About</span>
              </nav>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-[0.95]">
                About Max<br />
                <span className="text-gradient-gold">Gorin</span>
              </h1>
              <p className="text-gray-400 leading-relaxed text-lg max-w-lg">
                With 19+ years of emergency medical services leadership, Max
                Gorin has built LifeLine Ambulance from the ground up -
                transforming a two-ambulance operation into one of Los Angeles
                County&apos;s most trusted EMS providers.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute -inset-8 bg-gradient-to-br from-gold/10 to-transparent rounded-3xl blur-3xl animate-pulse-glow" />
                <div className="absolute -inset-[2px] bg-gradient-to-br from-gold/30 via-transparent to-navy-light/30 rounded-2xl" />
                <Image
                  src="/max-gorin.jpeg"
                  alt="Max Gorin - Founder of LifeLine Ambulance"
                  width={400}
                  height={400}
                  className="relative rounded-2xl object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biography */}
      <section className="relative border-t border-white/5">
        <div className="absolute inset-0 bg-surface/50" />
        <div className="relative mx-auto max-w-4xl px-6 py-24 md:py-32">
          <FadeIn>
            <span className="inline-block text-xs font-bold text-gold uppercase tracking-[0.2em] mb-4">Biography</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">The Journey</h2>
            <div className="w-24 h-0.5 gold-shimmer mb-10 rounded-full" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Max Gorin is the founder of LifeLine Ambulance, a leading
                emergency medical services company based in Los Angeles County.
                Since its founding in 2002, Max has dedicated himself to making a
                difference in the lives of others through healthcare, innovation,
                and community engagement.
              </p>
              <p>
                Starting with just 6 staff members and 2 ambulances, Max wore
                every hat - serving as an EMT, dispatcher, and marketer to get
                LifeLine off the ground. His hands-on approach and relentless work
                ethic fueled the company&apos;s growth into one of the
                region&apos;s most trusted ambulance services, now operating a
                fleet of 70 ambulances with over 300 employees providing
                round-the-clock care.
              </p>
              <p>
                When the COVID-19 pandemic struck in March 2020, Max pivoted
                quickly - partnering with Spencer Health to distribute sanitizing
                products and founding LifeLine Supply to provide critical personal
                protective equipment to healthcare workers and communities in need.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg-alt" />
        <div className="relative mx-auto max-w-5xl px-6 py-24 md:py-32">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="inline-block text-xs font-bold text-gold uppercase tracking-[0.2em] mb-4">History</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Milestones</h2>
              <div className="w-24 h-0.5 gold-shimmer mx-auto rounded-full" />
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-5">
            {timeline.map((item, i) => (
              <FadeIn key={item.year} delay={i * 0.1} direction="up">
                <div className="glass-card rounded-2xl p-8 h-full">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center flex-shrink-0">
                      <item.icon size={24} className="text-gold" />
                    </div>
                    <div>
                      <span className="inline-block text-xs font-bold text-gold tracking-wider mb-2">
                        {item.year}
                      </span>
                      <h3 className="text-lg font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section id="community" className="relative border-t border-white/5">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/[0.03] rounded-full blur-[100px]" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="inline-block text-xs font-bold text-gold uppercase tracking-[0.2em] mb-4">Giving Back</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Community Involvement</h2>
              <div className="w-24 h-0.5 gold-shimmer mx-auto rounded-full" />
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-5">
            {communityItems.map((item, i) => (
              <FadeIn key={item.org} delay={i * 0.15} direction="up">
                <div className="glass-card rounded-2xl p-8 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                    <item.icon size={26} className="text-gold" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {item.org}
                  </h3>
                  <p className="text-sm font-semibold text-gold mb-3">
                    {item.role}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.2}>
            <div className="mt-16 glass-strong rounded-2xl p-10 md:p-14 max-w-3xl mx-auto text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.03] to-transparent" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 mb-5">
                  <ShieldCheck size={32} className="text-gold" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Community Health Programs
                </h3>
                <p className="text-gray-400 leading-relaxed max-w-xl mx-auto mb-6">
                  Max Gorin provides free blood pressure screenings for seniors
                  and CPR classes for various demographics through his
                  partnership with the American Heart Association.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-semibold transition-colors duration-300"
                >
                  Get involved <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
