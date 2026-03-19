export const SITE = {
  name: 'Omnivance Media Group',
  tagline: 'Every Channel. Every Touchpoint. Every Result.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://omnivancemedia.com',
  calendly: process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/omnivance',
  zapierWebhook: process.env.NEXT_PUBLIC_ZAPIER_WEBHOOK_URL || '',
  vslVideo: process.env.NEXT_PUBLIC_VSL_VIDEO_URL || '',
}

export const SERVICES = [
  {
    slug: 'seo',
    title: 'SEO & Organic Search',
    icon: 'TrendingUp',
    description: 'Dominate search rankings and drive organic traffic that converts.',
    h1: 'SEO Services That Drive Organic Growth',
  },
  {
    slug: 'aeo-geo',
    title: 'AEO & GEO (AI Search)',
    icon: 'Cpu',
    description: 'Get found on ChatGPT, Perplexity, and AI-powered search engines.',
    h1: 'AEO & GEO: Optimize for AI-Powered Search',
  },
  {
    slug: 'paid-ads',
    title: 'Google, Meta & Paid Ads',
    icon: 'Target',
    description: 'Maximize ROI with precision-targeted campaigns across every platform.',
    h1: 'Paid Advertising Agency — Google, Meta, Bing, YouTube, Snapchat & Amazon',
  },
  {
    slug: 'tv-commercials',
    title: 'TV & Streaming Commercials',
    icon: 'Tv',
    description: 'Broadcast and streaming ads that build brands and drive action.',
    h1: 'TV & Streaming Commercial Production Agency',
  },
  {
    slug: 'media-creation',
    title: 'Video & Creative Production',
    icon: 'Video',
    description: 'Scroll-stopping video and creative assets for every platform.',
    h1: 'Video Production & Creative Asset Services',
  },
  {
    slug: 'crm',
    title: 'CRM Setup & Automation',
    icon: 'GitBranch',
    description: 'Build automated systems that nurture leads and close deals.',
    h1: 'CRM Setup, Integration & Automation Services',
  },
  {
    slug: 'custom-software',
    title: 'Custom Software Development',
    icon: 'Code2',
    description: 'Bespoke applications built for your unique business needs.',
    h1: 'Custom Software Development Services',
  },
  {
    slug: 'dashboards',
    title: 'API & Custom Dashboards',
    icon: 'BarChart3',
    description: 'Real-time data visualization and API integrations for smarter decisions.',
    h1: 'Custom Reporting Dashboards & API Integrations',
  },
  {
    slug: 'print-media',
    title: 'Print Media & PR',
    icon: 'Newspaper',
    description: 'Offline marketing, press coverage, and print advertising that works.',
    h1: 'Print Media, PR & Offline Marketing Agency',
  },
  {
    slug: 'branding',
    title: 'Branding & Identity',
    icon: 'Sparkles',
    description: 'Build a visual identity system that commands premium positioning.',
    h1: 'Brand Identity & Strategy Services',
  },
  {
    slug: 'mailing',
    title: 'Direct Mail Campaigns',
    icon: 'Mail',
    description: 'High-converting direct mail and EDDM campaigns.',
    h1: 'Direct Mail Marketing Campaign Services',
  },
  {
    slug: 'social-media',
    title: 'Social Media Content',
    icon: 'Instagram',
    description: 'Content strategies that build audiences and drive engagement.',
    h1: 'Social Media Content & Management Services',
  },
] as const

export const STATS: { value: number; prefix?: string; suffix?: string; label: string }[] = [
  { value: 50, prefix: '$', suffix: 'M+', label: 'Client Revenue' },
  { value: 300, suffix: '+', label: 'Active Clients' },
  { value: 47, label: 'Industries Served' },
  { value: 12, label: 'Service Lines' },
]

export const RESULTS = [
  {
    tag: 'HVAC CONTRACTOR',
    stat: '$340,000 in new contracts',
    description: 'in 90 days through Google Ads + CRM automation',
    name: 'Mike R.',
    city: 'Dallas, TX',
  },
  {
    tag: 'LAW FIRM',
    stat: '4.2× return on ad spend',
    description: 'across Meta and Google within first 60 days',
    name: 'Sarah K.',
    city: 'Chicago, IL',
  },
  {
    tag: 'E-COMMERCE',
    stat: '$80K → $420K per month',
    description: 'in 6 months: SEO + paid ads + email automation',
    name: 'James L.',
    city: 'Austin, TX',
  },
] as const

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discovery & Audit',
    description: 'We tear apart your marketing stack and find exactly where revenue is leaking.',
    items: ['Competitor analysis', 'Technical SEO audit', 'Ad account review', 'CRM assessment'],
  },
  {
    number: '02',
    title: 'Strategy & Roadmap',
    description: 'A 90-day growth roadmap built around your specific numbers and market.',
    items: ['Channel prioritization', 'Budget allocation', 'KPI targets', 'Timeline'],
  },
  {
    number: '03',
    title: 'Build & Launch',
    description: 'We build everything — ads, funnels, automations, creative — and launch fast.',
    items: ['Creative production', 'Campaign setup', 'CRM buildout', 'Tracking & attribution'],
  },
  {
    number: '04',
    title: 'Optimize & Scale',
    description: 'Weekly optimizations. Monthly strategy calls. Compounding results.',
    items: ['A/B testing', 'Budget scaling', 'Reporting dashboards', 'New channels'],
  },
] as const
