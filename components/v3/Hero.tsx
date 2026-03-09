import TrustBadges from '@/components/shared/TrustBadges'

export default function V3Hero() {
  return (
    <section className="relative min-h-screen bg-xad-black flex items-center justify-center pt-16 overflow-hidden">
      {/* Background texture and gradients */}
      <div className="absolute inset-0">
        {/* Dark overlay base */}
        <div className="absolute inset-0 bg-xad-black" />

        {/* Radial glow center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-xad-gold/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-xad-blue/5 blur-3xl" />

        {/* Grid lines */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

        {/* Car image placeholder area */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="w-[700px] max-w-full aspect-video bg-xad-medium/20 border border-white/5 rounded-sm flex items-center justify-center">
            <span className="text-white/20 text-sm font-medium">[ Background Car Image ]</span>
          </div>
        </div>

        {/* Bottom vignette */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-xad-black to-transparent" />
        {/* Top vignette */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-xad-black to-transparent" />
        {/* Side vignettes */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-xad-black to-transparent" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-xad-black to-transparent" />
      </div>

      {/* Content — Centered */}
      <div className="relative max-w-5xl mx-auto px-4 md:px-6 py-32 text-center">
        {/* Label */}
        <div className="inline-flex items-center gap-3 mb-8">
          <span className="w-8 h-0.5 bg-xad-gold" />
          <span className="text-xad-blue text-xs tracking-widest uppercase">
            Calgary Auto Detailing
          </span>
          <span className="w-8 h-0.5 bg-xad-gold" />
        </div>

        {/* H1 — Large Centered */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.0] tracking-tight mb-8">
          Premium Auto
          <br />
          <span className="text-xad-blue">
            Detailing
          </span>
          <br />
          in Calgary
        </h1>

        {/* Subtext */}
        <p className="text-xad-gray text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-3">
          Whether you need mobile detailing at your home or a full studio treatment, Xtreme Auto Detailing
          delivers showroom-level results with precision and care.
        </p>
        <p className="text-xad-muted text-base leading-relaxed max-w-xl mx-auto mb-12">
          Restore, protect, and elevate your vehicle with Calgary's trusted 5-star detailing professionals.
        </p>

        {/* CTAs — Centered */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#book"
            className="bg-xad-gold text-xad-black font-bold text-base px-10 py-4 rounded-sm hover:bg-xad-warm transition-colors duration-200"
          >
            Book Your Detail
          </a>
          <a
            href="#quote"
            className="border border-white/30 text-white font-semibold text-base px-10 py-4 rounded-sm hover:border-xad-gold hover:text-xad-gold transition-colors duration-200"
          >
            Get an Instant Quote
          </a>
        </div>

        {/* Phone */}
        <a
          href="tel:5877072736"
          className="inline-flex items-center gap-2 text-xad-muted text-sm mb-14 hover:text-xad-gold transition-colors duration-200"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.69h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.28-1.28a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          (587) 707-2736
        </a>

        {/* Trust Badges */}
        <TrustBadges variant="wrap" />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xad-muted/40 text-xs tracking-widest uppercase">Scroll</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-xad-muted/40">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  )
}
