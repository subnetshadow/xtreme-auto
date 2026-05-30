import ServicePageTemplate from '@/components/services/ServicePageTemplate'

export const metadata = {
  title: 'Window Tinting Calgary | Xtreme Auto Detailing YYC',
  description:
    'Professional automotive window tinting in Calgary. Premium heat- and UV-rejecting film for a cooler cabin, reduced glare, added privacy, and a sharp finished look. Ceramic and carbon tint options. Free quote.',
  keywords:
    'window tinting Calgary, car window tint Calgary, ceramic tint Calgary, automotive tinting YYC, heat rejection tint Calgary, window film Calgary',
}

export default function WindowTintingPage() {
  return (
    <ServicePageTemplate
      eyebrow="Window Tinting · Calgary"
      title="Window"
      titleAccent="Tinting"
      intro="More than just a look. Premium window film rejects heat and harmful UV rays, cuts glare, adds privacy, and protects your interior from fading \u2014 all while giving your vehicle a clean, finished appearance. We install high-quality carbon and ceramic films with precise, bubble-free results and clean edges."
      heroImage="/images/lambo-huracan-black-showroom.jpeg"
      heroAlt="Window tinting on a Lamborghini Huracan in Calgary"
      benefits={[
        { title: 'Heat & UV Rejection', description: 'Ceramic and carbon films block a large share of solar heat and up to 99% of UV rays \u2014 a cooler, more comfortable cabin and protection for your skin and interior.' },
        { title: 'Reduced Glare', description: 'Cut harsh glare from sun and headlights for safer, more comfortable driving, especially on bright Alberta days and snow-glare winters.' },
        { title: 'Privacy & Security', description: 'Darker rear glass keeps valuables out of sight and adds a layer of privacy, while holding shattered glass together in the event of an impact.' },
        { title: 'Protected Interior', description: 'UV exposure fades and cracks dashboards, leather, and trim over time. Quality film dramatically slows that damage and preserves your interior\u2019s value.' },
      ]}
      process={[
        { step: '01', title: 'Consult & Choose', description: 'We help you select the right film type and legal shade level for your needs and your vehicle.' },
        { step: '02', title: 'Clean & Prep', description: 'Glass is meticulously cleaned and prepped so no dust or contaminants get trapped under the film.' },
        { step: '03', title: 'Precision Cut', description: 'Film is computer-cut or hand-cut to your exact windows for a clean, edge-to-edge fit.' },
        { step: '04', title: 'Install & Cure', description: 'Careful, bubble-free installation followed by proper curing for a flawless, long-lasting finish.' },
      ]}
      galleryImages={[
        { src: '/images/lambo-huracan-black-showroom.jpeg', alt: 'Tinted Lamborghini Huracan Calgary' },
        { src: '/images/nissan-gtr-white-studio.jpeg', alt: 'Tinted Nissan GT-R Calgary' },
        { src: '/images/mercedes-gle-black.jpeg', alt: 'Tinted Mercedes GLE Calgary' },
        { src: '/images/corvette-z06-matte.jpeg', alt: 'Tinted Corvette Z06 Calgary' },
        { src: '/images/bmw-m3-grey.jpeg', alt: 'Tinted BMW M3 Calgary' },
        { src: '/images/cadillac-ct5-studio.jpeg', alt: 'Tinted Cadillac CT5 Calgary' },
      ]}
      faqs={[
        { q: 'What\u2019s the difference between ceramic and carbon tint?', a: 'Carbon film offers great looks, UV protection, and fade resistance at a solid value. Ceramic film is the premium option \u2014 it rejects significantly more heat and infrared without interfering with phone or GPS signals. We\u2019ll recommend the right fit for your needs and budget.' },
        { q: 'How dark can I legally tint my windows in Alberta?', a: 'Alberta regulates how much light front side and windshield tint must allow through, while rear windows have more flexibility. We keep your install compliant and walk you through legal shade options before we start.' },
        { q: 'Will tint help in winter, not just summer?', a: 'Yes. Beyond summer heat rejection, quality film cuts glare from low winter sun and snow, blocks UV year-round, and helps the interior retain warmth \u2014 it\u2019s a year-round upgrade.' },
        { q: 'How long does window tint last?', a: 'Premium carbon and ceramic films are designed to last many years without bubbling, purpling, or peeling, and typically come with a manufacturer warranty. Cheaper dyed films fade much faster \u2014 we only install quality film.' },
        { q: 'How long does installation take?', a: 'A full vehicle tint usually takes a few hours, and the film needs a short curing period afterward (avoid rolling windows down for a few days). We\u2019ll give you exact aftercare instructions at handover.' },
      ]}
      priceNote="Window tinting pricing depends on the film type (carbon or ceramic), number of windows, and vehicle. Contact us for a free quote and film recommendation."
    />
  )
}
