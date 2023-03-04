'use client'

import { useContext } from 'react'
import { NavigationContext } from '@/contexts/navigation.context'
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  UsersIcon,
  XMarkIcon,
  ChartBarSquareIcon,
  BriefcaseIcon,
} from '@heroicons/react/24/outline'
import clsxm from '@/lib/clsxm'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Sidebar = () => {
  const { sidebarOpen, setSidebarOpen } = useContext(NavigationContext)
  const pathname = usePathname()

  const navigation = [
    {
      name: 'Dashboard',
      href: '/dashboard',
      icon: ChartBarSquareIcon,
      current: pathname === '/dashboard',
    },
    {
      name: 'Portfolio',
      href: '/dashboard/portfolio',
      icon: BriefcaseIcon,
      current: pathname === '/dashboard/portfolio',
    },
    {
      name: 'Profile',
      href: '/dashboard/profile',
      icon: UsersIcon,
      current: pathname === '/dashboard/profile',
    },
  ]

  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as='div'
          className='relative z-40 md:hidden'
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-gray-600 bg-opacity-75' />
          </Transition.Child>

          <div className='fixed inset-0 z-40 flex'>
            <Transition.Child
              as={Fragment}
              enter='transition ease-in-out duration-300 transform'
              enterFrom='-translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='translate-x-0'
              leaveTo='-translate-x-full'
            >
              <Dialog.Panel className='relative flex w-full max-w-xs flex-1 flex-col bg-zinc-900 pt-5 pb-4'>
                <Transition.Child
                  as={Fragment}
                  enter='ease-in-out duration-300'
                  enterFrom='opacity-0'
                  enterTo='opacity-100'
                  leave='ease-in-out duration-300'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <div className='absolute top-0 right-0 -mr-12 pt-2'>
                    <button
                      type='button'
                      className='ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className='sr-only'>Close sidebar</span>
                      <XMarkIcon
                        className='h-6 w-6 text-white'
                        aria-hidden='true'
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className='flex flex-shrink-0 items-center px-4'>
                  <Link href='/'>
                    <h1 className='text-2xl text-white font-black'>
                      StockFolio
                    </h1>
                  </Link>
                </div>
                <div className='mt-5 h-0 flex-1 overflow-y-auto'>
                  <nav className='space-y-1 px-2'>
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={clsxm(
                          item.current
                            ? 'bg-zinc-600 text-white font-bold'
                            : 'text-indigo-100 hover:bg-zinc-800',
                          'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                        )}
                      >
                        <item.icon
                          className='mr-4 h-6 w-6 flex-shrink-0 text-white'
                          aria-hidden='true'
                        />
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
            <div className='w-14 flex-shrink-0' aria-hidden='true'>
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className='hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col'>
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className='flex flex-grow flex-col overflow-y-auto bg-zinc-900 pt-5'>
          <div className='flex flex-shrink-0 items-center px-4'>
            <Link href='/'>
              <h1 className='text-2xl text-white font-black'>StockFolio</h1>
            </Link>
          </div>
          <div className='mt-5 flex flex-1 flex-col'>
            <nav className='flex-1 space-y-1 px-2 pb-4'>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={clsxm(
                    item.current
                      ? 'bg-zinc-600 text-white font-bold'
                      : 'text-indigo-100 hover:bg-zinc-800',
                    'group flex items-center px-2 py-2 text-sm font-medium rounded-lg'
                  )}
                >
                  <item.icon
                    className='mr-3 h-6 w-6 flex-shrink-0 text-white'
                    aria-hidden='true'
                  />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
