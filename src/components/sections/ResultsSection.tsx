'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useScrollReveal } from '@/lib/useScrollReveal'
import { fadeUp, scaleIn, stagger } from '@/lib/animations'
import { RESULTS } from '@/lib/constants'

export default function ResultsSection() {
  const { ref, controls } = useScrollReveal()

  return (
    <section id="results" className="bg-ink section-padding" ref={ref}>
      <motion.div variants={fadeUp} initial="hidden" animate={controls} className="container-max mx-auto">
        <div className="text-center mb-12">
          <h5 className="mb-4">CLIENT RESULTS</h5>
          <h2 className="mb-4">Real Numbers. Real Businesses. Real Growth.</h2>
          <p>We don&apos;t do vague case studies. Every number is tracked, verified, and repeatable.</p>
        </div>

        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 lg:grid-cols-3 gap-5"
        >
          {RESULTS.map((result) => (
            <motion.div
              key={result.tag}
              variants={scaleIn}
              className="bg-[var(--grad-card)] border-l-[3px] border-l-ember border border-ink-border rounded-xl p-6"
              style={{ background: 'var(--grad-card)' }}
            >
              <span className="inline-block bg-ember/20 text-ember text-[10px] uppercase font-semibold px-2 py-1 rounded mb-4 tracking-wider">
                {result.tag}
              </span>
              <h3 className="text-xl md:text-2xl mb-2">{result.stat}</h3>
              <p className="text-sm text-white/60 mb-4">{result.description}</p>
              <div className="flex items-center gap-2">
                <span className="text-ember text-sm">★★★★★</span>
                <span className="text-xs text-white/40">
                  {result.name} · {result.city}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-10">
          <Link href="/case-studies" className="btn-primary">
            View All Case Studies →
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
