import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ClientScripts from '@/components/ClientScripts'
import ThemeProvider from '@/components/ThemeProvider'
import PWARegister from '@/components/PWARegister'
import EnquireModal from '@/components/EnquireModal'
import Script from 'next/script'
import Image from 'next/image'

export const metadata = {
  metadataBase: new URL('https://www.malpanimsoulstrings.com'),
  title: {
    default: 'Malpani M SoulStrings | #1 Luxury 3 & 4 BHK Estates in Baner, Pune',
    template: '%s | Malpani M SoulStrings'
  },
  description: 'Discover Malpani M SoulStrings, the pinnacle of Pune Real Estate. Ultra-premium 3BHK and 4BHK luxury Estates in Baner-Pashan Link Road. A prime investment for NRIs.',
  keywords: ['Malpani M SoulStrings', 'Malpani m soulstrings baner pashan link road', 'Malpani M soultraings', 'Malpani estates baner', '3 BHK Baner Pashan Link Road', '4 BHK Baner Pashan Link Road', 'Pune Luxury Real Estate', 'Malpani Baner'],
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
        alt: 'Malpani M SoulStrings 4 BHK Baner',
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
  alternates: {
    // Next.js metadataBase auto-resolves canonical URLs per route when undefined
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/style.css" />
      
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
        <Footer />
        <ClientScripts />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        
        {/* Global WhatsApp Floating Widget */}
        <a href="https://api.whatsapp.com/send?phone=917744009295&text=Hello,%20I%20would%20like%20to%20enquire%20about%20Malpani%20M%20SoulStrings" 
           className="whatsapp-float" 
           target="_blank" 
           rel="noopener noreferrer"
           style={{ zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
           <Image src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" width={35} height={35} style={{ width: '35px', height: '35px' }} />
        </a>

        <EnquireModal />
        <PWARegister />
      </body>
    </html>
  )
}

