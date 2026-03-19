import Link from "next/link";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-navy to-navy-dark text-white mt-auto">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Max <span className="text-gold">Gorin</span>
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              EMS entrepreneur, community leader, and founder of LifeLine
              Ambulance. Making a difference in the lives of others.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: "/about", label: "About" },
                { href: "/scholarship", label: "Scholarship" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-gold hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold text-gold mb-4 text-sm uppercase tracking-wider">
              Community
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Heart size={12} className="text-gold flex-shrink-0" />
                American Heart Association
              </li>
              <li className="flex items-center gap-2">
                <Heart size={12} className="text-gold flex-shrink-0" />
                Montebello Chamber of Commerce
              </li>
              <li className="flex items-center gap-2">
                <Heart size={12} className="text-gold flex-shrink-0" />
                San Gabriel Valley Economic Partnership
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Max Gorin. All Rights Reserved.
          </p>
          <p>
            Built by{" "}
            <a
              href="https://caltechweb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light transition-colors duration-300"
            >
              CalTech Web
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
