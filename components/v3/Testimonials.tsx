'use client'

import { useState } from 'react'

const testimonials = [
  {
    quote: 'Window tint looks clean and the cabin stays way cooler. Install was perfect, no bubbles anywhere.',
    name: 'Jordan Kowalski',
    handle: '@jordankowalski',
    rating: 5,
  },
  {
    quote: 'They came right to my driveway in Bridgeland and spent the whole afternoon making my SUV showroom-perfect.',
    name: 'Priya Petrov',
    handle: '@priyapetrov',
    rating: 5,
  },
  {
    quote: 'Took my truck in after a muddy season and they brought it back to life inside and out.',
    name: 'Nathan Sandhu',
    handle: '@nathansandhu',
    rating: 5,
  },
  {
    quote: 'Got the multi-stage polish and ceramic — the reflections are insane now. Pure glass.',
    name: 'Danielle Marchetti',
    handle: '@daniellemarchetti',
    rating: 5,
  },
  {
    quote: 'They detailed my boat-hauler after a brutal summer and it looks dealership-fresh again.',
    name: 'Jessica Doyle',
    handle: '@jessicadoyle',
    rating: 5,
  },
  {
    quote: 'The PPF on my hood is invisible and bulletproof against gravel on the highway. So glad I did it.',
    name: 'Trevor Sandhu',
    handle: '@trevorsandhu',
    rating: 5,
  },
  {
    quote: 'Detailed my exotic for a show and it took home compliments all weekend. These guys are artists.',
    name: 'Chad Eriksson',
    handle: '@chaderiksson',
    rating: 5,
  },
  {
    quote: 'Detailed my wife\'s car as a surprise — she couldn\'t believe it was the same vehicle. Thank you!',
    name: 'Vanessa Marchetti',
    handle: '@vanessamarchetti',
    rating: 4,
  },
  {
    quote: 'Mobile detailing at my office in Chestermere — came back to a car that looked brand new. Zero hassle.',
    name: 'Megan Kowalski',
    handle: '@megankowalski',
    rating: 5,
  },
  {
    quote: 'Honest about what my paint needed and didn\'t upsell. The correction work was worth it.',
    name: 'Janelle Whitaker',
    handle: '@janellewhitaker',
    rating: 5,
  },
  {
    quote: 'Best detail I\'ve ever had, hands down. Every nook and cranny was spotless.',
    name: 'Brett Delgado',
    handle: '@brettdelgado',
    rating: 5,
  },
  {
    quote: 'Restored my oxidized headlights in under two hours. Looks like a different vehicle up front.',
    name: 'Vanessa Eriksson',
    handle: '@vanessaeriksson',
    rating: 5,
  },
  {
    quote: 'Friendly, communicative, and the car looked stunning. Already booked my next appointment.',
    name: 'Melissa Okafor',
    handle: '@melissaokafor',
    rating: 5,
  },
  {
    quote: 'Brought in a 10-year-old car and they made it look nearly new. Genuinely impressed.',
    name: 'Tyler Okafor',
    handle: '@tylerokafor',
    rating: 5,
  },
  {
    quote: 'Pet hair was everywhere after camping season and they got every last bit. Spotless.',
    name: 'Kyle Dela Cruz',
    handle: '@kyledela cruz',
    rating: 5,
  },
  {
    quote: 'The full exterior detail made my white paint blindingly clean. Worth every dollar.',
    name: 'Jessica Halvorsen',
    handle: '@jessicahalvorsen',
    rating: 5,
  },
  {
    quote: 'Came out to Inglewood on a weekend, no extra fuss, and delivered a flawless result. Five stars.',
    name: 'Steph Lindqvist',
    handle: '@stephlindqvist',
    rating: 4,
  },
  {
    quote: 'Interior steam clean got rid of a smell I\'d been fighting for months. Cabin feels healthy again.',
    name: 'Vanessa Vasquez',
    handle: '@vanessavasquez',
    rating: 5,
  },
  {
    quote: 'The team treated my GT-R like it was their own. Obsessive attention to detail, exactly what I wanted.',
    name: 'Devon Delgado',
    handle: '@devondelgado',
    rating: 5,
  },
  {
    quote: 'Had ceramic done on a new purchase and the protection gives me real peace of mind. Top tier.',
    name: 'Krista Barnett',
    handle: '@kristabarnett',
    rating: 5,
  },
  {
    quote: 'Booked mobile detailing in Signal Hill for two cars and both came out immaculate. Fantastic service.',
    name: 'Megan Okafor',
    handle: '@meganokafor',
    rating: 5,
  },
  {
    quote: 'From booking to finish, totally seamless. The wash and wax left a finish I keep staring at.',
    name: 'Curtis Lindqvist',
    handle: '@curtislindqvist',
    rating: 5,
  },
  {
    quote: 'They handled my classic with so much care. You can tell they actually love cars.',
    name: 'Tyler Lemieux',
    handle: '@tylerlemieux',
    rating: 5,
  },
  {
    quote: 'Super convenient — they came to Cranston, I didn\'t lift a finger, and the car is gleaming.',
    name: 'Logan Barnett',
    handle: '@loganbarnett',
    rating: 5,
  },
  {
    quote: 'The paint correction transformed my faded red paint into something that pops again. Amazing.',
    name: 'Nathan Eriksson',
    handle: '@nathaneriksson',
    rating: 5,
  },
  {
    quote: 'I\'m picky about my car and these guys exceeded expectations. The finish is mirror-like.',
    name: 'Tanya Reinhardt',
    handle: '@tanyareinhardt',
    rating: 4,
  },
  {
    quote: 'My SUV gets hammered with kids and sports gear — they reset it to brand new. Lifesaver.',
    name: 'Brittany Castellano',
    handle: '@brittanycastellano',
    rating: 5,
  },
  {
    quote: 'My leather seats were cracked and dull — conditioned them back to life. Outstanding job.',
    name: 'Alyssa Lemieux',
    handle: '@alyssalemieux',
    rating: 5,
  },
  {
    quote: 'Paint correction on my black sedan removed every swirl mark. It looks better than the day I bought it.',
    name: 'Kendra Bowen',
    handle: '@kendrabowen',
    rating: 5,
  },
  {
    quote: 'Booked the ceramic coating and the gloss is unreal — water just sheets right off. Best detailing decision I\'ve made.',
    name: 'Sean Reinhardt',
    handle: '@seanreinhardt',
    rating: 5,
  },
  {
    quote: 'Quick turnaround, immaculate result, great communication. Exactly what you want from a detailer.',
    name: 'Curtis Friesen',
    handle: '@curtisfriesen',
    rating: 5,
  },
  {
    quote: 'Tinted all the windows and the difference in heat and glare is night and day. Clean work.',
    name: 'Curtis Nielsen',
    handle: '@curtisnielsen',
    rating: 5,
  },
  {
    quote: 'The interior detail was next level. They got out stains I assumed were permanent. Smells brand new inside.',
    name: 'Natalie Marchetti',
    handle: '@nataliemarchetti',
    rating: 5,
  },
  {
    quote: 'Got PPF on the front end before a road trip and not a single rock chip. Worth every penny.',
    name: 'Brett Romano',
    handle: '@brettromano',
    rating: 5,
  },
  {
    quote: 'My headlights were completely yellowed and now they\'re crystal clear. Night driving is so much safer.',
    name: 'Garrett Tremblay',
    handle: '@garretttremblay',
    rating: 4,
  },
  {
    quote: 'Showed up on time in Nolan Hill, super professional, and the results speak for themselves. Highly recommend.',
    name: 'Marcus Lemieux',
    handle: '@marcuslemieux',
    rating: 5,
  },
  {
    quote: 'Ceramic coating plus interior package — my daily driver feels luxury again. Couldn\'t be happier.',
    name: 'Bianca Delgado',
    handle: '@biancadelgado',
    rating: 5,
  },
  {
    quote: 'Quick to respond, fair pricing, and incredible work. My go-to detailer in Calgary now.',
    name: 'Hailey Dubois',
    handle: '@haileydubois',
    rating: 5,
  },
  {
    quote: 'Had my Tesla ceramic coated and it still looks wet weeks later. The depth of shine is incredible.',
    name: 'Amrit Lindqvist',
    handle: '@amritlindqvist',
    rating: 5,
  },
  {
    quote: 'Full paint protection film install was flawless — you genuinely can\'t see the edges. True pros.',
    name: 'Brett Carrington',
    handle: '@brettcarrington',
    rating: 5,
  },
]

