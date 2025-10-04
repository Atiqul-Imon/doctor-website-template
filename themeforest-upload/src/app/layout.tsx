import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Toaster } from '@/components/ui/Toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dr. Sarah Johnson - Professional Medical Care',
  description: 'Experienced physician providing comprehensive medical care with a focus on preventive medicine and patient-centered treatment.',
  keywords: 'doctor, physician, medical care, healthcare, appointments, medical consultation',
  authors: [{ name: 'Dr. Sarah Johnson' }],
  creator: 'Dr. Sarah Johnson',
  publisher: 'Medical Practice',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://dr-sarah-johnson.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Dr. Sarah Johnson - Professional Medical Care',
    description: 'Experienced physician providing comprehensive medical care with a focus on preventive medicine and patient-centered treatment.',
    url: 'https://dr-sarah-johnson.vercel.app',
    siteName: 'Dr. Sarah Johnson Medical Practice',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Sarah Johnson - Professional Medical Care',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Sarah Johnson - Professional Medical Care',
    description: 'Experienced physician providing comprehensive medical care with a focus on preventive medicine and patient-centered treatment.',
    images: ['/og-image.jpg'],
  },
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  )
}
