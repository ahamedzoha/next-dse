// import firebase from 'firebase-admin'

export type StockPrices = {
  current: number
  changed: number
  changePercent: number
  high: number
  low: number
  closep: number
  ycp: number
  trade: number
  value: number
  volume: number
}

export type StockData = {
  name: string
  prices: StockPrices
}

export type LatestStockData = {
  data: StockData[]
  timestamp: number | null
}

export type MarketInfoDataType = {
  indexName: string
  indexValue: number
  indexChange: number
  indexChangePercent: number
  timestamp: any
}

export type MarketInfoData = MarketInfoDataType[]
