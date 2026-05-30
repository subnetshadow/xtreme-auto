import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'

export const metadata = {
  title: 'Privacy Policy | Xtreme Auto Detailing YYC',
  description:
    'Privacy Policy for Xtreme Auto Detailing YYC — how we collect, use, and protect the personal information of our Calgary detailing customers.',
  robots: { index: true, follow: true },
}

const updated = 'May 2026'

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-xad-black">
        <section className="bg-xad-dark pt-32 pb-12">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-3">
              Privacy <span className="text-xad-gold">Policy</span>
            </h1>
            <p className="text-xad-muted text-sm">Last updated: {updated}</p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 md:px-6 prose-invert">
            <div className="flex flex-col gap-8 text-xad-gray leading-relaxed">
              <p>
                Xtreme Auto Detailing YYC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy.
                This policy explains what information we collect, how we use it, and the choices you have.
                By using our website or services, you agree to the practices described below.
              </p>

              <div>
                <h2 className="text-xl font-bold text-white mb-3">Information We Collect</h2>
                <p>
                  We collect information you provide directly to us — such as your name, phone number,
                  email address, vehicle details, and any message you send when you contact us or book a
                  service. When you visit our website, we may also automatically collect standard technical
                  data such as your device type, browser, and pages viewed, through cookies and analytics tools.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-3">How We Use Your Information</h2>
                <p>
                  We use your information to respond to inquiries, schedule and provide our detailing services,
                  send quotes and appointment confirmations, improve our website and services, and communicate
                  with you about your booking. We do not sell your personal information to third parties.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-3">Cookies &amp; Analytics</h2>
                <p>
                  Our website may use cookies and third-party analytics services to understand how visitors
                  use the site so we can improve it. You can control or disable cookies through your browser
                  settings, though some parts of the site may not function as intended without them.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-3">Sharing of Information</h2>
                <p>
                  We may share information with trusted service providers who help us operate our business
                  (for example, hosting, scheduling, or communication tools), only as needed to provide our
                  services. We may also disclose information if required by law or to protect our rights.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-3">Data Retention &amp; Security</h2>
                <p>
                  We keep personal information only as long as necessary for the purposes described in this
                  policy, and we take reasonable measures to protect it against unauthorized access, loss, or
                  misuse. No method of transmission or storage is completely secure, however, and we cannot
                  guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-3">Your Rights</h2>
                <p>
                  You may request to access, correct, or delete the personal information we hold about you,
                  or ask us to stop contacting you, by reaching out using the details below. We will respond
                  in accordance with applicable Canadian privacy laws, including PIPEDA and Alberta&rsquo;s PIPA.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-3">Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy or how we handle your information, contact us
                  at{' '}
                  <a href="tel:5877072736" className="text-xad-gold hover:text-xad-warm">(587) 707-2736</a>{' '}
                  or{' '}
                  <a href="mailto:xtremedetailingpro@gmail.com" className="text-xad-gold hover:text-xad-warm">
                    xtremedetailingpro@gmail.com
                  </a>
                  .
                </p>
              </div>

              <p className="text-xad-muted text-sm border-t border-white/5 pt-6">
                This policy may be updated from time to time. Changes will be posted on this page with a
                revised &ldquo;Last updated&rdquo; date.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
