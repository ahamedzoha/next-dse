import Link from 'next/link'
import Button from '@/components/button'
import UserManagement from '@/components/navigation/user-management'
import NavItems from './nav-items'

const Navbar = () => {
  const navigation: {
    name: string
    href: string
  }[] = [
    { name: 'Dashboard', href: '/dashboard' },
    // { name: 'Pricing', href: '#' },
    // { name: 'Docs', href: '#' },
    // { name: 'Company', href: '#' },
  ]

  return (
    <header className='bg-black'>
      <nav className='mx-auto max-w-7xl px-6 lg:px-8' aria-label='Top'>
        <div className='flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none'>
          <div className='flex items-center'>
            <Link href='/'>
              <h1 className='text-2xl text-white font-black'>StockFolio</h1>
            </Link>
            <div className='ml-10 hidden space-x-8 lg:block'>
              <NavItems />
            </div>
          </div>
          <UserManagement />
        </div>
        <div className='flex flex-wrap justify-center gap-x-6 py-4 lg:hidden'>
          <NavItems />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
