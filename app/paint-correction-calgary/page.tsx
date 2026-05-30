import ServicePageTemplate from '@/components/services/ServicePageTemplate'

export const metadata = {
  title: 'Paint Correction Calgary | Swirl & Scratch Removal | Xtreme Auto Detailing',
  description:
    'Professional paint correction in Calgary. Remove swirl marks, scratches & oxidation with multi-stage machine polishing. Restore a flawless, mirror finish. Free quote.',
  keywords:
    'paint correction Calgary, swirl removal Calgary, scratch removal Calgary, car polishing Calgary, paint correction cost Calgary, buffing Calgary',
}

export default function PaintCorrectionPage() {
  return (
    <ServicePageTemplate
      eyebrow="Paint Correction · Calgary"
      title="Paint Correction"
      titleAccent="in Calgary"
      intro="Erase years of swirl marks, scratches, and oxidation. Our multi-stage machine polishing restores depth, clarity, and a flawless mirror finish to your paint — the essential first step before any ceramic coating, and a transformation you'll see instantly."
      heroImage="/images/bmw-m3-green-after.jpeg"
      heroAlt="Paint corrected BMW M3 Competition in Calgary"
      benefits={[
        { title: 'Removes Swirls & Scratches', description: 'Multi-stage machine polishing physically levels the clear coat to eliminate swirl marks, light scratches, water spots, and oxidation — not just hide them.' },
        { title: 'Restores Showroom Depth', description: 'Corrected paint reflects light evenly, bringing back the deep, wet, mirror-like finish your vehicle had when it rolled off the showroom floor.' },
        { title: 'Prepares for Coating', description: 'Paint correction is the critical foundation before ceramic coating. Coating flawless paint locks in that perfection for years to come.' },
        { title: 'Boosts Resale Value', description: 'Flawless, well-maintained paint makes a powerful first impression and meaningfully increases your vehicle\u2019s perceived and actual resale value.' },
      ]}
      process={[
        { step: '01', title: 'Wash & Decontaminate', description: 'Full hand wash, clay bar, and iron decontamination to create a clean surface for paint analysis.' },
        { step: '02', title: 'Paint Inspection', description: 'We measure paint thickness and inspect defects under specialized lighting to build the right correction plan.' },
        { step: '03', title: 'Machine Polishing', description: 'Single or multi-stage compounding and polishing to remove defects and refine the finish to a high gloss.' },
        { step: '04', title: 'Final Refinement', description: 'A final polishing pass and inspection ensure a swirl-free, mirror finish — ready for protection.' },
      ]}
      galleryImages={[
        { src: '/images/bmw-m3-green-after.jpeg', alt: 'Paint corrected BMW M3 Calgary' },
        { src: '/images/lambo-huracan-matte-studio.jpeg', alt: 'Detailed Lamborghini Huracan Calgary' },
        { src: '/images/corvette-z06-matte.jpeg', alt: 'Detailed Corvette Z06 Calgary' },
        { src: '/images/nissan-gtr-white-studio.jpeg', alt: 'Paint corrected Nissan GT-R Calgary' },
        { src: '/images/mclaren-570s-orange-front.jpeg', alt: 'Paint corrected McLaren 570S Calgary' },
        { src: '/images/lambo-revuelto-purple.jpeg', alt: 'Detailed Lamborghini Revuelto Calgary' },
      ]}
      faqs={[
        { q: 'What is paint correction?', a: 'Paint correction is the process of removing surface imperfections \u2014 swirl marks, scratches, oxidation, water spots \u2014 through careful machine polishing, restoring a smooth, clear, glossy finish.' },
        { q: 'How long does paint correction take?', a: 'Depending on the vehicle and severity of defects, a correction can take anywhere from a full day to several days. We assess each vehicle individually and give you an honest timeline.' },
        { q: 'Single-stage vs multi-stage \u2014 what do I need?', a: 'Lighter defects may only need a single-stage polish, while heavier swirls and scratches require multi-stage compounding and polishing. We recommend the right approach after inspecting your paint.' },
        { q: 'Should I get ceramic coating after correction?', a: 'We highly recommend it. Correction makes your paint flawless; a ceramic coating then protects that flawless finish for years, so the work lasts.' },
        { q: 'How much does paint correction cost in Calgary?', a: 'Cost depends on vehicle size, paint condition, and whether single or multi-stage correction is needed. Contact us for a free, transparent quote.' },
      ]}
      priceNote="Paint correction pricing depends on vehicle size, the severity of defects, and whether single- or multi-stage correction is required. Reach out for a free assessment and quote."
    />
  )
}
