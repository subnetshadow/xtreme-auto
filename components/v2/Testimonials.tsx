const testimonials = [
  {
    quote:
      'Excellent service! The team was professional, quick, and my car looks and runs like new. Highly recommend!',
    name: 'Sean Rose',
    handle: '@seanrose',
    rating: 5,
    featured: true,
  },
  {
    quote: 'Superb service! My car was ready on time and looks perfect. Definitely coming back.',
    name: 'Sean Rose',
    handle: '@seanrose',
    rating: 5,
    featured: false,
  },
  {
    quote:
      'Friendly staff, professional work, and great attention to detail. Highly recommend! Exceptional service every time.',
    name: 'Sean Rose',
    handle: '@seanrose',
    rating: 5,
    featured: false,
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#d89235">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function V2Testimonials() {
  const featured = testimonials[0]
  const secondary = testimonials.slice(1)

  return (
    <section className="bg-xad-black py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="section-label">Customer reviews</p>
          <h2 className="section-title">Hear from our satisfied clients.</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          {/* Featured Testimonial */}
          <div className="bg-gradient-to-br from-xad-card to-xad-dark border border-xad-gold/20 rounded-sm p-10 flex flex-col justify-between relative overflow-hidden">
            {/* Decorative quote */}
            <div className="absolute top-0 right-0 text-xad-gold/5 text-[180px] font-black leading-none select-none pointer-events-none">
              "
            </div>

            <div className="relative">
              <Stars count={featured.rating} />
              <blockquote className="text-white text-xl md:text-2xl font-light leading-relaxed mt-6 mb-8">
                "{featured.quote}"
              </blockquote>
            </div>

            <div className="relative flex items-center gap-4 border-t border-xad-gold/10 pt-6">
              <div className="w-12 h-12 rounded-full bg-xad-gold/20 border border-xad-gold/30 flex items-center justify-center shrink-0">
                <span className="text-xad-gold font-bold text-lg">{featured.name.charAt(0)}</span>
              </div>
              <div>
                <p className="text-white font-semibold">{featured.name}</p>
                <p className="text-xad-muted text-sm">{featured.handle}</p>
              </div>
              <div className="ml-auto">
                <span className="text-xs font-semibold text-xad-gold bg-xad-gold/10 border border-xad-gold/20 px-3 py-1 rounded-full">
                  Featured Review
                </span>
              </div>
            </div>
          </div>

          {/* Secondary Testimonials Stack */}
          <div className="flex flex-col gap-4">
            {secondary.map((t, i) => (
              <div key={i} className="bg-xad-card border border-white/5 rounded-sm p-7 flex-1 flex flex-col justify-between">
                <div>
                  <Stars count={t.rating} />
                  <p className="text-xad-gray text-base leading-relaxed mt-4 mb-5">
                    "{t.quote}"
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-xad-medium border border-white/10 flex items-center justify-center shrink-0">
                    <span className="text-xad-muted font-semibold text-xs">{t.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{t.name}</p>
                    <p className="text-xad-muted text-xs">{t.handle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`transition-all duration-200 rounded-full ${
                i === 0 ? 'w-6 h-2 bg-xad-gold' : 'w-2 h-2 bg-white/20'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
