import { getStockData } from '@/lib/firestore/get-latest-stock-data'

import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import StockTickerMarquee from '@/components/dashboard/stock-ticker-marquee'
import Overviews from '@/components/dashboard/overviews'
import ValueOverviews from '@/components/dashboard/value-overviews'

export const metadata = {
  title: 'Dashboard',
}

export const revalidate = 10

const Dashboard = async () => {
  const session = await getServerSession(authOptions)

  const { data: tickerdata, timestamp } = await getStockData(session?.user?.id)

  // const data = await fetch(`${process.env.URL}/api/testapi`)
  // const responseData = await data.json()
  // console.log(responseData)

  return (
    <div className=''>
      <StockTickerMarquee data={tickerdata} />
      {/* @ts-expect-error Async Server Component */}
      <Overviews />
      <ValueOverviews />
    </div>
  )
}

export default Dashboard
