const benefits = [
  {
    title: 'Premium-Grade Products Only',
    description:
      'We use professional-grade ceramic coatings, machine compounds, polishes, and paint sealants — the same products trusted by high-end automotive shops across North America. No shortcuts, no budget products.',
    side: 'left',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    title: 'Mobile & Studio Flexibility',
    description:
      'Detail on your schedule — book mobile service at your home or office, or visit our fully-equipped studio. Either way, you get the same premium results and professional service experience.',
    side: 'right',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: 'Certified & Trained Technicians',
    description:
      'Every team member is trained in paint chemistry, machine polishing techniques, ceramic coating application, and interior sanitation protocols. We know vehicles inside and out — literally.',
    side: 'left',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
        <circle cx="12" cy="8" r="4" />
        <path d="M20 21a8 8 0 1 0-16 0" />
      </svg>
    ),
  },
  {
    title: 'Fully Insured & Trusted',
    description:
      'Your vehicle is protected. We carry full liability insurance and treat every car with the same care we\'d give our own. Our 5-star reputation is built on trust, transparency, and consistent results.',
    side: 'right',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Satisfaction Guaranteed',
    description:
      'If any aspect of our service doesn\'t meet your expectations, we return and make it right at no cost. We\'re not satisfied until you are. Your vehicle deserves perfection — and that\'s what we deliver.',
    side: 'left',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
]

export default function V3WhyUs() {
  return (
    <section className="bg-xad-black py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-20 text-center">
          <p className="section-label">Benefits</p>
          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tight">
            Why Choose{' '}
            <span className="text-xad-gold">Us</span>
          </h2>
        </div>

        {/* Alternating Left / Right Layout */}
        <div className="flex flex-col gap-0">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`group grid md:grid-cols-2 gap-0 border-b border-white/5 ${
                index === 0 ? 'border-t' : ''
              }`}
            >
              {/* Content block */}
              <div
                className={`p-10 md:p-14 flex items-center gap-8 ${
                  benefit.side === 'right'
                    ? 'md:order-2 bg-xad-card/30'
                    : 'md:order-1'
                }`}
              >
                <div className="shrink-0 text-xad-gold group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <div>
                  <span className="text-xad-muted/40 text-xs font-bold tracking-widest block mb-3">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-white text-xl font-bold mb-3 leading-snug">{benefit.title}</h3>
                  <p className="text-xad-muted text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </div>

              {/* Visual accent block */}
              <div
                className={`hidden md:flex items-center justify-center p-14 ${
                  benefit.side === 'right'
                    ? 'md:order-1'
                    : 'md:order-2 bg-xad-card/20'
                }`}
              >
                <div className="text-center">
                  <div className="text-7xl font-black text-white/[0.04] select-none group-hover:text-xad-gold/10 transition-colors duration-300">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="w-16 h-px bg-xad-gold/20 mx-auto mt-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
