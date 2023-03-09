'use client'
import { SessionProvider } from 'next-auth/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FC, useState } from 'react'
import { NavigationContextProvider } from '@/contexts/navigation.context'
import { DashboardContextProvider } from '@/contexts/dashboard.context'
interface SessionWrapperProps {
  children: React.ReactNode
}

const SessionWrapper: FC<SessionWrapperProps> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient())
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContextProvider>
          <DashboardContextProvider>{children}</DashboardContextProvider>
        </NavigationContextProvider>
      </QueryClientProvider>
    </SessionProvider>
  )
}

export default SessionWrapper
