import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '@/components/Footer';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Capvim Publishers | Professional Book Publishing in Kenya',
  description: 'Capvim Publishers offers expert book publishing, editing, cover design, and ISBN registration services in Kenya.',
  keywords: ['book publishing Kenya', 'self-publishing', 'ISBN services Kenya', 'Capvim Publishers', 'editing services Kenya', 'children’s book printing'],
  authors: [{ name: 'Capvim Publishers', url: 'https://capvim.vercel.app' }],
  openGraph: {
    title: 'Capvim Publishers',
    description: 'Expert publishing, editing, and ISBN services in Kenya. Publish your book with Capvim Publishers today!',
    url: 'https://capvim.vercel.app',
    siteName: 'Capvim Publishers',
    locale: 'en_KE',
    type: 'website',
    images: [{ url: 'https://capvim.vercel.app/og-image.jpg', width: 1200, height: 630, alt: 'Capvim Publishers - Expert Book Publishing in Kenya' }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="description" content="Capvim Publishers offers expert book publishing services in Kenya..." />
        <meta name="keywords" content="book publishing Kenya, self-publishing, ISBN services Kenya" />
        <meta property="og:title" content="Capvim Publishers | Professional Book Publishing in Kenya" />
        <meta property="og:description" content="Capvim Publishers offers expert book publishing, editing, cover design..." />
        <meta property="og:image" content="https://capvim.vercel.app/og-image.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap" as="style" />
      </Head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-95TGZEWFVE"
          async
        />
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-95TGZEWFVE');
            `,
          }}
        />
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Capvim Publishers",
              url: "https://capvim.vercel.app",
              logo: "https://capvim.vercel.app/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+254 728 240 931",
                contactType: "Customer Support",
                areaServed: "KE",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}