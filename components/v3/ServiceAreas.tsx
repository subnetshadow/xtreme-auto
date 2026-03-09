const areas = [
  { name: 'Calgary', primary: true, direction: 'Hub' },
  { name: 'Airdrie', primary: false, direction: 'North' },
  { name: 'Cochrane', primary: false, direction: 'West' },
  { name: 'Chestermere', primary: false, direction: 'East' },
  { name: 'Okotoks', primary: false, direction: 'South' },
]

export default function V3ServiceAreas() {
  return (
    <section id="areas" className="bg-xad-black py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="section-label">Regions</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tight">
              Service
              <br />
              <span className="text-xad-gold">Areas</span>
            </h2>
            <p className="text-xad-muted text-base max-w-sm leading-relaxed md:text-right">
              Proudly serving Calgary, surrounding areas and nearby communities.
            </p>
          </div>
        </div>

        {/* Map-style Grid with Large Area Names */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-white/5">
          {areas.map((area) => (
            <div
              key={area.name}
              className={`group relative flex flex-col justify-between p-8 md:p-10 min-h-[180px] ${
                area.primary
                  ? 'bg-gradient-to-br from-xad-gold/10 to-xad-card col-span-2 md:col-span-1'
                  : 'bg-xad-card'
              } hover:bg-xad-medium/50 transition-colors duration-300`}
            >
              {/* Direction compass */}
              <div className="flex items-center justify-between mb-auto">
                <span
                  className={`text-xs font-bold tracking-widest uppercase ${
                    area.primary ? 'text-xad-gold' : 'text-xad-muted/40'
                  }`}
                >
                  {area.direction}
                </span>
                {area.primary && (
                  <span className="text-xs font-bold text-xad-gold bg-xad-gold/15 px-2 py-0.5 rounded-full">
                    Primary
                  </span>
                )}
              </div>

              {/* Area Name — Large */}
              <div className="mt-8">
                <h3
                  className={`font-black leading-none tracking-tight group-hover:text-xad-gold transition-colors duration-300 ${
                    area.primary
                      ? 'text-3xl md:text-4xl text-white'
                      : 'text-2xl md:text-3xl text-white/80'
                  }`}
                >
                  {area.name}
                </h3>
                <div
                  className={`mt-3 w-0 group-hover:w-full h-px transition-all duration-500 ${
                    area.primary ? 'bg-xad-gold' : 'bg-xad-gold/40'
                  }`}
                />
              </div>

              {/* Arrow */}
              <div className="absolute bottom-4 right-4 text-white/10 group-hover:text-xad-gold/40 transition-colors duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-white/5">
          <div className="flex items-center gap-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-xad-gold">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="text-xad-muted text-sm">
              Not in our listed areas?{' '}
              <a href="#contact" className="text-xad-gold hover:text-xad-warm transition-colors duration-150">
                Contact us — we may still serve your location.
              </a>
            </span>
          </div>
          <a
            href="#book"
            className="shrink-0 bg-xad-gold text-xad-black font-bold px-7 py-3.5 rounded-sm hover:bg-xad-warm transition-colors duration-200 text-sm"
          >
            Book Your Detail
          </a>
        </div>
      </div>
    </section>
  )
}
