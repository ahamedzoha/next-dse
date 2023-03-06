import { getStockData } from '@/lib/firestore/get-latest-data'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import clsxm from '@/lib/clsxm'

import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'

export const metadata = {
  title: 'Dashboard',
}

const Dashboard = async () => {
  const session = await getServerSession(authOptions)

  // const { data, timestamp } = await getStockData(session?.user?.id)

  // console.log(timestamp)

  const stats = [
    {
      name: 'Total Subscribers',
      stat: '71,897',
      previousStat: '70,946',
      change: '12%',
      changeType: 'increase',
    },
    {
      name: 'Avg. Open Rate',
      stat: '58.16%',
      previousStat: '56.14%',
      change: '2.02%',
      changeType: 'increase',
    },
    {
      name: 'Avg. Click Rate',
      stat: '24.57%',
      previousStat: '28.62%',
      change: '4.05%',
      changeType: 'decrease',
    },
  ]

  return (
    <div className=''>
      {/*  */}
      <div className='overflow-x-hidden bg-zinc-900 rounded-lg '>
        <div className='py-12 flex whitespace-nowrap '>
          {/* stock ticker element*/}
          <div className='flex flex-col w-40 bg-white/25 mx-4 p-2'>
            <div className='flex justify-between'>
              <span className='text-xl font-bold'>ACI</span>
              <div
                className={clsxm(
                  'bg-green-100 text-green-800',
                  'inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0'
                )}
              >
                <ArrowUpIcon
                  className='-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500'
                  aria-hidden='true'
                />
                <span className=''>4.05%</span>
              </div>
            </div>
            <div className='flex justify-between'>
              <span className='text-lg'>৳80.45</span>

              <span>৳2.0</span>
            </div>
          </div>
          {/*  */}
        </div>
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
