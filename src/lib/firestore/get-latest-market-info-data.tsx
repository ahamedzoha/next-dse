import { MarketInfoData, MarketInfoDataType } from '@/lib/types'
import { app } from '@/lib/firebase-admin'

export enum MarketIndexes {
  DS30 = 'ds30index',
  DSES = 'dsesindex',
  DSEX = 'dsexindex',
}
const indexName = 'ds30index'

export const getMarketInfoData = async (
  index: MarketIndexes
): Promise<MarketInfoData> => {
  try {
    const db = app.firestore()

    const now = new Date() // Current date and time in local timezone
    const tzOffset = 6 * 60 // GMT+6 offset in minutes
    const startOfToday = new Date(now.valueOf() + tzOffset * 60000)
    startOfToday.setHours(0, 0, 0, 0) // Set to beginning of day in GMT+6 timezone
    const endOfToday = new Date(now.valueOf() + tzOffset * 60000)
    endOfToday.setHours(23, 59, 59, 999) // Set to end of day in GMT+6 timezone

    const querySnapshot = await db
      .collection(`/market-indexes/${index}/index-data`)
      .where('timestamp', '>=', startOfToday)
      .where('timestamp', '<=', endOfToday)
      .get()

    const latestData: MarketInfoData = querySnapshot.docs.map((doc) => {
      const data = doc.data() as MarketInfoDataType
      return {
        ...data,
        timestamp: data.timestamp.toDate(), // Convert Firestore Timestamp to JavaScript Date
      }
    })

    return latestData
  } catch (error) {
    console.error('Error fetching market data:', error)
    throw new Error('Error fetching market data')
  }
}
