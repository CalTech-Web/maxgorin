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
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

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
    color: "from-red-500 to-rose-600",
  },
  {
    org: "Montebello Chamber of Commerce",
    role: "Ambassador",
    description:
      "Actively supports local business development and community events as a chamber ambassador.",
    icon: Building2,
    color: "from-navy to-navy-light",
  },
  {
    org: "San Gabriel Valley Economic Partnership",
    role: "Board Member",
    description:
      "Serves on the board to promote economic development and regional collaboration in the San Gabriel Valley.",
    icon: Handshake,
    color: "from-gold to-gold-dark",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy via-navy-light to-navy-dark text-white overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(212,168,67,0.12),transparent_50%)]" />
        <div className="absolute top-20 right-20 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 relative w-full">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
                <a href="/" className="hover:text-white transition-colors duration-300">Home</a>
                <ChevronRight size={14} className="text-gray-500" />
                <span className="text-gold font-medium">About</span>
              </nav>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]">
                About Max <span className="text-gold">Gorin</span>
              </h1>
              <p className="text-gray-300 leading-relaxed text-lg max-w-lg">
                With 19+ years of emergency medical services leadership, Max
                Gorin has built LifeLine Ambulance from the ground up -
                transforming a two-ambulance operation into one of Los Angeles
                County&apos;s most trusted EMS providers.
              </p>
            </div>
            <div className="flex justify-center animate-fade-in-up-delay-2">
              <div className="relative">
                <div className="absolute -inset-8 bg-gradient-to-br from-gold/20 to-navy-light/20 rounded-3xl blur-3xl animate-pulse-glow" />
                <div className="absolute -inset-1 bg-gradient-to-br from-gold/40 to-navy-light/40 rounded-2xl" />
                <Image
                  src="/max-gorin.jpeg"
                  alt="Max Gorin - Founder of LifeLine Ambulance"
                  width={380}
                  height={380}
                  className="relative rounded-2xl shadow-2xl object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biography */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
          <span className="inline-block text-xs font-bold text-gold uppercase tracking-widest mb-4">Biography</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6">The Journey</h2>
          <div className="w-24 h-1 gold-shimmer mb-10 rounded-full" />
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
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold text-gold uppercase tracking-widest mb-4">History</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6">
              Milestones
            </h2>
            <div className="w-24 h-1 gold-shimmer mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {timeline.map((item) => (
              <div key={item.year} className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-gold/30 hover:shadow-xl transition-all duration-500">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-navy to-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-2xl" />
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-navy to-navy-light flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-[0_4px_20px_rgba(212,168,67,0.3)] transition-shadow duration-300">
                    <item.icon size={24} className="text-gold" />
                  </div>
                  <div>
                    <span className="inline-block text-xs font-bold text-gold bg-gold/10 px-3 py-1 rounded-full mb-2">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-bold text-navy mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section id="community" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold text-gold uppercase tracking-widest mb-4">Giving Back</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6">
              Community Involvement
            </h2>
            <div className="w-24 h-1 gold-shimmer mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {communityItems.map((item) => (
              <div
                key={item.org}
                className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gold/30 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`h-3 bg-gradient-to-r ${item.color}`} />
                <div className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-navy/5 to-navy/10 flex items-center justify-center mb-5 group-hover:from-gold/10 group-hover:to-gold/20 transition-all duration-500">
                    <item.icon size={26} className="text-navy group-hover:text-gold transition-colors duration-500" />
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-1">
                    {item.org}
                  </h3>
                  <p className="text-sm font-semibold text-gold mb-3">
                    {item.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 relative bg-gradient-to-br from-navy to-navy-dark rounded-2xl p-10 md:p-14 max-w-3xl mx-auto text-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,168,67,0.1),transparent_60%)]" />
            <div className="relative">
              <div className="inline-flex items-center justify-center w-18 h-18 rounded-full bg-gold/10 mb-5">
                <ShieldCheck size={36} className="text-gold" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Community Health Programs
              </h3>
              <p className="text-gray-300 leading-relaxed max-w-xl mx-auto">
                Max Gorin provides free blood pressure screenings for seniors and
                CPR classes for various demographics through his partnership with
                the American Heart Association.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-semibold mt-6 transition-colors duration-300"
              >
                Get involved <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
