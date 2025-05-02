import AboutHero from '@/components/HeroAbout'
import Location from '@/components/Location'
import SubAboutUs from '@/components/SubaboutUs'
import TheTeam from '@/components/Team'
import React from 'react'

export const metadata = {
  title: 'About Us | Capvim Publishers',
  description:
    'Discover the story, mission, and team behind Capvim Publishers — your trusted book publishing partner in Kenya.',
  keywords: [
    'About Capvim Publishers',
    'book publishers in Kenya',
    'publishing company team',
    'Kenya publishing mission',
    'Capvim company values',
  ],
  openGraph: {
    title: 'About Capvim Publishers',
    description:
      'Meet the team and learn what drives Capvim Publishers to deliver top-tier publishing solutions across Kenya.',
    url: 'https://capvim.vercel.app/about',
    siteName: 'Capvim Publishers',
    images: [
      {
        url: 'https://capvim.vercel.app/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'Capvim Publishers About Us',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Capvim Publishers',
    description:
      'Meet the team and learn what drives Capvim Publishers to deliver top-tier publishing solutions across Kenya.',
    images: ['https://capvim.vercel.app/og-about.jpg'],
  },
}

export default function About() {
  return (
    <main className="w-full overflow-x-hidden bg-gradient-to-br from-blue-50 to-gray-100">
      <AboutHero />
      <SubAboutUs />
      <TheTeam />
      <Location />
    </main>
  )
}