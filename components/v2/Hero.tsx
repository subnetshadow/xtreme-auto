import TrustBadges from '@/components/shared/TrustBadges'

export default function V2Hero() {
  return (
    <section className="relative min-h-screen bg-xad-black flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <div>
            {/* Label */}
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="flex gap-1">
                <span className="w-1.5 h-6 bg-xad-gold rounded-full" />
                <span className="w-1.5 h-6 bg-xad-gold/40 rounded-full" />
              </div>
              <span className="text-xad-gold text-xs font-semibold tracking-widest uppercase">
                Calgary's Premier Auto Detailers
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-black text-white leading-tight mb-6 tracking-tight">
              Premium Auto Detailing in Calgary —{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-xad-gold to-xad-warm">
                Mobile & Studio
              </span>{' '}
              Services
            </h1>

            {/* Subtext 1 */}
            <p className="text-xad-gray text-base md:text-lg leading-relaxed mb-4">
              Whether you need mobile detailing at your home or a full studio treatment, Xtreme Auto Detailing
              delivers showroom-level results with precision and care.
            </p>

            {/* Subtext 2 */}
            <p className="text-xad-muted text-sm leading-relaxed mb-8 border-l-2 border-xad-gold/40 pl-4">
              Restore, protect, and elevate your vehicle with Calgary's trusted 5-star detailing professionals.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#book"
                className="bg-xad-gold text-xad-black font-bold text-base px-8 py-4 rounded-sm hover:bg-xad-warm transition-colors duration-200 text-center"
              >
                Book Your Detail
              </a>
              <a
                href="#quote"
                className="border border-white/20 text-white font-semibold text-base px-8 py-4 rounded-sm hover:border-xad-gold hover:text-xad-gold transition-colors duration-200 text-center"
              >
                Get an Instant Quote
              </a>
            </div>

            {/* Phone */}
            <a
              href="tel:5877072736"
              className="inline-flex items-center gap-2 text-xad-muted text-sm hover:text-xad-gold transition-colors duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.69h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.28-1.28a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              (587) 707-2736
            </a>
          </div>

          {/* Right — Car Image Placeholder */}
          <div className="relative">
            <div className="relative aspect-[4/3] bg-gradient-to-br from-xad-dark to-xad-black rounded-sm border border-white/5 overflow-hidden">
              {/* Decorative gradients */}
              <div className="absolute inset-0 bg-gradient-to-br from-xad-gold/5 via-transparent to-xad-blue/5" />
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-xad-black to-transparent" />

              {/* Center placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75" className="text-white/10 mx-auto mb-4">
                    <rect x="1" y="3" width="15" height="13" rx="1" />
                    <path d="M16 8h4l3 3v5h-7V8z" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                  <p className="text-white/20 text-sm font-medium">Hero Car Image</p>
                </div>
              </div>

              {/* Gold accent lines */}
              <div className="absolute top-6 left-6 w-12 h-px bg-xad-gold/30" />
              <div className="absolute top-6 left-6 w-px h-12 bg-xad-gold/30" />
              <div className="absolute bottom-6 right-6 w-12 h-px bg-xad-gold/30" />
              <div className="absolute bottom-6 right-6 w-px h-12 bg-xad-gold/30" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 bg-xad-card border border-xad-gold/30 rounded-sm p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="text-xad-gold">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white text-sm font-bold">5-Star Rated</p>
                  <p className="text-xad-muted text-xs">Calgary's Trusted Detailers</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges - below both columns */}
        <div className="mt-16 pt-10 border-t border-white/5">
          <TrustBadges variant="wrap" />
        </div>
      </div>
    </section>
  )
}
