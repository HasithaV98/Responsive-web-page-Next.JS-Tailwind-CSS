import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import HeaderTop from './component/headerTop'
import HeaderMain from './component/headerMain'
import Navbar from './component/navbar'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MobileNavBar from './component/mobileNavbar'
import Footer from './component/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-black'>
        <HeaderTop/>
        <HeaderMain/>
        <Navbar/>
        <MobileNavBar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
