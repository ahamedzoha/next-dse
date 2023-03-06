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

// DUMMY RESPONSE
// const stats = [
//   {
//     name: '1JANATAMF',
//     prices: {
//       trade: 0,
//       ycp: 6.1,
//       closep: 6.1,
//       low: 0,
//       high: 0,
//       current: 0,
//       changePercent: NaN,
//       changed: NaN,
//       volume: 0,
//       value: 0,
//     },
//   },
//   {
//     name: '1STPRIMFMF',
//     prices: {
//       ycp: 13.8,
//       changed: 0,
//       trade: 84,
//       value: 1.15,
//       volume: 83,
//       closep: 13.8,
//       high: 14,
//       low: 13.8,
//       current: 13.8,
//       changePercent: 0,
//     },
//   },
//   {
//     name: 'AAMRANET',
//     prices: {
//       low: 64,
//       changed: -1.1,
//       value: 181.58,
//       ycp: 65.6,
//       closep: 64.5,
//       high: 66.7,
//       trade: 2,
//       volume: 2,
//       current: 64.5,
//       changePercent: -1.71,
//     },
//   },
//   {
//     name: 'AAMRATECH',
//     prices: {
//       current: 37,
//       changePercent: -1.89,
//       volume: 1,
//       high: 38.1,
//       ycp: 37.7,
//       low: 36.9,
//       closep: 37,
//       value: 62.205,
//       changed: -0.7,
//       trade: 905,
//     },
//   },
//   {
//     name: 'ABB1STMF',
//     prices: {
//       changePercent: NaN,
//       current: 0,
//       closep: 5.2,
//       volume: 0,
//       trade: 0,
//       low: 0,
//       value: 0,
//       changed: NaN,
//       ycp: 5.2,
//       high: 0,
//     },
//   },
// ]
