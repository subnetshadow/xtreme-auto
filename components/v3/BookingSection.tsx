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
            Book online, call, or text. We respond within 1 hour during business hours.
          </p>
        </div>

        {/* Booking options */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Online booking card */}
          <div className="bg-xad-card border border-xad-gold/20 rounded-sm p-8 flex flex-col">
            <div className="text-xad-gold mb-4">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
            <h3 className="text-white text-xl font-bold mb-2">Book Online</h3>
            <p className="text-xad-muted text-sm leading-relaxed mb-6 flex-1">
              Schedule your appointment 24/7. Pick your service, date, and time — we'll confirm within 1 hour.
            </p>
            <a
              href="https://calendly.com/xtremeautodetailing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-xad-gold text-xad-black font-bold text-sm px-6 py-3.5 rounded-sm hover:bg-xad-warm transition-colors duration-200 text-center"
            >
              Open Booking Calendar
            </a>
          </div>

          {/* Contact card */}
          <div className="bg-xad-card border border-white/5 rounded-sm p-8 flex flex-col gap-5">
            <div className="text-xad-gold">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.69h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.28-1.28a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <h3 className="text-white text-xl font-bold">Call or Text</h3>
            <div className="flex flex-col gap-3">
              <a
                href="tel:5877072736"
                className="flex items-center gap-3 text-white hover:text-xad-gold transition-colors duration-150"
              >
                <span className="text-xad-muted text-xs w-12">Phone</span>
                <span className="font-bold text-lg">(587) 707-2736</span>
              </a>
              <a
                href="sms:5877072736"
                className="flex items-center gap-3 text-white hover:text-xad-gold transition-colors duration-150"
              >
                <span className="text-xad-muted text-xs w-12">Text</span>
                <span className="font-semibold">(587) 707-2736</span>
              </a>
              <a
                href="mailto:xtremedetailingpro@gmail.com"
                className="flex items-center gap-3 text-white hover:text-xad-gold transition-colors duration-150"
              >
                <span className="text-xad-muted text-xs w-12">Email</span>
                <span className="font-semibold text-sm">xtremedetailingpro@gmail.com</span>
              </a>
            </div>

            <div className="border-t border-white/5 pt-4">
              <p className="text-xad-muted text-xs">
                <span className="text-xad-gold">●</span> Mon–Sat: 8am–7pm &nbsp;|&nbsp; Sun: 9am–5pm
              </p>
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
