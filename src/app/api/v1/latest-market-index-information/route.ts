import {
  getMarketInfoData,
  MarketIndexes,
} from '@/lib/firestore/get-latest-market-info-data'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  try {
    const searchParams = new URLSearchParams(req.nextUrl.search)
    const index = searchParams.get('index') as MarketIndexes
    console.log(index)

    const response = await getMarketInfoData(index)
    return NextResponse.json(response)

    // return response.
  } catch (error) {
    console.error(error)
    return NextResponse.error()
  }
  // return new Response("Hello, World")
}
