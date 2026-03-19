import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white mt-auto">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-gold mb-3">Max Gorin</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              EMS entrepreneur, community leader, and founder of LifeLine Ambulance. Making a difference in the lives of others.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/scholarship" className="text-gray-300 hover:text-white transition-colors">Scholarship</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold text-gold mb-3">Community</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>American Heart Association</li>
              <li>Montebello Chamber of Commerce</li>
              <li>San Gabriel Valley Economic Partnership</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Max Gorin. All Rights Reserved.</p>
          <p>
            Built by{" "}
            <a
              href="https://caltechweb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light transition-colors"
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
