import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const inter = localFont({
  src: './fonts/inter-var.woff2',
  display: 'swap',
  variable: '--font-inter',
  weight: '100 900',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.xtremedetailingyyc.ca'),
  title: 'Xtreme Auto Detailing | Premium Auto Detailing in Calgary',
  description:
    'Calgary\'s trusted 5-star auto detailing professionals. Mobile & studio services including ceramic coatings, paint correction, interior & exterior detailing. Serving Calgary, Airdrie, Cochrane, Chestermere, and Okotoks.',
  keywords:
    'auto detailing Calgary, mobile detailing Calgary, ceramic coating Calgary, paint correction Calgary, car detailing Calgary',
  openGraph: {
    title: 'Xtreme Auto Detailing | Premium Auto Detailing in Calgary',
    description:
      'Restore, protect, and elevate your vehicle with Calgary\'s trusted 5-star detailing professionals.',
    type: 'website',
    locale: 'en_CA',
    siteName: 'Xtreme Auto Detailing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xtreme Auto Detailing | Premium Auto Detailing in Calgary',
    description:
      'Calgary\'s trusted 5-star detailing professionals — ceramic coating, PPF, paint correction & mobile detailing.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
