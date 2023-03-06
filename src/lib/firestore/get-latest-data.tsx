import { LatestStockData, StockPrices } from '@/lib/types'
import { app } from '@/lib/firebase-admin'

export const getStockData = async (
  userId: string
): Promise<LatestStockData> => {
  const db = app.firestore()

  // Get the user's document
  const userDoc = await db.collection('users').doc(userId).get()

  // Check if the user exists
  if (!userDoc.exists) {
    throw new Error('User not found')
  }

  const stocksRef = db.collection('stocks')

  const querySnapshot = await stocksRef
    .orderBy('timestamp', 'desc')
    .limit(3)
    .get()

  if (querySnapshot.empty) {
    return { data: [], timestamp: null }
  }

  const latestData: LatestStockData = { data: [], timestamp: null }
  const stockData = querySnapshot.docs[1].data()

  // console.log(stockData)

  for (const key in stockData) {
    if (key !== 'timestamp') {
      const stockPrices = stockData[key].prices as StockPrices
      const stockDataObj = { name: stockData[key].name, prices: stockPrices }
      latestData.data.push(stockDataObj)
    } else {
      latestData.timestamp = stockData[key].toMillis()
    }
  }

  return latestData
}
