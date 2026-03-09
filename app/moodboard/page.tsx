import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'

const colors = [
  { hex: '#31B5FD', name: 'Electric Blue', usage: 'Accent, highlights, links' },
  { hex: '#D89235', name: 'Gold', usage: 'Primary CTA, premium accents' },
  { hex: '#E85B03', name: 'Burnt Orange', usage: 'Energy, urgency, badges' },
  { hex: '#08080D', name: 'Obsidian', usage: 'Primary background' },
  { hex: '#191E24', name: 'Dark Navy', usage: 'Section backgrounds' },
  { hex: '#1D2130', name: 'Deep Card', usage: 'Card backgrounds' },
  { hex: '#ACB0B1', name: 'Cool Gray', usage: 'Secondary text, borders' },
  { hex: '#FFFFFF', name: 'White', usage: 'Primary text, contrast' },
  { hex: '#000000', name: 'Pure Black', usage: 'Overlays, depth' },
]

const fonts = [
  {
    name: 'League Spartan',
    role: 'Display / Headings',
    weights: ['700', '800', '900'],
    sample: 'XTREME AUTO DETAILING',
    style: 'font-black tracking-tight uppercase',
    description: 'Bold, aggressive, commanding. Used for all major headings and brand identity.',
  },
  {
    name: 'Inter',
    role: 'Body / UI',
    weights: ['400', '500', '600'],
    sample: 'Premium detailing services in Calgary',
    style: 'font-normal',
    description: 'Clean, modern, highly legible. Used for body copy, nav, buttons, and UI elements.',
  },
]

const brandTraits = [
  { label: 'Premium', icon: '✦' },
  { label: 'Aggressive', icon: '⚡' },
  { label: 'Trustworthy', icon: '🛡' },
  { label: 'Precise', icon: '◎' },
  { label: 'Dark & Moody', icon: '◼' },
  { label: 'Calgary Proud', icon: '★' },
]

const photoGrid = [
  'Black BMW — dramatic studio lighting',
  'Ceramic coating application — close-up',
  'Interior detail — leather seats',
  'Paint correction — swirl removal',
  'Mobile unit — on-site service',
  'Before/After split — hood panel',
  'Wheel detailing — chrome finish',
  'Steam cleaning — interior',
  'Night shoot — gloss finish',
]

