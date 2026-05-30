import Image from 'next/image'

export default function BugattiSection() {
  return (
    <section className="bg-xad-dark py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="section-label">Feature Work</p>
          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tight mb-4">
            When They Trust Us With
            <br />
            <span className="text-xad-gold">a Bugatti Chiron</span>
          </h2>
          <p className="text-xad-muted text-lg max-w-2xl mx-auto leading-relaxed">
            The final 1500hp Chiron. One of 500 ever made. When Calgary's most exclusive hypercar
            needed detailing, they called Xtreme Auto Detailing.
          </p>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
          {/* Large feature image */}
          <div className="col-span-2 row-span-2 relative aspect-[4/3] rounded-sm overflow-hidden">
            <Image
              src="/images/bugatti-chiron-after.jpeg"
              alt="Bugatti Chiron Pur Sport detailed by Xtreme Auto Detailing Calgary"
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-xad-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="text-xs font-bold text-xad-gold bg-xad-black/80 border border-xad-gold/30 px-3 py-1 rounded-sm">
                Bugatti Chiron Pur Sport
              </span>
            </div>
          </div>

          {/* Side images */}
          <div className="relative aspect-square rounded-sm overflow-hidden">
            <Image src="/images/bugatti-drying-action.jpeg" alt="Detailing Bugatti Chiron" fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover" />
          </div>
          <div className="relative aspect-square rounded-sm overflow-hidden">
            <Image src="/images/bugatti-interior-steering.jpeg" alt="Bugatti Chiron interior" fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover" />
          </div>
          <div className="relative aspect-square rounded-sm overflow-hidden">
            <Image src="/images/bugatti-w16-engine.jpeg" alt="Bugatti W16 engine detail" fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover" />
          </div>
          <div className="relative aspect-square rounded-sm overflow-hidden">
            <Image src="/images/bugatti-grille.jpeg" alt="Bugatti Chiron grille" fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover" />
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 mb-12">
          {[
            { value: '$4M+', label: 'Vehicle Value' },
            { value: '1,500hp', label: 'Engine Power' },
            { value: '500', label: 'Made Worldwide' },
            { value: '100%', label: 'Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="bg-xad-card p-8 text-center">
              <p className="text-3xl md:text-4xl font-black text-xad-gold mb-1">{stat.value}</p>
              <p className="text-xad-muted text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="bg-xad-card border border-xad-gold/20 rounded-sm p-8 md:p-12 text-center max-w-3xl mx-auto">
          <p className="text-white text-xl md:text-2xl font-light leading-relaxed mb-6">
            "From daily drivers to the world's most exclusive hypercars — every vehicle gets the same obsessive attention to detail."
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-0.5 bg-xad-gold/40" />
            <span className="text-xad-gold text-sm font-semibold tracking-widest uppercase">Xtreme Auto Detailing</span>
            <div className="w-8 h-0.5 bg-xad-gold/40" />
          </div>
        </div>
      </div>
    </section>
  )
}
