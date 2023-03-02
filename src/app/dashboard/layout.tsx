import { FC } from 'react'

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
  return <main className='flex-grow'>{children}</main>
}

export default DashboardLayout
