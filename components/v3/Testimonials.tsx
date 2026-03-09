'use client'

import { useState } from 'react'

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

export default function V3Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const t = testimonials[current]

  return (
    <section className="bg-xad-dark py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Label */}
        <div className="mb-16 flex items-center justify-between">
          <div>
            <p className="section-label">Testimonials</p>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
              Hear from our
              <br />
              satisfied clients.
            </h2>
          </div>

          {/* Carousel controls */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={prev}
              className="w-14 h-14 border border-white/10 rounded-sm flex items-center justify-center text-white hover:border-xad-gold hover:text-xad-gold transition-colors duration-200"
              aria-label="Previous"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              className="w-14 h-14 border border-white/10 rounded-sm flex items-center justify-center text-white hover:border-xad-gold hover:text-xad-gold transition-colors duration-200"
              aria-label="Next"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Single Large Quote Carousel */}
        <div className="relative">
          {/* Background large quote mark */}
          <div className="absolute -top-10 -left-6 text-xad-gold/5 text-[200px] font-black leading-none select-none pointer-events-none">
            "
          </div>

          <div className="relative bg-xad-card border border-white/5 rounded-sm p-10 md:p-16">
            {/* Stars */}
            <div className="flex gap-1 mb-8">
              {Array.from({ length: t.rating }).map((_, i) => (
                <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#d89235">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-2xl md:text-4xl font-light text-white leading-relaxed mb-10 max-w-4xl">
              "{t.quote}"
            </blockquote>

            {/* Author & Counter */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-xad-gold/20 border border-xad-gold/30 flex items-center justify-center">
                  <span className="text-xad-gold font-bold text-xl">{t.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-white font-bold text-lg">{t.name}</p>
                  <p className="text-xad-muted text-sm">{t.handle}</p>
                </div>
              </div>

              {/* Counter & Mobile arrows */}
              <div className="flex items-center gap-4">
                <span className="text-xad-muted/60 text-sm font-medium">
                  {String(current + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
                </span>

                {/* Mobile arrows */}
                <div className="flex md:hidden gap-2">
                  <button
                    onClick={prev}
                    className="w-10 h-10 border border-white/10 rounded-sm flex items-center justify-center text-white hover:border-xad-gold hover:text-xad-gold transition-colors duration-200"
                    aria-label="Previous"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={next}
                    className="w-10 h-10 border border-white/10 rounded-sm flex items-center justify-center text-white hover:border-xad-gold hover:text-xad-gold transition-colors duration-200"
                    aria-label="Next"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current ? 'w-8 h-2 bg-xad-gold' : 'w-2 h-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
