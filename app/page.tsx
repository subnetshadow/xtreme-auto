import Link from 'next/link'

export default function SelectorPage() {
  const versions = [
    {
      number: '01',
      slug: 'v1',
      name: 'Bold & Direct',
      description:
        'Full-width hero with prominent H1, 3-column service grid, side-by-side before/after comparisons, and all 3 testimonials visible at once. Clean, minimal, and impactful.',
      tags: ['Full-width Hero', '3-Col Grid', 'Minimal'],
    },
    {
      number: '02',
      slug: 'v2',
      name: 'Premium Editorial',
      description:
        'Split hero layout with car image placeholder, 2-column service cards, slider-style before/after, featured testimonial layout, and service area icon cards.',
      tags: ['Split Hero', 'Editorial', 'Premium'],
    },
    {
      number: '03',
      slug: 'v3',
      name: 'Modern & Bold',
      description:
        'Centered hero overlay with large typography, horizontal scrolling services, full-width before/after, alternating why-us layout, and map-style area grid.',
      tags: ['Centered Hero', 'Horizontal Scroll', 'Typography-Focus'],
    },
  ]

  return (
    <main className="min-h-screen bg-xad-black flex flex-col">
      {/* Header */}
      <header className="border-b border-white/5 px-6 py-5">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xad-gold font-black text-xl tracking-tight">XAD</span>
            <span className="text-white/20 text-lg">|</span>
            <span className="text-white/70 text-sm font-medium tracking-wide">Xtreme Auto Detailing</span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-xad-card border border-white/10 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-xad-gold animate-pulse" />
            <span className="text-xad-muted text-sm font-medium">Client Preview — Homepage Concepts</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            Select a{' '}
            <span className="text-xad-gold">Homepage</span>{' '}
            Version to Preview
          </h1>
          <p className="text-xad-muted text-lg md:text-xl max-w-2xl mx-auto mb-16 leading-relaxed">
            Three distinct design directions for Xtreme Auto Detailing. Each version showcases the same brand,
            services, and content — with a unique visual approach and layout strategy.
          </p>

          {/* Version Cards */}
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {versions.map((v) => (
              <div
                key={v.slug}
                className="group bg-xad-card border border-white/5 rounded-sm p-8 flex flex-col hover:border-xad-gold/40 transition-all duration-300 hover:bg-xad-card/80"
              >
                {/* Version Number */}
                <div className="text-7xl font-black text-white/5 leading-none mb-4 group-hover:text-xad-gold/10 transition-colors duration-300">
                  {v.number}
                </div>

                {/* Name */}
                <h2 className="text-white text-xl font-bold mb-3">{v.name}</h2>

                {/* Description */}
                <p className="text-xad-muted text-sm leading-relaxed mb-6 flex-1">
                  {v.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {v.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-xad-gold/70 bg-xad-gold/10 border border-xad-gold/20 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={`/${v.slug}`}
                  className="block w-full text-center bg-xad-gold text-xad-black font-bold text-sm py-3 px-6 rounded-sm hover:bg-xad-warm transition-colors duration-200 tracking-wide"
                >
                  View Version {v.number}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 px-6 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xad-muted text-sm">
            © XAD. Xtreme Auto Detailing 2025
          </p>
          <p className="text-xad-muted/50 text-xs">
            Supported by Tactics Digital YYC
          </p>
        </div>
      </footer>
    </main>
  )
}
