const areas = [
  {
    name: 'Airdrie',
    note: 'North of Calgary — approx. 35 min',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    name: 'Cochrane',
    note: 'West of Calgary — approx. 40 min',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    name: 'Chestermere',
    note: 'East of Calgary — approx. 25 min',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    name: 'Okotoks',
    note: 'South of Calgary — approx. 30 min',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
]

export default function V2ServiceAreas() {
  return (
    <section id="areas" className="bg-xad-dark py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="section-label">Regions</p>
          <h2 className="section-title mb-4">Service Areas</h2>
          <p className="text-xad-muted text-base max-w-xl mx-auto">
            Proudly serving Calgary, surrounding areas and nearby communities.
          </p>
        </div>

        {/* Calgary — Featured */}
        <div className="bg-gradient-to-r from-xad-gold/10 to-xad-gold/5 border border-xad-gold/20 rounded-sm p-8 mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-sm bg-xad-gold/20 border border-xad-gold/30 flex items-center justify-center shrink-0">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d89235" strokeWidth="1.5">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <div>
              <h3 className="text-white text-xl font-bold mb-1">Calgary</h3>
              <p className="text-xad-muted text-sm">All quadrants & communities — Mobile & Studio available</p>
            </div>
          </div>
          <span className="text-xs font-bold text-xad-gold bg-xad-gold/10 border border-xad-gold/30 px-4 py-2 rounded-full whitespace-nowrap">
            Primary Service Area
          </span>
        </div>

        {/* Area Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {areas.map((area) => (
            <div
              key={area.name}
              className="group bg-xad-card border border-white/5 rounded-sm p-6 hover:border-xad-blue/30 transition-all duration-300 hover:bg-xad-card/80"
            >
              <div className="text-xad-blue mb-4 group-hover:scale-110 transition-transform duration-300">
                {area.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{area.name}</h3>
              <p className="text-xad-muted text-xs leading-relaxed">{area.note}</p>
              <div className="mt-4 flex items-center gap-1.5 text-xad-blue/70 text-xs font-medium group-hover:gap-2.5 transition-all duration-200">
                <span>Book for this area</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Full-width CTA Banner */}
        <div className="bg-xad-card border border-white/5 rounded-sm p-10 text-center">
          <h3 className="text-white text-2xl font-bold mb-3">Beautifully detailed. Inside and out.</h3>
          <p className="text-xad-muted text-base mb-8 max-w-lg mx-auto">
            Not seeing your area? Contact us — we may still be able to accommodate your location.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#portfolio"
              className="border border-xad-gold/30 text-xad-gold font-semibold px-8 py-3.5 rounded-sm hover:bg-xad-gold hover:text-xad-black transition-all duration-200 text-sm"
            >
              See Full Gallery
            </a>
            <a
              href="#contact"
              className="bg-xad-gold text-xad-black font-bold px-8 py-3.5 rounded-sm hover:bg-xad-warm transition-colors duration-200 text-sm"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
