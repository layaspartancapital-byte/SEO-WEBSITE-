import type { Metadata } from 'next'
import { webPageSchema } from '@/lib/schema'
import AboutContent from './AboutContent'

export const metadata: Metadata = {
  title: 'About Omnivance Media Group',
  description: 'Learn about Omnivance Media Group — the full-service marketing and technology agency behind 8-figure brand growth across 47 industries.',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageSchema('About Omnivance Media Group', 'Learn about our agency.', '/about')
          ),
        }}
      />
      <AboutContent />
    </>
  )
}
