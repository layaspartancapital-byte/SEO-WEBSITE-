'use client'

import Link from 'next/link'
import { SERVICES } from '@/lib/constants'
import { openCalendly } from '@/lib/useCalendlyModal'

export default function Footer() {
  const companyLinks = [
    { label: 'About', href: '/about' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ]

  const socialLinks = [
    { label: 'LinkedIn', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'YouTube', href: '#' },
    { label: 'X', href: '#' },
    { label: 'Facebook', href: '#' },
  ]

  return (
    <footer className="bg-ink-soft relative">
      <div className="container-max mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-12">
          {/* Col 1: Logo & Social */}
          <div>
            <Link href="/" className="flex items-center gap-0.5 mb-4">
              <span className="font-display font-bold text-xl tracking-tight">OMNIVANCE</span>
              <span className="w-1.5 h-1.5 rounded-full bg-ember" />
            </Link>
            <p className="text-sm text-white/40 mb-6">
              Every Channel. Every Touchpoint. Every Result.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-ember-dim/40 flex items-center justify-center text-white/40 text-xs hover:bg-ember hover:text-white hover:border-ember transition-all duration-200"
                >
                  {s.label[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h6 className="mb-4">SERVICES</h6>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-[13px] text-white/60 hover:text-ember transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h6 className="mb-4">COMPANY</h6>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-white/60 hover:text-ember transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Get Started */}
          <div>
            <h6 className="mb-4">GET STARTED</h6>
            <p className="text-sm text-white/60 mb-4">
              Ready to scale? Book a free strategy session.
            </p>
            <button onClick={openCalendly} className="btn-primary text-sm w-full justify-center">
              Book a Call
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Omnivance Media Group. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-white/30">
            <Link href="/privacy" className="hover:text-white/60 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white/60 transition-colors">Terms</Link>
            <Link href="/sitemap-page" className="hover:text-white/60 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
