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

    const now = new Date()

    // If today is Friday or Saturday, set the start of today to the last available market day (Thursday)
    const dayOfWeek = now.getUTCDay()
    const isMarketOpen = dayOfWeek >= 1 && dayOfWeek <= 4 // Monday to Thursday
    const daysToSubtract = isMarketOpen ? 0 : dayOfWeek === 0 ? 2 : 1 // If today is Sunday, subtract 2 days, otherwise subtract 1 day
    const startOfToday = new Date(
      Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate() - daysToSubtract,
        4,
        0,
        0
      ) // Market opens at 10 AM local time (4 AM UTC)
    )

    const querySnapshot = await db
      .collection(`/market-indexes/${index}/index-data`)
      .where('timestamp', '>=', startOfToday)
      .orderBy('timestamp', 'desc')
      .limit(150)
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
