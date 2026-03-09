'use client'

import { useState } from 'react'

const slides = [
  {
    label: 'Paint Correction',
    beforeNote: 'Heavy swirl marks, micro-scratches & oxidation across all panels',
    afterNote: 'Mirror-like gloss with full paint depth restored to factory condition',
  },
  {
    label: 'Interior Detailing',
    beforeNote: 'Stained upholstery, grime-coated surfaces & persistent odours',
    afterNote: 'Steam-sanitized, stain-free interior with fresh, clean scent',
  },
  {
    label: 'Ceramic Coating',
    beforeNote: 'Dull, unprotected paint vulnerable to environmental contaminants',
    afterNote: 'Hydrophobic ceramic layer delivering years of glossy protection',
  },
]

export default function V2BeforeAfter() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1))

  const slide = slides[current]

  return (
    <section className="bg-xad-black py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="section-label">Results</p>
            <h2 className="section-title mb-3">Before / After Showcase</h2>
            <p className="text-xad-muted text-base max-w-lg">
              See the difference expert care makes. Every detail restored to perfection.
            </p>
          </div>
          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="w-12 h-12 border border-white/10 rounded-sm flex items-center justify-center text-white hover:border-xad-gold hover:text-xad-gold transition-colors duration-200"
              aria-label="Previous"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="text-xad-muted text-sm font-medium">
              {current + 1} / {slides.length}
            </span>
            <button
              onClick={next}
              className="w-12 h-12 border border-white/10 rounded-sm flex items-center justify-center text-white hover:border-xad-gold hover:text-xad-gold transition-colors duration-200"
              aria-label="Next"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-10">
          {/* Before */}
          <div className="relative">
            <div className="aspect-video bg-xad-medium/30 border border-white/5 rounded-sm flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-xad-medium/40 to-xad-black/70" />
              <div className="relative text-center px-8">
                <p className="text-white/10 text-8xl font-black mb-3">B</p>
                <p className="text-xad-muted/80 text-sm leading-relaxed">{slide.beforeNote}</p>
              </div>
              <div className="absolute top-4 left-4 bg-xad-orange/90 text-white text-xs font-bold px-3 py-1.5 rounded-sm">
                BEFORE
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-xad-muted/40 text-xs text-center">[ Before Image Placeholder ]</p>
              </div>
            </div>
          </div>

          {/* After */}
          <div className="relative">
            <div className="aspect-video bg-xad-card border border-xad-gold/20 rounded-sm flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-xad-gold/5 to-xad-black/70" />
              <div className="relative text-center px-8">
                <p className="text-xad-gold/10 text-8xl font-black mb-3">A</p>
                <p className="text-xad-muted/80 text-sm leading-relaxed">{slide.afterNote}</p>
              </div>
              <div className="absolute top-4 left-4 bg-xad-gold text-xad-black text-xs font-bold px-3 py-1.5 rounded-sm">
                AFTER
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-xad-muted/40 text-xs text-center">[ After Image Placeholder ]</p>
              </div>
            </div>
          </div>
        </div>

        {/* Label + Dots + CTA */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-xad-gold font-semibold text-sm">{slide.label}</span>
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`transition-all duration-200 rounded-full ${
                    i === current ? 'w-6 h-2 bg-xad-gold' : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 border border-xad-gold/30 text-xad-gold text-sm font-semibold px-6 py-3 rounded-sm hover:bg-xad-gold hover:text-xad-black transition-all duration-200"
          >
            See Full Gallery
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
