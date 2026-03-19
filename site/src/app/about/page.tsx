import type { Metadata } from "next";
import Image from "next/image";
import {
  Ambulance,
  Heart,
  Users,
  Award,
  Building2,
  Handshake,
  ShieldCheck,
  Package,
} from "lucide-react";

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
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy via-navy-light to-navy-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(212,168,67,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <nav className="text-sm text-gray-400 mb-6">
                <a href="/" className="hover:text-white transition-colors duration-300">Home</a>
                <span className="mx-2 text-gray-500">/</span>
                <span className="text-gold">About</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About Max <span className="text-gold">Gorin</span>
              </h1>
              <p className="text-gray-300 leading-relaxed text-lg">
                With 19+ years of emergency medical services leadership, Max
                Gorin has built LifeLine Ambulance from the ground up -
                transforming a two-ambulance operation into one of Los Angeles
                County&apos;s most trusted EMS providers.
              </p>
            </div>
            <div className="flex justify-center animate-fade-in-up-delay-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gold/15 rounded-2xl blur-2xl animate-pulse-glow" />
                <Image
                  src="/max-gorin.jpeg"
                  alt="Max Gorin - Founder of LifeLine Ambulance"
                  width={360}
                  height={360}
                  className="relative rounded-2xl shadow-2xl object-cover ring-1 ring-white/10"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biography */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">The Journey</h2>
          <div className="w-20 h-1 gold-shimmer mb-10 rounded-full" />
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
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
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-4">
            Milestones
          </h2>
          <div className="w-20 h-1 gold-shimmer mx-auto mb-14 rounded-full" />
          <div className="space-y-0">
            {timeline.map((item, i) => (
              <div key={item.year} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-navy flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-[0_0_20px_rgba(212,168,67,0.3)] transition-shadow duration-300">
                    <item.icon size={22} className="text-gold" />
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="w-0.5 flex-1 bg-gradient-to-b from-navy/30 to-gray-200 mt-2" />
                  )}
                </div>
                <div className="pb-12">
                  <span className="inline-block text-xs font-bold text-gold bg-gold/10 px-3 py-1 rounded-full">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-semibold text-navy mt-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1 leading-relaxed max-w-md">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section id="community" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-4">
            Community Involvement
          </h2>
          <div className="w-20 h-1 gold-shimmer mx-auto mb-14 rounded-full" />
          <div className="grid md:grid-cols-3 gap-8">
            {communityItems.map((item) => (
              <div
                key={item.org}
                className="card-lift bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100"
              >
                <div className="w-14 h-14 rounded-xl bg-navy/10 flex items-center justify-center mb-5 group-hover:bg-gold/10 transition-colors duration-300">
                  <item.icon size={26} className="text-navy" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-1">
                  {item.org}
                </h3>
                <p className="text-sm font-medium text-gold mb-3">
                  {item.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-14 bg-gradient-to-br from-navy/5 to-gold/5 rounded-2xl p-10 max-w-3xl mx-auto text-center border border-gold/10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 mb-4">
              <ShieldCheck size={32} className="text-gold" />
            </div>
            <h3 className="text-xl font-semibold text-navy mb-3">
              Community Health Programs
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-xl mx-auto">
              Max Gorin provides free blood pressure screenings for seniors and
              CPR classes for various demographics through his partnership with
              the American Heart Association.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
