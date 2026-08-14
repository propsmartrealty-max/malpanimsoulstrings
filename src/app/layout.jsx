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
import ExitIntentModal from '@/components/ExitIntentModal'
import { Inter, Playfair_Display } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], display: 'swap', variable: '--font-playfair' })

export const metadata = {
  metadataBase: new URL('https://www.malpanimsoulstrings.com'),
  title: {
    default: 'Malpani M SoulStrings | Ultra-Luxury 3, 4, 5 BHK & Penthouses in Baner Pashan Link Road, Pune',
    template: '%s | Malpani M SoulStrings Baner Pashan Link Road'
  },
  alternates: {
    canonical: 'https://www.malpanimsoulstrings.com',
    languages: {
      'en-US': 'https://www.malpanimsoulstrings.com',
      'en-IN': 'https://www.malpanimsoulstrings.com',
      'en-AE': 'https://www.malpanimsoulstrings.com',
      'x-default': 'https://www.malpanimsoulstrings.com',
    },
  },
  description: 'Official Site of Malpani M SoulStrings by Malpani Estates. Ultra-premium 3, 4, 5 BHK, Duplex & Penthouse luxury estates for sale at Baner-Pashan Link Road, Pune with 35+ world-class amenities.',
  keywords: [
    'pune luxury real estate',
    'luxury 3 bhk pune',
    'luxury 4 bhk pune',
    'ultra luxury homes pune',
    'luxury property pune',
    'luxury penthouse pune',
    'baner luxury real estate',
    'baner luxury apartments',
    'luxury flats baner',
    'premium housing pune',
    'luxury gated communities pune',
    '3 bhk luxury residences pune',
    '4 bhk luxury apartments in pune',
    'luxury 5 bhk pune',
    'luxury duplex pune',
    'sky villas pune',
    'baner pashan luxury homes',
    'aundh luxury real estate',
    'west pune luxury apartments',
    'luxury property investment pune',
    'buy luxury home pune',
    'ready possession luxury apartments pune',
    'new launch luxury homes pune',
    'best luxury project pune',
    'Malpani M SoulStrings',
    'Malpani m soulstrings baner pashan link road',
    'Malpani M Soulstrings price',
    'Malpani M Soulstrings floor plan',
    'Malpani M Soulstrings brochure pdf',
    '5 bhk luxury flats pune',
    'luxury duplex baner',
    'penthouses in pune west',
    '3bhk luxury homes',
    'bigger spacious apartments',
    '4bhk residences',
    '5bhk residences',
    'penthouse homes',
    'premium luxury homes in pune',
    'Pune Real Estate',
    'Baner Real Estate',
    'Baner Pashan Link Road real estate',
    'Malpani M Soulstrings Baner',
    'real estate investment Pune',
    'luxury apartments Baner Pashan Link Road',
    'Malpani Estates Pune',
    'flats for sale in Baner Pashan Link Road'
  ],
  openGraph: {
    title: 'Malpani M SoulStrings - 3, 4, 5 BHK, Duplex & Penthouse in Baner',
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
    description: 'Ultra-premium 3, 4, 5 BHK, Duplex & Penthouse Luxury Homes at Baner Pashan Link Road.',
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_SITE_VERIFICATION,
    yahoo: process.env.NEXT_PUBLIC_YAHOO_SITE_VERIFICATION,
    other: {
      'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION,
    },
  },
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
  formatDetection: {
    telephone: false,
  },
}

export const viewport = {
  themeColor: '#0a0a0c',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

const orgSchema = {
  "@context": "https://schema.org",
  "@type": ["RealEstateAgent", "Organization", "LocalBusiness"],
  "@id": "https://www.malpanimsoulstrings.com/#organization",
  "name": "Malpani M SoulStrings",
  "alternateName": [
    "Malpani M Soulstrings",
    "M SoulStrings",
    "Malpani M SoulStrings Baner",
    "Malpani M SoulStrings Baner Pashan Link Road",
    "M SoulStrings Baner",
    "Malpani Soul Strings Pune"
  ],
  "image": "https://www.malpanimsoulstrings.com/icon.png",
  "logo": "https://www.malpanimsoulstrings.com/icon.png",
  "description": "Official website for Malpani M SoulStrings by Malpani Estates. Ultra-premium 3 BHK, 4 BHK, 5 BHK, Duplex, and Penthouse luxury Estates in Baner-Pashan Link Road, Pune.",
  "url": "https://www.malpanimsoulstrings.com",
  "telephone": "+917744009295",
  "priceRange": "₹1.95 Cr - ₹6.5 Cr",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "148"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Baner Pashan Link Road",
    "addressLocality": "Pune",
    "addressRegion": "Maharashtra",
    "postalCode": "411045",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 18.5539,
    "longitude": 73.7915
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "09:00",
    "closes": "20:00"
  },
  "sameAs": [
    "https://www.facebook.com/malpaniestates",
    "https://www.instagram.com/malpaniestates",
    "https://www.youtube.com/@malpaniestates",
    "https://www.linkedin.com/company/malpani-estates"
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.malpanimsoulstrings.com/#website",
  "url": "https://www.malpanimsoulstrings.com",
  "name": "Malpani M SoulStrings",
  "publisher": {
    "@id": "https://www.malpanimsoulstrings.com/#organization"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.malpanimsoulstrings.com/blog-malpani-m-soulstrings-baner-pashan-link-road?search={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      {/* 
        DISABLED TO PREVENT CORE WEB VITALS JS PENALTIES 
        Uncomment when real API keys are provided by the user.
        <GoogleTagManager gtmId="GTM-XXXXXXX" />
      */}
      <head>
        {/* LCP Optimization for Top Google Core Web Vitals Ranking */}
        <link rel="preload" as="image" href="https://malpani-cms.firsteconomy.com/uploads/M_soul_strings_Desktop_Banner_Without_Text_0d38ce28d4.jpg" fetchPriority="high" />
        
        {/* Next-Gen Preconnect and Preload Resource Hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        
        <link rel="preload" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" as="style" />
        <link rel="preload" href="/style.css" as="style" />
        
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" rel="stylesheet" />
        {/* Fonts are now optimized via next/font/google for zero layout shift */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/style.css" />
        <link rel="alternate" type="application/rss+xml" title="Malpani M SoulStrings Blog" href="/rss.xml" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />

        {/* GTM Server-Side Tracking */}
        {/* 
          DISABLED TO PREVENT CORE WEB VITALS JS PENALTIES 
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
        */}

        {/* Google Maps API - Add your real API key when ready */}

        {/* 
          DISABLED TO PREVENT CORE WEB VITALS JS PENALTIES 
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
        */}
      </head>
      <body>
        <div id="preloader">
          <Image src="/icon.png" className="preloader-logo" alt="Malpani M SoulStrings Baner Pashan Link Road Pune" width={120} height={120} priority />
        </div>
        <Navbar />
        <ThemeProvider>{children}</ThemeProvider>
        <ExitIntentModal />
        <Footer />
        <ClientScripts />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" strategy="lazyOnload" />
        
        {/* Native Google Analytics 4 & GTM integration (Loaded via env variables) */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
        )}
        
        {/* Global WhatsApp Floating Widget */}
        <FloatingContact />

        <EnquireModal />
        <PWARegister />
      </body>
    </html>
  )
}

