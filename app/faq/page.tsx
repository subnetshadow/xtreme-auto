import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'

export const metadata = {
  title: 'Auto Detailing FAQ Calgary | Xtreme Auto Detailing YYC',
  description:
    'Answers to the most common questions about car detailing, ceramic coating, paint protection film, paint correction, window tinting and headlight restoration in Calgary. Pricing, durability, winter care and more.',
  keywords:
    'auto detailing FAQ Calgary, car detailing questions Calgary, ceramic coating FAQ, PPF questions Calgary, paint correction FAQ, window tint questions Calgary, how much does detailing cost Calgary',
}

type QA = { q: string; a: string }
type Group = { category: string; items: QA[] }

const faqGroups: Group[] = [
  {
    category: 'General Detailing',
    items: [
      { q: 'What is auto detailing?', a: 'Auto detailing is a thorough, multi-step cleaning, restoration, and protection of a vehicle — far beyond a regular car wash. It covers the exterior (wash, decontamination, polishing, protection) and the interior (vacuuming, steam cleaning, stain and odor removal, leather and trim conditioning), restoring the vehicle as close to showroom condition as possible.' },
      { q: 'What is the difference between a car wash and detailing?', a: 'A car wash quickly cleans the surface. Detailing is a deep, meticulous process that removes embedded contaminants, corrects minor imperfections, sanitizes the interior, and applies protection. The result lasts longer, looks dramatically better, and helps preserve your vehicle\u2019s value.' },
      { q: 'How often should I detail my car in Calgary?', a: 'For most Calgary drivers, a full detail every 3 to 4 months works well, with lighter maintenance washes in between. Our winters bring road salt and slush that are hard on paint and undercarriage, so a thorough detail before and after winter is especially worthwhile.' },
      { q: 'How long does a full detail take?', a: 'A complete interior and exterior detail typically takes a few hours, depending on vehicle size and condition. Heavily soiled vehicles, pet hair, or deep stain and odor work can take longer. We always give an honest time estimate when you book.' },
      { q: 'Do you detail trucks, SUVs, and exotic cars?', a: 'Yes. We detail everything from daily drivers and trucks to large SUVs and high-end exotics. We\u2019ve cared for vehicles ranging from family vehicles to Bugatti, Lamborghini, and McLaren, and we tailor our process and products to each vehicle.' },
      { q: 'Can you remove pet hair and odors?', a: 'Yes. We use specialized tools and extraction methods to remove embedded pet hair, and steam plus targeted treatments to eliminate odors at the source rather than masking them. For severe cases we offer additional odor treatments.' },
      { q: 'Will detailing remove scratches?', a: 'Light surface scratches and swirl marks can often be removed or greatly reduced through paint correction (machine polishing). Deep scratches that have gone through the clear coat usually cannot be fully removed by polishing and may need touch-up or refinishing. We\u2019ll assess and tell you honestly what\u2019s achievable.' },
    ],
  },
  {
    category: 'Ceramic Coating',
    items: [
      { q: 'What is a ceramic coating?', a: 'A ceramic coating is a liquid polymer that chemically bonds to your paint, creating a durable, hydrophobic layer. It adds a deep gloss, repels water and dirt, resists UV damage and light chemical staining, and makes the vehicle far easier to keep clean.' },
      { q: 'How long does ceramic coating last?', a: 'Depending on the product tier and how the vehicle is cared for, our ceramic coatings last anywhere from about 1 year up to 9+ years. We offer multiple tiers so you can match the durability to your needs and budget.' },
      { q: 'Is ceramic coating worth it?', a: 'For most owners, yes. It protects the paint, keeps the car cleaner, enhances gloss, and helps preserve resale value. Over time it can save money compared to repeated waxing and correction, and it makes ongoing maintenance much easier.' },
      { q: 'Does ceramic coating prevent rock chips?', a: 'No. Ceramic coating is a thin chemical layer that protects against UV, light scratches, and staining, but it will not stop a rock chip. For physical impact protection you need paint protection film (PPF). Many owners combine PPF on high-impact areas with ceramic over the rest.' },
      { q: 'How do I maintain a ceramic-coated car?', a: 'Maintenance is simple: regular gentle hand washes with a pH-neutral soap, and avoid harsh automatic car washes with abrasive brushes. We provide full aftercare guidance with every coating so you get the maximum lifespan.' },
    ],
  },
  {
    category: 'Paint Protection Film (PPF)',
    items: [
      { q: 'What is paint protection film (PPF)?', a: 'PPF, sometimes called a clear bra, is a thick, transparent urethane film applied over your paint. It absorbs impacts from rocks and road debris, resists scratches and stains, and many films self-heal light marks with heat. It is the strongest physical protection available for paint.' },
      { q: 'PPF vs ceramic coating — which do I need?', a: 'They solve different problems. Ceramic coating adds gloss and hydrophobic, chemical, and UV protection but is too thin to stop impacts. PPF is a thick physical barrier against rock chips and abrasion. For the best of both, many owners apply PPF to high-impact areas and ceramic coating over the rest of the vehicle.' },
      { q: 'How much of my car should I have wrapped in PPF?', a: 'Common options are a full-front package (bumper, hood, fenders, mirrors), a partial-front or track pack, or full-body coverage. The right choice depends on your driving habits, budget, and how much protection you want. We help you decide during the consultation.' },
      { q: 'How long does PPF last?', a: 'Quality paint protection film typically lasts 5 to 10 years depending on the film, the installation, and how the vehicle is cared for. Most reputable films carry a manufacturer warranty against yellowing and cracking.' },
      { q: 'Does PPF come in matte or satin finishes?', a: 'Yes. Beyond standard glossy film, satin (matte) PPF is available to give your vehicle a unique stealth look while still providing full impact protection. It is a popular choice on exotics and performance cars.' },
    ],
  },
  {
    category: 'Paint Correction',
    items: [
      { q: 'What is paint correction?', a: 'Paint correction is the process of removing imperfections in your paint — swirl marks, fine scratches, water spots, and oxidation — through careful multi-stage machine polishing. The result is a smooth, clear, glossy finish that reflects light evenly.' },
      { q: 'Do I need paint correction before a ceramic coating?', a: 'In most cases, yes. A coating locks in whatever condition the paint is in, including swirls and scratches. Correcting the paint first ensures the coating goes over a flawless surface, so the finish looks its best for the life of the coating.' },
      { q: 'How long does paint correction last?', a: 'Paint correction permanently removes the imperfections it addresses. How long the corrected finish stays flawless depends on how the car is washed and protected afterward — which is why pairing correction with a coating or sealant is recommended.' },
    ],
  },
  {
    category: 'Window Tinting',
    items: [
      { q: 'What are the benefits of window tinting?', a: 'Quality window film rejects heat and up to 99% of UV rays, reduces glare for safer driving, adds privacy and security, and protects your interior from fading and cracking. It also gives the vehicle a clean, finished appearance.' },
      { q: 'What is the difference between ceramic and carbon tint?', a: 'Carbon film offers great looks, UV protection, and fade resistance at a solid value. Ceramic film is the premium option, rejecting significantly more heat and infrared without interfering with phone or GPS signals. We recommend the right fit for your needs and budget.' },
      { q: 'How dark can I legally tint my windows in Alberta?', a: 'Alberta regulates how much light front side windows and the windshield must allow through, while rear windows have more flexibility. We keep your installation compliant and walk you through legal shade options before starting.' },
      { q: 'How long does window tint last?', a: 'Premium carbon and ceramic films are built to last many years without bubbling, purpling, or peeling, and typically include a manufacturer warranty. Cheap dyed films fade quickly — we only install quality film.' },
    ],
  },
  {
    category: 'Headlight Restoration',
    items: [
      { q: 'Can foggy headlights be restored?', a: 'Most yellowing and oxidation sits on the outer surface of the lens and restores beautifully through wet sanding, polishing, and a protective UV seal. If a headlight is cracked or fogged internally from failed seals, restoration won\u2019t fix it and replacement is the better option — we\u2019ll tell you honestly.' },
      { q: 'How long does headlight restoration last?', a: 'With our UV-resistant sealant, results typically last 1 to 3 years depending on sun exposure and storage — far longer than DIY kits, which often haze over again within months.' },
      { q: 'Is restoration cheaper than replacing headlights?', a: 'Almost always. Modern headlight assemblies can cost hundreds to thousands of dollars each, plus labor. Restoration delivers like-new clarity for a small fraction of that cost.' },
    ],
  },
  {
    category: 'Mobile Service, Pricing & Booking',
    items: [
      { q: 'Do you offer mobile detailing?', a: 'Yes. We bring our full mobile detailing setup to your home or workplace anywhere in the Calgary region. Some services that require a controlled environment — like ceramic coating and PPF — are best done at our studio, and we\u2019ll always recommend the best option.' },
      { q: 'What areas do you serve?', a: 'We serve Calgary and the surrounding communities, including Airdrie, Cochrane, Chestermere, and Okotoks. If you\u2019re nearby and not sure whether we cover your area, just reach out.' },
      { q: 'How much does detailing cost in Calgary?', a: 'Pricing depends on the service, your vehicle\u2019s size, and its condition. We keep quotes transparent with no surprises. Contact us with your vehicle and what you\u2019re looking for, and we\u2019ll provide a clear, personalized quote.' },
      { q: 'How do I book an appointment?', a: 'Booking is easy — call or text us at (587) 707-2736, or reach out through our contact section. We\u2019ll confirm the service, timing, and whether mobile or studio service is the best fit for you.' },
      { q: 'What payment methods do you accept?', a: 'We accept common payment methods and will confirm the details when you book. If you have a preference, just let us know and we\u2019ll do our best to accommodate.' },
      { q: 'Do you require a deposit?', a: 'For certain larger services we may request a deposit to secure your appointment. We\u2019ll always make this clear up front when you book, with no hidden conditions.' },
    ],
  },
]

