'use client'
import TickerItems from '@/components/dashboard/ticker-items'
import Marquee from 'react-fast-marquee'
import { StockData } from '@/lib/types'
import { FC, useState } from 'react'
import {
  PauseCircleIcon,
  PlayCircleIcon,
  ArrowRightCircleIcon,
  ArrowLeftCircleIcon,
} from '@heroicons/react/24/outline'

interface StockTickerMarqueeProps {
  data: StockData[]
}

enum Direction {
  left = 'left',
  right = 'right',
}

const StockTickerMarquee: FC<StockTickerMarqueeProps> = ({ data }) => {
  const [play, setPlay] = useState(true)
  const [direction, setDirection] = useState<Direction>(Direction.left)

  return (
    <div className='overflow-x-hidden bg-zinc-900 rounded-lg relative group'>
      <Marquee
        gradient={false}
        speed={100}
        play={play}
        delay={2}
        direction={direction}
      >
        {data ? (
          data.map((item) => <TickerItems key={item.name} data={item} />)
        ) : (
          <span>loading</span>
        )}
      </Marquee>

      <div
        className='
      absolute top-0 right-0 z-10 
      invisible
      opacity-0
      transition-all duration-300
       group-hover:visible
        group-hover:opacity-100'
      >
        <button
          onClick={() => setDirection(Direction.left)}
          className='bg-transparent text-white p-2 rounded-l-lg cursor-pointer'
        >
          <ArrowLeftCircleIcon className='h-5 w-5' />
        </button>

        {play ? (
          <button
            onClick={() => setPlay(false)}
            className='bg-transparent text-white p-2 rounded-r-lg cursor-pointer'
          >
            <PauseCircleIcon className='h-5 w-5' />
          </button>
        ) : (
          <button
            onClick={() => setPlay(true)}
            className='bg-transparent text-white p-2 rounded-r-lg cursor-pointer'
          >
            <PlayCircleIcon className='h-5 w-5' />
          </button>
        )}

        <button
          onClick={() => setDirection(Direction.right)}
          className='bg-transparent text-white p-2 rounded-r-lg cursor-pointer'
        >
          <ArrowRightCircleIcon className='h-5 w-5' />
        </button>
      </div>
    </div>
  )
}

export default StockTickerMarquee
