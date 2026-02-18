import Hero from '@/components/Hero'
import ContactsHero from '@/components/HeroContacts'
import VisitUs from '@/components/Visit'
import React from 'react'

export const metadata = {
  title: 'Contact Us | Capvim Publishers',
  description:
    'Get in touch with Capvim Publishers for book publishing consultations, service quotes, or support. We’re here to help authors in Kenya and beyond.',
  keywords: [
    'Contact Capvim Publishers',
    'publish my book Kenya',
    'book publishing help',
    'Capvim customer service',
    'publishing inquiries Kenya',
    'how to publish a book in Kenya',
  ],
  openGraph: {
    title: 'Contact Capvim Publishers',
    description:
      'Need help with book publishing? Contact Capvim Publishers for expert assistance in editing, printing, and distribution.',
    url: 'https://capvim.vercel.app/contacts',
    siteName: 'Capvim Publishers',
    images: [
      {
        url: 'https://capvim.vercel.app/og-contacts.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Capvim Publishers',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get in Touch | Capvim Publishers',
    description:
      'Reach out to Capvim Publishers for any book publishing inquiries, quotes, or author support in Kenya.',
    images: ['https://capvim.vercel.app/og-contacts.jpg'],
  },
}

export default function Contact() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <VisitUs />
    </main>
  )
}