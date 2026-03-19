import type { Metadata } from 'next'
import Link from 'next/link'
import { SERVICES } from '@/lib/constants'
import { blogPosts } from '@/lib/blogPosts'

export const metadata: Metadata = {
  title: 'Sitemap',
  description: 'Complete sitemap of Omnivance Media Group website.',
  alternates: { canonical: '/sitemap-page' },
}

export default function SitemapPage() {
  return (
    <section className="bg-ink pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container-max mx-auto">
        <h1 className="text-3xl mb-8">Sitemap</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-lg mb-4">Pages</h2>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Case Studies', href: '/case-studies' },
                { label: 'Blog', href: '/blog' },
                { label: 'Contact', href: '/contact' },
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Terms of Service', href: '/terms' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-ember transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg mb-4">Services</h2>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm text-white/60 hover:text-ember transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg mb-4">Blog</h2>
            <ul className="space-y-2">
              {blogPosts.map((p) => (
                <li key={p.slug}>
                  <Link href={`/blog/${p.slug}`} className="text-sm text-white/60 hover:text-ember transition-colors">
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
