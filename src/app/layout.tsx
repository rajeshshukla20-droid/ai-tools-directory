import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AITools Directory - Discover & Compare AI Tools',
  description: 'Browse, compare, and discover the best AI tools. Find solutions for your business needs with our comprehensive directory of AI applications.',
  keywords: 'AI tools, AI directory, machine learning tools, SaaS, AI applications',
  authors: [{ name: 'AITools Directory' }],
  openGraph: {
    title: 'AITools Directory - Discover & Compare AI Tools',
    description: 'Browse, compare, and discover the best AI tools.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AITools Directory - Discover & Compare AI Tools',
    description: 'Browse, compare, and discover the best AI tools.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
