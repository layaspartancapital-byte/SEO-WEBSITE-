'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Calendar, TrendingUp, Cpu, Target, Tv, Video, GitBranch, Code2, BarChart3, Newspaper, Sparkles, Mail, Instagram } from 'lucide-react'
import { SERVICES } from '@/lib/constants'
import { openCalendly } from '@/lib/useCalendlyModal'

const iconMap: Record<string, React.ElementType> = {
  TrendingUp, Cpu, Target, Tv, Video, GitBranch, Code2, BarChart3, Newspaper, Sparkles, Mail, Instagram,
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [servicesAccordion, setServicesAccordion] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setMegaOpen(false)
      setMobileOpen(false)
    }
  }, [])

  const navLinks = [
    { label: 'About', href: '/about' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header
      onKeyDown={handleKeyDown}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-[rgba(8,8,8,0.95)] backdrop-blur-[20px] border-b border-[rgba(255,255,255,0.06)]'
          : 'bg-transparent'
      }`}
      style={{ height: '72px' }}
    >
      <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-0.5 group">
          <span className="font-display font-bold text-xl tracking-tight text-white">
            OMNIVANCE
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-ember group-hover:shadow-[0_0_12px_rgba(232,101,26,0.6)] transition-shadow" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-sm font-medium text-white/60 hover:text-white transition-colors relative nav-link"
              aria-expanded={megaOpen}
              aria-haspopup="true"
            >
              Services
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${megaOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {megaOpen && (
                <motion.div
                  initial={{ clipPath: 'inset(0 0 100% 0)' }}
                  animate={{ clipPath: 'inset(0 0 0% 0)' }}
                  exit={{ clipPath: 'inset(0 0 100% 0)' }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="fixed left-0 right-0 top-[72px] bg-[rgba(8,8,8,0.97)] backdrop-blur-[20px] border-b border-[rgba(255,255,255,0.06)]"
                  role="menu"
                  onKeyDown={(e) => {
                    if (e.key === 'Escape') setMegaOpen(false)
                  }}
                >
                  <div className="container-max mx-auto px-8 py-8">
                    <div className="grid grid-cols-4 gap-4">
                      {SERVICES.map((service, i) => {
                        const Icon = iconMap[service.icon]
                        return (
                          <motion.div
                            key={service.slug}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.04, duration: 0.3 }}
                          >
                            <Link
                              href={`/services/${service.slug}`}
                              className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/[0.04] transition-colors group/item"
                              role="menuitem"
                              onClick={() => setMegaOpen(false)}
                            >
                              {Icon && <Icon className="w-5 h-5 text-ember mt-0.5 flex-shrink-0" />}
                              <div>
                                <span className="text-sm font-medium text-white group-hover/item:text-ember transition-colors">
                                  {service.title}
                                </span>
                                <p className="text-xs text-white/40 mt-0.5 line-clamp-1">
                                  {service.description}
                                </p>
                              </div>
                            </Link>
                          </motion.div>
                        )
                      })}
                    </div>
                    <div className="mt-6 pt-6 border-t border-white/[0.06] flex items-center justify-between">
                      <Link
                        href="/services"
                        className="text-sm text-white/60 hover:text-ember transition-colors"
                        onClick={() => setMegaOpen(false)}
                      >
                        View All Services →
                      </Link>
                      <button
                        onClick={() => { setMegaOpen(false); openCalendly() }}
                        className="btn-primary text-xs py-2.5 px-5"
                      >
                        Book a Free Audit
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/60 hover:text-white transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-ember transition-all duration-250 group-hover:w-full" />
            </Link>
          ))}

          <button onClick={openCalendly} className="btn-primary text-xs py-2.5 px-5">
            <Calendar className="w-3.5 h-3.5 mr-1.5" />
            Book a Call
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden relative w-8 h-8 flex items-center justify-center"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 top-[60px] bg-ink z-40 lg:hidden overflow-y-auto"
          >
            <nav className="flex flex-col p-6 gap-2" aria-label="Mobile navigation">
              {/* Services Accordion */}
              <button
                className="flex items-center justify-between py-3 text-lg font-display font-semibold"
                onClick={() => setServicesAccordion(!servicesAccordion)}
              >
                Services
                <ChevronDown className={`w-5 h-5 transition-transform ${servicesAccordion ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {servicesAccordion && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden pl-4"
                  >
                    {SERVICES.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="block py-2 text-sm text-white/60 hover:text-ember transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {s.title}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-3 text-lg font-display font-semibold hover:text-ember transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <button
                onClick={() => { setMobileOpen(false); openCalendly() }}
                className="btn-primary mt-6 w-full justify-center py-4 text-base"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book a Call
              </button>

              <div className="mt-auto pt-8 flex gap-4 justify-center">
                {['LinkedIn', 'Instagram', 'YouTube', 'X'].map((s) => (
                  <span key={s} className="text-xs text-white/30">{s}</span>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
