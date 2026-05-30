import ServicePageTemplate from '@/components/services/ServicePageTemplate'

export const metadata = {
  title: 'Headlight Restoration Calgary | Xtreme Auto Detailing YYC',
  description:
    'Professional headlight restoration in Calgary. Remove yellowing, haze, and oxidation to restore clarity, brightness, and night-time visibility \u2014 with a protective UV sealant for lasting results. Mobile & studio service.',
  keywords:
    'headlight restoration Calgary, foggy headlight repair Calgary, headlight cleaning Calgary, yellow headlight restoration YYC, headlight polishing Calgary',
}

export default function HeadlightRestorationPage() {
  return (
    <ServicePageTemplate
      eyebrow="Headlight Restoration · Calgary"
      title="Headlight"
      titleAccent="Restoration"
      intro="Cloudy, yellowed headlights don\u2019t just look old \u2014 they cut your night-time visibility and fail inspections. Our multi-stage restoration removes oxidation and haze, polishes the lens back to crystal clarity, and seals it with a UV-resistant coating so it stays clear far longer than a quick buff."
      heroImage="/images/mclaren-570s-orange-front.jpeg"
      heroAlt="Restored clear headlights on a McLaren in Calgary"
      benefits={[
        { title: 'Safer Night Driving', description: 'Clear lenses let your headlights project light the way they were designed to \u2014 dramatically improving visibility and safety in dark and wet conditions.' },
        { title: 'Like-New Appearance', description: 'Yellowed, foggy headlights make an entire vehicle look tired. Restoration instantly refreshes the front end and the car\u2019s overall appearance.' },
        { title: 'Long-Lasting UV Seal', description: 'We finish with a protective UV coating so your headlights resist re-oxidation \u2014 a far more durable result than the temporary fixes from DIY kits.' },
        { title: 'Affordable Alternative', description: 'Restoration costs a fraction of replacing headlight assemblies, which can run into the hundreds or thousands of dollars per side on modern vehicles.' },
      ]}
      process={[
        { step: '01', title: 'Mask & Prep', description: 'Carefully mask surrounding paint and trim, then clean the lens surface for an even result.' },
        { step: '02', title: 'Wet Sand', description: 'Progressive wet sanding removes the oxidized, yellowed outer layer of the polycarbonate lens.' },
        { step: '03', title: 'Polish & Refine', description: 'Machine polishing restores full optical clarity and a smooth, glass-like surface.' },
        { step: '04', title: 'UV Seal', description: 'A protective UV-resistant coating is applied and cured to keep the lenses clear for the long term.' },
      ]}
      galleryImages={[
        { src: '/images/mclaren-570s-orange-front.jpeg', alt: 'McLaren 570S front headlights Calgary' },
        { src: '/images/lexus-ls500-front.jpeg', alt: 'Lexus LS500 clear headlights Calgary' },
        { src: '/images/bugatti-chiron-front.jpeg', alt: 'Bugatti Chiron front detail Calgary' },
        { src: '/images/nissan-gtr-white-studio.jpeg', alt: 'Nissan GT-R front end Calgary' },
        { src: '/images/mercedes-gle-black.jpeg', alt: 'Mercedes GLE headlight detail Calgary' },
        { src: '/images/ford-raptor-mansion.jpeg', alt: 'Ford Raptor front end detail Calgary' },
      ]}
      faqs={[
        { q: 'How long does headlight restoration last?', a: 'With our UV-resistant sealant, results typically last one to three years depending on sun exposure and how the vehicle is stored. That\u2019s far longer than DIY kits, which often haze over again within months.' },
        { q: 'Can any foggy headlight be restored?', a: 'Most yellowing and oxidation is on the outer surface of the lens and restores beautifully. If a headlight is cracked, internally fogged, or has failed seals, restoration won\u2019t fix it \u2014 we\u2019ll tell you honestly if replacement is the better call.' },
        { q: 'How long does the service take?', a: 'A typical pair of headlights takes around one to two hours. We\u2019ll confirm timing when we assess the condition of your lenses.' },
        { q: 'Is restoration cheaper than replacing headlights?', a: 'Almost always. Modern headlight assemblies can cost hundreds to thousands of dollars each, plus labor. Restoration delivers like-new clarity for a small fraction of that cost.' },
        { q: 'Do you offer mobile headlight restoration?', a: 'Yes \u2014 headlight restoration is well suited to mobile service. We can come to your home or workplace anywhere in the Calgary region. Contact us to book.' },
      ]}
      priceNote="Headlight restoration is priced per vehicle based on lens condition and severity of oxidation. Contact us for a free, no-pressure quote."
    />
  )
}
