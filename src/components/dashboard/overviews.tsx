import {
  getMarketInfoData,
  MarketIndexes,
} from '@/lib/firestore/get-latest-market-info-data'

import MarketIndex from '@/components/dashboard/overview-components/market-index'
import AtAGlance from '@/components/dashboard/overview-components/at-a-glance'

const Overviews = async () => {
  // const marketdata = await getMarketInfoData(MarketIndexes.DSEX)

  // console.log(marketdata)

  return (
    <div className='my-5 w-full grid grid-cols-1 gap-y-5 lg:grid-cols-3 lg: gap-x-5'>
      <MarketIndex />
      <AtAGlance />
      <div className='bg-zinc-900 h-96 rounded-lg'></div>
    </div>
  )
}

export default Overviews