export default function MoodboardPage() {
  return (
    <main className="bg-[#08080d] min-h-screen text-white">
      <Header />

      {/* Header */}
      <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
        <p className="text-[#d89235] text-sm font-semibold tracking-widest uppercase mb-4">Brand Identity</p>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight uppercase mb-6">
          Moodboard
        </h1>
        <p className="text-[#acb0b1] text-lg max-w-2xl">
          Visual direction, typography, and color system for Xtreme Auto Detailing. 
          Dark, premium, and built for Calgary's most discerning vehicle owners.
        </p>
      </section>

      {/* Color Palette */}
      <section className="py-16 px-6 max-w-7xl mx-auto border-t border-white/10">
        <p className="text-[#3cb0f5] text-sm font-semibold tracking-widest uppercase mb-2">Color System</p>
        <h2 className="text-3xl font-bold mb-10">Color Scheme</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {colors.map((color) => (
            <div key={color.hex} className="group">
              <div
                className="w-full aspect-square rounded-lg mb-3 border border-white/10 transition-transform group-hover:scale-105"
                style={{ backgroundColor: color.hex }}
              />
              <p className="text-white font-semibold text-sm">{color.name}</p>
              <p className="text-[#acb0b1] text-xs font-mono">{color.hex}</p>
              <p className="text-[#7e7e8f] text-xs mt-1">{color.usage}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Typography */}
      <section className="py-16 px-6 max-w-7xl mx-auto border-t border-white/10">
        <p className="text-[#3cb0f5] text-sm font-semibold tracking-widest uppercase mb-2">Typography</p>
        <h2 className="text-3xl font-bold mb-10">Font Family</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {fonts.map((font) => (
            <div key={font.name} className="bg-[#191e24] rounded-2xl p-8 border border-white/10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-[#d89235] text-xs tracking-widest uppercase font-semibold">{font.role}</p>
                  <h3 className="text-white text-2xl font-bold mt-1">{font.name}</h3>
                </div>
                <div className="flex gap-2">
                  {font.weights.map(w => (
                    <span key={w} className="text-xs text-[#acb0b1] bg-white/5 px-2 py-1 rounded">{w}</span>
                  ))}
                </div>
              </div>
              <p className="text-white text-3xl md:text-4xl font-black uppercase tracking-tight leading-tight mb-4">
                {font.sample}
              </p>
              <p className="text-[#7e7e8f] text-sm leading-relaxed">{font.description}</p>
            </div>
          ))}
        </div>

        {/* Type Scale */}
        <div className="mt-8 bg-[#191e24] rounded-2xl p-8 border border-white/10">
          <p className="text-[#acb0b1] text-xs tracking-widest uppercase mb-6">Type Scale</p>
          <div className="space-y-4">
            {[
              { label: 'H1 — Display', size: 'text-5xl', weight: 'font-black', sample: 'Premium Auto Detailing' },
              { label: 'H2 — Section', size: 'text-3xl', weight: 'font-bold', sample: 'Why Choose Xtreme' },
              { label: 'H3 — Card', size: 'text-xl', weight: 'font-semibold', sample: 'Ceramic Coatings' },
              { label: 'Body — Regular', size: 'text-base', weight: 'font-normal', sample: 'Showroom-level results with precision and care.' },
              { label: 'Small — Label', size: 'text-sm', weight: 'font-medium', sample: 'Book Your Detail' },
            ].map((t) => (
              <div key={t.label} className="flex items-baseline gap-6 py-3 border-b border-white/5 last:border-0">
                <span className="text-[#7e7e8f] text-xs w-36 shrink-0">{t.label}</span>
                <span className={`text-white ${t.size} ${t.weight}`}>{t.sample}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Traits */}
      <section className="py-16 px-6 max-w-7xl mx-auto border-t border-white/10">
        <p className="text-[#3cb0f5] text-sm font-semibold tracking-widest uppercase mb-2">Brand Voice</p>
        <h2 className="text-3xl font-bold mb-10">Brand Personality</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {brandTraits.map((trait) => (
            <div key={trait.label} className="bg-[#1d2130] rounded-xl p-6 text-center border border-white/10 hover:border-[#d89235]/50 transition-colors">
              <div className="text-2xl mb-3">{trait.icon}</div>
              <p className="text-white font-semibold text-sm">{trait.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Photo Direction */}
      <section className="py-16 px-6 max-w-7xl mx-auto border-t border-white/10">
        <p className="text-[#3cb0f5] text-sm font-semibold tracking-widest uppercase mb-2">Visual Direction</p>
        <h2 className="text-3xl font-bold mb-4">Photography Style</h2>
        <p className="text-[#acb0b1] mb-10 max-w-2xl">Dark studio lighting, high contrast, dramatic angles. Focus on shine, reflection, and precision detail work.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
          {photoGrid.map((caption, i) => (
            <div key={i} className="group relative aspect-[4/3] bg-[#1d2130] rounded-xl overflow-hidden border border-white/10 hover:border-[#d89235]/40 transition-colors">
              <div className="absolute inset-0 flex items-end p-4">
                <div>
                  <div className="w-8 h-[2px] bg-[#d89235] mb-2" />
                  <p className="text-[#7e7e8f] text-xs leading-snug">{caption}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 text-[#25272d] text-5xl font-black">
                {String(i + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* UI Components Preview */}
      <section className="py-16 px-6 max-w-7xl mx-auto border-t border-white/10">
        <p className="text-[#3cb0f5] text-sm font-semibold tracking-widest uppercase mb-2">UI System</p>
        <h2 className="text-3xl font-bold mb-10">Buttons & Elements</h2>
        <div className="bg-[#191e24] rounded-2xl p-8 border border-white/10">
          <div className="flex flex-wrap gap-4 mb-8">
            <button className="px-6 py-3 bg-[#d89235] text-[#08080d] font-bold rounded hover:bg-[#e8a245] transition-colors">
              Book Your Detail
            </button>
            <button className="px-6 py-3 border border-white text-white font-bold rounded hover:bg-white hover:text-[#08080d] transition-colors">
              Get an Instant Quote
            </button>
            <button className="px-6 py-3 bg-[#3cb0f5] text-[#08080d] font-bold rounded hover:bg-[#5bc0ff] transition-colors">
              See Full Gallery
            </button>
            <button className="px-6 py-3 border border-[#d89235] text-[#d89235] font-bold rounded hover:bg-[#d89235] hover:text-[#08080d] transition-colors">
              Learn More
            </button>
          </div>
          <div className="flex flex-wrap gap-3">
            {['5-Star Rated', 'Mobile & Studio', 'Ceramic Coatings', 'Paint Correction', 'Fully Insured'].map(badge => (
              <span key={badge} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-[#acb0b1]">
                ✓ {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
