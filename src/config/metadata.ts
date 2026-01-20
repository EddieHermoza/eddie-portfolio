import { Metadata } from 'next'

const siteUrl = 'https://eddiehermoza.vercel.app'

export const METADATA: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Eddie Hermoza | Desarrollador Full Stack',
    template: '%s | Eddie Hermoza',
  },
  description:
    'Portafolio profesional de Eddie Hermoza. Desarrollador Full Stack especializado en crear aplicaciones web modernas con React, Next.js, Node.js y tecnologías de vanguardia. Explora mis proyectos y experiencia.',
  keywords: [
    // Spanish keywords
    'Eddie Hermoza',
    'Desarrollador Full Stack',
    'Desarrollador Web',
    'Portfolio',
    'Portafolio',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Desarrollo Web',
    'Programador',
    'Software Engineer',
    'Frontend Developer',
    'Backend Developer',
    'Perú',
    // English keywords
    'Full Stack Developer',
    'Web Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript Developer',
    'JavaScript',
    'Web Development',
    'Software Engineering',
  ],
  authors: [{ name: 'Eddie Hermoza', url: siteUrl }],
  creator: 'Eddie Hermoza',
  publisher: 'Eddie Hermoza',
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
    locale: 'es_PE',
    alternateLocale: ['en_US'],
    url: siteUrl,
    siteName: 'Eddie Hermoza - Portfolio',
    title: 'Eddie Hermoza | Desarrollador Full Stack',
    description:
      'Portafolio profesional de Eddie Hermoza. Desarrollador Full Stack especializado en crear aplicaciones web modernas con React, Next.js, Node.js y tecnologías de vanguardia.',
    images: [
      {
        url: `${siteUrl}/Logo.webp`,
        width: 1200,
        height: 630,
        alt: 'Eddie Hermoza - Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eddie Hermoza | Desarrollador Full Stack',
    description:
      'Portafolio profesional de Eddie Hermoza. Desarrollador Full Stack especializado en crear aplicaciones web modernas.',
    images: [`${siteUrl}/Logo.webp`],
    creator: '@EddieHermoza',
  },
  verification: {
    google: 'google-site-verification-code', // Replace with actual verification code
  },
  alternates: {
    canonical: siteUrl,
  },
  category: 'technology',
}
