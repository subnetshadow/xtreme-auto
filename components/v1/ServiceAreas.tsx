const areas = [
  { name: 'Calgary', note: 'All quadrants & communities' },
  { name: 'Airdrie', note: 'North of Calgary' },
  { name: 'Cochrane', note: 'West of Calgary' },
  { name: 'Chestermere', note: 'East of Calgary' },
  { name: 'Okotoks', note: 'South of Calgary' },
]

export default function V1ServiceAreas() {
  return (
    <section id="areas" className="bg-xad-black py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <div>
            <p className="section-label">Regions</p>
            <h2 className="section-title mb-4">Service Areas</h2>
            <p className="text-xad-muted text-base leading-relaxed mb-10">
              Proudly serving Calgary, surrounding areas and nearby communities. Whether you need us to
              come to you or prefer to visit our studio, we've got you covered.
            </p>

            {/* Text list with dividers */}
            <div className="divide-y divide-white/5">
              {areas.map((area, index) => (
                <div key={area.name} className="flex items-center justify-between py-5">
                  <div className="flex items-center gap-4">
                    <span className="text-xad-gold/40 text-xs font-bold w-6">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <p className="text-white font-semibold text-base">{area.name}</p>
                      <p className="text-xad-muted text-xs mt-0.5">{area.note}</p>
                    </div>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-xad-gold/40">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-xad-gold text-xad-black font-bold px-6 py-3 rounded-sm hover:bg-xad-warm transition-colors duration-200"
              >
                Check Your Area
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right — Map Placeholder */}
          <div className="relative">
            <div className="aspect-square bg-xad-card border border-white/5 rounded-sm flex items-center justify-center relative overflow-hidden">
              {/* Abstract map lines */}
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none">
                  <path d="M50 200 Q150 100 200 200 Q250 300 350 200" stroke="#d89235" strokeWidth="1" />
                  <path d="M100 50 Q200 150 300 100" stroke="#3cb0f5" strokeWidth="0.5" />
                  <path d="M200 50 L200 350" stroke="white" strokeWidth="0.3" strokeDasharray="4,4" />
                  <path d="M50 200 L350 200" stroke="white" strokeWidth="0.3" strokeDasharray="4,4" />
                  <circle cx="200" cy="200" r="6" fill="#d89235" />
                  <circle cx="200" cy="120" r="4" fill="#3cb0f5" opacity="0.5" />
                  <circle cx="140" cy="220" r="4" fill="#3cb0f5" opacity="0.5" />
                  <circle cx="260" cy="220" r="4" fill="#3cb0f5" opacity="0.5" />
                  <circle cx="200" cy="280" r="4" fill="#3cb0f5" opacity="0.5" />
                  <circle cx="130" cy="155" r="4" fill="#3cb0f5" opacity="0.5" />
                </svg>
              </div>
              <div className="relative text-center px-8">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-xad-gold mx-auto mb-4 opacity-40">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <p className="text-xad-muted text-sm">Calgary & Surrounding Areas</p>
                <p className="text-xad-muted/50 text-xs mt-1">[ Map Placeholder ]</p>
              </div>
            </div>

            {/* Floating area labels */}
            {[
              { area: 'Airdrie', pos: 'top-4 right-8' },
              { area: 'Cochrane', pos: 'left-4 top-1/3' },
              { area: 'Calgary', pos: 'bottom-1/3 right-12' },
              { area: 'Chestermere', pos: 'right-2 bottom-1/3' },
              { area: 'Okotoks', pos: 'bottom-8 left-12' },
            ].map((item) => (
              <div
                key={item.area}
                className={`absolute ${item.pos} bg-xad-black/80 border border-xad-gold/20 rounded-sm px-3 py-1.5`}
              >
                <span className="text-white/70 text-xs font-medium">{item.area}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
