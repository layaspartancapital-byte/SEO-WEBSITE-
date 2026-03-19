import type { Metadata } from 'next'
import { Inter, Syne } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingCTA from '@/components/FloatingCTA'
import CalendlyModal from '@/components/CalendlyModal'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://omnivancemedia.com'),
  title: {
    template: '%s | Omnivance Media Group',
    default: 'Omnivance Media Group | Full-Service Marketing & Technology Agency',
  },
  description:
    'SEO, paid ads, TV commercials, CRM automation, custom software — one team, every channel. We\'ve generated $50M+ in trackable client revenue.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Omnivance Media Group',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body className="font-body bg-ink text-white antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
        <CalendlyModal />
      </body>
    </html>
  )
}
