import clsxm from '@/lib/clsxm'

import { StockData } from '@/lib/types'

import {
  ArrowDownIcon,
  ArrowUpIcon,
  Bars2Icon,
} from '@heroicons/react/20/solid'
import { FC } from 'react'

interface TickerItemsProps {
  data: StockData
}

const TickerItems: FC<TickerItemsProps> = ({ data }) => {
  const { name, prices } = data
  const { changePercent, changed, current } = prices

  return (
    <div className='mx-7 my-4'>
      <div className='flex flex-col  w-full space-y-2'>
        <div className='flex justify-between items-center'>
          <span className='text-sm font-bold pr-2'>{name}</span>
          <PriceIndicator
            changePercentage={parseFloat(Number(changePercent).toFixed(2))}
          />
        </div>
        <div className='flex justify-between items-center'>
          <span className='text-sm'>৳{current.toFixed(2)}</span>

          <span className='text-xs pr-2'>
            {changed === null ? '0.00' : changed.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  )
}

const PriceIndicator = ({ changePercentage }: { changePercentage: number }) => {
  return (
    <div
      className={clsxm(
        changePercentage > 0 && 'border border-green-300 text-green-300',
        changePercentage < 0 && 'border border-red-300 text-red-300',
        changePercentage === 0 && 'border border-gray-300 text-gray-300',
        changePercentage === null && 'border border-gray-300 text-gray-300',
        'inline-flex items-baseline px-2.5 py-0.5 rounded-full text-xs font-medium md:mt-2 lg:mt-0'
      )}
    >
      {changePercentage < 0 && (
        <ArrowDownIcon
          className='-ml-1 mr-0.5 h-3 w-3 flex-shrink-0 self-center text-red-300'
          aria-hidden='true'
        />
      )}
      {changePercentage > 0 && (
        <ArrowUpIcon
          className='-ml-1 mr-0.5 h-3 w-3 flex-shrink-0 self-center text-green-300'
          aria-hidden='true'
        />
      )}
      {changePercentage === 0 && (
        <Bars2Icon
          className='-ml-1 mr-0.5 h-3 w-3 flex-shrink-0 self-center text-gray-300'
          aria-hidden='true'
        />
      )}
      {changePercentage === null && (
        <Bars2Icon
          className='-ml-1 mr-0.5 h-3 w-3 flex-shrink-0 self-center text-gray-300'
          aria-hidden='true'
        />
      )}

      <span className='text-xs'>
        {changePercentage === null ? 0.0 : changePercentage.toFixed(2)}%
      </span>
    </div>
  )
}

export default TickerItems
