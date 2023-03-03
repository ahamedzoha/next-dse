'use client'
import { SessionProvider } from 'next-auth/react'
import { FC } from 'react'
import { NavigationContextProvider } from '@/contexts/navigation.context'

interface SessionWrapperProps {
  children: React.ReactNode
}

const SessionWrapper: FC<SessionWrapperProps> = ({ children }) => {
  return (
    <SessionProvider>
      <NavigationContextProvider>{children}</NavigationContextProvider>
    </SessionProvider>
  )
}

export default SessionWrapper
