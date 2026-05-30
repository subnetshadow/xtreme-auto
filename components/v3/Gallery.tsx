import Image from 'next/image'

const galleryItems = [
  { src: '/images/bugatti-chiron-after.jpeg', label: 'Bugatti Chiron', tag: 'Full Detail' },
  { src: '/images/lambo-revuelto-purple.jpeg', label: 'Lamborghini Revuelto', tag: 'Exterior Detail' },
  { src: '/images/lambo-revuelto-pink-doors.jpeg', label: 'Lamborghini Revuelto', tag: 'Mobile Detail' },
  { src: '/images/mclaren-720s-doors.jpeg', label: 'McLaren 720S', tag: 'Mobile Detail' },
  { src: '/images/bugatti-chiron-front.jpeg', label: 'Bugatti Chiron', tag: 'Full Detail' },
  { src: '/images/cadillac-ct5-studio.jpeg', label: 'Cadillac CT5', tag: 'Studio Detail' },
  { src: '/images/nissan-gtr-teal.jpeg', label: 'Nissan GT-R', tag: 'Paint Correction' },
  { src: '/images/bmw-alpina-blue.jpeg', label: 'BMW Alpina B5', tag: 'Ceramic Coating' },
  { src: '/images/porsche-cayman-gt4-blue.jpeg', label: 'Porsche 718 GT4', tag: 'Full Detail' },
  { src: '/images/bmw-m3-green-after.jpeg', label: 'BMW M3 Competition', tag: 'Paint Correction' },
  { src: '/images/lambo-huracan-matte-studio.jpeg', label: 'Lamborghini Huracán', tag: 'Matte Detail' },
  { src: '/images/ford-raptor-mansion.jpeg', label: 'Ford Raptor R', tag: 'Mobile Detail' },
  { src: '/images/lexus-ls500-front.jpeg', label: 'Lexus LS500', tag: 'Mobile Detail' },
  { src: '/images/corvette-z06-matte.jpeg', label: 'Corvette Z06', tag: 'Exterior Detail' },
  { src: '/images/mercedes-gle-black.jpeg', label: 'Mercedes GLE', tag: 'Mobile Detail' },
  { src: '/images/bugatti-interior-steering.jpeg', label: 'Bugatti Chiron Interior', tag: 'Interior Detail' },
  { src: '/images/mclaren-interior-alcantara.jpeg', label: 'McLaren Interior', tag: 'Interior Detail' },
  { src: '/images/vw-atlas-studio.jpeg', label: 'VW Atlas', tag: 'Studio Detail' },
]

export default function V3Gallery() {
  return (
    <section id="gallery" className="bg-xad-black py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-12">
          <p className="section-label">Portfolio</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tight">
              Our Work
              <br />
              <span className="text-xad-gold">Speaks for Itself</span>
            </h2>
            <p className="text-xad-muted text-base max-w-sm leading-relaxed md:text-right">
              From Bugatti Chirons to daily drivers — every vehicle treated with the same care.
            </p>
          </div>
        </div>

        {/* Masonry-style grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative break-inside-avoid overflow-hidden rounded-sm bg-xad-card"
            >
              <div className={`relative ${index % 5 === 0 ? 'aspect-[3/4]' : index % 3 === 0 ? 'aspect-video' : 'aspect-square'} overflow-hidden`}>
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-xad-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className="text-xs font-bold text-xad-gold bg-xad-gold/20 border border-xad-gold/30 px-2 py-0.5 rounded-sm w-fit mb-1">
                    {item.tag}
                  </span>
                  <p className="text-white text-sm font-bold">{item.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-xad-muted text-sm mb-4">Follow us for daily updates</p>
          <a
            href="https://www.instagram.com/xtreme.auto.detailing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold px-8 py-3.5 rounded-sm hover:border-xad-gold hover:text-xad-gold transition-colors duration-200"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
            @xtreme.auto.detailing
          </a>
        </div>
      </div>
    </section>
  )
}
