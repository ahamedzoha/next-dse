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
  activeMarketData: MarketInfoData
  loading: boolean
}

export const DashboardContext = createContext<DashboardContextProps>({
  activeMarketIndex: MarketIndexes.DS30,
  allMarketIndexes: [],
  setActiveMarketIndex: () => {},
  activeMarketData: [],
  loading: true,
})

interface DashboardContextProviderProps {
  children: React.ReactNode
}

const CACHE_TTL = 300 // cache time-to-live in seconds
const cache: Record<string, { data: MarketInfoData; timestamp: number }> = {}

export const DashboardContextProvider: FC<DashboardContextProviderProps> = ({
  children,
}) => {
  const [activeMarketIndex, setActiveMarketIndex] = useState(MarketIndexes.DS30)
  const [loading, setLoading] = useState(true)
  const [activeMarketData, setActiveMarketData] = useState<MarketInfoData>([])
  const allMarketIndexes = Object.values(MarketIndexes)

  const getData = async () => {
    const cachedData = cache[activeMarketIndex]
    if (cachedData && Date.now() - cachedData.timestamp < CACHE_TTL * 1000) {
      setActiveMarketData(cachedData.data)
      setLoading(false)
      return
    }

    const response = await fetch(
      `/api/v1/latest-market-index-information?index=${activeMarketIndex}`,
      {
        method: 'GET',
        headers: {
          'Cache-Control': `max-age=${CACHE_TTL}`,
        },
      }
    )

    if (response.ok) {
      const responseData = await response.json()
      setActiveMarketData(responseData)
      setLoading(false)
      cache[activeMarketIndex] = { data: responseData, timestamp: Date.now() }
    }
  }

  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeMarketIndex])

  //   console.log(activeMarketData)

  return (
    <DashboardContext.Provider
      value={{
        activeMarketIndex,
        allMarketIndexes,
        setActiveMarketIndex,
        activeMarketData,
        loading,
      }}
    >
      {children}
    </DashboardContext.Provider>
  )
}
