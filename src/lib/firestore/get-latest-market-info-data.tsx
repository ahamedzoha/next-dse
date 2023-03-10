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
    const UTC_OFFSET = 6 // UTC offset for Bangladesh time
    const startHour = 10
    const endHour = 15
    // Get the start of today based on GMT+6 and set the hour to 10am
    const startOfToday = new Date(
      Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        startHour + UTC_OFFSET,
        0,
        0
      )
    )
    // Get the end of today based on GMT+6 and set the hour to 3pm
    const endOfToday = new Date(
      Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        endHour + UTC_OFFSET,
        0,
        0
      )
    )

    const querySnapshot = await db
      .collection(`/market-indexes/${index}/index-data`)
      .where('timestamp', '>=', startOfToday)
      .where('timestamp', '<=', endOfToday)
      .orderBy('timestamp', 'desc')
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
