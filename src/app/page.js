import SubAbout from "@/components/SubAbout";
import OurServices from "@/components/Services"
import FAQ from "@/components/FAQ";
import Why from "@/components/Why";
import HeroSection from "@/components/Heroo";
import PublishingProcess from "@/components/Process";
import PricingPackages from "@/components/Packages";
import DidYouKnow from "@/components/Know";
import PublishingCounters from "@/components/Counter";
import SubAboutUs from "@/components/SubaboutUs";
import Who from "@/components/Who";
import Hero from "@/components/Hero";
import CustomeCare from "@/components/CustomeCare";
import Assistance from "@/components/Assistance";
import StoriesAndTestimonials from "@/components/Testimonials";
import ContactUs from "@/components/Contacts";

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
      <PricingPackages />
      <Assistance />
      <PublishingProcess />
      <HeroSection />
      <OurServices />
      <PublishingCounters />
      <FAQ />
      <CustomeCare />
      <Why />
      <StoriesAndTestimonials />
      <ContactUs />
    </main>
  );
}