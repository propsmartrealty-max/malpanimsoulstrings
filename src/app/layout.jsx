import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ClientScripts from '@/components/ClientScripts'
import ThemeProvider from '@/components/ThemeProvider'
import PWARegister from '@/components/PWARegister'
import EnquireModal from '@/components/EnquireModal'
import FloatingContact from '@/components/FloatingContact'
import Script from 'next/script'
import Image from 'next/image'
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import ExitIntentModal from '@/components/ExitIntentModal'

export const metadata = {
  metadataBase: new URL('https://www.malpanimsoulstrings.com'),
  title: {
    default: 'Malpani M SoulStrings | Ultra-Premium 3 & 4 BHK Luxury Estates in Baner, Pune',
    template: '%s | Malpani M SoulStrings'
  },
  description: 'Discover Malpani M SoulStrings, the pinnacle of Pune Real Estate. Ultra-premium 3 BHK and 4 BHK luxury estates for sale in Baner-Pashan Link Road. A prime investment for NRIs and luxury home buyers.',
  keywords: [
    'Malpani M SoulStrings', 
    'Malpani m soulstrings baner pashan link road', 
    '3 BHK luxury apartments in Baner-Pashan Link Road', 
    '4 BHK premium flats for sale in Baner-Pashan Link Road',
    'Ready to move 3 BHK in Baner Pashan Link Road',
    'New luxury residential projects in Baner-Pashan Link Road',
    'Gated community luxury flats in Pashan Pune',
    'Luxury apartments in Pune',
    'Top builders in Pune West',
    'Pune Luxury Real Estate'
  ],
  openGraph: {
    title: 'Malpani M SoulStrings - 3 & 4 BHK Luxury Residences in Baner',
    description: 'Premium residential project offering spacious 3 BHK and 4 BHK Estates with over 35+ state-of-the-art amenities at Baner-Pashan Link Road, Pune.',
    url: 'https://www.malpanimsoulstrings.com',
    siteName: 'Malpani M SoulStrings',
    images: [
      {
        url: 'https://malpani-cms.firsteconomy.com/uploads/M_soul_strings_Desktop_Banner_Without_Text_0d38ce28d4.jpg',
        width: 1200,
        height: 630,
        alt: 'Malpani M SoulStrings 3 BHK and 4 BHK Luxury Apartments in Baner Pashan Link Road',
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Malpani M SoulStrings | #1 Luxury Estates in Baner',
    description: 'Ultra-premium 3 & 4 BHK Luxury Homes at Baner Pashan Link Road.',
    images: ['https://malpani-cms.firsteconomy.com/uploads/M_soul_strings_Desktop_Banner_Without_Text_0d38ce28d4.jpg'],
  },
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
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    title: 'M SoulStrings',
    statusBarStyle: 'black-translucent',
  },
  applicationName: 'Malpani M SoulStrings',
  referrer: 'origin-when-cross-origin',
  authors: [{ name: 'Malpani Group' }],
  creator: 'Malpani Group',
  publisher: 'Malpani Group',
  category: 'Real Estate',
  verification: {
    google: 'insert-google-verification-code-here',
    yandex: 'insert-yandex-verification-code-here',
    yahoo: 'insert-yahoo-verification-code-here',
    other: {
      'msvalidate.01': 'insert-bing-verification-code-here',
    },
  },
  formatDetection: {
    telephone: false,
  },
}

export const viewport = {
  themeColor: '#0a0a0c',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "Malpani M SoulStrings",
  "image": "https://www.malpanimsoulstrings.com/icon.png",
  "description": "Ultra-premium 3 BHK and 4 BHK luxury Estates in Baner-Pashan Link Road, Pune.",
  "@id": "https://www.malpanimsoulstrings.com",
  "url": "https://www.malpanimsoulstrings.com",
  "telephone": "+917744009295",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Baner Pashan Link Road",
    "addressLocality": "Pune",
    "postalCode": "411045",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 18.5590,
    "longitude": 73.7868
  },
  "priceRange": "$$$$"
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Malpani M SoulStrings",
  "url": "https://www.malpanimsoulstrings.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.malpanimsoulstrings.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-XXXXXXX" />
      <head>
        {/* LCP Optimization for Top Google Core Web Vitals Ranking */}
        <link rel="preload" as="image" href="https://malpani-cms.firsteconomy.com/uploads/M_soul_strings_Desktop_Banner_Without_Text_0d38ce28d4.jpg" fetchPriority="high" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/style.css" />
      
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />

        {/* GTM Server-Side Tracking */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://sst.malpanimsoulstrings.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-XXXXXXX');
            `,
          }}
        />

        {/* Google Business Profile / Maps API Prep */}
        <script src={`https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&libraries=places`} async defer></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "your_clarity_project_id");
            `,
          }}
        />
      </head>
      <body>
        <Navbar />
        <ThemeProvider>{children}</ThemeProvider>
        <FloatingWhatsApp />
        <ExitIntentModal />
        <Footer />
        <ClientScripts />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
        
        {/* Global WhatsApp Floating Widget */}
        <FloatingContact />

        <EnquireModal />
        <PWARegister />
      </body>
    </html>
  )
}

