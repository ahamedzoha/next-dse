import MarketIndex from '@/components/dashboard/overview-components/market-index'

const Overviews = () => {
  return (
    <div className='my-5 w-full grid grid-cols-1 gap-y-5 lg:grid-cols-3 lg: gap-x-5'>
      <MarketIndex />
      <div className='bg-zinc-900 h-96 rounded-lg'></div>
      <div className='bg-zinc-900 h-96 rounded-lg'></div>
    </div>
  )
}

export default Overviews
