const services = [
  {
    title: 'Headlight Restoration',
    description: 'Restore clarity and visibility. Remove yellowing, haze, and oxidation for crystal-clear headlights that look factory new.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
  },
  {
    title: 'Ceramic Coatings',
    description: 'Long-term gloss and protection. Nano-ceramic technology bonds to your paint for years of hydrophobic, UV-resistant defence.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    title: 'Exterior Detailing',
    description: 'Hand wash, decontamination, wax & sealant protection. Every panel cleaned and protected to a showroom standard.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: 'Interior Detailing',
    description: 'Deep cleaning, steam sanitizing, stain removal, leather treatment. Every surface cleaned, sanitized, and restored.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    title: 'Mobile Detailing',
    description: 'On-site service at home or work. We come to you — professional results wherever you are in Calgary and surrounding areas.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: 'Paint Correction',
    description: "Swirl, scratch & oxidation removal. Machine polishing to restore your paint's depth, clarity, and mirror-like finish.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
]

export default function V1Services() {
  return (
    <section id="services" className="bg-xad-black py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-14">
          <p className="section-label">Precision</p>
          <h2 className="section-title">
            Get Professional Results —{' '}
            <span className="text-xad-gold">Every Time</span>
          </h2>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-xad-card border border-white/5 rounded-sm p-8 hover:border-xad-gold/30 transition-all duration-300"
            >
              <div className="text-xad-gold mb-5 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-white text-lg font-bold mb-3">{service.title}</h3>
              <p className="text-xad-muted text-sm leading-relaxed">{service.description}</p>
              <div className="mt-6 flex items-center gap-2 text-xad-gold text-xs font-semibold hover:gap-3 transition-all duration-200 cursor-pointer">
                <span>Learn more</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 border border-xad-gold/30 text-xad-gold text-sm font-semibold px-8 py-3.5 rounded-sm hover:bg-xad-gold hover:text-xad-black transition-all duration-200"
          >
            View All Packages & Pricing
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
