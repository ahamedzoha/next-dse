import clsxm from '@/lib/clsxm'

import { StockData } from '@/lib/types'

import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'
import { FC } from 'react'

interface TickerItemsProps {
  data: StockData
}

const TickerItems: FC<TickerItemsProps> = ({ data }) => {
  return (
    <div className='mx-4'>
      <div className='flex flex-col  w-full space-y-2'>
        <div className='flex justify-between '>
          <span className='text-xl font-bold pr-2'>{data.name}</span>
          <PriceIndicator />
        </div>
        <div className='flex justify-between'>
          <span className=''>৳80.45</span>

          <span>৳2.0</span>
        </div>
      </div>
    </div>
  )
}

const PriceIndicator = () => {
  return (
    <div
      className={clsxm(
        'border border-green-300 text-green-300',
        'inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0'
      )}
    >
      <ArrowUpIcon
        className='-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-300'
        aria-hidden='true'
      />
      <span className=''>4.05%</span>
    </div>
  )
}

export default TickerItems
