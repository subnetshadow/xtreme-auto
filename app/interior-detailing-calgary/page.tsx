import ServicePageTemplate from '@/components/services/ServicePageTemplate'

export const metadata = {
  title: 'Interior & Exterior Car Detailing Calgary | Xtreme Auto Detailing YYC',
  description:
    'Professional interior and exterior car detailing in Calgary. Deep interior steam cleaning, leather conditioning, stain & odor removal, plus full exterior hand wash, decontamination & protection. Mobile & studio service across the Calgary region.',
  keywords:
    'interior detailing Calgary, car interior cleaning Calgary, exterior detailing Calgary, full car detailing Calgary, auto detailing YYC, leather cleaning Calgary, steam cleaning car interior Calgary',
}

export default function InteriorDetailingPage() {
  return (
    <ServicePageTemplate
      eyebrow="Interior & Exterior · Calgary"
      title="Interior & Exterior"
      titleAccent="Detailing"
      intro="A complete top-to-bottom transformation — inside and out. We steam-clean, sanitize, and condition every interior surface, then hand wash, decontaminate, and protect the exterior. The result is a vehicle that looks, smells, and feels factory-fresh, whether it's a daily driver or a six-figure exotic."
      heroImage="/images/mclaren-interior-alcantara.jpeg"
      heroAlt="Detailed McLaren Alcantara interior in Calgary"
      benefits={[
        { title: 'Healthier Cabin', description: 'Steam sanitizing kills bacteria, allergens, and odor-causing buildup in seats, carpets, and vents — a genuinely cleaner space for you and your passengers.' },
        { title: 'Protected Surfaces', description: 'Leather is cleaned and conditioned to prevent cracking; plastics and trim are dressed to resist UV fading and keep that rich, factory look longer.' },
        { title: 'Spotless Exterior', description: 'A proper hand wash, clay decontamination, and sealant remove embedded grime and leave a slick, glossy finish that ordinary car washes can never achieve.' },
        { title: 'Protected Resale Value', description: 'A consistently detailed interior and exterior is one of the biggest factors in resale value. Regular detailing pays for itself when it\u2019s time to sell or trade.' },
      ]}
      process={[
        { step: '01', title: 'Interior Strip', description: 'Remove debris, vacuum thoroughly, and clear every cup holder, crevice, and seat track.' },
        { step: '02', title: 'Steam & Extract', description: 'Steam clean and hot-water-extract carpets, mats, and upholstery to lift stains and odors at the source.' },
        { step: '03', title: 'Condition & Dress', description: 'Clean and condition leather, dress plastics and trim, and finish glass streak-free inside and out.' },
        { step: '04', title: 'Exterior Detail', description: 'Hand wash, decontaminate, and apply wax or sealant for a protected, mirror-like exterior finish.' },
      ]}
      galleryImages={[
        { src: '/images/bmw-interior-clean.jpeg', alt: 'Detailed BMW interior Calgary' },
        { src: '/images/bugatti-interior-steering.jpeg', alt: 'Detailed Bugatti Chiron interior Calgary' },
        { src: '/images/mclaren-interior-alcantara.jpeg', alt: 'McLaren Alcantara interior detailing Calgary' },
        { src: '/images/bugatti-interior-showroom.jpeg', alt: 'Bugatti interior detailing Calgary' },
        { src: '/images/lexus-ls500-front.jpeg', alt: 'Detailed Lexus LS500 exterior Calgary' },
        { src: '/images/mercedes-e63-garage.jpeg', alt: 'Detailed Mercedes E63 exterior Calgary' },
      ]}
      faqs={[
        { q: 'What\u2019s the difference between interior and exterior detailing?', a: 'Interior detailing focuses on cleaning, sanitizing, and conditioning everything inside the cabin \u2014 seats, carpets, leather, plastics, and glass. Exterior detailing covers washing, decontaminating, polishing, and protecting the paint, wheels, and trim. Most owners book them together for a complete result.' },
        { q: 'How long does a full interior and exterior detail take?', a: 'A complete interior and exterior detail typically takes several hours depending on vehicle size and condition. Heavily soiled vehicles or those needing deep stain and odor work take longer. We\u2019ll give you an honest time estimate when you book.' },
        { q: 'Can you remove pet hair, stains, and odors?', a: 'Yes. We specialize in deep extraction for stubborn stains, pet hair removal, and odor elimination using steam and professional-grade products. For severe odors we also offer additional treatments \u2014 just let us know what you\u2019re dealing with.' },
        { q: 'Do you offer mobile interior and exterior detailing?', a: 'Yes \u2014 we bring our full mobile detailing setup to your home or workplace anywhere in the Calgary region. Some deeper services are best performed at our studio, and we\u2019ll always recommend the best option for your vehicle.' },
        { q: 'How often should I get my car detailed?', a: 'For most drivers, a full interior and exterior detail every 3\u20134 months keeps the vehicle in excellent shape. If you drive a lot, have kids or pets, or want to preserve a premium vehicle, more frequent maintenance details are worthwhile.' },
      ]}
      priceNote="Interior and exterior detailing pricing varies by vehicle size, condition, and the package you choose (standard clean vs. deep detail). Contact us for a free, no-pressure quote tailored to your vehicle."
    />
  )
}
