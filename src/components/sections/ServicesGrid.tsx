'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { TrendingUp, Cpu, Target, Tv, Video, GitBranch, Code2, BarChart3, Newspaper, Sparkles, Mail, Instagram } from 'lucide-react'
import { useScrollReveal } from '@/lib/useScrollReveal'
import { fadeUp, scaleIn, stagger } from '@/lib/animations'
import { SERVICES } from '@/lib/constants'

const iconMap: Record<string, React.ElementType> = {
  TrendingUp, Cpu, Target, Tv, Video, GitBranch, Code2, BarChart3, Newspaper, Sparkles, Mail, Instagram,
}

export default function ServicesGrid() {
  const { ref, controls } = useScrollReveal()

  return (
    <section className="bg-ink-mid section-padding" ref={ref}>
      <motion.div variants={fadeUp} initial="hidden" animate={controls} className="container-max mx-auto">
        <div className="text-center mb-12">
          <h5 className="mb-4">WHAT WE DO</h5>
          <h2 className="mb-4">Every Service Your Brand Will Ever Need</h2>
          <p>12 disciplines. One team. Zero gaps.</p>
        </div>

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon]
            return (
              <motion.div key={service.slug} variants={scaleIn}>
                <Link href={`/services/${service.slug}`} className="service-card block h-full">
                  {Icon && <Icon className="service-icon w-8 h-8 text-white/60 mb-4" />}
                  <h4 className="mb-2 text-base">{service.title}</h4>
                  <p className="text-sm text-white/60 mb-3 line-clamp-2">{service.description}</p>
                  <span className="text-ember text-[13px] font-medium">Explore →</span>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        <div className="text-center mt-10">
          <Link href="/services" className="btn-ghost">
            See All Services →
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
