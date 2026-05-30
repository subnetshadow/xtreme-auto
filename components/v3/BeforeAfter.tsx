import Image from 'next/image'

const items = [
  {
    label: 'Paint Correction — BMW M3',
    beforeNote: 'Heavy foam pre-soak, swirl marks & oxidation across all painted surfaces',
    afterNote: 'Mirror-like finish restored — Competition Green paint depth fully revealed',
    beforeImg: '/images/bmw-m3-foam-before.jpeg',
    afterImg: '/images/bmw-m3-green-after.jpeg',
  },
  {
    label: 'Full Detail — Bugatti Chiron',
    beforeNote: 'Foam cannon pre-wash on $4M+ hypercar — careful, methodical approach required',
    afterNote: 'Immaculate finish on the final 1500hp Chiron — showroom condition restored',
    beforeImg: '/images/bugatti-foam-action.jpeg',
    afterImg: '/images/bugatti-chiron-after.jpeg',
  },
  {
    label: 'Exterior Wash — Lamborghini Huracán',
    beforeNote: 'Full snow foam treatment in the Alberta Badlands — extreme mobile detailing',
    afterNote: 'Deep gloss paint restored — carbon fibre and orange accents perfectly cleaned',
    beforeImg: '/images/lambo-foam-before.jpeg',
    afterImg: '/images/lambo-wash-closeup.jpeg',
  },
]

export default function V3BeforeAfter() {
  return (
    <section className="bg-xad-dark py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-20 max-w-3xl">
          <p className="section-label">Results</p>
          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tight mb-4">
            Before / After
            <br />
            <span className="text-xad-gold">Showcase</span>
          </h2>
          <p className="text-xad-muted text-lg leading-relaxed">
            See the difference expert care makes. Every detail restored to perfection.
          </p>
        </div>

        {/* Stacked Layout */}
        <div className="flex flex-col gap-6">
          {items.map((item, index) => (
            <div key={item.label} className="group">
              {/* Label Row */}
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xad-muted/30 text-xs font-bold">{String(index + 1).padStart(2, '0')}</span>
                <span className="text-white/60 text-sm font-semibold tracking-wider uppercase">{item.label}</span>
                <div className="flex-1 h-px bg-white/5" />
              </div>

              {/* Full-width Before / After */}
              <div className="grid md:grid-cols-2 gap-3">
                {/* Before */}
                <div className="relative aspect-video rounded-sm overflow-hidden">
                  <Image
                    src={item.beforeImg}
                    alt={`Before - ${item.label}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-xad-black/80 to-transparent" />
                  <div className="absolute bottom-0 w-full p-6">
                    <span className="text-xs font-bold text-xad-orange bg-xad-orange/20 border border-xad-orange/30 px-3 py-1 rounded-sm">
                      BEFORE
                    </span>
                    <p className="text-xad-muted/70 text-xs mt-2 leading-relaxed max-w-sm">{item.beforeNote}</p>
                  </div>
                </div>

                {/* After */}
                <div className="relative aspect-video rounded-sm overflow-hidden">
                  <Image
                    src={item.afterImg}
                    alt={`After - ${item.label}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-xad-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 w-full p-6">
                    <span className="text-xs font-bold text-xad-gold bg-xad-gold/20 border border-xad-gold/30 px-3 py-1 rounded-sm">
                      AFTER
                    </span>
                    <p className="text-xad-muted/70 text-xs mt-2 leading-relaxed max-w-sm">{item.afterNote}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/5 pt-10">
          <div>
            <p className="text-white text-2xl font-bold mb-1">Beautifully detailed. Inside and out.</p>
            <p className="text-xad-muted text-sm">See our complete portfolio of transformations.</p>
          </div>
          <a
            href="#gallery"
            className="shrink-0 bg-xad-gold text-xad-black font-bold px-8 py-4 rounded-sm hover:bg-xad-warm transition-colors duration-200"
          >
            See Full Gallery
          </a>
        </div>
      </div>
    </section>
  )
}
