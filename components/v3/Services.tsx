const services = [
  {
    title: 'Mobile Detailing',
    href: '/mobile-detailing-calgary',
    description: 'On-site service at home or work, anywhere in the Calgary region.',
    color: 'xad-gold',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: 'Interior & Exterior Detailing',
    href: '/interior-detailing-calgary',
    description: 'Deep interior clean, steam sanitizing, leather care & full exterior wash.',
    color: 'xad-blue',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    title: 'Ceramic Coating',
    href: '/ceramic-coating-calgary',
    description: 'Long-term gloss and protection with nano-ceramic technology.',
    color: 'xad-gold',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Paint Correction',
    href: '/paint-correction-calgary',
    description: 'Swirl, scratch & oxidation removal — multi-stage machine polishing.',
    color: 'xad-blue',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: 'Paint Protection Film (PPF)',
    href: '/paint-protection-film-calgary',
    description: 'Invisible urethane armor against rock chips, scratches & road debris.',
    color: 'xad-gold',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Window Tinting',
    href: '/window-tinting-calgary',
    description: 'Heat & UV rejection, glare reduction, and a sharp, finished look.',
    color: 'xad-blue',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M3 11h18M12 4v14" />
      </svg>
    ),
  },
  {
    title: 'Headlight Restoration',
    href: '/headlight-restoration-calgary',
    description: 'Restore clarity and visibility — remove yellowing, haze, and oxidation.',
    color: 'xad-gold',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
  },
]

export default function V3Services() {
  return (
    <section id="services" className="bg-xad-black py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-baseline justify-between">
            <div>
              <p className="section-label">Precision</p>
              <h2 className="section-title">
                Get Professional Results —{' '}
                <span className="text-xad-gold">Every Time</span>
              </h2>
            </div>
            <a
              href="/#book"
              className="hidden md:inline-flex items-center gap-2 text-xad-muted text-sm hover:text-xad-gold transition-colors duration-200"
            >
              Book a service
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Horizontal Scrolling Cards */}
        <div className="overflow-x-auto pb-4 -mx-4 px-4 md:-mx-6 md:px-6">
          <div className="flex gap-5" style={{ width: 'max-content' }}>
            {services.map((service, index) => {
              const CardTag: any = service.href ? 'a' : 'div'
              return (
              <CardTag
                key={service.title}
                {...(service.href ? { href: service.href } : {})}
                className="group w-72 shrink-0 bg-xad-card border border-white/5 rounded-sm p-8 hover:border-xad-gold/30 transition-all duration-300 flex flex-col"
              >
                {/* Index */}
                <div className="text-white/10 text-xs font-bold tracking-widest mb-5">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Icon */}
                <div
                  className={`${
                    service.color === 'xad-gold' ? 'text-xad-gold' : 'text-xad-blue'
                  } mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-white text-base font-bold mb-3 leading-snug">{service.title}</h3>

                {/* Description */}
                <p className="text-xad-muted text-sm leading-relaxed flex-1">{service.description}</p>

                {/* Learn more link for pages */}
                {service.href && (
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xad-gold text-xs font-semibold">
                    Learn more
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                )}

                {/* Bottom CTA */}
                <div
                  className={`mt-6 h-px w-0 group-hover:w-full transition-all duration-500 ${
                    service.color === 'xad-gold' ? 'bg-xad-gold/40' : 'bg-xad-blue/40'
                  }`}
                />
              </CardTag>
              )
            })}
          </div>
        </div>

        {/* Mobile — View All */}
        <div className="md:hidden mt-6 text-center">
          <a
            href="/#book"
            className="inline-flex items-center gap-2 text-xad-muted text-sm hover:text-xad-gold transition-colors duration-200"
          >
            Book a service
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
