'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { Check, Loader2 } from 'lucide-react'
import { SITE, SERVICES } from '@/lib/constants'
import { fadeUp } from '@/lib/animations'
import { useScrollReveal } from '@/lib/useScrollReveal'

const contactSchema = z.object({
  fullName: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().optional(),
  company: z.string().optional(),
  website: z.string().optional(),
  services: z.array(z.string()).optional(),
  budget: z.string().optional(),
  hearAbout: z.string().optional(),
  details: z.string().optional(),
})

type ContactForm = z.infer<typeof contactSchema>

const budgetOptions = [
  'Under $2,000/mo',
  '$2,000 – $5,000/mo',
  '$5,000 – $15,000/mo',
  '$15,000 – $50,000/mo',
  '$50,000+/mo',
]

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const { ref, controls } = useScrollReveal()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactForm) => {
    setError('')
    try {
      const res = await fetch(SITE.zapierWebhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Failed to submit')
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again or email us directly.')
    }
  }

  return (
    <>
      <section className="bg-ink pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container-max mx-auto text-center">
          <h1 className="mb-4">Let&apos;s Build Something Great</h1>
          <h2 className="text-2xl md:text-3xl mb-2">Book a Free Strategy Session</h2>
          <p className="max-w-xl mx-auto">
            30 minutes. Zero fluff. A clear roadmap for your growth.
          </p>
        </div>
      </section>

      <motion.section
        ref={ref}
        variants={fadeUp}
        initial="hidden"
        animate={controls}
        className="bg-ink-mid section-padding"
      >
        <div className="container-max mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[55%_45%] gap-6 md:gap-8 lg:gap-12">
          {/* Calendly */}
          <div className="bg-ink border border-ink-border rounded-xl overflow-hidden" style={{ minHeight: 'min(650px, 80vh)' }}>
            <iframe
              src={`${SITE.calendly}?hide_gdpr_banner=1&background_color=080808&text_color=ffffff&primary_color=E8651A`}
              className="w-full h-full border-0"
              style={{ minHeight: 'min(650px, 80vh)' }}
              title="Schedule a strategy call"
              loading="lazy"
            />
          </div>

          {/* Form */}
          <div>
            <h4 className="mb-6">Or send us a message</h4>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4">
                  <Check className="w-8 h-8 text-emerald-500" />
                </div>
                <h3 className="text-xl mb-2">Message Received!</h3>
                <p className="text-sm text-white/60">We&apos;ll reach out within 4 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm text-white/60 mb-1">Full Name *</label>
                  <input
                    id="fullName"
                    {...register('fullName')}
                    className="w-full bg-ink border border-ink-border rounded-lg px-4 py-3 text-sm text-white focus:border-ember focus:outline-none transition-colors"
                    aria-label="Full Name"
                  />
                  {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName.message}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-white/60 mb-1">Email *</label>
                  <input
                    id="email"
                    type="email"
                    {...register('email')}
                    className="w-full bg-ink border border-ink-border rounded-lg px-4 py-3 text-sm text-white focus:border-ember focus:outline-none transition-colors"
                    aria-label="Email"
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm text-white/60 mb-1">Phone</label>
                  <input
                    id="phone"
                    type="tel"
                    {...register('phone')}
                    className="w-full bg-ink border border-ink-border rounded-lg px-4 py-3 text-sm text-white focus:border-ember focus:outline-none transition-colors"
                    aria-label="Phone"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm text-white/60 mb-1">Company Name</label>
                  <input
                    id="company"
                    {...register('company')}
                    className="w-full bg-ink border border-ink-border rounded-lg px-4 py-3 text-sm text-white focus:border-ember focus:outline-none transition-colors"
                    aria-label="Company Name"
                  />
                </div>

                <div>
                  <label htmlFor="website" className="block text-sm text-white/60 mb-1">Website URL</label>
                  <input
                    id="website"
                    {...register('website')}
                    className="w-full bg-ink border border-ink-border rounded-lg px-4 py-3 text-sm text-white focus:border-ember focus:outline-none transition-colors"
                    aria-label="Website URL"
                  />
                </div>

                <div>
                  <label className="block text-sm text-white/60 mb-2">Services Interested In</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {SERVICES.map((s) => (
                      <label key={s.slug} className="flex items-center gap-2 text-xs text-white/60 cursor-pointer hover:text-white transition-colors">
                        <input
                          type="checkbox"
                          value={s.title}
                          {...register('services')}
                          className="rounded border-ink-border bg-ink accent-ember"
                        />
                        {s.title}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm text-white/60 mb-1">Monthly Budget</label>
                  <select
                    id="budget"
                    {...register('budget')}
                    className="w-full bg-ink border border-ink-border rounded-lg px-4 py-3 text-sm text-white focus:border-ember focus:outline-none transition-colors"
                    aria-label="Monthly Budget"
                  >
                    <option value="">Select budget range</option>
                    {budgetOptions.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="hearAbout" className="block text-sm text-white/60 mb-1">How did you hear about us?</label>
                  <input
                    id="hearAbout"
                    {...register('hearAbout')}
                    className="w-full bg-ink border border-ink-border rounded-lg px-4 py-3 text-sm text-white focus:border-ember focus:outline-none transition-colors"
                    aria-label="How did you hear about us"
                  />
                </div>

                <div>
                  <label htmlFor="details" className="block text-sm text-white/60 mb-1">Project Details</label>
                  <textarea
                    id="details"
                    rows={4}
                    {...register('details')}
                    className="w-full bg-ink border border-ink-border rounded-lg px-4 py-3 text-sm text-white focus:border-ember focus:outline-none transition-colors resize-none"
                    aria-label="Project Details"
                  />
                </div>

                {error && <p className="text-red-400 text-sm">{error}</p>}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full justify-center py-3.5 disabled:opacity-50"
                >
                  {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Submit'}
                </button>
              </form>
            )}
          </div>
        </div>
      </motion.section>

      {/* Direct Contact */}
      <section className="bg-ink section-padding">
        <div className="container-max mx-auto text-center">
          <h4 className="mb-4">Prefer to reach out directly?</h4>
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-white/60">
            <a href="mailto:hello@omnivancemedia.com" className="hover:text-ember transition-colors">
              hello@omnivancemedia.com
            </a>
            <a href="tel:+18483492528" className="hover:text-ember transition-colors">
              +1 (848) 349-2528
            </a>
            <span>Mon–Fri, 9AM–6PM EST</span>
          </div>
        </div>
      </section>
    </>
  )
}
