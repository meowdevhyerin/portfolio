import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import './globals.css'

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '900'],
  variable: '--font-noto-sans-kr',
})

export const metadata: Metadata = {
  title: 'Hyerin Hong - Portfolio',
  description: 'Frontend Developer Portfolio',
  icons: {
    icon: '/images/favicon.ico',
  },
  metadataBase: new URL('https://devhyerin.me'),
  openGraph: {
    title: 'Hyerin Hong - Portfolio',
    description: 'Frontend Developer Portfolio',
    images: [
      {
        url: '/images/thumbnail.png',
        width: 1200,
        height: 630,
        alt: 'Hyerin Hong Portfolio',
      },
    ],
    type: 'website',
    locale: 'ko_KR',
    siteName: 'Hyerin Hong Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hyerin Hong - Portfolio',
    description: 'Frontend Developer Portfolio',
    images: ['/images/thumbnail.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={notoSansKR.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
