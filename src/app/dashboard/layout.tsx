import { FC } from 'react'

export const metadata = {
  title: 'Dashboard',
  description: 'Dashboard',
  keywords: 'Dashboard',
  robots: 'noindex, nofollow',
}

interface Props {
  children: React.ReactNode
}

const DashboardLayout: FC<Props> = ({ children }) => {
  return <main className='flex-grow'>{children}</main>
}

export default DashboardLayout
