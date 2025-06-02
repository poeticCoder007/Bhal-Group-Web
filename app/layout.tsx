import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "BHAL Group & Rajarshi Construction Co | Industrial Construction & Civil Infrastructure",
    template: "%s | BHAL Group - Industrial Construction Company"
  },
  description: "BHAL Group and Rajarshi Construction Co - Leading industrial construction company since 1967. Specializing in manufacturing facilities, steel fabrication, plant construction, warehouses & distribution centers.",
  keywords: [
    "industrial construction",
    "manufacturing facility construction",
    "steel fabrication",
    "plant construction",
    "warehouse construction",
    "distribution center construction",
    "structural steel erection",
    "industrial contractor",
    "manufacturing plant construction",
    "industrial building contractor",
    "civil infrastructure",
    "processing plant construction",
    "energy facility construction",
    "BHAL Group",
    "Rajarshi Construction Co",
    "construction company",
    "industrial construction services"
  ],
  authors: [{ name: "BHAL Group" }],
  creator: "BHAL Group",
  publisher: "BHAL Group & Rajarshi Construction Co",
  generator: 'Next.js',
  applicationName: 'BHAL Group Website',
  referrer: 'origin-when-cross-origin',
  category: 'Industrial Construction',
  classification: 'Business',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bhalgroup.com',
    siteName: 'BHAL Group & Rajarshi Construction Co',
    title: 'BHAL Group & Rajarshi Construction Co | Industrial Construction & Civil Infrastructure',
    description: 'Leading industrial construction company since 1967. Specializing in manufacturing facilities, steel fabrication, plant construction, warehouses & distribution centers.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BHAL Group - Industrial Construction Company',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bhalgroup',
    creator: '@bhalgroup',
    title: 'BHAL Group & Rajarshi Construction Co | Industrial Construction & Civil Infrastructure',
    description: 'Leading industrial construction company since 1967. Specializing in manufacturing facilities, steel fabrication, plant construction.',
    images: ['/images/twitter-card.jpg'],
  },
  verification: {
    google: 'your-google-verification-code-here',
    yandex: 'your-yandex-verification-code-here',
    yahoo: 'your-yahoo-verification-code-here',
  },
  alternates: {
    canonical: 'https://bhalgroup.com',
    languages: {
      'en-US': 'https://bhalgroup.com',
    },
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ]
  },
  other: {
    'business:contact_data:street_address': 'BHAL Group Address',
    'business:contact_data:locality': 'City',
    'business:contact_data:region': 'State',
    'business:contact_data:postal_code': 'Postal Code',
    'business:contact_data:country_name': 'Country',
    'geo.region': 'Your Region',
    'geo.placename': 'Your City',
    'ICBM': 'latitude, longitude',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#1f2937" />
        <meta name="color-scheme" content="light dark" />
        <link rel="canonical" href="https://bhalgroup.com" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
