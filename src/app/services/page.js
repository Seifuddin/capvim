import Hero from "@/components/Hero"
import ServicesHero from "@/components/HeroServices"
import OurServices from "@/components/Services"
import React from "react"

export const metadata = {
  title: 'Publishing Services | Capvim Publishers Kenya',
  description:
    'Capvim Publishers offers professional publishing services in Kenya — including book editing, cover design, ISBN registration, printing, and more.',
  keywords: [
    'publishing services Kenya',
    'book editing',
    'ISBN registration',
    'cover design',
    'Capvim Publishers services',
    'self-publishing Kenya',
    'print my book in Kenya',
  ],
  openGraph: {
    title: 'Publishing Services | Capvim Publishers',
    description:
      'From editing and design to printing and ISBN registration — explore Capvim’s complete publishing services for authors in Kenya.',
    url: 'https://capvim.vercel.app/services',
    siteName: 'Capvim Publishers',
    images: [
      {
        url: 'https://capvim.vercel.app/og-services.jpg',
        width: 1200,
        height: 630,
        alt: 'Capvim Publishing Services',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Capvim Publishers - Publishing Services in Kenya',
    description:
      'Get expert publishing services in Kenya — editing, ISBN, printing and more with Capvim Publishers.',
    images: ['https://capvim.vercel.app/og-services.jpg'],
  },
}

export default function Services() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 overflow-x-hidden">
      <Hero />
      <OurServices />
    </main>
  )
}