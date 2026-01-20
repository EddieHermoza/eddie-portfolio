import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '../modules/shared/providers/theme-provider'
import { titilium } from '../config/fonts'
import { CursorProvider } from '@/modules/shared/animate-ui/components/animate/cursor'
import Toogle from '@/modules/shared/components/BottomBar'
import { METADATA } from '@/config/metadata'
import { Toaster } from 'sonner'
import JsonLd from '@/modules/shared/components/JsonLd'

export const metadata: Metadata = METADATA

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Eddie Hermoza',
  url: 'https://eddiehermoza.vercel.app',
  jobTitle: 'Full Stack Developer',
  description:
    'Desarrollador Full Stack especializado en crear aplicaciones web modernas con React, Next.js, Node.js y tecnologías de vanguardia.',
  sameAs: [
    'https://github.com/EddieHermoza',
    'https://www.linkedin.com/in/eddiehermoza',
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Eddie Hermoza - Portfolio',
  url: 'https://eddiehermoza.vercel.app',
  description:
    'Portafolio profesional de Eddie Hermoza, Desarrollador Full Stack',
  author: {
    '@type': 'Person',
    name: 'Eddie Hermoza',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning className="custom-scrollbar">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <JsonLd data={personSchema} />
        <JsonLd data={websiteSchema} />
      </head>
      <body className={`${titilium.className} font-normal antialiased`}>
        <CursorProvider global={true}>
          <ThemeProvider attribute="class" disableTransitionOnChange>
            <div vaul-drawer-wrapper="" className="bg-background">
              {children}
              <Toogle />
              <Toaster position='top-center' richColors duration={3000} visibleToasts={3} />
            </div>
          </ThemeProvider>
        </CursorProvider>
      </body>
    </html>
  )
}
