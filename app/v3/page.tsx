import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
import Hero from '@/components/v3/Hero'
import Services from '@/components/v3/Services'
import BeforeAfter from '@/components/v3/BeforeAfter'
import WhyUs from '@/components/v3/WhyUs'
import Testimonials from '@/components/v3/Testimonials'
import ServiceAreas from '@/components/v3/ServiceAreas'
import Link from 'next/link'

export const metadata = {
  title: 'Version 3 — Modern & Bold | Xtreme Auto Detailing',
  description:
    'Homepage Version 3: Modern, bold typography. Centered hero, horizontal services, alternating why-us, carousel testimonials.',
}

export default function V3Page() {
  return (
    <>
      {/* Version indicator banner */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
        <div className="bg-xad-card border border-xad-orange/30 rounded-sm px-4 py-2.5 shadow-xl shadow-black/50 flex items-center gap-3">
          <span className="text-xad-warm text-xs font-bold tracking-widest">V3</span>
          <span className="text-white/50 text-xs">Modern & Bold</span>
        </div>
        <Link
          href="/"
          className="bg-xad-dark border border-white/10 rounded-sm px-3 py-1.5 text-xad-muted text-xs hover:text-white hover:border-white/30 transition-colors duration-200 flex items-center gap-1.5"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          All Versions
        </Link>
      </div>

      <Header />
      <main>
        <Hero />
        <Services />
        <BeforeAfter />
        <WhyUs />
        <Testimonials />
        <ServiceAreas />

        {/* Bold Typography CTA Section */}
        <section className="bg-xad-dark overflow-hidden py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            {/* Large typographic statement */}
            <div className="relative mb-12">
              <div className="absolute -top-16 left-0 right-0 text-center select-none pointer-events-none">
                <span className="text-[120px] md:text-[200px] font-black text-white/[0.02] leading-none tracking-tighter">
                  XAD
                </span>
              </div>
              <div className="relative text-center">
                <p className="text-xad-gold text-xs font-semibold tracking-[0.4em] uppercase mb-6">
                  Transform Your Vehicle
                </p>
                <h2 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight mb-6">
                  Your vehicle.
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-xad-gold via-xad-warm to-xad-gold">
                    Perfected.
                  </span>
                </h2>
                <p className="text-xad-muted text-lg max-w-xl mx-auto mb-12 leading-relaxed">
                  Book your detail today. Calgary's most trusted auto detailing professionals
                  are ready to restore, protect, and elevate your vehicle.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#book"
                    className="bg-xad-gold text-xad-black font-black text-lg px-12 py-5 rounded-sm hover:bg-xad-warm transition-colors duration-200 tracking-wide"
                  >
                    Book Your Detail
                  </a>
                  <a
                    href="tel:5877072736"
                    className="border border-white/20 text-white font-semibold text-base px-12 py-5 rounded-sm hover:border-xad-gold hover:text-xad-gold transition-colors duration-200"
                  >
                    (587) 707-2736
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
