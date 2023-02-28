import './globals.css'
import Seo from '@/components/seo'
import Navbar from '@/components/navbar'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <Seo templateTitle='Home' pathname='/' />
      <head />
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
