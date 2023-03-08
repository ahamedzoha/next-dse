import {
  getMarketInfoData,
  MarketIndexes,
} from '@/lib/firestore/get-latest-market-info-data'
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  try {
    const marketInfoData = await getMarketInfoData(MarketIndexes.DSEX)

    return NextResponse.json({ body: marketInfoData })
  } catch (error) {
    console.error(error)
    return NextResponse.error()
  }
  // return new Response("Hello, World")
}
