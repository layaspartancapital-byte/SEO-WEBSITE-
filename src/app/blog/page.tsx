import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/blogPosts'
import { webPageSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Insights & Strategy | Omnivance Media Group Blog',
  description: 'Expert insights on SEO, AEO, paid advertising, CRM automation, branding, and digital growth strategy from the Omnivance Media Group team.',
  alternates: { canonical: '/blog' },
}

function CategoryBadge({ category }: { category: string }) {
  return (
    <span className="inline-block bg-ember/20 text-ember text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full">
      {category}
    </span>
  )
}

function AuthorInitial({ name }: { name: string }) {
  const initial = name?.charAt(0) || 'O'
  return (
    <div className="w-7 h-7 rounded-full bg-ember/20 text-ember flex items-center justify-center text-xs font-bold shrink-0">
      {initial}
    </div>
  )
}

function PostMeta({ author, date, readingTime }: { author: string; date: string; readingTime: string }) {
  return (
    <div className="flex items-center gap-2.5 text-xs text-white/40">
      <AuthorInitial name={author} />
      <span>{author}</span>
      <span>·</span>
      <span>{date}</span>
      <span>·</span>
      <span>{readingTime}</span>
    </div>
  )
}

export default function BlogPage() {
  const posts = getAllPosts()
  const [featured, ...rest] = posts

  const categories = Array.from(new Set(posts.map((p) => p.category)))

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

      {/* Category Filter */}
      <section className="bg-ink px-4 sm:px-6 lg:px-8 pb-8">
        <div className="container-max mx-auto flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <span
              key={cat}
              className="text-xs uppercase tracking-wider text-white/40 border border-white/10 px-4 py-2 rounded-full hover:border-ember hover:text-ember transition-colors cursor-pointer"
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* Featured Post */}
      {featured && (
        <section className="bg-ink px-4 sm:px-6 lg:px-8 pb-12">
          <div className="container-max mx-auto">
            <Link
              href={`/blog/${featured.slug}`}
              className="group block bg-ink-mid rounded-2xl overflow-hidden border border-white/5 hover:border-ember/30 transition-all duration-300 hover:shadow-[0_0_40px_rgba(232,101,26,0.08)]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {featured.coverImage ? (
                  <div className="aspect-[16/10] lg:aspect-auto overflow-hidden">
                    <img
                      src={featured.coverImage}
                      alt={featured.coverImageAlt || featured.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <div className="aspect-[16/10] lg:aspect-auto bg-gradient-to-br from-ember/20 to-ink-mid" />
                )}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <CategoryBadge category={featured.category} />
                  <h2 className="text-2xl lg:text-3xl font-display mt-4 mb-4 group-hover:text-ember transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-white/50 mb-6 line-clamp-3 leading-relaxed">
                    {featured.description}
                  </p>
                  <PostMeta author={featured.author} date={featured.date} readingTime={featured.readingTime} />
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Magazine Grid */}
      <section className="bg-ink-mid section-padding">
        <div className="container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, i) => {
              const isLarge = i % 5 === 0
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className={`group block bg-ink rounded-xl overflow-hidden border border-white/5 hover:border-ember/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(232,101,26,0.06)] hover:-translate-y-1 ${
                    isLarge ? 'md:col-span-2 lg:col-span-2' : ''
                  }`}
                >
                  {post.coverImage ? (
                    <div className={`overflow-hidden ${isLarge ? 'aspect-[21/9]' : 'aspect-[16/10]'}`}>
                      <img
                        src={post.coverImage}
                        alt={post.coverImageAlt || post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ) : (
                    <div className={`bg-gradient-to-br from-ember/10 to-ink ${isLarge ? 'aspect-[21/9]' : 'aspect-[16/10]'}`} />
                  )}
                  <div className="p-6">
                    <CategoryBadge category={post.category} />
                    <h2 className={`font-display mt-3 mb-2 group-hover:text-ember transition-colors ${isLarge ? 'text-xl lg:text-2xl' : 'text-lg'}`}>
                      {post.title}
                    </h2>
                    <p className="text-sm text-white/50 mb-4 line-clamp-2 leading-relaxed">
                      {post.description}
                    </p>
                    <PostMeta author={post.author} date={post.date} readingTime={post.readingTime} />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
