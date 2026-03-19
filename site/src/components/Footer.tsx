import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="absolute inset-0 mesh-bg-alt opacity-50" />
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 tracking-tight">
              MAX <span className="text-gradient-gold">GORIN</span>
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              EMS entrepreneur, community leader, and founder of LifeLine
              Ambulance. Making a difference in the lives of others through
              19+ years of dedicated service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold text-gold uppercase tracking-widest mb-5">
              Navigate
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
                    className="text-gray-500 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-xs font-semibold text-gold uppercase tracking-widest mb-5">
              Community
            </h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>American Heart Association</li>
              <li>Montebello Chamber of Commerce</li>
              <li>San Gabriel Valley Economic Partnership</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} Max Gorin. All Rights Reserved.</p>
          <p>
            Built by{" "}
            <a
              href="https://caltechweb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/70 hover:text-gold transition-colors duration-300"
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
