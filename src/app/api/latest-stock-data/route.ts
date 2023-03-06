import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getStockData } from '@/lib/firestore/get-latest-data'

const URL = process.env.URL

export async function GET() {
  const session = await getServerSession(authOptions)
  const userId = session?.user?.id

  if (!session) {
    return NextResponse.redirect(URL + '/api/auth/signin')
  }

  const latestData = await getStockData(userId)

  return NextResponse.json(latestData)
}
