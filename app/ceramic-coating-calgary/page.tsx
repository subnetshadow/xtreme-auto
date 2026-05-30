import ServicePageTemplate from '@/components/services/ServicePageTemplate'

export const metadata = {
  title: 'Ceramic Coating Calgary | Xtreme Auto Detailing YYC',
  description:
    'Professional ceramic coating in Calgary. Long-lasting paint protection, deep gloss, and hydrophobic finish for cars, trucks & exotics. Mobile & studio service. Get a free quote today.',
  keywords:
    'ceramic coating Calgary, nano ceramic coating Calgary, paint protection Calgary, ceramic coating cost Calgary, car ceramic coating YYC',
}

export default function CeramicCoatingPage() {
  return (
    <ServicePageTemplate
      eyebrow="Ceramic Coating · Calgary"
      title="Ceramic Coating"
      titleAccent="in Calgary"
      intro="Lock in a deep, glossy finish and protect your paint for years. Our professional-grade nano-ceramic coatings repel water, resist UV damage, and make your vehicle dramatically easier to keep clean — trusted on everything from daily drivers to Bugatti Chirons."
      heroImage="/images/bugatti-chiron-side-clean.jpeg"
      heroAlt="Ceramic coated Bugatti Chiron detailed in Calgary"
      benefits={[
        { title: 'Years of Protection', description: 'A single application delivers multi-year protection against UV rays, oxidation, bird droppings, road salt, and environmental contaminants that damage unprotected paint.' },
        { title: 'Hydrophobic Self-Cleaning', description: 'Water beads and sheets off instantly, carrying dirt with it. Your vehicle stays cleaner longer and is far easier to wash between details.' },
        { title: 'Show-Quality Gloss', description: 'Ceramic coatings amplify depth and clarity, giving your paint a wet, mirror-like shine that ordinary wax simply cannot match or maintain.' },
        { title: 'Long-Term Value', description: 'Protecting your paint preserves resale value and saves money on frequent waxing and paint correction down the road. A smart investment for any vehicle.' },
      ]}
      process={[
        { step: '01', title: 'Decontamination', description: 'Thorough hand wash, clay bar treatment, and iron removal to strip all bonded contaminants from the paint.' },
        { step: '02', title: 'Paint Correction', description: 'Machine polishing to remove swirls and scratches so the coating bonds to flawless paint.' },
        { step: '03', title: 'Coating Application', description: 'Precise, panel-by-panel application of professional-grade ceramic coating in a controlled environment.' },
        { step: '04', title: 'Curing & Inspection', description: 'Proper curing under IR or controlled conditions, followed by a final quality inspection before handover.' },
      ]}
      galleryImages={[
        { src: '/images/bmw-alpina-blue.jpeg', alt: 'Ceramic coated BMW Alpina B5 Calgary' },
        { src: '/images/cadillac-ct5-studio.jpeg', alt: 'Ceramic coated Cadillac CT5 Calgary' },
        { src: '/images/nissan-gtr-teal.jpeg', alt: 'Ceramic coated Nissan GT-R Calgary' },
        { src: '/images/porsche-cayman-gt4-blue.jpeg', alt: 'Ceramic coated Porsche 718 GT4 Calgary' },
        { src: '/images/lexus-ls500-rear.jpeg', alt: 'Ceramic coated Lexus LS500 Calgary' },
        { src: '/images/bugatti-chiron-after.jpeg', alt: 'Ceramic coated Bugatti Chiron Calgary' },
      ]}
      faqs={[
        { q: 'How long does ceramic coating last?', a: 'Depending on the product and care, our ceramic coatings last anywhere from 1 to 9+ years. We offer multiple tiers to match your needs and budget — ask us which is right for your vehicle.' },
        { q: 'Is ceramic coating worth it?', a: 'For most owners, yes. It protects your paint, keeps the car cleaner, enhances gloss, and helps preserve resale value. Over time it can save you money compared to repeated waxing and correction.' },
        { q: 'Do you offer mobile ceramic coating?', a: 'Ceramic coating requires a controlled, dust-free environment for proper curing, so coatings are typically done at our studio. We do offer mobile service for washes and lighter details.' },
        { q: 'How much does ceramic coating cost in Calgary?', a: 'Pricing depends on vehicle size, paint condition, and the coating tier you choose. Contact us for a free, personalized quote — we keep it transparent with no surprises.' },
        { q: 'How do I maintain a ceramic-coated car?', a: 'Maintenance is easy: regular gentle hand washes with pH-neutral soap. Avoid automatic car washes with harsh brushes. We provide full aftercare guidance with every coating.' },
      ]}
      priceNote="Ceramic coating pricing varies by vehicle size, paint condition, and coating tier (1-year up to 9+ years). Contact us for a free, no-pressure quote tailored to your vehicle."
    />
  )
}
