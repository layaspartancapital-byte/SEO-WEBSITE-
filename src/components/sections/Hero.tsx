'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { openCalendly } from '@/lib/useCalendlyModal'
import { heroSequence } from '@/lib/animations'
import dynamic from 'next/dynamic'

const ParticlesBackground = dynamic(() => import('@/components/ParticlesBackground'), {
  ssr: false,
})

const springEase: [number, number, number, number] = [0.22, 1, 0.36, 1]

export default function Hero() {
  const words = ['The', 'Agency', 'Behind', '8-Figure', 'Brand', 'Growth']

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'var(--grad-hero)' }}
    >
      <ParticlesBackground />

      <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 pt-20">
        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: heroSequence.trust.delay, duration: 0.6 }}
        >
          <h6 className="mb-6">TRUSTED BY 300+ GROWING BRANDS</h6>
        </motion.div>

        {/* H1 */}
        <h1 className="mb-6 max-w-5xl mx-auto">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: heroSequence.heading.delay + i * heroSequence.heading.stagger,
                duration: 0.6,
                ease: springEase,
              }}
              className={`inline-block mr-[0.3em] ${
                word === 'Brand' || word === 'Growth'
                  ? 'ember-gradient-text'
                  : ''
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: heroSequence.subheading.delay, duration: 0.6, ease: springEase }}
          className="text-lg max-w-2xl mx-auto mb-10"
        >
          From search rankings to TV screens — we run every channel, build every system,
          and deliver every result. No juggling. No excuses. Just growth.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: heroSequence.cta.delay, duration: 0.5, ease: springEase }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <button onClick={openCalendly} className="btn-primary text-base px-8 py-4">
            Book a Free Strategy Call
          </button>
          <a href="#results" className="btn-ghost text-base px-8 py-4">
            See Our Results →
          </a>
        </motion.div>

        {/* Social proof strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 text-[13px] text-white/60"
        >
          <span className="text-ember">★★★★★</span>
          <span>·</span>
          <span>47 industries</span>
          <span className="text-ember">·</span>
          <span>$50M+ generated</span>
          <span className="text-ember">·</span>
          <span>300+ clients</span>
        </motion.div>

        {/* Scroll arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#proof" aria-label="Scroll down">
            <ChevronDown className="w-6 h-6 text-ember animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
