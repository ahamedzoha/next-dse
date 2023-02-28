'use client'

import Link from 'next/link'
import { signIn } from 'next-auth/react'
import Button from '@/components/button'
const Navbar = () => {
  const navigation: {
    name: string
    href: string
  }[] = [
    // { name: 'Solutions', href: '#' },
    // { name: 'Pricing', href: '#' },
    // { name: 'Docs', href: '#' },
    // { name: 'Company', href: '#' },
  ]

  return (
    <header className='bg-[#111827]'>
      <nav className='mx-auto max-w-7xl px-6 lg:px-8' aria-label='Top'>
        <div className='flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none'>
          <div className='flex items-center'>
            <Link href='/'>
              <h1 className='text-2xl text-white font-black'>StockFolio</h1>
            </Link>
            <div className='ml-10 hidden space-x-8 lg:block'>
              {navigation.length > 0 &&
                navigation.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className='text-base font-medium text-white hover:text-indigo-50'
                  >
                    {link.name}
                  </Link>
                ))}
            </div>
          </div>
          <div className='ml-10 space-x-4'>
            <Button
              onClick={signIn}
              className='inline-block rounded-md border border-transparent bg-indigo-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75'
            >
              Sign in
            </Button>
            <a
              href='#'
              className='inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-indigo-600 hover:bg-indigo-50'
            >
              Sign up
            </a>
          </div>
        </div>
        <div className='flex flex-wrap justify-center gap-x-6 py-4 lg:hidden'>
          {navigation.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className='text-base font-medium text-white hover:text-indigo-50'
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
