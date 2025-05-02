import Hero from "@/components/Hero";
import SubAbout from "@/components/SubAbout";
import Subservices from "@/components/SubServices";
import FAQ from "../components/Faq";
import Why from "@/components/Why";

export const metadata = {
  title: 'Capvim Publishers | Book Publishing Experts in Kenya',
  description:
    'Publish your book with confidence. Capvim Publishers offers editing, cover design, printing, ISBN, and self-publishing support in Kenya.',
  keywords: [
    'book publishing Kenya',
    'book editing services',
    'cover design services',
    'self-publishing Kenya',
    'Capvim Publishers',
    'book printing Kenya',
  ],
  openGraph: {
    title: 'Capvim Publishers | Book Publishing Experts in Kenya',
    description:
      'Publish your book with confidence. Capvim Publishers offers professional editing, cover design, and printing services in Kenya.',
    url: 'https://capvim.vercel.app',
    siteName: 'Capvim Publishers',
    images: [
      {
        url: 'https://capvim.vercel.app/og-home.jpg', // Replace with actual image URL
        width: 1200,
        height: 630,
        alt: 'Capvim Publishers Book Covers',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Capvim Publishers | Book Publishing Experts in Kenya',
    description:
      'Capvim Publishers offers editing, design, printing, and self-publishing services in Kenya. Bring your book to life!',
    images: ['https://capvim.vercel.app/og-home.jpg'], // Replace with actual image URL
  },
};

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <SubAbout />
      <Subservices />
      <FAQ />
      <Why />
    </main>
  );
}