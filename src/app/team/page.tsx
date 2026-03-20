import type { Metadata } from 'next'
import { webPageSchema } from '@/lib/schema'
import TeamContent from './TeamContent'

export const metadata: Metadata = {
  title: 'Our Team | Omnivance Media Group',
  description:
    'Meet the experts behind Omnivance Media Group — SEO, paid media, CRM, and branding specialists driving real results for brands worldwide.',
  alternates: { canonical: '/team' },
}

export default function TeamPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageSchema(
              'Our Team | Omnivance Media Group',
              'Meet the experts behind Omnivance Media Group.',
              '/team'
            )
          ),
        }}
      />
      <TeamContent />
    </>
  )
}
