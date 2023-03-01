'use client'

import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth/next'
import { signIn, useSession, signOut } from 'next-auth/react'
import Button from '@/components/button'

const UserManagement = () => {
  const { data: session, status } = useSession()
  if (status === 'loading') {
    return (
      <div className='ml-10 space-x-4'>
        <Button isLoading={true}>Loading...</Button>
      </div>
    )
  }

  return (
    <div className='ml-10 space-x-4'>
      {session ? (
        <Button onClick={signOut}>Sign out</Button>
      ) : (
        <Button onClick={signIn}>Sign in Using Google</Button>
      )}
    </div>
  )
}

export default UserManagement
