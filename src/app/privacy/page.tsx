import type { Metadata } from 'next'
import { webPageSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Omnivance Media Group Privacy Policy — how we collect, use, and protect your personal information.',
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema('Privacy Policy', 'Our privacy policy.', '/privacy')),
        }}
      />
      <section className="bg-ink pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl mb-8">Privacy Policy</h1>
          <p className="text-sm text-white/40 mb-8">Last updated: January 1, 2025</p>

          <div className="space-y-8 text-white/60 text-sm leading-relaxed">
            <div>
              <h2 className="text-xl text-white mb-3">Information We Collect</h2>
              <p>We collect information you provide directly to us, including your name, email address, phone number, company name, and any other information you choose to provide when filling out forms on our website, booking calls, or communicating with us.</p>
              <p className="mt-2">We also automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, pages viewed, and the dates and times of your visits.</p>
            </div>

            <div>
              <h2 className="text-xl text-white mb-3">How We Use Your Information</h2>
              <p>We use the information we collect to provide, maintain, and improve our services; communicate with you about our services, including responding to inquiries and scheduling consultations; send you marketing communications (with your consent); analyze website usage to improve user experience; and comply with legal obligations.</p>
            </div>

            <div>
              <h2 className="text-xl text-white mb-3">Information Sharing</h2>
              <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except to trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep this information confidential.</p>
            </div>

            <div>
              <h2 className="text-xl text-white mb-3">Cookies and Tracking Technologies</h2>
              <p>Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors are coming from. You can choose to disable cookies through your browser settings, though this may affect your experience on our website.</p>
            </div>

            <div>
              <h2 className="text-xl text-white mb-3">Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect the security of your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
            </div>

            <div>
              <h2 className="text-xl text-white mb-3">Your Rights</h2>
              <p>You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your data. To exercise these rights, please contact us at omnivancemedia@gmail.com.</p>
            </div>

            <div>
              <h2 className="text-xl text-white mb-3">Changes to This Policy</h2>
              <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the &ldquo;Last updated&rdquo; date.</p>
            </div>

            <div>
              <h2 className="text-xl text-white mb-3">Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at omnivancemedia@gmail.com.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
