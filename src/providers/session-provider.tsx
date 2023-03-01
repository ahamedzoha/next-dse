'use client'
import { SessionProvider } from 'next-auth/react'
import { FC } from 'react'

interface SessionWrapperProps {
  children: React.ReactNode
}

const SessionWrapper: FC<SessionWrapperProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>
}

export default SessionWrapper
