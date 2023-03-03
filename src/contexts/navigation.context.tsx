import React, {
  useContext,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  FC,
} from 'react'

interface NavigationContextProps {
  sidebarOpen: boolean
  setSidebarOpen: Dispatch<SetStateAction<boolean>>
}

export const NavigationContext = createContext<NavigationContextProps>({
  sidebarOpen: false,
  setSidebarOpen: () => {},
})

interface NavigationContextProviderProps {
  children: React.ReactNode
}

export const NavigationContextProvider: FC<NavigationContextProviderProps> = ({
  children,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <NavigationContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
      {children}
    </NavigationContext.Provider>
  )
}
