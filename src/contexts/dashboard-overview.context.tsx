import React, {
  createContext,
  Dispatch,
  FC,
  useContext,
  useReducer,
  useEffect,
} from 'react'
import { MarketInfoData } from '@/lib/types'

export enum MarketIndexes {
  DSEX = 'dsexindex',
  DSES = 'dsesindex',
  DS30 = 'ds30index',
}

interface CachedMarketData {
  data: MarketInfoData
  timestamp: number
}

const cache: Record<MarketIndexes, CachedMarketData> = {
  [MarketIndexes.DSEX]: { data: [], timestamp: 0 },
  [MarketIndexes.DSES]: { data: [], timestamp: 0 },
  [MarketIndexes.DS30]: { data: [], timestamp: 0 },
}

type Action =
  | { type: 'SET_ACTIVE_MARKET_INDEX'; payload: MarketIndexes }
  | { type: 'SET_ACTIVE_MARKET_DATA'; payload: MarketInfoData }
  | { type: 'SET_LOADING'; payload: boolean }

interface State {
  activeMarketIndex: MarketIndexes
  allMarketIndexes: MarketIndexes[]
  activeMarketData: MarketInfoData
  loading: boolean
}

const initialState: State = {
  activeMarketIndex: MarketIndexes.DSEX,
  allMarketIndexes: Object.values(MarketIndexes),
  activeMarketData: [],
  loading: true,
}

export const DashboardContext = createContext<{
  state: State
  dispatch: Dispatch<Action>
}>({ state: initialState, dispatch: () => null })

interface DashboardContextProviderProps {
  children: React.ReactNode
}

const CACHE_TTL = 200 // cache time-to-live in seconds

export const DashboardContextProvider: FC<DashboardContextProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer((state: State, action: Action) => {
    switch (action.type) {
      case 'SET_ACTIVE_MARKET_INDEX':
        return { ...state, activeMarketIndex: action.payload }
      case 'SET_ACTIVE_MARKET_DATA':
        return { ...state, activeMarketData: action.payload }
      case 'SET_LOADING':
        return { ...state, loading: action.payload }
      default:
        return state
    }
  }, initialState)

  const getData = async () => {
    dispatch({ type: 'SET_LOADING', payload: true })

    const { activeMarketIndex } = state
    const cachedData = cache[activeMarketIndex]
    if (cachedData && Date.now() - cachedData.timestamp < CACHE_TTL * 1000) {
      dispatch({ type: 'SET_ACTIVE_MARKET_DATA', payload: cachedData.data })
      dispatch({ type: 'SET_LOADING', payload: false })
      return
    }

    const response = await fetch(
      `/api/v1/latest-market-index-information/${activeMarketIndex}`,
      {
        method: 'GET',
        headers: {
          'Cache-Control': `max-age=${CACHE_TTL}`,
        },
      }
    )

    if (response.ok) {
      const responseData = await response.json()
      dispatch({ type: 'SET_ACTIVE_MARKET_DATA', payload: responseData })
      dispatch({ type: 'SET_LOADING', payload: false })
      cache[activeMarketIndex] = { data: responseData, timestamp: Date.now() }
    }
  }

  useEffect(() => {
    getData()
    const intervalId = setInterval(getData, CACHE_TTL * 1000)
    return () => clearInterval(intervalId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.activeMarketIndex])

  return (
    <DashboardContext.Provider value={{ state, dispatch }}>
      {children}
    </DashboardContext.Provider>
  )
}
