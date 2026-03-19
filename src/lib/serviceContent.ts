export interface ServicePageData {
  slug: string
  h1: string
  subtitle: string
  metaDescription: string
  deliverables: { title: string; description: string }[]
  process: { title: string; description: string }[]
  whyItMatters: string
  tools: string[]
  results: { stat: string; description: string }[]
  faqs: { question: string; answer: string }[]
  relatedServices: string[]
}

export const serviceContent: Record<string, ServicePageData> = {
  seo: {
    slug: 'seo',
    h1: 'SEO Services That Drive Organic Growth',
    subtitle: 'Rank higher, get found, and convert organic traffic into paying customers.',
    metaDescription: 'Omnivance delivers enterprise-level SEO services — technical audits, on-page optimization, link building, and local SEO that drive organic growth and revenue.',
    deliverables: [
      { title: 'Technical SEO Audit', description: 'Deep crawl analysis of site architecture, page speed, schema markup, Core Web Vitals, and indexation issues.' },
      { title: 'On-Page Optimization', description: 'Title tags, meta descriptions, header hierarchy, internal linking, and content optimization for target keywords.' },
      { title: 'Link Building & Digital PR', description: 'White-hat outreach campaigns, guest posting, broken link building, and HARO responses for authoritative backlinks.' },
      { title: 'Local SEO', description: 'Google Business Profile optimization, local citations, review management, and geo-targeted landing pages.' },
      { title: 'Content Strategy', description: 'Keyword research, topic clusters, editorial calendars, and long-form content creation that drives organic traffic.' },
      { title: 'Monthly Reporting', description: 'Transparent dashboards showing rankings, traffic, conversions, and ROI with actionable next steps.' },
    ],
    process: [
      { title: 'Discovery & Audit', description: 'We crawl your site, analyze competitors, and identify exactly where organic revenue is being lost.' },
      { title: 'Strategy & Roadmap', description: 'A prioritized 90-day SEO plan based on quick wins, competitive gaps, and long-term growth opportunities.' },
      { title: 'Execution', description: 'Our team implements technical fixes, optimizes pages, builds links, and publishes content — all in-house.' },
      { title: 'Reporting & Scaling', description: 'Monthly performance reviews with clear data on what moved, what converted, and where to double down.' },
    ],
    whyItMatters: `Search engine optimization remains the single highest-ROI marketing channel for businesses in 2025. Unlike paid advertising, which stops generating leads the moment you pause your budget, SEO compounds over time. Every page you optimize, every link you earn, and every technical fix you implement adds permanent value to your digital presence.

The landscape has evolved dramatically. Google now processes over 8.5 billion searches per day, and with the rise of AI Overviews, featured snippets, and zero-click searches, the way users interact with search results has fundamentally changed. Businesses that fail to adapt their SEO strategy to these shifts are hemorrhaging organic traffic to competitors who have.

Technical SEO forms the foundation. A site that loads slowly, has broken crawl paths, or lacks proper schema markup is invisible to search engines regardless of how good its content is. Our technical audits have uncovered issues costing clients millions in lost organic revenue — from improper canonical tags causing duplicate content penalties to JavaScript rendering issues that prevent Google from indexing entire sections of a website.

On-page optimization goes far beyond stuffing keywords into title tags. Modern SEO requires understanding search intent, building comprehensive topic authority through content clusters, and creating pages that satisfy both search engine algorithms and human readers. We map your entire keyword universe, identify content gaps your competitors have missed, and create optimization strategies that capture traffic at every stage of the buyer journey.

Link building remains one of the most impactful ranking factors, but the days of bulk directory submissions and comment spam are over. Our digital PR team secures backlinks from authoritative publications through genuine outreach, expert commentary, and data-driven content that journalists actually want to reference. Every link we build passes editorial scrutiny and adds real authority to your domain.

Local SEO is critical for businesses with physical locations or service areas. With 46% of all Google searches having local intent, optimizing your Google Business Profile, building local citations, managing reviews, and creating geo-targeted landing pages can dramatically increase foot traffic and phone calls from nearby customers actively searching for your services.

The businesses that invest in SEO today are building an asset that generates leads, sales, and revenue for years to come. The businesses that wait are giving their competitors an ever-widening head start that becomes exponentially harder to close.`,
    tools: ['Google Search Console', 'Ahrefs', 'Screaming Frog', 'Surfer SEO', 'SEMrush', 'Google Analytics 4', 'Schema Pro', 'PageSpeed Insights'],
    results: [
      { stat: '312% organic traffic increase', description: 'for a B2B SaaS company in 8 months through technical SEO fixes and content strategy.' },
      { stat: '#1 ranking for 47 target keywords', description: 'for a regional law firm, generating 120+ qualified leads per month.' },
    ],
    faqs: [
      { question: 'How long does SEO take to show results?', answer: 'Most clients see measurable improvements in organic traffic within 3-4 months, with significant revenue impact by month 6. SEO is a compounding investment — results accelerate over time as domain authority grows.' },
      { question: 'What is included in a technical SEO audit?', answer: 'Our technical audits cover site speed, Core Web Vitals, crawlability, indexation, schema markup, mobile usability, canonical tags, redirect chains, XML sitemaps, robots.txt, and over 200 other ranking factors.' },
      { question: 'Do you guarantee first page rankings?', answer: 'No ethical SEO agency can guarantee specific rankings because Google\'s algorithm considers hundreds of factors. What we guarantee is a data-driven strategy, expert execution, and transparent reporting on measurable improvements.' },
      { question: 'How is your SEO different from other agencies?', answer: 'We combine technical SEO, content strategy, and digital PR under one roof with full-stack marketing capabilities. Most SEO agencies can rank you — we can also convert that traffic with CRM automation, landing pages, and paid amplification.' },
      { question: 'What does SEO cost?', answer: 'Our SEO engagements typically range from $3,000 to $15,000 per month depending on competitive landscape, current site health, and growth targets. We provide custom proposals based on your specific situation.' },
      { question: 'Can SEO work alongside paid advertising?', answer: 'Absolutely. SEO and paid ads are complementary — paid provides immediate visibility while SEO builds long-term organic equity. We often run both channels simultaneously to maximize total search presence.' },
    ],
    relatedServices: ['aeo-geo', 'paid-ads', 'custom-software'],
  },
  'aeo-geo': {
    slug: 'aeo-geo',
    h1: 'AEO & GEO: Optimize for AI-Powered Search',
    subtitle: 'Get your brand cited by ChatGPT, Perplexity, Google AI Overviews, and every AI search engine.',
    metaDescription: 'Omnivance specializes in Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) — get your brand visible on ChatGPT, Perplexity, and AI search.',
    deliverables: [
      { title: 'AI Search Visibility Audit', description: 'Comprehensive analysis of how your brand appears across ChatGPT, Perplexity, Google AI Overviews, and Bing Copilot.' },
      { title: 'Entity & Knowledge Graph Optimization', description: 'Build your brand\'s entity presence so AI models recognize and cite your business as an authority.' },
      { title: 'Structured Data Enhancement', description: 'Implement advanced schema markup that AI crawlers use to understand and surface your content.' },
      { title: 'Content Restructuring for AI', description: 'Reformat existing content with clear Q&A patterns, concise definitions, and citation-friendly structures.' },
      { title: 'Source Authority Building', description: 'Get your brand mentioned on Wikipedia, industry directories, and high-authority publications that AI models train on.' },
      { title: 'AI Search Monitoring', description: 'Track how AI models cite your brand across prompts and queries with proprietary monitoring tools.' },
    ],
    process: [
      { title: 'AI Visibility Assessment', description: 'We query every major AI platform with your target keywords and map where your brand does and doesn\'t appear.' },
      { title: 'Optimization Strategy', description: 'A targeted plan to increase AI citations through content structure, entity optimization, and authority building.' },
      { title: 'Implementation', description: 'We restructure content, enhance schema, build entity signals, and optimize for AI-friendly formats.' },
      { title: 'Monitoring & Iteration', description: 'Continuous tracking of AI search citations with weekly adjustments as models update.' },
    ],
    whyItMatters: `The way people search for information is undergoing its most significant transformation since Google launched in 1998. ChatGPT processes over 100 million queries per week. Perplexity has grown to 15 million monthly active users. Google\'s AI Overviews now appear in over 30% of search results. This is not a trend — it is the new reality of search.

Answer Engine Optimization (AEO) is the practice of optimizing your brand and content so that AI-powered search engines cite you as a source when users ask questions. Unlike traditional SEO, where you compete for ten blue links on a results page, AEO positions your brand as THE answer that AI models reference directly.

Generative Engine Optimization (GEO) takes this further by optimizing for how generative AI models synthesize and present information. When someone asks ChatGPT "what\'s the best marketing agency for HVAC companies," the answer it generates is drawn from patterns in its training data and real-time retrieval. GEO ensures your brand has the signals — structured data, entity presence, authoritative mentions — that make AI models select you.

The businesses that act now will dominate AI search for years. AI models develop preferences for certain sources based on authority signals, and once your brand is established as a trusted citation, it becomes increasingly difficult for competitors to displace you. This is the first-mover advantage of the decade.

Most businesses have zero strategy for AI search visibility. They don\'t know whether ChatGPT mentions them, cites their competitors instead, or provides inaccurate information about their services. Our AI Search Visibility Audit reveals exactly where you stand and provides a clear roadmap for dominating AI-powered search.

The technical requirements for AEO and GEO are distinct from traditional SEO. While traditional SEO focuses on keyword density and backlink profiles, AI optimization requires structured data that AI crawlers can parse, entity-level authority that knowledge graphs recognize, and content formats that generative models prefer to cite. Our team specializes in the intersection of these disciplines.

We have tracked AI search patterns across thousands of queries in dozens of industries. The data is clear: brands that invest in AEO and GEO now see 3-5x more AI search citations within 90 days, driving qualified traffic from a channel that most competitors don\'t even know exists.`,
    tools: ['ChatGPT', 'Perplexity', 'Google AI Overviews', 'Bing Copilot', 'Schema.org', 'Google Knowledge Graph API', 'Wikipedia', 'Wikidata'],
    results: [
      { stat: 'Cited in 73% of relevant ChatGPT queries', description: 'for a SaaS company within 4 months of AEO implementation.' },
      { stat: 'Top Perplexity source for 31 industry terms', description: 'for a financial services firm through entity optimization and content restructuring.' },
    ],
    faqs: [
      { question: 'What is AEO (Answer Engine Optimization)?', answer: 'AEO is the process of optimizing your brand and content to be cited by AI-powered search engines like ChatGPT, Perplexity, and Google AI Overviews when users ask questions relevant to your business.' },
      { question: 'What is GEO (Generative Engine Optimization)?', answer: 'GEO optimizes for how generative AI models synthesize and present information. It focuses on entity signals, structured data, and authority patterns that influence which brands AI models reference.' },
      { question: 'Does AEO replace traditional SEO?', answer: 'No. AEO complements traditional SEO. You still need strong organic search fundamentals, but AEO adds a new layer of visibility as AI search adoption grows. We recommend running both strategies simultaneously.' },
      { question: 'How do you track AI search visibility?', answer: 'We use proprietary monitoring tools that query AI platforms with your target keywords and track whether your brand is cited, how it\'s described, and how citations change over time.' },
      { question: 'How quickly can I see results from AEO?', answer: 'Initial improvements in AI search citations typically appear within 4-8 weeks. Significant visibility gains compound over 3-6 months as entity signals strengthen and AI models update.' },
      { question: 'Which AI search engines do you optimize for?', answer: 'We optimize for ChatGPT, Perplexity, Google AI Overviews, Bing Copilot, Claude, and emerging AI search platforms. Our strategies are platform-agnostic and focus on building authority signals that all AI models recognize.' },
    ],
    relatedServices: ['seo', 'custom-software', 'branding'],
  },
  'paid-ads': {
    slug: 'paid-ads',
    h1: 'Paid Advertising Agency — Google, Meta, Bing, YouTube, Snapchat & Amazon',
    subtitle: 'Precision-targeted campaigns that turn ad spend into measurable revenue.',
    metaDescription: 'Full-service paid advertising management across Google, Meta, YouTube, Bing, Snapchat, and Amazon. Data-driven campaigns with transparent ROAS reporting.',
    deliverables: [
      { title: 'Google Ads Management', description: 'Search, Display, Shopping, and Performance Max campaigns optimized for conversions and ROAS.' },
      { title: 'Meta Ads (Facebook & Instagram)', description: 'Full-funnel campaigns with custom audiences, lookalikes, retargeting, and creative testing.' },
      { title: 'YouTube Advertising', description: 'Pre-roll, in-feed, and Shorts ads with audience targeting and creative production.' },
      { title: 'Bing & Microsoft Ads', description: 'Often overlooked, Bing delivers 15-30% lower CPC with high-intent audiences.' },
      { title: 'Landing Page Optimization', description: 'Conversion-optimized landing pages built to maximize every dollar of ad spend.' },
      { title: 'Attribution & Reporting', description: 'Multi-touch attribution models that show exactly which campaigns drive revenue.' },
    ],
    process: [
      { title: 'Account Audit', description: 'We analyze your current ad accounts, identify wasted spend, and find untapped opportunities.' },
      { title: 'Campaign Architecture', description: 'We build campaign structures designed for scalable growth with proper audience segmentation.' },
      { title: 'Creative & Launch', description: 'Our creative team produces ads, and we launch with precise targeting and bid strategies.' },
      { title: 'Optimize & Scale', description: 'Daily optimizations, weekly reporting, and monthly strategy sessions to compound results.' },
    ],
    whyItMatters: `Paid advertising is the fastest lever for revenue growth — but only when it is executed with precision, data, and relentless optimization. The difference between a profitable ad account and a money pit comes down to strategy, creative, and management quality.

Google Ads alone processes over $200 billion in annual advertiser spend. Meta platforms reach over 3.7 billion monthly active users. YouTube serves over 2 billion logged-in users every month. These platforms offer unprecedented access to your ideal customers, but the competition for attention is fierce and the complexity of the platforms grows with every algorithm update.

Most businesses waste 20-40% of their ad budget on poorly targeted campaigns, weak creative, and inefficient bidding strategies. We have audited hundreds of ad accounts and consistently find the same issues: broad match keywords burning through budget, audiences that are too wide, landing pages that don\'t convert, and tracking that misattributes or misses conversions entirely.

Our approach starts with the fundamentals. Before spending a dollar, we build proper conversion tracking, define clear KPIs, and create campaign architectures designed to scale. We segment audiences by intent level, build creative variations for each stage of the funnel, and implement bidding strategies that maximize return at every budget level.

Creative quality is the single biggest lever in paid advertising. The platforms\' algorithms are sophisticated enough that targeting is largely automated — the variable that separates winners from losers is the ad creative itself. Our in-house creative team produces video ads, static ads, carousel ads, and landing pages that stop the scroll and drive action.

We manage campaigns across every major platform because we believe in meeting your customers wherever they are. A prospect might discover you through a Google search ad, see a retargeting ad on Instagram, watch a YouTube pre-roll, and finally convert through a remarketing campaign. We orchestrate this entire journey as one cohesive strategy.

Transparency is non-negotiable. Every client gets access to real-time dashboards showing spend, conversions, cost per acquisition, and return on ad spend. No vanity metrics. No hidden fees. Just clear data showing how every dollar performs.`,
    tools: ['Google Ads', 'Meta Business Suite', 'YouTube Studio', 'Microsoft Advertising', 'Google Analytics 4', 'Hotjar', 'Unbounce', 'Triple Whale'],
    results: [
      { stat: '4.2× ROAS in 60 days', description: 'for a law firm running Google and Meta campaigns with custom landing pages.' },
      { stat: '$2.3M in attributable revenue', description: 'for an e-commerce brand in 12 months across Google Shopping and Meta retargeting.' },
    ],
    faqs: [
      { question: 'What is a good ROAS for paid advertising?', answer: 'A "good" ROAS depends on your margins and business model. E-commerce brands typically target 3-5× ROAS, while service businesses with high lifetime values can be profitable at 2-3× ROAS. We set custom benchmarks based on your unit economics.' },
      { question: 'How much should I spend on ads?', answer: 'We recommend a minimum of $3,000-$5,000 per month in ad spend to generate statistically significant data for optimization. Our management fees are separate from ad spend and are based on scope and complexity.' },
      { question: 'How quickly will I see results from paid ads?', answer: 'Paid ads can generate leads within days of launch. However, it typically takes 2-4 weeks to gather enough data for meaningful optimization. Most campaigns reach peak efficiency by month 2-3.' },
      { question: 'Do you create the ad creative?', answer: 'Yes. Our in-house creative team produces video ads, static images, carousels, and landing pages. Creative quality is the #1 lever in paid advertising, so we handle it ourselves rather than relying on stock assets.' },
      { question: 'Which platform should I advertise on?', answer: 'It depends on your audience and business model. Google captures high-intent search demand. Meta excels at awareness and retargeting. YouTube builds brand recall. We analyze your market and recommend the optimal channel mix.' },
      { question: 'How do you track conversions?', answer: 'We implement server-side tracking, conversion APIs, and enhanced conversions to ensure accurate attribution despite iOS privacy changes and cookie restrictions. We also build custom dashboards for real-time performance visibility.' },
    ],
    relatedServices: ['seo', 'media-creation', 'crm'],
  },
  'tv-commercials': {
    slug: 'tv-commercials',
    h1: 'TV & Streaming Commercial Production Agency',
    subtitle: 'Broadcast and OTT commercials that build brands and drive measurable action.',
    metaDescription: 'TV commercial production and streaming ad placement across cable, OTT, and CTV platforms. From concept to air, Omnivance handles the full production pipeline.',
    deliverables: [
      { title: 'Creative Concepting', description: 'Scriptwriting, storyboarding, and creative direction for commercials that convert.' },
      { title: 'Full Production', description: 'Professional filming with cinema-grade equipment, talent, and locations.' },
      { title: 'Post-Production', description: 'Editing, color grading, sound design, motion graphics, and format optimization.' },
      { title: 'Media Buying', description: 'Broadcast, cable, OTT, and CTV placement with audience targeting and reach optimization.' },
      { title: 'Performance Tracking', description: 'Attribution models that connect TV exposure to website visits, calls, and conversions.' },
      { title: 'Multi-Format Adaptation', description: 'Cut-downs for 15s, 30s, 60s spots plus social media adaptations.' },
    ],
    process: [
      { title: 'Creative Brief', description: 'We define your message, audience, and goals, then develop creative concepts.' },
      { title: 'Pre-Production', description: 'Scriptwriting, storyboarding, casting, location scouting, and production planning.' },
      { title: 'Production & Post', description: 'Professional filming and editing with cinema-quality results.' },
      { title: 'Placement & Tracking', description: 'Strategic media buying with attribution tracking to measure real business impact.' },
    ],
    whyItMatters: `Television advertising is not dead — it has evolved. Connected TV (CTV) and Over-The-Top (OTT) platforms have transformed what was once a mass-market awareness channel into a precision-targeted, measurable marketing vehicle. The businesses that understand this evolution are leveraging TV advertising to build brand authority while driving trackable conversions.

CTV advertising spending reached $25 billion in 2024 and is projected to exceed $40 billion by 2027. Streaming platforms like Hulu, Peacock, Roku, and YouTube TV offer the production value and credibility of traditional television with the targeting capabilities of digital advertising. You can now serve a TV commercial to a specific demographic, in a specific zip code, watching a specific type of content — and track whether they visited your website afterward.

The perception that TV commercials are only for Fortune 500 companies with million-dollar budgets is outdated. Modern CTV and OTT advertising allows businesses with budgets as low as $5,000 per month to run professionally produced commercials to precisely targeted audiences. The barrier to entry has never been lower, and the early adopters in every local market are seeing outsized returns.

Production quality matters enormously. A poorly produced commercial damages brand perception far more than having no commercial at all. Our production team has created commercials for brands across 47 industries, with a process designed to deliver broadcast-quality results efficiently. From scripting and storyboarding through filming, editing, color grading, and sound design, every element is handled in-house by experienced professionals.

The key advantage of TV advertising over purely digital channels is the halo effect on brand authority. When a potential customer sees your brand on their television, it creates a level of credibility and trust that a Facebook ad simply cannot match. This brand lift translates directly to higher conversion rates across every other marketing channel — your Google Ads perform better, your cold outreach gets more responses, and your sales team closes at a higher rate.

Attribution has been the historical challenge of TV advertising, but modern technology has solved this problem. We implement multi-touch attribution models that track the path from TV exposure to website visit, phone call, and sale. Our clients can see exactly how their TV investment contributes to revenue, making the decision to scale simple and data-driven.`,
    tools: ['Adobe Premiere Pro', 'DaVinci Resolve', 'Hulu Ad Manager', 'Roku Ads', 'YouTube TV', 'The Trade Desk', 'SpotX', 'Nielsen'],
    results: [
      { stat: '6× increase in branded search', description: 'for an auto dealership group within 30 days of launching CTV campaigns.' },
      { stat: '$1.2M in attributed revenue', description: 'from a 3-month OTT campaign for a home services franchise.' },
    ],
    faqs: [
      { question: 'How much does a TV commercial cost to produce?', answer: 'Our commercial production packages start at $5,000 for a professionally produced 30-second spot. Complex productions with multiple locations, talent, and advanced visual effects range from $15,000 to $50,000+.' },
      { question: 'What is CTV/OTT advertising?', answer: 'CTV (Connected TV) refers to ads served on streaming devices like Roku, Apple TV, and smart TVs. OTT (Over-The-Top) refers to ads on streaming services like Hulu, Peacock, and YouTube TV. Both offer TV-quality placement with digital targeting.' },
      { question: 'Can you target specific audiences with TV ads?', answer: 'Yes. CTV and OTT platforms allow targeting by geography, demographics, interests, household income, and even behavioral data. This is far more precise than traditional broadcast buying.' },
      { question: 'How do you measure TV ad performance?', answer: 'We use multi-touch attribution tracking website visits, branded search lifts, phone calls, and conversions that correlate with TV exposure windows. We can show ROI down to the dollar.' },
      { question: 'Do I need a large budget for TV advertising?', answer: 'No. CTV and OTT advertising allows you to start with budgets as low as $5,000 per month. This is a fraction of traditional broadcast costs while delivering better targeting and measurability.' },
      { question: 'Can you repurpose TV commercials for digital?', answer: 'Absolutely. We create multi-format adaptations of every commercial — 15s, 30s, and 60s cuts plus vertical formats for social media. One production shoot yields content for every platform.' },
    ],
    relatedServices: ['media-creation', 'paid-ads', 'branding'],
  },
  'media-creation': {
    slug: 'media-creation',
    h1: 'Video Production & Creative Asset Services',
    subtitle: 'Scroll-stopping content for every platform, format, and audience.',
    metaDescription: 'Professional video production, social media content, brand photography, and UGC creation. Omnivance produces creative assets that drive engagement and conversions.',
    deliverables: [
      { title: 'Video Production', description: 'Brand videos, product demos, testimonials, explainers, and social content.' },
      { title: 'Social Media Content', description: 'Platform-native content for Instagram, TikTok, YouTube Shorts, and LinkedIn.' },
      { title: 'Brand Photography', description: 'Product photography, team headshots, lifestyle imagery, and event coverage.' },
      { title: 'UGC Creation', description: 'Authentic user-generated style content that drives engagement and trust.' },
      { title: 'Motion Graphics', description: 'Animated logos, infographics, data visualizations, and promotional animations.' },
      { title: 'Ad Creative', description: 'Performance-optimized video and static ads for paid campaigns.' },
    ],
    process: [
      { title: 'Creative Brief', description: 'We define objectives, audience, brand guidelines, and deliverable specifications.' },
      { title: 'Concept Development', description: 'Scripts, shot lists, mood boards, and creative direction for approval.' },
      { title: 'Production', description: 'Professional filming and photography with our in-house team.' },
      { title: 'Delivery & Optimization', description: 'Edited, formatted, and optimized for each platform and use case.' },
    ],
    whyItMatters: `Visual content is the currency of modern marketing. Over 80% of internet traffic is video. Instagram Reels average 22% higher engagement than static posts. LinkedIn posts with video receive 5× more engagement than text-only posts. The brands that produce the most compelling visual content win the most attention, and attention is the prerequisite to revenue.

The challenge most businesses face is not a lack of understanding about the importance of content — it is the operational complexity of producing it consistently at quality. Professional video production requires equipment, editing software, scripting expertise, and an understanding of what works on each platform. Most in-house marketing teams are stretched thin already, and most freelancers lack the strategic perspective to create content that drives business outcomes rather than just views.

Our creative team produces content specifically designed to drive measurable business results. Every piece of content we create starts with a strategic brief that defines the business objective, target audience, platform specifications, and success metrics. This is not content for content\'s sake — it is content engineered to move prospects through your sales funnel.

Platform-native content performs dramatically better than repurposed content. A video that works on YouTube will not perform the same way on TikTok or Instagram Reels. The pacing, formatting, captions, hooks, and calls to action need to be tailored to each platform\'s algorithm and user behavior. We produce content optimized for every major platform from a single production session, maximizing your investment.

User-generated content (UGC) has emerged as one of the highest-converting content formats. Consumers trust content that looks authentic and relatable over polished brand productions. Our UGC creators produce testimonial-style videos, unboxing content, and product reviews that feel genuine while being strategically designed to drive conversions.

The ROI of professional content production extends far beyond the content itself. High-quality brand photography elevates your entire web presence. Professional video testimonials close deals in your sales pipeline. Social media content builds an organic audience that reduces your dependency on paid advertising over time. Every piece of content we produce is an asset that continues to generate value.`,
    tools: ['Adobe Premiere Pro', 'After Effects', 'Lightroom', 'Figma', 'CapCut', 'DaVinci Resolve', 'Canon Cinema EOS', 'DJI'],
    results: [
      { stat: '340% increase in social engagement', description: 'for a DTC brand after switching to platform-native content strategy.' },
      { stat: '2.4× conversion rate improvement', description: 'on landing pages with professional video testimonials vs. text-only testimonials.' },
    ],
    faqs: [
      { question: 'What types of video do you produce?', answer: 'We produce brand videos, product demos, customer testimonials, social media content (Reels, TikToks, Shorts), explainer videos, event coverage, and performance ad creative.' },
      { question: 'How much does video production cost?', answer: 'Single-day production packages start at $3,000 and include filming, editing, and platform optimization. Monthly content retainers for ongoing social media production start at $5,000.' },
      { question: 'Do you handle photography as well?', answer: 'Yes. Our team includes professional photographers who shoot product photography, team headshots, lifestyle imagery, and event coverage alongside video production.' },
      { question: 'Can you create content for all social platforms?', answer: 'Yes. We produce platform-native content for Instagram, TikTok, YouTube, LinkedIn, Facebook, and Twitter/X. Each piece is optimized for the specific platform\'s algorithm and format requirements.' },
      { question: 'What is UGC and why does it work?', answer: 'User-Generated Content (UGC) is authentic-looking content created in the style of real customer posts. It outperforms polished brand content in ad performance because consumers trust relatable, genuine-feeling content more than traditional advertising.' },
      { question: 'How long does production take?', answer: 'A typical production project takes 2-3 weeks from brief to final delivery. Rush timelines of 5-7 business days are available for an additional fee.' },
    ],
    relatedServices: ['tv-commercials', 'paid-ads', 'social-media'],
  },
  crm: {
    slug: 'crm',
    h1: 'CRM Setup, Integration & Automation Services',
    subtitle: 'Turn your CRM into an automated revenue machine that never sleeps.',
    metaDescription: 'Expert CRM setup, integration, and automation services for Salesforce, HubSpot, Zoho, GoHighLevel, and Monday.com. Automate follow-ups and close more deals.',
    deliverables: [
      { title: 'CRM Selection & Setup', description: 'We help you choose and configure the right CRM platform for your business size and workflow.' },
      { title: 'Data Migration', description: 'Clean migration of contacts, deals, and history from your existing systems with zero data loss.' },
      { title: 'Workflow Automation', description: 'Automated follow-up sequences, lead scoring, task assignments, and pipeline management.' },
      { title: 'Integration Setup', description: 'Connect your CRM to email, calendar, phone systems, ad platforms, and billing tools.' },
      { title: 'Custom Reporting', description: 'Dashboards that show pipeline value, conversion rates, team performance, and revenue forecasts.' },
      { title: 'Team Training', description: 'Hands-on training for your team to ensure adoption and maximize CRM effectiveness.' },
    ],
    process: [
      { title: 'Workflow Mapping', description: 'We document your entire sales process, identify bottlenecks, and design the ideal automated workflow.' },
      { title: 'Platform Setup', description: 'We build and configure your CRM with custom fields, pipelines, automations, and integrations.' },
      { title: 'Migration & Integration', description: 'We migrate data, connect tools, and test every automation thoroughly.' },
      { title: 'Training & Support', description: 'Hands-on training for your team plus 60 days of priority support.' },
    ],
    whyItMatters: `A CRM is only as valuable as the automations running inside it. Most businesses have a CRM — very few have a CRM that actively generates revenue. The gap between these two states is the difference between a digital Rolodex and an automated sales machine that qualifies leads, nurtures prospects, and closes deals while your team sleeps.

The cost of poor CRM implementation is staggering. Research shows that sales teams spend only 28% of their time actually selling — the rest is consumed by data entry, lead qualification, follow-up scheduling, and administrative tasks that a properly configured CRM handles automatically. For a 10-person sales team with an average salary of $80,000, that wasted time represents over $500,000 in annual lost productivity.

Workflow automation is where the real transformation happens. When a lead fills out a form on your website, a properly automated CRM instantly scores that lead, assigns it to the right sales rep based on territory or specialty, triggers a personalized email sequence, schedules a follow-up task, and notifies the rep — all within seconds. Without automation, that lead sits in a queue until someone manually processes it, and by then your competitor has already called them.

Integration is the multiplier. Your CRM should be the central nervous system of your business, connected to your email, calendar, phone system, ad platforms, billing tools, and customer support software. When a prospect clicks a Google Ad, that interaction should appear in their CRM record. When a customer opens a support ticket, their sales rep should know about it. When an invoice is paid, the deal should automatically move to "closed-won." These integrations eliminate data silos and give your team a complete picture of every customer relationship.

We work with every major CRM platform — Salesforce, HubSpot, Zoho, GoHighLevel, Monday.com, and Pipedrive — because the right tool depends on your business size, complexity, and budget. We provide platform-agnostic recommendations based on what will actually work for your team, not which platform pays us a referral fee.

The businesses that invest in CRM automation see immediate, measurable results. Our clients typically report a 30-50% reduction in lead response time, a 25-40% increase in conversion rates, and 15-20 hours per week saved on manual tasks within the first 30 days of implementation.`,
    tools: ['Salesforce', 'HubSpot', 'Zoho CRM', 'GoHighLevel', 'Monday.com', 'Pipedrive', 'Zapier', 'Make (Integromat)'],
    results: [
      { stat: '47% increase in close rate', description: 'for a B2B services company after implementing automated lead scoring and follow-up sequences.' },
      { stat: '20 hours/week saved', description: 'for a real estate team by automating lead distribution, follow-ups, and pipeline management.' },
    ],
    faqs: [
      { question: 'Which CRM platform is best for my business?', answer: 'It depends on your business size, complexity, and budget. Salesforce is ideal for enterprise. HubSpot excels for inbound marketing. GoHighLevel is purpose-built for agencies and local businesses. We provide a free assessment and recommendation.' },
      { question: 'Can you migrate data from my existing CRM?', answer: 'Yes. We handle full data migrations including contacts, deals, notes, activities, and custom fields. We clean and deduplicate data during migration to ensure your new CRM starts with a pristine database.' },
      { question: 'What automations can you set up?', answer: 'Automated lead scoring, email/SMS follow-up sequences, task assignment, pipeline stage triggers, appointment reminders, invoice generation, review requests, and custom workflows specific to your business process.' },
      { question: 'How long does CRM implementation take?', answer: 'A standard CRM setup and automation build takes 2-4 weeks. Complex implementations with multiple integrations and data migration can take 4-8 weeks.' },
      { question: 'Do you provide training?', answer: 'Yes. Every implementation includes hands-on training for your team, recorded video tutorials, and written documentation. We also provide 60 days of priority support to ensure successful adoption.' },
      { question: 'What integrations do you support?', answer: 'We integrate CRMs with email platforms, phone systems (RingCentral, Aircall), calendar tools, ad platforms (Google, Meta), payment processors (Stripe, QuickBooks), and hundreds of other tools via API or Zapier.' },
    ],
    relatedServices: ['custom-software', 'dashboards', 'paid-ads'],
  },
  'custom-software': {
    slug: 'custom-software',
    h1: 'Custom Software Development Services',
    subtitle: 'Bespoke applications engineered for your unique business requirements.',
    metaDescription: 'Custom software development, web applications, SaaS products, and enterprise solutions. Omnivance builds scalable software that solves real business problems.',
    deliverables: [
      { title: 'Web Applications', description: 'Full-stack web applications built with modern frameworks for performance and scalability.' },
      { title: 'SaaS Products', description: 'Multi-tenant SaaS platforms with subscription billing, user management, and analytics.' },
      { title: 'Business Automation Tools', description: 'Custom internal tools that automate manual processes and increase operational efficiency.' },
      { title: 'Mobile Applications', description: 'Cross-platform mobile apps with native performance using React Native.' },
      { title: 'API Development', description: 'RESTful and GraphQL APIs that connect your systems and enable data flow.' },
      { title: 'Maintenance & Support', description: 'Ongoing maintenance, feature development, security updates, and performance optimization.' },
    ],
    process: [
      { title: 'Requirements & Scoping', description: 'We define functional requirements, user stories, and technical architecture.' },
      { title: 'Design & Prototyping', description: 'UI/UX design, interactive prototypes, and stakeholder approval before development begins.' },
      { title: 'Agile Development', description: 'Two-week sprints with regular demos, feedback cycles, and transparent progress tracking.' },
      { title: 'Launch & Support', description: 'Deployment, monitoring, and ongoing support to ensure long-term reliability.' },
    ],
    whyItMatters: `Off-the-shelf software solves generic problems. Custom software solves your specific problems. The difference is the gap between "good enough" and a genuine competitive advantage that your competitors cannot replicate by simply purchasing the same subscription.

Every business has workflows, processes, and data requirements that are unique to their industry, market position, and operational model. When you force these unique requirements into generic software, you introduce inefficiency at every step — workarounds, manual data entry, information that lives in spreadsheets because the software does not support your workflow, and processes that take five clicks when they should take one.

Custom software eliminates these friction points entirely. When your software is built around your specific processes, your team works faster, makes fewer errors, and can focus on high-value activities instead of wrestling with tools that were designed for someone else\'s business.

The economics of custom software have changed dramatically. Modern development frameworks, cloud infrastructure, and component libraries mean that custom applications can be built in weeks rather than months, at costs that compete with annual enterprise software subscriptions. A custom CRM that perfectly fits your sales process might cost $40,000-$80,000 to build — compare that to $50,000+ per year for an enterprise Salesforce implementation that still requires customization.

We build with modern, battle-tested technology stacks. Our development team uses React, Next.js, Node.js, Python, and PostgreSQL — technologies chosen for performance, scalability, and long-term maintainability. Every application we build is designed to scale from day one, with clean architecture, comprehensive testing, and thorough documentation.

Security is built into every layer of our development process. We follow OWASP security guidelines, implement proper authentication and authorization, encrypt sensitive data at rest and in transit, and conduct security audits before every deployment. Your custom software is not just functional — it is secure.

The businesses that invest in custom software gain capabilities their competitors simply do not have. A custom analytics dashboard that provides real-time insights your industry has never seen. An internal tool that automates a 4-hour daily process into a 5-minute task. A customer portal that delivers a buying experience no off-the-shelf platform can match.`,
    tools: ['React', 'Next.js', 'Node.js', 'Python', 'PostgreSQL', 'AWS', 'Docker', 'GitHub'],
    results: [
      { stat: '4 hours/day saved per employee', description: 'with a custom operations dashboard that automated manual reporting for a logistics company.' },
      { stat: '$2.1M in new revenue', description: 'from a custom SaaS product we built and launched for a client in the education space.' },
    ],
    faqs: [
      { question: 'How much does custom software cost?', answer: 'Custom software projects typically range from $25,000 for simple internal tools to $250,000+ for full SaaS platforms. We provide detailed proposals with fixed pricing after a scoping phase.' },
      { question: 'How long does development take?', answer: 'Simple applications take 4-8 weeks. Complex platforms with multiple integrations and user roles take 3-6 months. We work in two-week sprints so you see progress continuously.' },
      { question: 'What technologies do you use?', answer: 'We primarily build with React/Next.js for frontend, Node.js/Python for backend, and PostgreSQL for databases. We deploy on AWS or Vercel depending on requirements.' },
      { question: 'Do you provide ongoing maintenance?', answer: 'Yes. We offer monthly maintenance plans that include bug fixes, security updates, performance monitoring, and feature development. Most clients retain us for ongoing support.' },
      { question: 'Can you build mobile apps?', answer: 'Yes. We build cross-platform mobile applications using React Native, which allows us to ship iOS and Android apps from a single codebase while maintaining near-native performance.' },
      { question: 'How do you handle project communication?', answer: 'We use Slack for daily communication, conduct weekly sprint reviews, and provide access to a project management board where you can track progress in real-time.' },
    ],
    relatedServices: ['dashboards', 'crm', 'aeo-geo'],
  },
  dashboards: {
    slug: 'dashboards',
    h1: 'Custom Reporting Dashboards & API Integrations',
    subtitle: 'Real-time data visualization that turns information into action.',
    metaDescription: 'Custom business intelligence dashboards and API integrations. Consolidate data from every marketing channel into real-time, actionable reporting.',
    deliverables: [
      { title: 'Custom Dashboard Development', description: 'Interactive dashboards built for your specific KPIs, data sources, and workflow.' },
      { title: 'API Integrations', description: 'Connect Google Ads, Meta, CRM, billing, and any system with an API into one unified view.' },
      { title: 'Automated Reporting', description: 'Scheduled reports delivered to your inbox with actionable insights and trend analysis.' },
      { title: 'Data Warehousing', description: 'Centralized data storage that aggregates information from all your business systems.' },
      { title: 'Real-Time Alerts', description: 'Instant notifications when KPIs hit thresholds — positive or negative.' },
      { title: 'White-Label Solutions', description: 'Branded dashboards for agencies and multi-location businesses.' },
    ],
    process: [
      { title: 'Data Mapping', description: 'We identify all data sources, KPIs, and reporting requirements.' },
      { title: 'Architecture Design', description: 'We design the data pipeline, storage, and visualization architecture.' },
      { title: 'Build & Integrate', description: 'We build the dashboard, connect APIs, and populate with live data.' },
      { title: 'Training & Iteration', description: 'Team training plus iterative refinement based on real usage.' },
    ],
    whyItMatters: `Data without visualization is noise. Most businesses are drowning in data spread across a dozen platforms — Google Analytics, Google Ads, Meta Business Suite, CRM, billing software, email marketing — with no unified view of performance. This fragmentation means decisions are made on incomplete information, opportunities are missed, and problems go undetected until they become crises.

Custom reporting dashboards solve this by consolidating every data source into a single, real-time interface designed around your specific decision-making process. Instead of logging into five platforms to answer the question "how are we performing this month," you open one dashboard and see everything — marketing spend, lead volume, conversion rates, revenue, and ROI — updated in real-time.

The difference between a custom dashboard and tools like Google Data Studio or Tableau is specificity. Generic tools require you to build reports from scratch, maintain data connections, and interpret raw data. Our dashboards are pre-built around your exact KPIs with automated insights that tell you not just what happened, but what to do about it.

API integrations are the backbone of modern business intelligence. We connect to any platform that has an API — which includes virtually every marketing, sales, and operations tool on the market. Google Ads performance data, Meta campaign metrics, CRM pipeline values, Stripe revenue data, and email engagement statistics all flow into one unified data warehouse and display in real-time on your dashboard.

Real-time alerts transform reactive management into proactive management. When your cost per lead spikes above threshold, when a campaign suddenly stops spending, when a high-value deal moves to a new pipeline stage — you know instantly, not when someone checks a report days later. These alerts have saved our clients hundreds of thousands of dollars in wasted ad spend by catching issues within minutes instead of days.

For agencies and multi-location businesses, we build white-label dashboard solutions that provide each client or location with their own branded reporting portal. This replaces manual monthly reports with always-on, always-current dashboards that increase transparency and client satisfaction.`,
    tools: ['React', 'D3.js', 'PostgreSQL', 'Google BigQuery', 'Looker Studio', 'REST APIs', 'GraphQL', 'AWS Lambda'],
    results: [
      { stat: '40 hours/month saved on reporting', description: 'for a multi-location franchise by automating manual report generation across 25 locations.' },
      { stat: '$180K in recovered ad spend', description: 'by implementing real-time budget alerts that caught overspending within minutes instead of days.' },
    ],
    faqs: [
      { question: 'What data sources can you connect?', answer: 'We can connect any platform with an API — Google Ads, Meta, Google Analytics, Salesforce, HubSpot, Stripe, QuickBooks, Shopify, and hundreds of others. If it has an API, we can integrate it.' },
      { question: 'How is this different from Google Data Studio?', answer: 'Our dashboards are custom-built applications with real-time data pipelines, automated insights, and alerting capabilities that go far beyond what Data Studio offers. They are also faster, more reliable, and designed around your specific workflow.' },
      { question: 'How much does a custom dashboard cost?', answer: 'Dashboard projects typically range from $10,000 to $50,000 depending on data sources, complexity, and features. Monthly hosting and maintenance starts at $500/month.' },
      { question: 'Can I see a demo?', answer: 'Yes. We can walk you through example dashboards for your industry during a free consultation call. This gives you a clear picture of what your custom dashboard would look like.' },
      { question: 'How long does implementation take?', answer: 'Most dashboard projects take 3-6 weeks from data mapping to launch. Complex multi-source implementations with custom data warehousing can take 6-10 weeks.' },
      { question: 'Do you provide white-label solutions?', answer: 'Yes. We build white-label dashboards for agencies and franchises that you can offer to your clients or locations under your own brand.' },
    ],
    relatedServices: ['custom-software', 'crm', 'paid-ads'],
  },
  'print-media': {
    slug: 'print-media',
    h1: 'Print Media, PR & Offline Marketing Agency',
    subtitle: 'Strategic print advertising, press coverage, and offline marketing that drives measurable results.',
    metaDescription: 'Print advertising, public relations, press releases, and offline marketing campaigns. Omnivance bridges the gap between digital and traditional media.',
    deliverables: [
      { title: 'Print Advertising', description: 'Magazine, newspaper, and trade publication ad design and placement.' },
      { title: 'Public Relations', description: 'Media outreach, press releases, journalist relationships, and earned media coverage.' },
      { title: 'Press Release Distribution', description: 'Strategic distribution to targeted media outlets with follow-up for maximum coverage.' },
      { title: 'Trade Show Materials', description: 'Booth design, brochures, banners, and promotional materials for events.' },
      { title: 'Offline Campaign Integration', description: 'QR codes, tracking URLs, and attribution models that connect offline to online.' },
      { title: 'Media Relations', description: 'Ongoing journalist relationship building and proactive pitch development.' },
    ],
    process: [
      { title: 'Media Audit', description: 'We analyze your industry\'s media landscape and identify the highest-impact opportunities.' },
      { title: 'Strategy Development', description: 'A comprehensive plan combining print, PR, and offline channels with clear goals.' },
      { title: 'Creative & Execution', description: 'We design materials, write press releases, and execute campaigns across channels.' },
      { title: 'Measurement & Reporting', description: 'Attribution tracking that connects offline activities to online conversions and revenue.' },
    ],
    whyItMatters: `In an era of digital saturation, offline marketing channels offer a unique advantage: tangibility. A well-designed print ad, a feature in a respected trade publication, or a mention in a major news outlet carries a weight of credibility that digital-only advertising struggles to match. The most effective marketing strategies integrate both digital and traditional channels.

Print advertising is far from dead — it has become more targeted and more measurable. Trade publications reach concentrated audiences of decision-makers in specific industries. Local magazines and newspapers connect with community-engaged consumers. Direct mail achieves response rates 5-9× higher than email marketing. The key is strategic selection of where to advertise, not blanket spending.

Public relations remains one of the most cost-effective ways to build brand authority. A single feature in a respected publication generates more trust than thousands of dollars in advertising because it comes with the implicit endorsement of an editorial team. Our PR team maintains relationships with journalists across dozens of industries and secures earned media coverage that positions our clients as industry leaders.

The integration of offline and online channels is where most businesses fall short. A print ad without a tracking URL is invisible to your analytics. A PR mention without a content strategy to amplify it leaves impact on the table. We bridge this gap with QR codes, custom landing pages, unique phone numbers, and attribution models that track the customer journey from offline touchpoint to online conversion.

Trade shows and events represent concentrated opportunities to connect with prospects, partners, and industry peers. Our team designs and produces event materials — from booth graphics and brochures to presentations and promotional items — that represent your brand at the level it deserves. We also handle pre-show marketing and post-show follow-up to maximize the ROI of your event investment.

The businesses that maintain a strategic offline presence build stronger brands, reach audiences that digital advertising misses, and create multiple touchpoints that reinforce their message across the customer journey. Offline marketing is not a relic of the past — it is an underutilized competitive advantage.`,
    tools: ['Adobe InDesign', 'Adobe Illustrator', 'Cision', 'PR Newswire', 'Muck Rack', 'QR Code generators', 'CallRail', 'Google UTM Builder'],
    results: [
      { stat: '23 media placements in 60 days', description: 'including Forbes, local news, and 4 trade publications for a fintech startup.' },
      { stat: '$340K in tracked revenue from print', description: 'using QR code attribution for a luxury home builder\'s magazine campaign.' },
    ],
    faqs: [
      { question: 'Is print advertising still effective?', answer: 'Yes, when targeted strategically. Trade publications reach concentrated audiences of decision-makers. Direct mail achieves 5-9× higher response rates than email. Print builds credibility that digital alone cannot match.' },
      { question: 'How do you measure print/offline ROI?', answer: 'We use QR codes, custom URLs, unique phone numbers, and correlation analysis to track the customer journey from offline touchpoint to online conversion and revenue.' },
      { question: 'What does PR cost?', answer: 'PR retainers typically range from $3,000 to $10,000 per month depending on scope, industry, and desired frequency of outreach. Press release distribution and one-off campaigns are priced individually.' },
      { question: 'Can you get us in Forbes or major publications?', answer: 'We have secured placements in Forbes, Entrepreneur, Inc, and dozens of other major publications. However, we never guarantee specific placements — earned media is editorial-driven. What we guarantee is strategic outreach and compelling pitches.' },
      { question: 'Do you design print materials?', answer: 'Yes. Our design team creates print ads, brochures, trade show materials, business cards, and any other print collateral your brand needs.' },
      { question: 'How does offline marketing integrate with digital?', answer: 'Every offline campaign we run includes digital tracking elements — QR codes, custom landing pages, unique phone numbers — so we can attribute offline exposure to online conversions and measure true ROI.' },
    ],
    relatedServices: ['branding', 'media-creation', 'mailing'],
  },
  branding: {
    slug: 'branding',
    h1: 'Brand Identity & Strategy Services',
    subtitle: 'Build a visual identity and brand strategy that commands premium positioning.',
    metaDescription: 'Brand identity design, logo creation, visual systems, and brand strategy. Omnivance builds brands that stand out, command premium prices, and earn loyalty.',
    deliverables: [
      { title: 'Brand Strategy', description: 'Positioning, messaging framework, value propositions, and competitive differentiation.' },
      { title: 'Logo Design', description: 'Primary logo, variations, favicon, and usage guidelines for every application.' },
      { title: 'Visual Identity System', description: 'Color palette, typography, iconography, patterns, and design principles.' },
      { title: 'Brand Guidelines', description: 'Comprehensive style guide ensuring consistency across all touchpoints.' },
      { title: 'Collateral Design', description: 'Business cards, letterheads, presentations, social templates, and email signatures.' },
      { title: 'Brand Voice & Messaging', description: 'Tone of voice guidelines, taglines, elevator pitches, and key messaging.' },
    ],
    process: [
      { title: 'Discovery', description: 'Deep dive into your market, competitors, audience, and brand aspirations.' },
      { title: 'Strategy', description: 'Positioning, messaging framework, and creative direction development.' },
      { title: 'Design', description: 'Logo concepts, visual system development, and iterative refinement.' },
      { title: 'Delivery', description: 'Final assets, brand guidelines, and templates for your team.' },
    ],
    whyItMatters: `Your brand is not your logo. Your brand is the sum total of every experience, perception, and emotion that people associate with your business. But visual identity — the logo, colors, typography, and design system — is the most visible and immediate expression of that brand. It is the first thing prospects see and the last thing customers remember.

The difference between a brand that commands $500/hour and one that struggles to charge $150/hour is often not skill or quality — it is perception. Premium brands invest in professional visual identity because they understand that people judge quality by appearance before they experience it firsthand. A polished, cohesive brand identity signals competence, stability, and authority.

Brand strategy is the foundation that informs every visual and verbal decision. Before we design a single pixel, we define your positioning — who you are, who you serve, how you are different, and why it matters. This strategic clarity ensures that your brand identity is not just aesthetically pleasing but strategically powerful, communicating exactly the right message to exactly the right audience.

Consistency is the multiplier of brand strength. When every touchpoint — website, social media, email, business cards, proposals, signage — speaks the same visual language, brand recognition compounds. Studies show that consistent brand presentation increases revenue by up to 23%. Our comprehensive brand guidelines ensure that your visual identity remains consistent regardless of who is creating content or where it appears.

A strong brand identity reduces marketing costs over time. When your brand is immediately recognizable and associated with quality, your advertising works harder — click-through rates increase, conversion rates improve, and word-of-mouth grows because people remember and recommend brands with distinctive visual identities.

The brands that invest in professional identity design are making a strategic decision about how the market perceives their value. In a world where consumers are bombarded with thousands of brand messages daily, a cohesive, premium visual identity is the difference between being noticed and being ignored.`,
    tools: ['Figma', 'Adobe Illustrator', 'Adobe InDesign', 'Coolors', 'Google Fonts', 'Fontjoy', 'Brandmark', 'Notion'],
    results: [
      { stat: '40% increase in average deal size', description: 'after a full rebrand for a consulting firm that elevated their perceived market positioning.' },
      { stat: '3× brand recognition', description: 'measured through surveys after a visual identity overhaul for a regional restaurant chain.' },
    ],
    faqs: [
      { question: 'How much does branding cost?', answer: 'Full brand identity projects range from $8,000 for emerging brands to $50,000+ for enterprise rebrands. This includes strategy, logo design, visual system, guidelines, and core collateral.' },
      { question: 'How long does a branding project take?', answer: 'Typically 4-8 weeks from discovery through final asset delivery. Complex projects with multiple stakeholders may take 8-12 weeks.' },
      { question: 'Do you do rebrands?', answer: 'Yes. We handle both new brand creation and full rebrands. For rebrands, we conduct a thorough audit of existing brand equity to ensure we preserve what works while elevating what needs improvement.' },
      { question: 'What deliverables do I receive?', answer: 'A complete brand package including logo files (all formats), color palette, typography specifications, brand guidelines document, business card design, social media templates, and presentation templates.' },
      { question: 'Can you help with naming?', answer: 'Yes. We offer brand naming services that include market research, linguistic analysis, domain availability checks, and trademark screening.' },
      { question: 'How do you ensure brand consistency?', answer: 'We create comprehensive brand guidelines that cover logo usage, color specifications, typography rules, imagery style, and tone of voice. We also provide templates for common applications so your team can create on-brand materials independently.' },
    ],
    relatedServices: ['media-creation', 'print-media', 'social-media'],
  },
  mailing: {
    slug: 'mailing',
    h1: 'Direct Mail Marketing Campaign Services',
    subtitle: 'High-converting direct mail campaigns that put your brand in customers\' hands.',
    metaDescription: 'Direct mail marketing, EDDM, and print mail campaigns. Omnivance designs, prints, and distributes targeted mail campaigns with trackable ROI.',
    deliverables: [
      { title: 'Campaign Strategy', description: 'Audience targeting, message development, and campaign timing optimization.' },
      { title: 'Creative Design', description: 'Postcards, letters, brochures, and mailers designed for maximum response rates.' },
      { title: 'EDDM (Every Door Direct Mail)', description: 'Saturate specific neighborhoods and zip codes without a mailing list.' },
      { title: 'Targeted Mailing Lists', description: 'Demographic and geographic targeting with purchased or custom mailing lists.' },
      { title: 'Print Production', description: 'High-quality printing with premium paper stocks and finishing options.' },
      { title: 'Response Tracking', description: 'QR codes, custom URLs, unique phone numbers, and offer codes for attribution.' },
    ],
    process: [
      { title: 'Targeting', description: 'We define your ideal audience and select the optimal mailing strategy.' },
      { title: 'Creative Development', description: 'Design and copywriting for mailers optimized for response rates.' },
      { title: 'Production & Mailing', description: 'Professional printing and USPS-compliant distribution.' },
      { title: 'Tracking & Analysis', description: 'Response tracking, ROI analysis, and recommendations for future campaigns.' },
    ],
    whyItMatters: `Direct mail is the most underestimated marketing channel in 2025. While every business fights for attention in crowded digital channels — competing with thousands of emails, social media posts, and display ads — direct mail lands in a physical mailbox with dramatically less competition. The average American receives 2-3 pieces of marketing mail per day compared to 120+ marketing emails.

The numbers tell a compelling story. Direct mail achieves a 4.4% response rate compared to email\'s 0.12%. That is 37 times higher. For Every Door Direct Mail (EDDM), which allows you to saturate specific neighborhoods without a mailing list, the cost per household can be as low as $0.18 — making it one of the most cost-effective ways to reach a geographically targeted audience.

The tactile nature of physical mail creates psychological advantages that digital cannot replicate. Studies show that physical mail is processed more deeply by the brain, creates stronger emotional responses, and is remembered more accurately than digital messages. When someone holds your mailer in their hands, they are engaging with your brand in a fundamentally different way than scrolling past a digital ad.

Modern direct mail is not your grandfather\'s junk mail campaign. Advanced targeting capabilities allow you to reach specific demographics, income levels, homeownership statuses, and geographic areas. You can mail to homeowners within 5 miles of your business who earn over $100K and have recently searched for services in your category. This precision targeting, combined with professional creative design, transforms direct mail from a mass-market spray-and-pray channel into a precision marketing tool.

Response tracking has also transformed direct mail. Every piece we send includes QR codes, custom landing page URLs, unique phone numbers, and offer codes that allow us to track response rates, cost per lead, and ROI with the same precision as digital campaigns. Our clients know exactly how many calls, website visits, and sales each mailing generates.

For local businesses — home services, healthcare, real estate, restaurants, fitness studios — direct mail is often the highest-ROI channel in their marketing mix. It reaches people in their homes, in their neighborhood, at the exact moment they are most receptive to local services. The businesses that leverage direct mail while their competitors focus exclusively on digital are capturing customers that digital advertising simply cannot reach.`,
    tools: ['USPS EDDM', 'PostcardMania', 'Adobe InDesign', 'CallRail', 'QR Code Tracking', 'Google UTM Builder', 'AccuData', 'Data.com'],
    results: [
      { stat: '6.2% response rate', description: 'for a dental practice EDDM campaign targeting 15,000 households within 5 miles.' },
      { stat: '$47 cost per new customer', description: 'for a home cleaning service through targeted direct mail with coupon tracking.' },
    ],
    faqs: [
      { question: 'What is EDDM (Every Door Direct Mail)?', answer: 'EDDM is a USPS service that lets you mail to every household on specific postal routes without needing a mailing list. It is the most cost-effective way to reach geographically targeted audiences, with costs as low as $0.18 per piece.' },
      { question: 'How much does a direct mail campaign cost?', answer: 'EDDM campaigns start at $0.35-$0.55 per piece including design, printing, and postage. Targeted list campaigns with premium materials typically range from $0.75-$2.00 per piece. Minimum quantities usually start at 5,000 pieces.' },
      { question: 'How do you track direct mail results?', answer: 'We include QR codes, custom landing page URLs, unique phone numbers, and promo codes on every piece. This allows us to track scan rates, website visits, phone calls, and conversions attributable to each campaign.' },
      { question: 'What types of businesses benefit from direct mail?', answer: 'Local businesses see the strongest results — home services, healthcare, dental, real estate, restaurants, gyms, auto repair. Any business with a defined geographic service area can leverage direct mail effectively.' },
      { question: 'How long does it take to launch a campaign?', answer: 'Typical turnaround from strategy to mailbox delivery is 2-3 weeks. Rush delivery is available for time-sensitive campaigns.' },
      { question: 'Can you handle the printing and mailing?', answer: 'Yes. We handle every step — strategy, design, copywriting, printing, postal compliance, and distribution. You approve the creative and we take care of everything else.' },
    ],
    relatedServices: ['print-media', 'branding', 'paid-ads'],
  },
  'social-media': {
    slug: 'social-media',
    h1: 'Social Media Content & Management Services',
    subtitle: 'Build audiences, drive engagement, and convert followers into customers.',
    metaDescription: 'Social media content creation, strategy, and management for Instagram, TikTok, LinkedIn, Facebook, and YouTube. Omnivance builds social presence that drives revenue.',
    deliverables: [
      { title: 'Content Strategy', description: 'Platform-specific content calendars, posting schedules, and content pillars.' },
      { title: 'Content Creation', description: 'Photos, videos, graphics, Reels, TikToks, and Stories produced by our creative team.' },
      { title: 'Community Management', description: 'Comment responses, DM management, and proactive engagement.' },
      { title: 'Influencer Partnerships', description: 'Identify, negotiate, and manage influencer collaborations for brand amplification.' },
      { title: 'Social Advertising', description: 'Paid social campaigns that amplify organic content and drive conversions.' },
      { title: 'Analytics & Reporting', description: 'Monthly performance reports with growth metrics, engagement data, and content insights.' },
    ],
    process: [
      { title: 'Audit & Strategy', description: 'We analyze your current social presence, competitors, and audience to build a growth strategy.' },
      { title: 'Content Production', description: 'Our creative team produces a month of content in batch production sessions.' },
      { title: 'Publishing & Engagement', description: 'We post, engage, and manage your community daily across all platforms.' },
      { title: 'Analysis & Optimization', description: 'Monthly reviews to refine strategy based on performance data and trends.' },
    ],
    whyItMatters: `Social media is where your customers spend 2+ hours every day. It is where they discover new brands, research purchases, and form opinions about the businesses they encounter. A strong social media presence is no longer optional for businesses that want to grow — it is foundational infrastructure.

The challenge is that effective social media requires consistent, platform-native content creation, strategic posting, active community engagement, and data-driven optimization. Most businesses post sporadically, repurpose the same content across every platform, and have no strategy for converting followers into customers. This approach wastes the potential of the most powerful organic marketing channel available.

Platform-native content is the key differentiator. Content that performs on Instagram will not perform identically on TikTok, LinkedIn, or YouTube. Each platform has its own algorithm, audience behavior patterns, content formats, and best practices. Our team creates content specifically designed for each platform, maximizing reach and engagement on every channel.

Community management transforms passive followers into active brand advocates. Responding to comments within hours, engaging with relevant conversations, and building genuine relationships with your audience creates a level of brand loyalty that advertising cannot buy. Our community management team handles daily engagement across all platforms, ensuring your brand is present and responsive.

Social media also serves as a powerful SEO and brand authority signal. Active social profiles with engaged audiences send trust signals to search engines and AI models alike. Content that generates social engagement is more likely to rank in search results and be cited by AI search engines. A strong social presence amplifies the effectiveness of every other marketing channel.

The businesses that treat social media as a strategic marketing channel — with professional content, consistent posting, active engagement, and measurable goals — build organic audiences that generate leads and sales without ongoing ad spend. The businesses that treat it as an afterthought lose ground to competitors who have made social media a priority.

Influencer partnerships extend your brand\'s reach to established audiences that trust the recommendations of creators they follow. We identify influencers whose audiences align with your target market, negotiate partnerships that deliver measurable results, and manage the entire collaboration process.`,
    tools: ['Later', 'Sprout Social', 'Canva Pro', 'Adobe Creative Suite', 'CapCut', 'Hootsuite', 'Instagram Insights', 'TikTok Analytics'],
    results: [
      { stat: '0 to 45K followers in 6 months', description: 'for a fitness brand through consistent, platform-native content and strategic hashtag usage.' },
      { stat: '$22K/month in social-attributed revenue', description: 'for a DTC skincare brand through organic content and influencer partnerships.' },
    ],
    faqs: [
      { question: 'Which social platforms should my business be on?', answer: 'It depends on your audience. B2B businesses should prioritize LinkedIn. B2C brands with visual products thrive on Instagram and TikTok. Local businesses need Facebook and Google Business Profile. We recommend focusing on 2-3 platforms and doing them well.' },
      { question: 'How much does social media management cost?', answer: 'Our social media management packages start at $2,500/month for 3 platforms and include content creation, daily posting, community management, and monthly reporting. Custom packages are available for larger needs.' },
      { question: 'Do you create all the content?', answer: 'Yes. Our creative team handles photography, videography, graphic design, and copywriting. We produce content in batch sessions and schedule it across your platforms.' },
      { question: 'How do you measure social media ROI?', answer: 'We track engagement rates, follower growth, website traffic from social, lead generation, and revenue attribution. For e-commerce clients, we implement conversion tracking that shows exactly how much revenue each platform generates.' },
      { question: 'Can you manage influencer campaigns?', answer: 'Yes. We identify relevant influencers, negotiate rates, manage content briefs, review deliverables, and track performance. We focus on micro-influencers (10K-100K followers) who typically deliver higher engagement rates and better ROI.' },
      { question: 'How quickly will I see results?', answer: 'Social media growth is a compounding process. You will see engagement improvements within the first month, but meaningful audience growth and revenue impact typically develop over 3-6 months of consistent effort.' },
    ],
    relatedServices: ['media-creation', 'paid-ads', 'branding'],
  },
}
