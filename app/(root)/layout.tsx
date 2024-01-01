import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import '../globals.css'
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { ClerkProvider } from '@clerk/nextjs';

const inter = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Property Datahub + Real Estate',
  description: 'Real Estate App + space and lettings',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ClerkProvider>
      
      <body className={`${inter.className} ` }>
        <Navbar />

        <div className='pt-16'>
        {children}

        </div>
        <div className='z-50 mt-5'>


        <Footer  />

        </div>

        
      </body>

      </ClerkProvider>

      
    </html>
  )
}
