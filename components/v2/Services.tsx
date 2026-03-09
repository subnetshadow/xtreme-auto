const services = [
  {
    title: 'Headlight Restoration',
    description:
      'Restore clarity and visibility. Remove yellowing, haze, and oxidation for crystal-clear headlights that look factory new. UV-protective sealant included.',
    tag: 'Popular',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
  },
  {
    title: 'Ceramic Coatings',
    description:
      'Long-term gloss and protection. Nano-ceramic technology bonds permanently to your paint delivering hydrophobic protection, UV resistance, and mirror-like gloss for years.',
    tag: 'Best Value',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Exterior Detailing',
    description:
      'Hand wash, decontamination, clay bar treatment, wax & sealant protection. Every panel meticulously cleaned, decontaminated, and sealed against the elements.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: 'Interior Detailing',
    description:
      'Deep cleaning, steam sanitizing, stain removal & leather treatment. Every surface — fabric, leather, plastic, glass — professionally cleaned and conditioned.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    title: 'Mobile Detailing',
    description:
      'On-site service at home or work. Our mobile unit comes fully equipped — professional results without leaving your driveway. Available across the Calgary region.',
    tag: 'Convenient',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: 'Paint Correction',
    description:
      'Swirl, scratch & oxidation removal. Multi-stage machine polishing restores your paint\'s depth and clarity, removing years of wash-induced imperfections.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
]

export default function V2Services() {
  return (
    <section id="services" className="bg-xad-dark py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="section-label">Precision</p>
            <h2 className="section-title">
              Get Professional Results —{' '}
              <span className="text-xad-gold">Every Time</span>
            </h2>
          </div>
          <a
            href="#pricing"
            className="shrink-0 border border-xad-gold/40 text-xad-gold text-sm font-semibold px-6 py-3 rounded-sm hover:bg-xad-gold hover:text-xad-black transition-all duration-200"
          >
            View All Packages
          </a>
        </div>

        {/* 2-Column Grid with Larger Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-xad-card border border-white/5 rounded-sm p-10 hover:border-xad-gold/30 transition-all duration-300 overflow-hidden"
            >
              {/* Background number */}
              <div className="absolute top-4 right-6 text-7xl font-black text-white/[0.03] select-none">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Tag */}
              {service.tag && (
                <span className="inline-block text-xs font-bold text-xad-gold bg-xad-gold/10 border border-xad-gold/20 px-3 py-1 rounded-full mb-5">
                  {service.tag}
                </span>
              )}
              {!service.tag && <div className="mb-5 h-6" />}

              {/* Icon */}
              <div className="text-xad-gold mb-5 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-white text-xl font-bold mb-3">{service.title}</h3>

              {/* Description */}
              <p className="text-xad-muted text-sm leading-relaxed mb-6">{service.description}</p>

              {/* CTA */}
              <div className="flex items-center gap-2 text-xad-gold text-xs font-semibold group-hover:gap-3 transition-all duration-200 cursor-pointer">
                <span>Get a Quote</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
