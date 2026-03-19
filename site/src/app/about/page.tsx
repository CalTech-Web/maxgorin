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
      <section className="bg-gradient-to-br from-navy to-navy-dark text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <nav className="text-sm text-gray-300 mb-4">
                <a href="/" className="hover:text-white">Home</a>
                <span className="mx-2">/</span>
                <span className="text-gold">About</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About Max <span className="text-gold">Gorin</span>
              </h1>
              <p className="text-gray-300 leading-relaxed text-lg">
                With 19+ years of emergency medical services leadership, Max Gorin has built LifeLine Ambulance from the ground up - transforming a two-ambulance operation into one of Los Angeles County&apos;s most trusted EMS providers.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/max-gorin.jpeg"
                alt="Max Gorin - Founder of LifeLine Ambulance"
                width={360}
                height={360}
                className="rounded-2xl shadow-2xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Biography */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
          <h2 className="text-3xl font-bold text-navy mb-4">The Journey</h2>
          <div className="w-16 h-1 bg-gold mb-8 rounded-full" />
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              Max Gorin is the founder of LifeLine Ambulance, a leading emergency medical services company based in Los Angeles County. Since its founding in 2002, Max has dedicated himself to making a difference in the lives of others through healthcare, innovation, and community engagement.
            </p>
            <p>
              Starting with just 6 staff members and 2 ambulances, Max wore every hat - serving as an EMT, dispatcher, and marketer to get LifeLine off the ground. His hands-on approach and relentless work ethic fueled the company&apos;s growth into one of the region&apos;s most trusted ambulance services, now operating a fleet of 70 ambulances with over 300 employees providing round-the-clock care.
            </p>
            <p>
              When the COVID-19 pandemic struck in March 2020, Max pivoted quickly - partnering with Spencer Health to distribute sanitizing products and founding LifeLine Supply to provide critical personal protective equipment to healthcare workers and communities in need.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
          <h2 className="text-3xl font-bold text-navy text-center mb-4">
            Milestones
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-12 rounded-full" />
          <div className="space-y-8">
            {timeline.map((item) => (
              <div key={item.year} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center flex-shrink-0">
                    <item.icon size={20} className="text-gold" />
                  </div>
                  <div className="w-0.5 flex-1 bg-gray-200 mt-2" />
                </div>
                <div className="pb-8">
                  <span className="text-sm font-bold text-gold">{item.year}</span>
                  <h3 className="text-lg font-semibold text-navy mt-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1 leading-relaxed">
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
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <h2 className="text-3xl font-bold text-navy text-center mb-4">
            Community Involvement
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-12 rounded-full" />
          <div className="grid md:grid-cols-3 gap-8">
            {communityItems.map((item) => (
              <div
                key={item.org}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center mb-4">
                  <item.icon size={24} className="text-navy" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-1">
                  {item.org}
                </h3>
                <p className="text-sm font-medium text-gold mb-2">{item.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-navy/5 rounded-xl p-8 max-w-3xl mx-auto text-center">
            <ShieldCheck size={36} className="text-gold mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-navy mb-2">
              Community Health Programs
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Max Gorin provides free blood pressure screenings for seniors and CPR classes for various demographics through his partnership with the American Heart Association.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
