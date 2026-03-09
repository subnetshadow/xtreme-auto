const benefits = [
  {
    title: 'Premium-Grade Products',
    description:
      'We use professional-grade ceramic coatings, compounds, and sealants — the same products used by high-end detailing shops across North America.',
  },
  {
    title: 'Mobile & Studio Flexibility',
    description:
      'Whether you prefer the convenience of mobile service at your door or dropping off at our studio, we deliver the same professional results either way.',
  },
  {
    title: 'Certified & Trained Technicians',
    description:
      'Every technician is trained in paint chemistry, machine polishing, and product application — ensuring your vehicle receives expert-level care every visit.',
  },
  {
    title: 'Fully Insured & Bonded',
    description:
      'Your vehicle is protected under our full liability insurance. We take care of your investment with the same pride you do.',
  },
  {
    title: 'Satisfaction Guarantee',
    description:
      'We\'re not done until you\'re completely satisfied. If any aspect of our service falls short, we\'ll return and make it right at no charge.',
  },
]

export default function V2WhyUs() {
  return (
    <section className="bg-xad-dark py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Image Placeholder */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[3/4] bg-gradient-to-br from-xad-card to-xad-black border border-white/5 rounded-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-xad-gold/5 to-transparent" />

              {/* Decorative corner accents */}
              <div className="absolute top-8 left-8 w-16 h-px bg-xad-gold/20" />
              <div className="absolute top-8 left-8 w-px h-16 bg-xad-gold/20" />
              <div className="absolute bottom-8 right-8 w-16 h-px bg-xad-gold/20" />
              <div className="absolute bottom-8 right-8 w-px h-16 bg-xad-gold/20" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75" className="text-white/10 mx-auto mb-4">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                  <p className="text-white/15 text-sm">[ Team / Studio Image ]</p>
                </div>
              </div>

              {/* Stats overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-xad-black via-xad-black/80 to-transparent">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { v: '500+', l: 'Vehicles' },
                    { v: '5★', l: 'Rated' },
                    { v: '100%', l: 'Guaranteed' },
                  ].map((s) => (
                    <div key={s.l} className="text-center">
                      <p className="text-xad-gold text-2xl font-black">{s.v}</p>
                      <p className="text-xad-muted text-xs mt-1">{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right — Bullet List */}
          <div className="order-1 lg:order-2">
            <p className="section-label">Benefits</p>
            <h2 className="section-title mb-3">Why Choose Us</h2>
            <p className="text-xad-muted text-base leading-relaxed mb-10">
              Xtreme Auto Detailing combines professional-grade products, expert technique, and genuine care
              for every vehicle we touch.
            </p>

            <div className="flex flex-col gap-6">
              {benefits.map((benefit, index) => (
                <div key={benefit.title} className="flex gap-5">
                  {/* Number / Icon */}
                  <div className="shrink-0 w-10 h-10 rounded-sm bg-xad-gold/10 border border-xad-gold/20 flex items-center justify-center">
                    <span className="text-xad-gold text-xs font-bold">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  {/* Text */}
                  <div>
                    <h3 className="text-white font-semibold text-base mb-1.5">{benefit.title}</h3>
                    <p className="text-xad-muted text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="#book"
                className="inline-flex items-center gap-2 bg-xad-gold text-xad-black font-bold px-7 py-4 rounded-sm hover:bg-xad-warm transition-colors duration-200"
              >
                Book Your Detail Today
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
