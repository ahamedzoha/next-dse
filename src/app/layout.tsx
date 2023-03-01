import './globals.css'
import Seo from '@/components/seo'
import Navbar from '@/components/navbar'
import SessionWrapper from '@/providers/session-provider'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <Seo templateTitle='Home' pathname='/' />
      <head />
      <SessionWrapper>
        <body>
          <Navbar />
          {children}
        </body>
      </SessionWrapper>
    </html>
  )
}

export default RootLayout
