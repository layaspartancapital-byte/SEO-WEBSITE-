import type { Metadata } from 'next'
import { webPageSchema } from '@/lib/schema'
import ContactContent from './ContactContent'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Book a free strategy session with Omnivance Media Group. 30 minutes, zero fluff, a clear roadmap for your business growth.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageSchema('Contact Omnivance Media Group', 'Book a free strategy session.', '/contact')
          ),
        }}
      />
      <ContactContent />
    </>
  )
}
