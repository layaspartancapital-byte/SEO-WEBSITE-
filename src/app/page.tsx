import Hero from '@/components/sections/Hero'
import ProofBar from '@/components/sections/ProofBar'
import VSLSection from '@/components/sections/VSLSection'
import ServicesGrid from '@/components/sections/ServicesGrid'
import ResultsSection from '@/components/sections/ResultsSection'
import HowWeWork from '@/components/sections/HowWeWork'
import Testimonials from '@/components/sections/Testimonials'
import WhoThisIsFor from '@/components/sections/WhoThisIsFor'
import FinalCTA from '@/components/sections/FinalCTA'
import { organizationSchema, webSiteSchema } from '@/lib/schema'

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema()) }}
      />
      <Hero />
      <ProofBar />
      <VSLSection />
      <ServicesGrid />
      <ResultsSection />
      <HowWeWork />
      <Testimonials />
      <WhoThisIsFor />
      <FinalCTA />
    </>
  )
}
