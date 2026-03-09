import Link from 'next/link'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Packages & Pricing', href: '#pricing' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Service Areas', href: '#areas' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
  { label: 'Legal', href: '#legal' },
]

const serviceAreas = ['Calgary', 'Airdrie', 'Cochrane', 'Chestermere', 'Okotoks']

export default function Footer() {
  return (
    <footer className="bg-xad-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xad-gold font-black text-2xl tracking-tight">XAD</span>
              <span className="text-white/20 text-xl">|</span>
              <span className="text-white/60 text-sm font-semibold tracking-wider uppercase">
                Xtreme Auto Detailing
              </span>
            </div>
            <p className="text-xad-muted text-sm leading-relaxed max-w-sm mb-6">
              Restore, protect, and elevate your vehicle with Calgary's trusted 5-star detailing professionals.
              Mobile & studio services across Calgary and surrounding communities.
            </p>
            <a
              href="tel:5877072736"
              className="inline-flex items-center gap-2 text-xad-gold font-semibold text-sm hover:text-xad-warm transition-colors duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.69h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.28-1.28a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              (587) 707-2736
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white text-xs font-semibold tracking-widest uppercase mb-5">Navigation</h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xad-muted text-sm hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white text-xs font-semibold tracking-widest uppercase mb-5">Service Areas</h3>
            <ul className="flex flex-col gap-3">
              {serviceAreas.map((area) => (
                <li key={area}>
                  <a
                    href="#areas"
                    className="text-xad-muted text-sm hover:text-white transition-colors duration-150 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-xad-gold shrink-0" />
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xad-muted text-sm">
            © XAD. Xtreme Auto Detailing 2025. All rights reserved.
          </p>
          <p className="text-xad-muted/40 text-xs">
            Supported by{' '}
            <span className="text-xad-muted/60 hover:text-xad-gold transition-colors cursor-pointer">
              Tactics Digital YYC
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
