import {
  getMarketInfoData,
  MarketIndexes,
} from '@/lib/firestore/get-latest-market-info-data'
import { NextRequest, NextResponse } from 'next/server'

type Params = {
  marketID: string
}

export async function GET(
  request: NextRequest,
  { params }: { params: Params }
) {
  try {
    const { marketID } = params
    switch (marketID) {
      case MarketIndexes.DS30:
      case MarketIndexes.DSES:
      case MarketIndexes.DSEX:
        const marketInfo = await getMarketInfoData(marketID)
        return NextResponse.json(marketInfo)
      default:
        return NextResponse.error()
    }
  } catch (error) {
    console.error(error)
    return NextResponse.error()
  }
}
