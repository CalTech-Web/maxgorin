import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white mt-auto">
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <h3 className="text-3xl font-extrabold tracking-tight mb-4">
              Max Gorin
            </h3>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm">
              EMS entrepreneur, community leader, and founder of LifeLine
              Ambulance. 19+ years making a difference in the lives of others
              across Los Angeles County.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/30 mb-5">
              Pages
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
                    className="text-white/50 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/30 mb-5">
              Community
            </h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li>American Heart Association</li>
              <li>Montebello Chamber of Commerce</li>
              <li>San Gabriel Valley Economic Partnership</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} Max Gorin. All Rights Reserved.</p>
          <p>
            Built by{" "}
            <a
              href="https://caltechweb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors duration-300"
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
