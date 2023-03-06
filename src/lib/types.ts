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
