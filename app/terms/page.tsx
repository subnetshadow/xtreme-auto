import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'

export const metadata = {
  title: 'Terms of Service | Xtreme Auto Detailing YYC',
  description:
    'Terms of Service for Xtreme Auto Detailing YYC — the terms that apply to our Calgary auto detailing services, quotes, bookings, and website use.',
  robots: { index: true, follow: true },
}

const updated = 'May 2026'

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="bg-xad-black">
        <section className="bg-xad-dark pt-32 pb-12">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-3">
              Terms of <span className="text-xad-gold">Service</span>
            </h1>
            <p className="text-xad-muted text-sm">Last updated: {updated}</p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <div className="flex flex-col gap-8 text-xad-gray leading-relaxed">
              <p>
                These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the Xtreme Auto Detailing YYC
                website and the detailing services we provide. By booking a service or using our website, you
                agree to these Terms.
              </p>

              <div>
                <h2 className="text-xl font-bold text-white mb-3">Our Services</h2>
                <p>
                  We provide automotive detailing services, including interior and exterior detailing, ceramic
                  coating, paint protection film, paint correction, window tinting, and headlight restoration,
                  in Calgary and surrounding areas. Specific services, inclusions, and timelines are confirmed
                  at the time of booking.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-3">Quotes &amp; Pricing</h2>
                <p>
                  Quotes are based on the information you provide and the condition of your vehicle. Because
                  vehicle condition can vary, final pricing may be adjusted after inspection — we will always
                  discuss any change with you before proceeding. Quotes are estimates and not binding until
                  confirmed.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-3">Booking, Deposits &amp; Cancellations</h2>
                <p>
                  Appointments are scheduled by phone, text, or through our contact details. Certain services
                  may require a deposit to reserve your slot. We ask that you give us reasonable notice if you
                  need to reschedule or cancel so we can offer the time to another customer. Cancellation terms
                  will be communicated when you book.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-3">Vehicle Condition &amp; Personal Belongings</h2>
                <p>
                  Please remove personal belongings and valuables from your vehicle before your appointment.
                  We are not responsible for items left in the vehicle. We will notify you if we discover any
                  pre-existing damage, and we reserve the right to decline work where a vehicle&rsquo;s condition
                  makes a service unsafe or unfeasible.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-3">Results &amp; Limitations</h2>
                <p>
                  We take great care to deliver high-quality results, but outcomes depend on the existing
                  condition of your vehicle. Some defects — such as deep scratches, severe oxidation, or damage
                  beneath the surface — may not be fully correctable. We will set clear expectations before
                  starting any work.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-3">Warranties</h2>
                <p>
                  Certain products we install, such as ceramic coatings and paint protection film, may carry
                  manufacturer warranties. Any applicable warranty terms and aftercare requirements will be
                  provided with the service. Failure to follow recommended aftercare may void coverage.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-3">Limitation of Liability</h2>
                <p>
                  To the fullest extent permitted by law, our liability for any claim relating to our services
                  is limited to the amount you paid for the service in question. We are not liable for indirect
                  or consequential damages.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-3">Contact</h2>
                <p>
                  Questions about these Terms? Contact us at{' '}
                  <a href="tel:5877072736" className="text-xad-gold hover:text-xad-warm">(587) 707-2736</a>{' '}
                  or{' '}
                  <a href="mailto:xtremedetailingpro@gmail.com" className="text-xad-gold hover:text-xad-warm">
                    xtremedetailingpro@gmail.com
                  </a>
                  .
                </p>
              </div>

              <p className="text-xad-muted text-sm border-t border-white/5 pt-6">
                We may update these Terms from time to time. Continued use of our website or services after
                changes are posted constitutes acceptance of the revised Terms.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
