import Image from 'next/image'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'

export interface ServicePageProps {
  eyebrow: string
  title: string
  titleAccent: string
  intro: string
  heroImage: string
  heroAlt: string
  benefits: { title: string; description: string }[]
  process: { step: string; title: string; description: string }[]
  galleryImages: { src: string; alt: string }[]
  faqs: { q: string; a: string }[]
  priceNote?: string
}

export default function ServicePageTemplate({
  eyebrow,
  title,
  titleAccent,
  intro,
  heroImage,
  heroAlt,
  benefits,
  process,
  galleryImages,
  faqs,
  priceNote = 'Contact us for a personalized quote — pricing varies by vehicle size and condition.',
}: ServicePageProps) {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center pt-16 overflow-hidden">
          <div className="absolute inset-0">
            <Image src={heroImage} alt={heroAlt} fill sizes="100vw" className="object-cover" priority quality={80} />
            <div className="absolute inset-0 bg-xad-black/75" />
            <div className="absolute inset-0 bg-gradient-to-t from-xad-black via-xad-black/40 to-xad-black/60" />
          </div>
          <div className="relative max-w-5xl mx-auto px-4 md:px-6 py-24">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-0.5 bg-xad-gold" />
              <span className="text-xad-blue text-xs tracking-widest uppercase">{eyebrow}</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
              {title}
              <br />
              <span className="text-xad-gold">{titleAccent}</span>
            </h1>
            <p className="text-xad-gray text-lg md:text-xl leading-relaxed max-w-2xl mb-10">{intro}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/#book" className="bg-xad-gold text-xad-black font-bold text-base px-10 py-4 rounded-sm hover:bg-xad-warm transition-colors duration-200">
                Book This Service
              </a>
              <a href="tel:5877072736" className="border border-white/30 text-white font-semibold text-base px-10 py-4 rounded-sm hover:border-xad-gold hover:text-xad-gold transition-colors duration-200">
                (587) 707-2736
              </a>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-xad-black py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="mb-16 max-w-3xl">
              <p className="section-label">Why It Matters</p>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
                The Difference Professional Care Makes
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-px bg-white/5">
              {benefits.map((b, i) => (
                <div key={b.title} className="bg-xad-card p-8 md:p-10">
                  <span className="text-xad-gold/40 text-xs font-bold tracking-widest block mb-4">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-white text-xl font-bold mb-3 leading-snug">{b.title}</h3>
                  <p className="text-xad-muted text-sm leading-relaxed">{b.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-xad-dark py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="mb-16 text-center">
              <p className="section-label">Our Process</p>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
                How We <span className="text-xad-gold">Do It</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {process.map((p, i) => (
                <div key={p.title} className="relative">
                  <div className="text-6xl font-black text-white/[0.06] mb-3">{p.step}</div>
                  <h3 className="text-white text-lg font-bold mb-2">{p.title}</h3>
                  <p className="text-xad-muted text-sm leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="bg-xad-black py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="mb-12">
              <p className="section-label">Recent Work</p>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
                See the <span className="text-xad-gold">Results</span>
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {galleryImages.map((img, i) => (
                <div key={i} className="relative aspect-square rounded-sm overflow-hidden group">
                  <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing note */}
        <section className="bg-xad-dark py-20">
          <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
            <p className="section-label">Pricing</p>
            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tight mb-4">
              Transparent, Honest Quotes
            </h2>
            <p className="text-xad-muted text-lg leading-relaxed mb-8 max-w-2xl mx-auto">{priceNote}</p>
            <a href="/#book" className="inline-block bg-xad-gold text-xad-black font-bold text-base px-10 py-4 rounded-sm hover:bg-xad-warm transition-colors duration-200">
              Get Your Quote
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-xad-black py-24">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <div className="mb-16 text-center">
              <p className="section-label">Questions</p>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
                Frequently <span className="text-xad-gold">Asked</span>
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              {faqs.map((faq) => (
                <details key={faq.q} className="group bg-xad-card border border-white/5 rounded-sm p-6 [&_summary]:cursor-pointer">
                  <summary className="flex items-center justify-between text-white font-semibold list-none">
                    {faq.q}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-xad-gold group-open:rotate-45 transition-transform duration-200 shrink-0 ml-4">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </summary>
                  <p className="text-xad-muted text-sm leading-relaxed mt-4">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-xad-dark py-24">
          <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight mb-6">
              Ready to <span className="text-xad-gold">Book?</span>
            </h2>
            <p className="text-xad-muted text-lg mb-10 max-w-xl mx-auto">
              Calgary's trusted detailing professionals are ready. Mobile service or studio — we make it easy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#book" className="bg-xad-gold text-xad-black font-black text-lg px-12 py-5 rounded-sm hover:bg-xad-warm transition-colors duration-200">
                Book Your Detail
              </a>
              <a href="tel:5877072736" className="border border-white/20 text-white font-semibold text-base px-12 py-5 rounded-sm hover:border-xad-gold hover:text-xad-gold transition-colors duration-200">
                (587) 707-2736
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