export default function FAQPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqGroups.flatMap((g) =>
      g.items.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      }))
    ),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-xad-dark pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-0.5 bg-xad-gold" />
              <span className="text-xad-blue text-xs tracking-widest uppercase">Help Center</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6">
              Frequently Asked <span className="text-xad-gold">Questions</span>
            </h1>
            <p className="text-xad-gray text-lg md:text-xl leading-relaxed max-w-2xl">
              Everything you need to know about detailing, ceramic coating, paint protection film,
              window tinting, and more — answered for Calgary drivers. Still have a question?
              Call or text us at{' '}
              <a href="tel:5877072736" className="text-xad-gold font-semibold hover:text-xad-warm">
                (587) 707-2736
              </a>
              .
            </p>
          </div>
        </section>

        {/* FAQ Groups */}
        <section className="bg-xad-black py-20">
          <div className="max-w-4xl mx-auto px-4 md:px-6 flex flex-col gap-16">
            {faqGroups.map((group) => (
              <div key={group.category}>
                <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-6">
                  {group.category}
                </h2>
                <div className="flex flex-col gap-4">
                  {group.items.map((faq) => (
                    <details
                      key={faq.q}
                      className="group bg-xad-card border border-white/5 rounded-sm p-6 [&_summary]:cursor-pointer"
                    >
                      <summary className="flex items-center justify-between text-white font-semibold list-none">
                        {faq.q}
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-xad-gold group-open:rotate-45 transition-transform duration-200 shrink-0 ml-4"
                        >
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </summary>
                      <p className="text-xad-muted text-sm leading-relaxed mt-4">{faq.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-xad-dark py-24">
          <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight mb-6">
              Still have <span className="text-xad-gold">questions?</span>
            </h2>
            <p className="text-xad-muted text-lg mb-10 max-w-xl mx-auto">
              We&rsquo;re happy to help. Reach out and we&rsquo;ll get you a clear answer and an honest quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#book"
                className="bg-xad-gold text-xad-black font-black text-lg px-12 py-5 rounded-sm hover:bg-xad-warm transition-colors duration-200"
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
        </section>
      </main>
      <Footer />
    </>
  )
}