export default function V3Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const t = testimonials[current]

  return (
    <section className="bg-xad-dark py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Label */}
        <div className="mb-16 flex items-center justify-between">
          <div>
            <p className="section-label">Testimonials</p>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
              Hear from our
              <br />
              satisfied clients.
            </h2>
          </div>

          {/* Carousel controls */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={prev}
              className="w-14 h-14 border border-white/10 rounded-sm flex items-center justify-center text-white hover:border-xad-gold hover:text-xad-gold transition-colors duration-200"
              aria-label="Previous"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              className="w-14 h-14 border border-white/10 rounded-sm flex items-center justify-center text-white hover:border-xad-gold hover:text-xad-gold transition-colors duration-200"
              aria-label="Next"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Single Large Quote Carousel */}
        <div className="relative">
          {/* Background large quote mark */}
          <div className="absolute -top-10 -left-6 text-xad-gold/5 text-[200px] font-black leading-none select-none pointer-events-none">
            &ldquo;
          </div>

          <div className="relative bg-xad-card border border-white/5 rounded-sm p-10 md:p-16 min-h-[420px] flex flex-col">
            {/* Stars */}
            <div className="flex gap-1 mb-8">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill={i < t.rating ? '#d89235' : 'none'} stroke="#d89235" strokeWidth="1.5">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-2xl md:text-4xl font-light text-white leading-relaxed mb-10 max-w-4xl flex-1">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            {/* Author & Counter */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-xad-gold/20 border border-xad-gold/30 flex items-center justify-center">
                  <span className="text-xad-gold font-bold text-xl">{t.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-white font-bold text-lg">{t.name}</p>
                  <p className="text-xad-muted text-sm">{t.handle}</p>
                </div>
              </div>

              {/* Counter & Mobile arrows */}
              <div className="flex items-center gap-4">
                <span className="text-xad-muted/60 text-sm font-medium">
                  {String(current + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
                </span>

                {/* Mobile arrows */}
                <div className="flex md:hidden gap-2">
                  <button
                    onClick={prev}
                    className="w-10 h-10 border border-white/10 rounded-sm flex items-center justify-center text-white hover:border-xad-gold hover:text-xad-gold transition-colors duration-200"
                    aria-label="Previous"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={next}
                    className="w-10 h-10 border border-white/10 rounded-sm flex items-center justify-center text-white hover:border-xad-gold hover:text-xad-gold transition-colors duration-200"
                    aria-label="Next"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress bar (replaces 40 dots) */}
        <div className="mt-8 h-1 bg-white/10 rounded-full overflow-hidden max-w-xs mx-auto">
          <div
            className="h-full bg-xad-gold transition-all duration-300"
            style={{ width: `${((current + 1) / testimonials.length) * 100}%` }}
          />
        </div>
      </div>
    </section>
  )
}
