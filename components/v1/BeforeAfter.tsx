const comparisons = [
  { label: 'Paint Correction', beforeNote: 'Swirl marks & oxidation', afterNote: 'Mirror gloss finish' },
  { label: 'Interior Detail', beforeNote: 'Heavy staining & grime', afterNote: 'Sanitized & restored' },
  { label: 'Ceramic Coating', beforeNote: 'Dull & unprotected', afterNote: 'Hydrophobic gloss' },
]

export default function V1BeforeAfter() {
  return (
    <section className="bg-xad-dark py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-14">
          <p className="section-label">Results</p>
          <h2 className="section-title mb-4">Before / After Showcase</h2>
          <p className="text-xad-muted text-base max-w-xl">
            See the difference expert care makes. Every detail restored to perfection.
          </p>
        </div>

        {/* Side-by-side Comparisons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {comparisons.map((item) => (
            <div key={item.label} className="flex flex-col gap-2">
              <p className="text-white/40 text-xs font-semibold tracking-wider uppercase mb-1">{item.label}</p>
              <div className="flex gap-2">
                {/* Before */}
                <div className="flex-1 flex flex-col">
                  <div className="aspect-square bg-xad-medium/40 border border-white/5 rounded-sm flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-xad-medium/60 to-xad-black/80" />
                    <div className="relative text-center">
                      <p className="text-white/20 text-3xl font-black mb-1">B</p>
                      <p className="text-xad-muted text-xs">{item.beforeNote}</p>
                    </div>
                    <span className="absolute top-2 left-2 text-xs font-bold bg-xad-black/80 text-xad-orange px-2 py-0.5 rounded-sm">
                      Before
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="flex items-center">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-px h-8 bg-white/10" />
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-xad-gold">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                    <div className="w-px h-8 bg-white/10" />
                  </div>
                </div>

                {/* After */}
                <div className="flex-1 flex flex-col">
                  <div className="aspect-square bg-xad-card border border-xad-gold/20 rounded-sm flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-xad-gold/5 to-xad-black/80" />
                    <div className="relative text-center">
                      <p className="text-xad-gold/30 text-3xl font-black mb-1">A</p>
                      <p className="text-xad-muted text-xs">{item.afterNote}</p>
                    </div>
                    <span className="absolute top-2 left-2 text-xs font-bold bg-xad-black/80 text-xad-gold px-2 py-0.5 rounded-sm">
                      After
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 bg-xad-gold text-xad-black font-bold px-8 py-3.5 rounded-sm hover:bg-xad-warm transition-colors duration-200"
          >
            See Full Gallery
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
