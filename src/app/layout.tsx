import './globals.css'
import Seo from '@/components/seo'
import Navbar from '@/components/navigation/navbar'
import SessionWrapper from '@/providers/session-provider'
import { FC } from 'react'

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang='en' className='h-full bg-gray-800 text-white'>
      <Seo templateTitle='Home' pathname='/' />
      <head />
      <SessionWrapper>
        <body className='h-full '>
          {/* <Navbar /> */}
          {children}
        </body>
      </SessionWrapper>
    </html>
  )
}

export default RootLayout
