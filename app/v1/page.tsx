import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
import Hero from '@/components/v1/Hero'
import Services from '@/components/v1/Services'
import BeforeAfter from '@/components/v1/BeforeAfter'
import WhyUs from '@/components/v1/WhyUs'
import Testimonials from '@/components/v1/Testimonials'
import ServiceAreas from '@/components/v1/ServiceAreas'
import Link from 'next/link'

export const metadata = {
  title: 'Version 1 — Bold & Direct | Xtreme Auto Detailing',
  description:
    'Homepage Version 1: Bold, direct, minimal. Full-width hero, 3-column services, side-by-side before/after.',
}

export default function V1Page() {
  return (
    <>
      {/* Version indicator banner */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
        <div className="bg-xad-card border border-xad-gold/30 rounded-sm px-4 py-2.5 shadow-xl shadow-black/50 flex items-center gap-3">
          <span className="text-xad-gold text-xs font-bold tracking-widest">V1</span>
          <span className="text-white/50 text-xs">Bold & Direct</span>
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

        {/* Book CTA Section */}
        <section className="bg-xad-dark py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
            <p className="text-xad-gold text-xs font-semibold tracking-widest uppercase mb-4">Ready to Book?</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Your vehicle deserves the best.
            </h2>
            <p className="text-xad-muted text-base mb-10 max-w-xl mx-auto">
              Book your detail today or get an instant quote. Calgary's trusted 5-star detailing
              professionals are ready to transform your vehicle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#book"
                className="bg-xad-gold text-xad-black font-bold text-base px-10 py-4 rounded-sm hover:bg-xad-warm transition-colors duration-200"
              >
                Book Your Detail
              </a>
              <a
                href="tel:5877072736"
                className="border border-white/20 text-white font-semibold text-base px-10 py-4 rounded-sm hover:border-xad-gold hover:text-xad-gold transition-colors duration-200"
              >
                Call (587) 707-2736
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
