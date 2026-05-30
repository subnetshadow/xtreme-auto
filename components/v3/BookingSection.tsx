export default function BookingSection() {
  return (
    <section id="book" className="bg-xad-dark py-24">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="section-label">Book Now</p>
          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tight mb-4">
            Schedule Your
            <br />
            <span className="text-xad-gold">Detail</span>
          </h2>
          <p className="text-xad-muted text-lg max-w-xl mx-auto leading-relaxed">
            Call or text to book your appointment. We respond fast and make scheduling easy.
          </p>
        </div>

        {/* Primary phone CTA */}
        <div className="bg-xad-card border border-xad-gold/20 rounded-sm p-10 md:p-14 text-center mb-6">
          <div className="text-xad-gold mb-5 flex justify-center">
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.69h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.28-1.28a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </div>
          <p className="text-xad-muted text-sm uppercase tracking-widest mb-3">Call or Text to Book</p>
          <a
            href="tel:5877072736"
            className="block text-4xl md:text-5xl font-black text-white hover:text-xad-gold transition-colors duration-200 mb-6"
          >
            (587) 707-2736
          </a>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:5877072736"
              className="bg-xad-gold text-xad-black font-bold text-base px-10 py-4 rounded-sm hover:bg-xad-warm transition-colors duration-200"
            >
              Call Now
            </a>
            <a
              href="sms:5877072736"
              className="border border-white/20 text-white font-semibold text-base px-10 py-4 rounded-sm hover:border-xad-gold hover:text-xad-gold transition-colors duration-200"
            >
              Send a Text
            </a>
          </div>
        </div>

        {/* Secondary info row */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Hours */}
          <div className="bg-xad-card border border-white/5 rounded-sm p-8">
            <div className="text-xad-gold mb-4">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <h3 className="text-white text-lg font-bold mb-3">Business Hours</h3>
            <div className="flex flex-col gap-1.5 text-sm">
              <div className="flex justify-between text-xad-muted">
                <span>Monday – Saturday</span>
                <span className="text-white">8:00 AM – 7:00 PM</span>
              </div>
              <div className="flex justify-between text-xad-muted">
                <span>Sunday</span>
                <span className="text-white">9:00 AM – 5:00 PM</span>
              </div>
            </div>
          </div>

          {/* Email + reach */}
          <div className="bg-xad-card border border-white/5 rounded-sm p-8">
            <div className="text-xad-gold mb-4">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <h3 className="text-white text-lg font-bold mb-3">Other Ways to Reach Us</h3>
            <div className="flex flex-col gap-2 text-sm">
              <a href="mailto:xtremedetailingpro@gmail.com" className="text-xad-muted hover:text-xad-gold transition-colors duration-150">
                xtremedetailingpro@gmail.com
              </a>
              <p className="text-xad-muted">Serving Calgary, Airdrie, Cochrane, Chestermere & Okotoks</p>
            </div>
          </div>
        </div>

        {/* Social links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 border-t border-white/5">
          <span className="text-xad-muted text-sm">Follow our work:</span>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/xtreme.auto.detailing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xad-muted hover:text-white transition-colors duration-150 text-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              @xtreme.auto.detailing
            </a>
            <a
              href="https://www.tiktok.com/@xtreme.auto.detailing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xad-muted hover:text-white transition-colors duration-150 text-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.5a8.22 8.22 0 004.83 1.56V6.62a4.85 4.85 0 01-1.06.07z"/>
              </svg>
              @xtreme.auto.detailing
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
