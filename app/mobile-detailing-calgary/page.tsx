import ServicePageTemplate from '@/components/services/ServicePageTemplate'

export const metadata = {
  title: 'Mobile Detailing Calgary | We Come To You | Xtreme Auto Detailing YYC',
  description:
    'Mobile auto detailing in Calgary — we come to your home or office. Full interior & exterior detailing, washes & more. Serving Calgary, Airdrie, Cochrane, Chestermere & Okotoks. Book today.',
  keywords:
    'mobile detailing Calgary, mobile car detailing Calgary, mobile auto detailing YYC, car detailing near me Calgary, detailing at home Calgary',
}

export default function MobileDetailingPage() {
  return (
    <ServicePageTemplate
      eyebrow="Mobile Detailing · Calgary"
      title="Mobile Detailing"
      titleAccent="We Come To You"
      intro="Skip the drop-off. Our fully-equipped mobile detailing service brings professional results straight to your driveway, home, or office anywhere in the Calgary region. Same premium care, zero hassle — from daily drivers to exotics."
      heroImage="/images/mclaren-720s-doors.jpeg"
      heroAlt="Mobile detailing McLaren 720S at home in Calgary"
      benefits={[
        { title: 'Total Convenience', description: 'We arrive fully self-sufficient with our own power and water. You carry on with your day while your vehicle is transformed right outside your door.' },
        { title: 'Same Premium Results', description: 'Mobile doesn\u2019t mean compromised. We bring the same professional-grade products, tools, and technique we use in the studio directly to you.' },
        { title: 'Serving the Whole Region', description: 'From inner-city Calgary to Airdrie, Cochrane, Chestermere, and Okotoks \u2014 if you\u2019re in the area, we\u2019ll come to you.' },
        { title: 'Trusted With Any Vehicle', description: 'Daily drivers, trucks, luxury SUVs, and seven-figure hypercars alike \u2014 every vehicle receives the same careful, detail-obsessed treatment.' },
      ]}
      process={[
        { step: '01', title: 'Book Your Slot', description: 'Choose your service, date, and location. We confirm within the hour and arrive on schedule.' },
        { step: '02', title: 'We Arrive Equipped', description: 'Our mobile rig brings everything needed \u2014 water, power, products, and tools \u2014 right to your location.' },
        { step: '03', title: 'Detailed On-Site', description: 'We perform your full detail on-site with the same precision and premium products as our studio.' },
        { step: '04', title: 'Inspect & Enjoy', description: 'We walk you through the finished result and hand back a vehicle that looks better than the day you bought it.' },
      ]}
      galleryImages={[
        { src: '/images/ford-raptor-mansion.jpeg', alt: 'Mobile detailing Ford Raptor Calgary' },
        { src: '/images/lambo-revuelto-pink-doors.jpeg', alt: 'Mobile detailing Lamborghini Revuelto Calgary' },
        { src: '/images/lexus-ls500-front.jpeg', alt: 'Mobile detailing Lexus LS500 Calgary' },
        { src: '/images/bugatti-chiron-wash.jpeg', alt: 'Mobile detailing Bugatti Chiron Calgary' },
        { src: '/images/mercedes-gle-black.jpeg', alt: 'Mobile detailing Mercedes GLE Calgary' },
        { src: '/images/audi-rs-mobile.jpeg', alt: 'Mobile detailing Audi RS3 Calgary' },
      ]}
      faqs={[
        { q: 'Do you bring your own water and power?', a: 'Yes. Our mobile setup is fully self-sufficient \u2014 we bring our own water supply and power, so all we need is access to your vehicle.' },
        { q: 'What areas do you serve?', a: 'We serve Calgary and surrounding communities including Airdrie, Cochrane, Chestermere, and Okotoks. Not sure if you\u2019re in range? Just ask \u2014 we may still come to you.' },
        { q: 'What do you need from me on the day?', a: 'Just a safe, accessible spot to park the vehicle \u2014 a driveway or similar works perfectly. We handle the rest.' },
        { q: 'Can you do ceramic coating mobile?', a: 'Ceramic coating needs a controlled, dust-free environment to cure properly, so that\u2019s done at our studio. Washes, interior/exterior details, and more are all available mobile.' },
        { q: 'How much does mobile detailing cost in Calgary?', a: 'Pricing depends on your vehicle size and the package you choose. Contact us for a transparent quote \u2014 no hidden fees, no surprises.' },
      ]}
      priceNote="Mobile detailing pricing depends on vehicle size and the package you select. Contact us for a transparent, all-in quote with no hidden travel fees within our service area."
    />
  )
}
