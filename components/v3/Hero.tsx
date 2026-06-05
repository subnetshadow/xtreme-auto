import TrustBadges from '@/components/shared/TrustBadges'
import Image from 'next/image'

export default function V3Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Full background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/bugatti-chiron-after.jpeg"
          alt="Bugatti Chiron detailed by Xtreme Auto Detailing Calgary"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          quality={80}
        />
        {/* Dark overlays */}
        <div className="absolute inset-0 bg-xad-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-xad-black via-xad-black/40 to-xad-black/60" />
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-xad-black to-transparent" />
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-4 md:px-6 py-32 text-center">
        {/* Label */}
        <div className="inline-flex items-center gap-3 mb-8">
          <span className="w-8 h-0.5 bg-xad-gold" />
          <span className="text-xad-blue text-xs tracking-widest uppercase">
            Calgary's Premier Auto Detailing
          </span>
          <span className="w-8 h-0.5 bg-xad-gold" />
        </div>

        {/* H1 */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.0] tracking-tight mb-8">
          Premium Auto
          <br />
          <span className="text-xad-blue">Detailing</span>
          <br />
          in Calgary
        </h1>

        {/* Subtext */}
        <p className="text-xad-gray text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-3">
          From daily drivers to Bugatti Chirons — every vehicle receives the same
          obsessive attention to detail. Mobile service or studio, we come to you.
        </p>
        <p className="text-xad-muted text-base leading-relaxed max-w-xl mx-auto mb-12">
          Paint correction, ceramic coating, interior detailing & headlight restoration.
          Trusted by Calgary's most discerning car owners.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#book"
            className="bg-xad-gold text-xad-black font-bold text-base px-10 py-4 rounded-sm hover:bg-xad-warm transition-colors duration-200"
          >
            Book Your Detail
          </a>
          <a
            href="tel:5877072736"
            className="border border-white/30 text-white font-semibold text-base px-10 py-4 rounded-sm hover:border-xad-gold hover:text-xad-gold transition-colors duration-200"
          >
            (587) 707-2736
          </a>
        </div>

        {/* Trust Badges */}
        <TrustBadges variant="wrap" />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 inset-x-0 flex justify-center pointer-events-none">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xad-muted/40 text-xs tracking-widest uppercase">Scroll</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-xad-muted/40">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}
