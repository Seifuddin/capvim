import PortfolioHero from "@/components/HeroPortfolio";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: 'Our Portfolio | Capvim Publishers',
  description:
    'Browse Capvim Publishers’ portfolio of successful publishing projects. From set books to revision guides, see what we’ve published for authors across Kenya.',
  keywords: [
    'Capvim Publishers portfolio',
    'published books Kenya',
    'book publishing company Kenya',
    'set books Kenya',
    'revision books publishing',
    'Capvim publications',
  ],
  openGraph: {
    title: 'Capvim Publishers Portfolio',
    description:
      'Explore our growing portfolio of books and publishing projects, trusted by authors and educators in Kenya.',
    url: 'https://capvim.vercel.app/portfolio',
    siteName: 'Capvim Publishers',
    images: [
      {
        url: 'https://capvim.vercel.app/og-portfolio.jpg', // Replace with actual preview image URL
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
    title: 'Capvim Publishers Portfolio',
    description:
      'See the wide range of books Capvim Publishers has successfully published in Kenya.',
    images: ['https://capvim.vercel.app/og-portfolio.jpg'], // Replace with actual preview image URL
  },
};

export default function PortfolioPage() {
  return (
    <section className="min-h-screen bg-gray-100">
      <PortfolioHero />
      <Portfolio />
    </section>
  );
}