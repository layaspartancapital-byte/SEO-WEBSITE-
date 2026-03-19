'use client'

import { motion } from 'framer-motion'
import { useScrollReveal } from '@/lib/useScrollReveal'
import { fadeUp, scaleIn, stagger } from '@/lib/animations'

const testimonials = [
  {
    quote: "Omnivance took our Google Ads from burning cash to printing money. $340K in new contracts in 90 days. That's not marketing — that's a money machine.",
    name: 'Mike Reynolds',
    company: 'Reynolds HVAC',
    result: 'Generated $340K in 90 days',
  },
  {
    quote: "We went from 3 leads a week to 40+. The CRM automation alone saved us 20 hours a week. Best investment we've made in 10 years.",
    name: 'Sarah Kim',
    company: 'Kim & Associates Law',
    result: '4.2× ROAS in 60 days',
  },
  {
    quote: "They rebuilt our entire marketing stack — SEO, ads, email, CRM — and took us from $80K/mo to $420K/mo in six months. One team did all of it.",
    name: 'James Lawson',
    company: 'Urban Thread Co.',
    result: '$80K to $420K/mo revenue',
  },
  {
    quote: "Our TV commercial brought in more leads in one week than our old agency got us in six months. The creative team is world-class.",
    name: 'David Park',
    company: 'Park Auto Group',
    result: '6× lead increase in 1 week',
  },
  {
    quote: "Finally an agency that actually understands AI search. We now show up on ChatGPT and Perplexity for every relevant query in our market.",
    name: 'Lisa Chen',
    company: 'NovaTech Solutions',
    result: 'Top 3 AI search visibility',
  },
  {
    quote: "Omnivance built us a custom dashboard that shows ROI in real-time. No more guessing. No more waiting for monthly reports.",
    name: 'Tom Brennan',
    company: 'Brennan Logistics',
    result: 'Real-time ROI tracking',
  },
]

export default function Testimonials() {
  const { ref, controls } = useScrollReveal()

  return (
    <section className="bg-ink section-padding" ref={ref}>
      <motion.div variants={fadeUp} initial="hidden" animate={controls} className="container-max mx-auto">
        <div className="text-center mb-12">
          <h5 className="mb-4">TESTIMONIALS</h5>
          <h2>Don&apos;t Take Our Word for It</h2>
        </div>

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              className="bg-[var(--grad-card)] border border-ink-border rounded-xl p-6 hover:scale-[1.02] transition-transform duration-300"
              style={{ background: 'var(--grad-card)' }}
            >
              <p className="text-sm text-white/90 mb-4 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div className="text-ember text-sm mb-3">★★★★★</div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-white">{t.name}</p>
                  <p className="text-xs text-white/40">{t.company}</p>
                </div>
                <span className="text-[10px] bg-ember/20 text-ember px-2 py-1 rounded font-medium">
                  {t.result}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
