import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
import Hero from '@/components/v2/Hero'
import Services from '@/components/v2/Services'
import BeforeAfter from '@/components/v2/BeforeAfter'
import WhyUs from '@/components/v2/WhyUs'
import Testimonials from '@/components/v2/Testimonials'
import ServiceAreas from '@/components/v2/ServiceAreas'
import Link from 'next/link'

export const metadata = {
  title: 'Version 2 — Premium Editorial | Xtreme Auto Detailing',
  description:
    'Homepage Version 2: Premium editorial feel. Split hero, 2-column services, slider before/after, featured testimonials.',
}

export default function V2Page() {
  return (
    <>
      {/* Version indicator banner */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
        <div className="bg-xad-card border border-xad-blue/30 rounded-sm px-4 py-2.5 shadow-xl shadow-black/50 flex items-center gap-3">
          <span className="text-xad-blue text-xs font-bold tracking-widest">V2</span>
          <span className="text-white/50 text-xs">Premium Editorial</span>
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

        {/* Full-Width Dark CTA Banner */}
        <section className="bg-xad-dark border-t border-white/5 py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xad-gold text-xs font-semibold tracking-widest uppercase mb-4">
                  Transform Your Vehicle
                </p>
                <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
                  Beautifully detailed.
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-xad-gold to-xad-warm">
                    Inside and out.
                  </span>
                </h2>
                <p className="text-xad-muted text-base leading-relaxed">
                  Experience the Xtreme Auto Detailing difference. Premium products, expert technique,
                  and a satisfaction guarantee on every single job.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4">
                <a
                  href="#book"
                  className="bg-xad-gold text-xad-black font-bold text-base px-8 py-4 rounded-sm hover:bg-xad-warm transition-colors duration-200 text-center flex-1"
                >
                  Book Your Detail
                </a>
                <a
                  href="#portfolio"
                  className="border border-white/20 text-white font-semibold text-base px-8 py-4 rounded-sm hover:border-xad-gold hover:text-xad-gold transition-colors duration-200 text-center flex-1"
                >
                  See Full Gallery
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
