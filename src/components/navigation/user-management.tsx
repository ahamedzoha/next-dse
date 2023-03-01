'use client'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth/next'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { signIn, useSession, signOut } from 'next-auth/react'
import Button from '@/components/button'
import Image from 'next/image'

import clsxm from '@/lib/clsxm'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const UserManagement = () => {
  const { data: session, status } = useSession()
  const router = useRouter()

  if (status === 'loading') {
    return (
      <div className='ml-10 space-x-4'>
        <Button isLoading={true}>Loading...</Button>
      </div>
    )
  }

  return (
    <div className='flex items-center ml-10 space-x-4'>
      {!session ? (
        <Button onClick={async () => signIn()}>Sign in Using Google</Button>
      ) : (
        // <Button onClick={async () => signIn()}>Sign in Using Google</Button>
        <>
          <h2 className='text-base text-white'>Hi, {session?.user?.name}</h2>
          <Menu as='div' className='relative ml-3'>
            <div>
              <Menu.Button className='flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
                <span className='sr-only'>Open user menu</span>
                {/* <img
                  className='h-8 w-8 rounded-full'
                  src={session?.user?.image}
                  alt=''
                
                /> */}
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
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href='#'
                      className={clsxm(
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700'
                      )}
                    >
                      Dashboard
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href={'/'}
                      onClick={() => {
                        signOut()
                        router.push('/')
                      }}
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
        </>
      )}
    </div>
  )
}

export default UserManagement
