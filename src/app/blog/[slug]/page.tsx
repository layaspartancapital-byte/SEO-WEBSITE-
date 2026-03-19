import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { blogPosts } from '@/lib/blogPosts'
import { articleSchema, breadcrumbSchema } from '@/lib/schema'
import BlogContent from './BlogContent'

type Props = {
  params: { slug: string }
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    openGraph: { title: post.title, description: post.description, type: 'article' },
    alternates: { canonical: `/blog/${params.slug}` },
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  const relatedPosts = blogPosts.filter((p) => post.relatedSlugs.includes(p.slug))

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema(post.title, post.description, `/blog/${post.slug}`, post.date, post.date, post.author)
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Blog', url: '/blog' },
              { name: post.title, url: `/blog/${post.slug}` },
            ])
          ),
        }}
      />

      <article className="bg-ink pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <nav className="text-sm text-white/40 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-ember transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-ember transition-colors">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white/60 line-clamp-1">{post.title}</span>
          </nav>

          <span className="text-[10px] uppercase tracking-wider text-ember font-medium">{post.category}</span>
          <h1 className="mt-2 mb-4 text-3xl md:text-4xl lg:text-5xl">{post.title}</h1>

          <div className="flex items-center gap-4 text-sm text-white/40 mb-8 pb-8 border-b border-ink-border">
            <span>{post.author}</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readingTime}</span>
          </div>

          <BlogContent content={post.content} />
        </div>
      </article>

      {/* Related Posts */}
      <section className="bg-ink-mid section-padding">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedPosts.map((rp) => (
              <Link key={rp.slug} href={`/blog/${rp.slug}`} className="service-card block group">
                <h3 className="text-sm font-semibold mb-1 group-hover:text-ember transition-colors">
                  {rp.title}
                </h3>
                <p className="text-xs text-white/40">{rp.readingTime}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink section-padding text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl mb-4">Ready to Put These Strategies to Work?</h2>
          <p className="mb-6">Book a free strategy call and let our team build a growth plan for your business.</p>
          <BlogCTA />
        </div>
      </section>
    </>
  )
}

function BlogCTA() {
  return <BlogCTAClient />
}

import BlogCTAClient from './BlogCTAClient'
