import TrustBadges from '@/components/shared/TrustBadges'

export default function V1Hero() {
  return (
    <section className="relative min-h-screen bg-xad-black flex items-center pt-16">
      {/* Background overlay rectangle (car image placeholder) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-xad-black via-xad-black/95 to-xad-black/60" />
        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-xad-dark opacity-40" />
        {/* Decorative lines */}
        <div className="absolute top-1/4 right-8 w-px h-64 bg-gradient-to-b from-transparent via-xad-gold/20 to-transparent" />
        <div className="absolute bottom-1/4 right-24 w-px h-48 bg-gradient-to-b from-transparent via-xad-blue/20 to-transparent" />
        {/* Car image placeholder */}
        <div className="absolute right-0 top-0 bottom-0 w-5/12 flex items-center justify-center pr-8">
          <div className="relative w-full" style={{ minHeight: '300px' }}>
            <div className="absolute inset-0 bg-xad-dark rounded-sm" />
            <div className="absolute inset-0 bg-gradient-to-br from-xad-dark via-xad-medium/40 to-xad-black rounded-sm" />
            <div className="absolute inset-0 bg-gradient-to-t from-xad-black/80 via-transparent to-transparent rounded-sm" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white/30 text-sm font-medium tracking-widest">[ Car Image ]</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-24">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-8 h-0.5 bg-xad-gold" />
            <span className="text-xad-blue text-xs tracking-widest uppercase">
              Calgary's #1 Auto Detailers
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 tracking-tight">
            Premium Auto Detailing in Calgary —{' '}
            <span className="text-xad-blue">Mobile & Studio</span> Services
          </h1>

          {/* Subtext */}
          <p className="text-xad-gray text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
            Whether you need mobile detailing at your home or a full studio treatment, Xtreme Auto Detailing
            delivers showroom-level results with precision and care.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#book"
              className="bg-xad-gold text-xad-black font-bold text-base px-8 py-4 rounded-sm hover:bg-xad-warm transition-colors duration-200 text-center"
            >
              Book Your Detail
            </a>
            <a
              href="#quote"
              className="border border-xad-gray/50 text-white font-semibold text-base px-8 py-4 rounded-sm hover:border-xad-gold hover:text-xad-gold transition-colors duration-200 text-center"
            >
              Get an Instant Quote
            </a>
          </div>

          {/* Trust Badges */}
          <TrustBadges />
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-xad-black to-transparent" />
    </section>
  )
}
