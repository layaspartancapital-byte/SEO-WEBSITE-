import type { Metadata } from 'next'
import { Inter, Syne } from 'next/font/google'
import Script from 'next/script'
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
  verification: {
    google: 'ECt6GtApLnkereBis6M_upZchEnZrMw6bF5QoRNNlsE',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5ER3LX5659"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5ER3LX5659');
          `}
        </Script>
      </head>
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
