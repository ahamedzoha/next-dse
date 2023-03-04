'use client'
import { useContext } from 'react'
import { NavigationContext } from '@/contexts/navigation.context'
import { Bars3BottomLeftIcon, BellIcon } from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'
import clsxm from '@/lib/clsxm'
import { signIn, useSession, signOut } from 'next-auth/react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'

const Search = () => {
  const { data: session, status } = useSession()
  const pathname = usePathname()

  const { setSidebarOpen } = useContext(NavigationContext)

  const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
  ]

  const toTitleCase = (str?: string) => {
    return str?.replace(
      /\w\S*/g,
      (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    )
  }
  return (
    <div className='sticky top-0 z-10 flex h-16 flex-shrink-0 bg-black'>
      <button
        type='button'
        className='border-r border-slate-800 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden'
        onClick={() => setSidebarOpen(true)}
      >
        <span className='sr-only'>Open sidebar</span>
        <Bars3BottomLeftIcon className='h-6 w-6' aria-hidden='true' />
      </button>
      {/* The Bar */}
      <div className='flex flex-col sm:flex-row flex-1 sm:justify-between justify-center items-center px-8'>
        {/* Search and Current Page */}
        <div className='flex flex-1 items-center justify-between'>
          {/* Getting current page name */}
          <h1 className='font-bold text-2xl'>
            {toTitleCase(pathname?.split('/')[pathname?.split('/').length - 1])}
          </h1>
          <div className='w-full sm:max-w-sm'>
            <label htmlFor='search' className='sr-only'>
              Search
            </label>
            <div className='relative'>
              <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                <MagnifyingGlassIcon
                  className='h-5 w-5 text-gray-400'
                  aria-hidden='true'
                />
              </div>
              <input
                id='search'
                name='search'
                className={clsxm(
                  `block w-full rounded-md border border-transparent bg-gray-700 py-2 pl-10 pr-3 text-sm 
                  placeholder-gray-400 focus:border-white focus:bg-white focus:text-gray-900 
                focus:placeholder-gray-500 focus:outline-none focus:ring-white sm:text-sm`
                )}
                placeholder='Search'
                type='search'
              />
            </div>
          </div>
        </div>
        <div className='ml-4 flex items-center md:ml-6'>
          <button
            type='button'
            className={clsxm(
              `rounded-full bg-black p-1 text-gray-400 hover:text-gray-500 
              focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2`
            )}
          >
            <span className='sr-only'>View notifications</span>
            <BellIcon className='h-6 w-6' aria-hidden='true' />
          </button>

          {/* Profile dropdown */}
          <Menu as='div' className='relative ml-3'>
            <div>
              <Menu.Button
                className={clsxm(
                  `flex max-w-xs items-center rounded-full 
                  bg-black text-sm focus:outline-none focus:ring-2 
                  focus:ring-white focus:ring-offset-2`
                )}
              >
                <span className='sr-only'>Open user menu</span>
                <Image
                  className='h-8 w-8 rounded-full'
                  src={
                    session?.user?.image
                      ? session.user.image
                      : '/images/user.png'
                  }
                  alt='user image'
                  width={32}
                  height={32}
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                {userNavigation.map((item) => (
                  <Menu.Item key={item.name}>
                    {({ active }) => (
                      <Link
                        href={item.href}
                        className={clsxm(
                          active ? 'bg-gray-100' : '',
                          'block px-4 py-2 text-sm text-gray-700'
                        )}
                      >
                        {item.name}
                      </Link>
                    )}
                  </Menu.Item>
                ))}

                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href={'/'}
                      onClick={() => signOut({ callbackUrl: '/' })}
                      className={clsxm(
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700'
                      )}
                    >
                      Sign out
                    </Link>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  )
}

export default Search
