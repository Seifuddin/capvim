import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '@/components/Footer';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Capvim Publishers | Professional Book Publishing in Kenya',
  description:
    'Capvim Publishers offers expert book publishing, editing, cover design, and ISBN registration services in Kenya. Empowering authors to publish with confidence.',
  keywords: [
    'book publishing Kenya',
    'self-publishing',
    'ISBN services Kenya',
    'Capvim Publishers',
    'editing services Kenya',
    'children’s book printing',
  ],
  authors: [{ name: 'Capvim Publishers', url: 'https://capvim.vercel.app' }],
  metadataBase: new URL('https://capvim.vercel.app'),
  openGraph: {
    title: 'Capvim Publishers',
    description:
      'Expert publishing, editing, and ISBN services in Kenya. Publish your book with Capvim Publishers today!',
    url: 'https://capvim.vercel.app',
    siteName: 'Capvim Publishers',
    locale: 'en_KE',
    type: 'website',
    images: [
      {
        url: 'https://capvim.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Capvim Publishers - Expert Book Publishing in Kenya',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: 'large',
      maxVideoPreview: -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics Tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-95TGZEWFVE"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-95TGZEWFVE');
            `,
          }}
        />
        
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="ADkcLjDHtzdrUvb0iDbNahcHbnhtbauFZY7ZnlkfVKo" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />

        {/* Schema Markup */}
        <script
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