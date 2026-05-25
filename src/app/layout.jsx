import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ClientScripts from '@/components/ClientScripts'
import ThemeProvider from '@/components/ThemeProvider'

export const metadata = {
  metadataBase: new URL('https://www.malpanimsoulstrings.com'),
  title: {
    default: 'Malpani M SoulStrings | #1 Luxury 3 & 4 BHK Estates in Baner, Pune',
    template: '%s | Malpani M SoulStrings'
  },
  description: 'Discover Malpani M SoulStrings, the pinnacle of Pune Real Estate. Ultra-premium 3BHK and 4BHK luxury Estates in Baner-Pashan Link Road. A prime investment for NRIs.',
  keywords: ['Malpani Baner', 'M SoulStrings', '4 BHK Baner', 'Pune Luxury Real Estate', 'NRI property investment'],
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
    canonical: '/',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
  )
}

