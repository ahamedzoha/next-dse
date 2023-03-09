'use client'

import React, {
  useContext,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  FC,
  useEffect,
} from 'react'
import { MarketInfoData } from '@/lib/types'

export enum MarketIndexes {
  DS30 = 'ds30index',
  DSES = 'dsesindex',
  DSEX = 'dsexindex',
}

interface DashboardContextProps {
  activeMarketIndex: MarketIndexes
  allMarketIndexes: MarketIndexes[]
  setActiveMarketIndex: Dispatch<SetStateAction<MarketIndexes>>
}

export const DashboardContext = createContext<DashboardContextProps>({
  activeMarketIndex: MarketIndexes.DS30,
  allMarketIndexes: [],
  setActiveMarketIndex: () => {},
})

interface DashboardContextProviderProps {
  children: React.ReactNode
}

export const DashboardContextProvider: FC<DashboardContextProviderProps> = ({
  children,
}) => {
  const [activeMarketIndex, setActiveMarketIndex] = useState(MarketIndexes.DS30)
  const [loading, setLoading] = useState(true)
  const [activeMarketData, setActiveMarketData] = useState<MarketInfoData>([])
  const allMarketIndexes = Object.values(MarketIndexes)

  const getData = async () => {
    setLoading(true)
    const data = await fetch(
      `/api/v1/latest-market-index-information?index=${activeMarketIndex}`,
      {
        method: 'GET',
        cache: 'force-cache',
      }
    )
    const responseData = await data.json()
    setActiveMarketData(responseData)
    setLoading(false)
  }

  useEffect(() => {
    getData()
  }, [activeMarketIndex])

  //   console.log(activeMarketData)

  return (
    <DashboardContext.Provider
      value={{
        allMarketIndexes,
        activeMarketIndex,
        setActiveMarketIndex,
      }}
    >
      {children}
    </DashboardContext.Provider>
  )
}
