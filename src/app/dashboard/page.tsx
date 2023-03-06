import { getStockData } from '@/lib/firestore/get-latest-data'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import TickerItems from '@/components/ticker-items'
import Marquee from 'react-fast-marquee'

export const metadata = {
  title: 'Dashboard',
}

const Dashboard = async () => {
  // const session = await getServerSession(authOptions)

  // const { data: tickerdata, timestamp } = await getStockData(session?.user?.id)

  const stats = [
    {
      name: '1JANATAMF',
      prices: {
        trade: 0,
        ycp: 6.1,
        closep: 6.1,
        low: 0,
        high: 0,
        current: 0,
        changePercent: NaN,
        changed: NaN,
        volume: 0,
        value: 0,
      },
    },
    {
      name: '1STPRIMFMF',
      prices: {
        ycp: 13.8,
        changed: 0,
        trade: 84,
        value: 1.15,
        volume: 83,
        closep: 13.8,
        high: 14,
        low: 13.8,
        current: 13.8,
        changePercent: 0,
      },
    },
    {
      name: 'AAMRANET',
      prices: {
        low: 64,
        changed: -1.1,
        value: 181.58,
        ycp: 65.6,
        closep: 64.5,
        high: 66.7,
        trade: 2,
        volume: 2,
        current: 64.5,
        changePercent: -1.71,
      },
    },
    {
      name: 'AAMRATECH',
      prices: {
        current: 37,
        changePercent: -1.89,
        volume: 1,
        high: 38.1,
        ycp: 37.7,
        low: 36.9,
        closep: 37,
        value: 62.205,
        changed: -0.7,
        trade: 905,
      },
    },
    {
      name: 'ABB1STMF',
      prices: {
        changePercent: NaN,
        current: 0,
        closep: 5.2,
        volume: 0,
        trade: 0,
        low: 0,
        value: 0,
        changed: NaN,
        ycp: 5.2,
        high: 0,
      },
    },
  ]

  // console.log(tickerdata.splice(0, 5))

  return (
    <div className=''>
      {/*  */}
      <div className='overflow-x-hidden bg-zinc-900 rounded-lg '>
        {/* <div className='py-4 animate-marquee flex flex-nowrap space-x-8 '>
          {tickerdata.map((item) => (
            <TickerItems key={item.name} data={item} />
          ))}
        </div> */}

        <Marquee gradient={false} speed={100}>
          {stats.map((item) => (
            <TickerItems key={item.name} data={item} />
          ))}
        </Marquee>
      </div>
    </div>
  )
}

// {stats.map((item) => (
//   <div key={item.name} className='px-4 py-5 sm:p-6 max-w-xs'>
//     <dt className='text-base font-normal text-gray-900'>
//       {item.name}
//     </dt>
//     <dd className='mt-1 flex items-baseline justify-between md:block lg:flex'>
//       <div className='flex items-baseline text-2xl font-semibold text-indigo-600'>
//         {item.stat}
//         <span className='ml-2 text-sm font-medium text-gray-500'>
//           from {item.previousStat}
//         </span>
//       </div>

//       <div
//         className={clsxm(
//           item.changeType === 'increase'
//             ? 'bg-green-100 text-green-800'
//             : 'bg-red-100 text-red-800',
//           'inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0'
//         )}
//       >
//         {item.changeType === 'increase' ? (
//           <ArrowUpIcon
//             className='-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500'
//             aria-hidden='true'
//           />
//         ) : (
//           <ArrowDownIcon
//             className='-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-red-500'
//             aria-hidden='true'
//           />
//         )}

//         <span className='sr-only'>
//           {' '}
//           {item.changeType === 'increase'
//             ? 'Increased'
//             : 'Decreased'}{' '}
//           by{' '}
//         </span>
//         {item.change}
//       </div>
//     </dd>
//   </div>
// ))}

// const Marquee = ({ children }) => {}
export default Dashboard

// const output = {
//   '390': {
//     name: 'ZAHINTEX',
//     prices: {
//       trade: 0,
//       value: 0,
//       current: 0,
//       volume: 0,
//       changePercent: NaN,
//       closep: 0,
//       ycp: 9,
//       low: 0,
//       changed: NaN,
//       high: 0,
//     },
//   },
//   '391': {
//     prices: {
//       changePercent: -3.17,
//       high: 145,
//       ycp: 146.3,
//       trade: 39,
//       changed: -4.5,
//       current: 141.8,
//       value: 0.41,
//       closep: 0,
//       low: 133,
//       volume: 2,
//     },
//     name: 'ZEALBANGLA',
//   },
//   timestamp: { Timestamp: { _seconds: 1678077027, _nanoseconds: 257000000 } },
// }
