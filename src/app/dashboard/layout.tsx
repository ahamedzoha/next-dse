import { FC } from 'react'
import Sidebar from '@/app/dashboard/(sidebar)/sidebar'
import Search from '@/app/dashboard/(sidebar)/search'
import NextNProgress from 'nextjs-progressbar'

export const metadata = {
  title: 'Dashboard',
  description: 'Dashboard',
  keywords: 'Dashboard',
  robots: 'noindex, nofollow',
}
interface DashboardLayoutProps {
  children: React.ReactNode
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <main className='h-full'>
      <Sidebar />
      <div className='flex flex-1 flex-col md:pl-64'>
        <Search />

        <div className='py-6 mx-auto w-full px-4 sm:px-6 md:px-8 h-full'>
          {children}
        </div>
      </div>
    </main>
  )
}

export default DashboardLayout
