'use client'

import { motion, type Variants } from 'framer-motion'
import { Linkedin } from 'lucide-react'
import Link from 'next/link'

const team = [
  {
    name: 'Mathew Torres',
    role: 'Co-Founder & CEO',
    bio: 'Visionary operator who scaled Omnivance from a two-person startup into a full-service agency trusted by brands across 47 industries.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Laya Shah',
    role: 'Co-Founder & COO',
    bio: 'Operations architect who builds the systems and processes that let every department ship faster without cutting corners.',
    image: '/team/laya.png',
  },
  {
    name: 'Marcus Reid',
    role: 'Chief Marketing Officer',
    bio: 'Former Fortune-500 brand strategist who now orchestrates multi-channel campaigns that turn ad spend into predictable revenue.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Sofia Navarro',
    role: 'SEO Director',
    bio: 'Organic search specialist with a track record of 300%+ traffic growth, obsessed with technical SEO and content-driven rankings.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'James Okafor',
    role: 'Head of Paid Media',
    bio: 'Data-driven PPC expert managing seven-figure ad budgets across Google, Meta, and programmatic — focused on ROAS above all else.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Priya Sharma',
    role: 'Social Media Manager',
    bio: 'Community builder and content creator who turns followers into brand advocates through authentic storytelling and trend-jacking.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Daniel Kim',
    role: 'CRM & Automation Specialist',
    bio: 'HubSpot and Salesforce certified engineer who designs lead-nurture workflows that shorten sales cycles by up to 40%.',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Aisha Williams',
    role: 'Content Strategist',
    bio: 'Editorial mind behind long-form thought leadership and blog strategies that rank on page one and convert readers into leads.',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Carlos Mendez',
    role: 'Brand Designer',
    bio: 'Visual storyteller who crafts identities, design systems, and creative assets that make brands impossible to ignore.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Elena Petrov',
    role: 'Video Production Lead',
    bio: 'Award-winning director and editor producing brand films, social reels, and TV spots that drive measurable engagement lifts.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Ryan Thompson',
    role: 'Web Developer',
    bio: 'Full-stack engineer specializing in high-performance Next.js sites, landing pages, and conversion-optimized web experiences.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Zara Ahmed',
    role: 'Data Analyst',
    bio: 'Analytics expert who turns raw campaign data into clear dashboards and actionable insights that guide every growth decision.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Noah Bennett',
    role: 'PR & Outreach Manager',
    bio: 'Media-relations pro who secures earned placements in top-tier publications and builds backlink profiles that boost domain authority.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Isabella Chen',
    role: 'AEO/GEO Specialist',
    bio: 'Pioneering AI-search optimizer ensuring brands get cited by ChatGPT, Perplexity, and every generative engine that matters.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Tyler Brooks',
    role: 'Client Success Manager',
    bio: 'Relationship-first account lead who keeps every client aligned, informed, and consistently hitting their growth milestones.',
    image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop&crop=face',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function TeamContent() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(232,101,26,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.h5
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-body font-semibold uppercase tracking-[0.2em] text-ember mb-4"
          >
            Our Team
          </motion.h5>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-white leading-[1.1] mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            The Minds Behind Every{' '}
            <span className="ember-gradient-text">Result</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 text-lg leading-relaxed"
          >
            A team of specialists obsessed with one thing — your growth.
          </motion.p>
        </div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={cardVariants}
              className="group relative rounded-2xl border border-white/[0.06] bg-[linear-gradient(145deg,#1a1a1a_0%,#111111_100%)] p-6 lg:p-8 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-ember/30 hover:shadow-[0_8px_40px_rgba(232,101,26,0.1)]"
            >
              {/* Avatar */}
              <div className="mx-auto mb-5 w-24 h-24 rounded-full overflow-hidden ring-2 ring-white/[0.06] group-hover:ring-ember/40 transition-all duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Info */}
              <h3 className="font-display font-semibold text-white text-lg mb-1">
                {member.name}
              </h3>
              <p className="text-ember text-sm font-medium mb-3">{member.role}</p>
              <p className="text-white/50 text-sm leading-relaxed mb-5">
                {member.bio}
              </p>

              {/* LinkedIn */}
              <Link
                href="https://www.linkedin.com/company/omnivance-media-group/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/10 text-white/40 hover:text-ember hover:border-ember/40 transition-all duration-200"
                aria-label={`${member.name} on LinkedIn`}
              >
                <Linkedin className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16 lg:mt-24"
        >
          <p className="text-white/50 text-base mb-6">
            Ready to put this team to work for your brand?
          </p>
          <Link
            href="/contact"
            className="btn-primary inline-flex items-center text-base px-8 py-4"
          >
            Let&apos;s Talk Growth
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
