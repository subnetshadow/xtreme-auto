import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
import Hero from '@/components/v3/Hero'
import Services from '@/components/v3/Services'
import BugattiSection from '@/components/v3/BugattiSection'
import BeforeAfter from '@/components/v3/BeforeAfter'
import Gallery from '@/components/v3/Gallery'
import WhyUs from '@/components/v3/WhyUs'
import Testimonials from '@/components/v3/Testimonials'
import ServiceAreas from '@/components/v3/ServiceAreas'
import BookingSection from '@/components/v3/BookingSection'

export const metadata = {
  title: 'Xtreme Auto Detailing YYC | Calgary Mobile Detailing & Ceramic Coating',
  description:
    'Calgary\'s premier auto detailing studio. Mobile detailing, paint correction, ceramic coatings & headlight restoration. Trusted by owners of Bugatti, Lamborghini, McLaren & more. Serving Calgary, Airdrie, Cochrane, Chestermere & Okotoks.',
}

export default function HomePage() {
  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'AutomotiveBusiness',
    '@id': 'https://www.xtremedetailingyyc.ca/#business',
    name: 'Xtreme Auto Detailing',
    description:
      "Calgary's premier mobile and studio auto detailing — ceramic coating, paint protection film, paint correction, interior & exterior detailing, window tinting, and headlight restoration.",
    url: 'https://www.xtremedetailingyyc.ca',
    telephone: '+1-587-707-2736',
    email: 'xtremedetailingpro@gmail.com',
    image: 'https://www.xtremedetailingyyc.ca/opengraph-image.jpg',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Calgary',
      addressRegion: 'AB',
      addressCountry: 'CA',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 51.0447, longitude: -114.0719 },
    areaServed: ['Calgary', 'Airdrie', 'Cochrane', 'Chestermere', 'Okotoks'].map((c) => ({
      '@type': 'City',
      name: c,
    })),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '09:00',
        closes: '17:00',
      },
    ],
    sameAs: [
      'https://www.instagram.com/xtreme.auto.detailing/',
      'https://www.tiktok.com/@xtreme.auto.detailing',
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <Header />
      <main>
        <Hero />
        <Services />
        <BugattiSection />
        <BeforeAfter />
        <Gallery />
        <WhyUs />
        <Testimonials />
        <ServiceAreas />
        <BookingSection />

        {/* Final CTA */}
        <section className="bg-xad-dark overflow-hidden py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="relative text-center">
              <div className="absolute -top-16 left-0 right-0 text-center select-none pointer-events-none">
                <span className="text-[120px] md:text-[200px] font-black text-white/[0.02] leading-none tracking-tighter">
                  XAD
                </span>
              </div>
              <div className="relative">
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
