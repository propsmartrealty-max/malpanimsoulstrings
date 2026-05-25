import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ClientScripts from '@/components/ClientScripts'

export const metadata = {
  title: 'Malpani M SoulStrings | Luxury Estates in Baner',
  description: 'Ultra-premium 3 & 4 BHK Luxury Homes',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <ClientScripts />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
  )
}

