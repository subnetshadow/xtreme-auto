import ServicePageTemplate from '@/components/services/ServicePageTemplate'

export const metadata = {
  title: 'Paint Protection Film (PPF) Calgary | Xtreme Auto Detailing YYC',
  description:
    'Professional paint protection film (PPF) installation in Calgary. Invisible, self-healing urethane film that shields your paint from rock chips, scratches, and road debris. Full-front, track packs & full-body coverage in gloss or satin. Free quote.',
  keywords:
    'paint protection film Calgary, PPF Calgary, clear bra Calgary, rock chip protection Calgary, self-healing film Calgary, PPF installation YYC, satin PPF Calgary',
}

export default function PaintProtectionFilmPage() {
  return (
    <ServicePageTemplate
      eyebrow="Paint Protection Film · Calgary"
      title="Paint Protection"
      titleAccent="Film (PPF)"
      intro="The ultimate defense against Alberta\u2019s gravel, highway debris, and harsh winters. Paint protection film is a virtually invisible, self-healing urethane layer that absorbs rock chips, scratches, and stains before they ever reach your paint. Available in crystal-clear gloss or a stealth satin finish, professionally installed for a seamless, edge-wrapped result."
      heroImage="/images/mclaren-720s-doors.jpeg"
      heroAlt="McLaren 720S protected with paint protection film in Calgary"
      benefits={[
        { title: 'Rock Chip Defense', description: 'PPF takes the hits so your paint doesn\u2019t. Highway driving, gravel, and road debris are no match for the impact-absorbing urethane layer \u2014 ideal for Alberta roads.' },
        { title: 'Self-Healing Finish', description: 'Light swirls and minor scratches in the film disappear with heat from the sun or warm water, keeping the surface looking flawless over time.' },
        { title: 'Invisible Protection', description: 'High-quality film is optically clear and edge-wrapped for a near-invisible finish. Choose glossy to keep your factory shine, or satin for a unique matte look.' },
        { title: 'Preserves Resale Value', description: 'Factory paint in pristine condition is a major resale advantage. PPF keeps the original finish protected, especially on high-impact areas and premium vehicles.' },
      ]}
      process={[
        { step: '01', title: 'Prep & Decon', description: 'The vehicle is washed, decontaminated, and clayed so the film bonds to a perfectly clean surface.' },
        { step: '02', title: 'Pattern & Cut', description: 'Precision computer-cut patterns (or custom hand-cut work) are tailored to your exact vehicle and coverage choice.' },
        { step: '03', title: 'Install & Wrap', description: 'Film is carefully installed and wrapped around edges for a seamless, tuck-in finish with no exposed lines where possible.' },
        { step: '04', title: 'Cure & Inspect', description: 'The film is squeegeed, allowed to cure, and given a final quality inspection for clarity and adhesion.' },
      ]}
      galleryImages={[
        { src: '/images/mclaren-720s-doors.jpeg', alt: 'McLaren 720S PPF Calgary' },
        { src: '/images/lambo-revuelto-purple.jpeg', alt: 'Lamborghini Revuelto PPF Calgary' },
        { src: '/images/corvette-z06-matte.jpeg', alt: 'Corvette Z06 satin PPF Calgary' },
        { src: '/images/bugatti-chiron-side-clean.jpeg', alt: 'Bugatti Chiron paint protection Calgary' },
        { src: '/images/lambo-huracan-matte-studio.jpeg', alt: 'Lamborghini Huracan satin finish Calgary' },
        { src: '/images/nissan-gtr-teal.jpeg', alt: 'Nissan GT-R paint protection film Calgary' },
      ]}
      faqs={[
        { q: 'What is paint protection film (PPF)?', a: 'PPF \u2014 sometimes called a clear bra \u2014 is a thick, transparent urethane film applied over your paint. It absorbs impacts from rocks and debris, resists scratches and stains, and many films self-heal light marks with heat. It\u2019s the strongest physical protection available for paint.' },
        { q: 'What\u2019s the difference between PPF and ceramic coating?', a: 'They solve different problems. Ceramic coating adds gloss, hydrophobic properties, and chemical/UV protection, but it\u2019s thin and won\u2019t stop a rock chip. PPF is a thick physical barrier against impacts and abrasion. Many owners do both \u2014 PPF on high-impact areas and ceramic over the rest.' },
        { q: 'How much of the car should I cover?', a: 'Common options are a full-front package (bumper, hood, fenders, mirrors), a track or partial-front pack, or full-body coverage. The right choice depends on your driving, budget, and how much protection you want. We\u2019ll walk you through it.' },
        { q: 'How long does PPF last?', a: 'Quality PPF typically lasts five to ten years depending on the film, installation, and care. Most reputable films carry a manufacturer warranty against yellowing and cracking.' },
        { q: 'Is PPF done at your studio?', a: 'Yes \u2014 PPF installation requires a clean, controlled environment for a flawless, dust-free result, so it\u2019s performed at our studio rather than mobile. Contact us to discuss coverage options and get a quote.' },
      ]}
      priceNote="PPF pricing depends on coverage (full-front, track pack, or full-body), film type, and vehicle. Contact us for a personalized quote and coverage recommendation."
    />
  )
}
