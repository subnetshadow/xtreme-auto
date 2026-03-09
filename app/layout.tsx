import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
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
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
