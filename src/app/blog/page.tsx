import type { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from '@/lib/blogPosts'
import { webPageSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Marketing insights, SEO strategies, AI search optimization, and growth tactics from the Omnivance Media Group team.',
  alternates: { canonical: '/blog' },
}

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema('Blog', 'Marketing insights and strategies.', '/blog')),
        }}
      />
      <section className="bg-ink pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container-max mx-auto text-center">
          <h1 className="mb-4">Blog</h1>
          <p className="max-w-xl mx-auto">
            Actionable insights on SEO, paid advertising, AI search, CRM automation, and brand growth.
          </p>
        </div>
      </section>
      <section className="bg-ink-mid section-padding">
        <div className="container-max mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="service-card block group"
            >
              <span className="text-[10px] uppercase tracking-wider text-ember font-medium">
                {post.category}
              </span>
              <h2 className="text-lg mt-2 mb-2 group-hover:text-ember transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-white/60 mb-3 line-clamp-2">{post.description}</p>
              <div className="flex items-center gap-3 text-xs text-white/30">
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readingTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
