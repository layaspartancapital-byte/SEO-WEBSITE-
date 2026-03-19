/**
 * Inline SVG wordmark logos for the hero trust strip and proof bar marquee.
 * Each logo is a clean SVG text path styled to resemble the real brand wordmark.
 * Rendered at consistent height with white fill for dark backgrounds.
 */

interface LogoProps {
  className?: string
}

/* ---------- Hero client logos ---------- */

export function NikeLogo({ className = '' }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 100 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 2C11.6 5.4 2.2 8.8 1 9.2c-2.2.8-1.8 1.6 2 4.4 2 1.4 3.6 2.8 3.6 3 0 .2-2.6 5.4-5.6 11.4L-4.8 39.2l3-1.2c7-2.8 29.4-12 32.6-13.4 5.2-2.2 10.4-5.6 12.8-8.4 1.8-2 2.4-3.4 2.4-5.4 0-5-4.4-7.8-8.4-5.4-1.8 1-1.8 1-1.4-.4.4-1 .4-1.4-.2-1.4-.4 0-7 2.6-14.8 5.8z" transform="translate(5 -2) scale(0.85)" />
    </svg>
  )
}

export function ShopifyLogo({ className = '' }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 110 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="24" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="26" letterSpacing="-0.5">shopify</text>
    </svg>
  )
}

export function HubSpotLogo({ className = '' }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 120 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="24" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="24" letterSpacing="-0.5">HubSpot</text>
    </svg>
  )
}

export function MailchimpLogo({ className = '' }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 140 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="24" fontFamily="Georgia, serif" fontWeight="700" fontSize="24" letterSpacing="-0.3">Mailchimp</text>
    </svg>
  )
}

export function StripeLogo({ className = '' }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 90 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="25" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="28" letterSpacing="-0.5">stripe</text>
    </svg>
  )
}

/* ---------- Media / publication logos ---------- */

function TextLogo({ text, width = 120, fontSize = 20, fontFamily = 'Arial, sans-serif', fontWeight = '700', letterSpacing = '-0.3', italic = false, className = '' }: {
  text: string
  width?: number
  fontSize?: number
  fontFamily?: string
  fontWeight?: string
  letterSpacing?: string
  italic?: boolean
  className?: string
}) {
  return (
    <svg className={className} viewBox={`0 0 ${width} 32`} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <text
        x="0"
        y="24"
        fontFamily={fontFamily}
        fontWeight={fontWeight}
        fontSize={fontSize}
        letterSpacing={letterSpacing}
        fontStyle={italic ? 'italic' : 'normal'}
      >
        {text}
      </text>
    </svg>
  )
}

export function ForbesLogo({ className = '' }: LogoProps) {
  return <TextLogo className={className} text="Forbes" width={100} fontSize={26} fontFamily="Georgia, serif" fontWeight="400" italic />
}

export function EntrepreneurLogo({ className = '' }: LogoProps) {
  return <TextLogo className={className} text="Entrepreneur" width={170} fontSize={22} fontFamily="Georgia, serif" fontWeight="400" italic />
}

export function BusinessInsiderLogo({ className = '' }: LogoProps) {
  return <TextLogo className={className} text="Business Insider" width={190} fontSize={20} fontWeight="800" />
}

export function AdWeekLogo({ className = '' }: LogoProps) {
  return <TextLogo className={className} text="ADWEEK" width={120} fontSize={24} fontWeight="900" letterSpacing="2" />
}

export function IncLogo({ className = '' }: LogoProps) {
  return <TextLogo className={className} text="Inc." width={55} fontSize={28} fontFamily="Georgia, serif" fontWeight="400" italic />
}

export function FastCompanyLogo({ className = '' }: LogoProps) {
  return <TextLogo className={className} text="FAST COMPANY" width={180} fontSize={20} fontWeight="900" letterSpacing="1" />
}

export function TechCrunchLogo({ className = '' }: LogoProps) {
  return <TextLogo className={className} text="TechCrunch" width={150} fontSize={22} fontWeight="800" />
}

export function WiredLogo({ className = '' }: LogoProps) {
  return <TextLogo className={className} text="WIRED" width={95} fontSize={26} fontWeight="900" letterSpacing="2" />
}

export function MarketingWeekLogo({ className = '' }: LogoProps) {
  return <TextLogo className={className} text="Marketing Week" width={175} fontSize={20} fontWeight="700" />
}

export function HubSpotBlogLogo({ className = '' }: LogoProps) {
  return <TextLogo className={className} text="HubSpot Blog" width={155} fontSize={20} fontWeight="700" />
}

export function SEJLogo({ className = '' }: LogoProps) {
  return <TextLogo className={className} text="Search Engine Journal" width={230} fontSize={18} fontWeight="700" />
}

export function MozLogo({ className = '' }: LogoProps) {
  return <TextLogo className={className} text="Moz" width={60} fontSize={28} fontWeight="800" />
}

export function PRNewswireLogo({ className = '' }: LogoProps) {
  return <TextLogo className={className} text="PR Newswire" width={150} fontSize={20} fontWeight="700" />
}

export function ReutersLogo({ className = '' }: LogoProps) {
  return <TextLogo className={className} text="REUTERS" width={120} fontSize={22} fontWeight="700" letterSpacing="3" />
}

export function APNewsLogo({ className = '' }: LogoProps) {
  return <TextLogo className={className} text="AP News" width={105} fontSize={22} fontWeight="800" />
}

export function BusinessWireLogo({ className = '' }: LogoProps) {
  return <TextLogo className={className} text="Business Wire" width={160} fontSize={20} fontWeight="700" />
}

export function YahooFinanceLogo({ className = '' }: LogoProps) {
  return <TextLogo className={className} text="Yahoo! Finance" width={170} fontSize={20} fontFamily="Arial, sans-serif" fontWeight="800" />
}

export function MarketWatchLogo({ className = '' }: LogoProps) {
  return <TextLogo className={className} text="MarketWatch" width={155} fontSize={22} fontWeight="700" />
}

/* ---------- Grouped arrays for marquee rows ---------- */

export const ROW_1_LOGOS = [
  { key: 'forbes', Logo: ForbesLogo },
  { key: 'entrepreneur', Logo: EntrepreneurLogo },
  { key: 'business-insider', Logo: BusinessInsiderLogo },
  { key: 'adweek', Logo: AdWeekLogo },
  { key: 'inc', Logo: IncLogo },
  { key: 'fast-company', Logo: FastCompanyLogo },
  { key: 'techcrunch', Logo: TechCrunchLogo },
  { key: 'wired', Logo: WiredLogo },
]

export const ROW_2_LOGOS = [
  { key: 'marketing-week', Logo: MarketingWeekLogo },
  { key: 'hubspot-blog', Logo: HubSpotBlogLogo },
  { key: 'sej', Logo: SEJLogo },
  { key: 'moz', Logo: MozLogo },
  { key: 'pr-newswire', Logo: PRNewswireLogo },
  { key: 'reuters', Logo: ReutersLogo },
  { key: 'ap-news', Logo: APNewsLogo },
  { key: 'business-wire', Logo: BusinessWireLogo },
  { key: 'yahoo-finance', Logo: YahooFinanceLogo },
  { key: 'marketwatch', Logo: MarketWatchLogo },
]
