import { getStockData } from '@/lib/firestore/get-latest-data'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import StockTickerMarquee from '@/components/dashboard/stock-ticker-marquee'
import Overviews from '@/components/dashboard/overviews'
import ValueOverviews from '@/components/dashboard/value-overviews'

export const metadata = {
  title: 'Dashboard',
}

const Dashboard = async () => {
  const session = await getServerSession(authOptions)

  const { data: tickerdata, timestamp } = await getStockData(session?.user?.id)

  return (
    <div className=''>
      <StockTickerMarquee data={tickerdata} />
      <Overviews />
      <ValueOverviews />
    </div>

    // loading shimmer
    // <div className='w-full h-14'>
    //   <div className=' w-full h-16 bg-zinc-900 rounded-lg animate-pulse'></div>
    // </div>
  )
}

export default Dashboard
