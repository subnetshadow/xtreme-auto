const benefits = [
  {
    title: 'Premium Products Only',
    description: 'We use industry-leading detailing products — professional-grade compounds, coatings, and sealants that deliver lasting results.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    title: 'Mobile & Studio Convenience',
    description: 'Choose how you detail: book mobile service at your home or workplace, or drop your vehicle at our fully-equipped studio.',
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
    title: 'Certified Professionals',
    description: 'Our team is trained, certified, and passionate about paint care. Every technician understands paint chemistry, correction, and protection.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="8" r="4" />
        <path d="M20 21a8 8 0 1 0-16 0" />
        <polyline points="9 11 12 14 22 4" />
      </svg>
    ),
  },
  {
    title: 'Fully Insured & Trusted',
    description: 'Your vehicle is in safe hands. We\'re fully insured and trusted by hundreds of Calgary vehicle owners, with a 5-star reputation to match.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Satisfaction Guaranteed',
    description: 'We stand behind every job. If you\'re not completely satisfied with the results, we\'ll make it right — no questions asked.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
]

export default function V1WhyUs() {
  return (
    <section className="bg-xad-black py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="section-label">Benefits</p>
          <h2 className="section-title">Why Choose Us</h2>
        </div>

        {/* 5 Icon Cards in a Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group bg-xad-card border border-white/5 rounded-sm p-6 text-center hover:border-xad-gold/30 transition-all duration-300 hover:bg-xad-card/80"
            >
              {/* Number */}
              <div className="text-xad-gold/20 text-xs font-bold tracking-widest mb-4">
                0{index + 1}
              </div>
              {/* Icon */}
              <div className="text-xad-gold mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              {/* Title */}
              <h3 className="text-white text-sm font-bold mb-3 leading-snug">{benefit.title}</h3>
              {/* Description */}
              <p className="text-xad-muted text-xs leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '500+', label: 'Vehicles Detailed' },
            { value: '5★', label: 'Average Rating' },
            { value: '3+', label: 'Years in Calgary' },
            { value: '100%', label: 'Satisfaction Rate' },
          ].map((stat) => (
            <div key={stat.label} className="text-center border border-white/5 rounded-sm py-6">
              <p className="text-4xl font-black text-xad-gold mb-2">{stat.value}</p>
              <p className="text-xad-muted text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
