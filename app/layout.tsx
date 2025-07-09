import './globals.css'
import { Bebas_Neue, Inter } from 'next/font/google'
import NavBar from '@/components/Navigations/NavBar'
import Footer from '@/components/Navigations/Footer'

const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--font-bebas' })
const inter = Inter({ weight: ['400', '500', '700'], subsets: ['latin'], variable: '--font-inter' })

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${bebas.variable} ${inter.variable}`}>
      <body className="font-inter bg-black text-white">
        <NavBar />
        <div className='px-6 py-12'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
