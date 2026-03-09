const testimonials = [
  {
    quote:
      'Excellent service! The team was professional, quick, and my car looks and runs like new. Highly recommend!',
    name: 'Sean Rose',
    handle: '@seanrose',
    rating: 5,
  },
  {
    quote:
      'Superb service! My car was ready on time and looks perfect. Definitely coming back.',
    name: 'Sean Rose',
    handle: '@seanrose',
    rating: 5,
  },
  {
    quote:
      'Friendly staff, professional work, and great attention to detail. Highly recommend! Exceptional service every time.',
    name: 'Sean Rose',
    handle: '@seanrose',
    rating: 5,
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#d89235">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function V1Testimonials() {
  return (
    <section className="bg-xad-dark py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-14">
          <p className="section-label">Testimonials</p>
          <h2 className="section-title">Hear from our satisfied clients.</h2>
        </div>

        {/* 3 Cards Visible At Once */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-xad-card border border-white/5 rounded-sm p-8 flex flex-col justify-between"
            >
              {/* Quote Mark */}
              <div className="text-xad-gold/20 text-6xl font-black leading-none mb-4 select-none">"</div>

              {/* Stars */}
              <StarRating count={testimonial.rating} />

              {/* Quote */}
              <p className="text-xad-gray text-base leading-relaxed mt-4 mb-8 flex-1">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-white/5 pt-6">
                {/* Avatar placeholder */}
                <div className="w-10 h-10 rounded-full bg-xad-medium border border-white/10 flex items-center justify-center shrink-0">
                  <span className="text-xad-gold font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{testimonial.name}</p>
                  <p className="text-xad-muted text-xs">{testimonial.handle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                i === 0 ? 'bg-xad-gold' : 'bg-white/20'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
