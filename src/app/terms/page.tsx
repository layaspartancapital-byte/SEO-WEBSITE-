import type { Metadata } from 'next'
import { webPageSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Omnivance Media Group Terms of Service — the terms and conditions governing your use of our website and services.',
  alternates: { canonical: '/terms' },
}

export default function TermsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema('Terms of Service', 'Our terms of service.', '/terms')),
        }}
      />
      <section className="bg-ink pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl mb-8">Terms of Service</h1>
          <p className="text-sm text-white/40 mb-8">Last updated: January 1, 2025</p>

          <div className="space-y-8 text-white/60 text-sm leading-relaxed">
            <div>
              <h2 className="text-xl text-white mb-3">Acceptance of Terms</h2>
              <p>By accessing and using the Omnivance Media Group website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.</p>
            </div>

            <div>
              <h2 className="text-xl text-white mb-3">Services</h2>
              <p>Omnivance Media Group provides digital marketing, technology, and consulting services. Specific services, deliverables, timelines, and pricing are outlined in individual service agreements between Omnivance and each client.</p>
            </div>

            <div>
              <h2 className="text-xl text-white mb-3">Intellectual Property</h2>
              <p>All content on this website — including text, graphics, logos, images, and software — is the property of Omnivance Media Group or its content suppliers and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works from any content without our express written permission.</p>
            </div>

            <div>
              <h2 className="text-xl text-white mb-3">User Conduct</h2>
              <p>You agree not to use our website for any unlawful purpose, to impersonate any person or entity, to interfere with or disrupt the website or its servers, or to attempt to gain unauthorized access to any portion of the website.</p>
            </div>

            <div>
              <h2 className="text-xl text-white mb-3">Limitation of Liability</h2>
              <p>Omnivance Media Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services. Our total liability shall not exceed the amount paid by you for the services in question.</p>
            </div>

            <div>
              <h2 className="text-xl text-white mb-3">Disclaimer of Warranties</h2>
              <p>Our website and services are provided &ldquo;as is&rdquo; without warranties of any kind, whether express or implied. We do not guarantee specific results from our marketing services, as outcomes depend on numerous factors including market conditions, competition, and client participation.</p>
            </div>

            <div>
              <h2 className="text-xl text-white mb-3">Governing Law</h2>
              <p>These Terms of Service shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles.</p>
            </div>

            <div>
              <h2 className="text-xl text-white mb-3">Changes to Terms</h2>
              <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website after any changes constitutes acceptance of the new terms.</p>
            </div>

            <div>
              <h2 className="text-xl text-white mb-3">Contact</h2>
              <p>For questions about these Terms of Service, contact us at hello@omnivancemedia.com.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
