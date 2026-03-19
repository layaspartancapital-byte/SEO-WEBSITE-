import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/blogPosts'
import { webPageSchema } from '@/lib/schema'
import BlogListClient from './BlogListClient'

export const metadata: Metadata = {
  title: 'Insights & Strategy | Omnivance Media Group Blog',
  description: 'Expert insights on SEO, AEO, paid advertising, CRM automation, branding, and digital growth strategy from the Omnivance Media Group team.',
  alternates: { canonical: '/blog' },
}

export default function BlogPage() {
  const posts = getAllPosts()

  const clientPosts = posts.map((p) => ({
    slug: p.slug,
    title: p.title,
    description: p.description,
    date: p.date,
    author: p.author,
    readingTime: p.readingTime,
    category: p.category,
    coverImage: p.coverImage,
    coverImageAlt: p.coverImageAlt,
  }))

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema('Insights & Strategy', 'Expert marketing insights and digital growth strategies.', '/blog')),
        }}
      />

      {/* Hero */}
      <section className="bg-ink pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="container-max mx-auto text-center">
          <div className="w-16 h-1 bg-ember mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-4">
            Insights & Strategy
          </h1>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Data-driven perspectives on SEO, AEO, paid advertising, CRM automation, and brand growth from the Omnivance team.
          </p>
        </div>
      </section>

      <BlogListClient posts={clientPosts} />
    </>
  )
}
