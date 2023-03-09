'use client'

import { Tab } from '@headlessui/react'
import { Fragment, useState, useContext } from 'react'
import { DashboardContext, MarketIndexes } from '@/contexts/dashboard.context'
import clsxm from '@/lib/clsxm'

const MarketIndex = () => {
  const { allMarketIndexes, activeMarketIndex, setActiveMarketIndex } =
    useContext(DashboardContext)

  return (
    <div className='bg-zinc-900 h-96 rounded-lg'>
      {/* container */}
      <div className='w-full h-full px-4 py-4'>
        <Tab.Group
          onChange={(index) => {
            if (index === 0) setActiveMarketIndex(MarketIndexes.DS30)
            if (index === 1) setActiveMarketIndex(MarketIndexes.DSES)
            if (index === 2) setActiveMarketIndex(MarketIndexes.DSEX)
          }}
        >
          <Tab.List className='flex p-1 space-x-1 bg-black rounded-xl w-64'>
            {allMarketIndexes.map((item, index) => (
              <Tab
                key={index}
                className={({ selected }) =>
                  clsxm(
                    'w-full py-1.5 text-xs leading-5 font-bold text-center text-zinc-500 rounded-lg',
                    selected
                      ? 'bg-zinc-100 text-black focus:outline-none'
                      : 'text-zinc-500 hover:text-white hover:bg-zinc-800'
                  )
                }
              >
                {MarketIndexes.DS30 === item && 'DS30'}
                {MarketIndexes.DSES === item && 'DSES'}
                {MarketIndexes.DSEX === item && 'DSEX'}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className='mt-4 '>
            {allMarketIndexes.map((item, index) => (
              <Tab.Panel key={index}>
                <div className='flex w-full h-full flex-col space-y-2'>
                  <h2>asdasd</h2>
                  {/* <DataTable item={item} /> */}
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
      <div className='w-full h-full px-4 py-4'>
        {/* <Tab.Group defaultIndex={}> */}
      </div>
    </div>
  )
}

// const data = [
//   {
//     indexName: 'DSEX',
//     totalTrade: {
//       value1: 6148.77,
//       value2: 1127793,
//     },
//     totalVolume: {
//       value1: 16878321,
//       value2: -32.16,
//     },
//     totalVolumeMn: {
//       value1: 5837.698,
//       value2: -0.52,
//     },
//   },
//   {
//     indexName: 'DSES',
//     totalTrade: {
//       value1: 79321.878,
//       value2: 20656323,
//     },
//     totalVolume: {
//       value1: 34893232,
//       value2: 50.62,
//     },
//     totalVolumeMn: {
//       value1: 43268.782,
//       value2: 2.02,
//     },
//   },
//   {
//     indexName: 'DS30',
//     totalTrade: {
//       value1: 32354984,
//       value2: 321301.77,
//     },
//     totalVolume: {
//       value1: 1686213,
//       value2: 321864651,
//     },
//     totalVolumeMn: {
//       value1: 5837.698,
//       value2: 5837.698,
//     },
//   },
// ]

// const DataTable = ({
//   item,
// }: {
//   item: {
//     indexName: string
//     totalTrade: {
//       value1: number
//       value2: number
//     }
//     totalVolume: {
//       value1: number
//       value2: number
//     }
//     totalVolumeMn: {
//       value1: number
//       value2: number
//     }
//   }
// }) => {
//   return (
//     <div className='w-full  bg-black rounded-lg border-collapse border border-zinc-800'>
//       <table className='w-full h-full bg-black p-2 border-collapse rounded-lg '>
//         <tr className='text-xs font-bold text-zinc-500 text-left'>
//           <th className='pl-2 w-1/3 border-b border-zinc-800 py-2'>
//             Total Trade
//           </th>
//           <td className='pl-2 w-1/3 py-2 border-b border-zinc-800 bg-zinc-900/50'>
//             {item.totalTrade.value1}
//           </td>
//           <td className='pl-2 w-1/3 py-2 border-b border-zinc-800 bg-zinc-900/50'>
//             {item.totalTrade.value2}
//           </td>
//         </tr>
//         <tr className='text-xs font-bold text-zinc-500 text-left'>
//           <th className='pl-2 w-1/3 py-2 border-b border-zinc-800'>
//             Total Volume
//           </th>
//           <td className='pl-2 w-1/3 py-2 border-b border-zinc-800 bg-zinc-900/50'>
//             {item.totalVolume.value1}
//           </td>
//           <td className='pl-2 w-1/3 py-2 border-b border-zinc-800 bg-zinc-900/50'>
//             {item.totalVolume.value2}
//           </td>
//         </tr>
//         <tr className='text-xs font-bold text-zinc-500 text-left'>
//           <th className='pl-2 w-1/3 py-2 '>Total Volume Mn</th>
//           <td className='pl-2 w-1/3 py-2 bg-zinc-900/50'>
//             {item.totalVolumeMn.value1}
//           </td>
//           <td className='pl-2 w-1/3 py-2 bg-zinc-900/50'>
//             {item.totalVolumeMn.value2}
//           </td>
//         </tr>
//       </table>
//     </div>
//   )
// }

export default MarketIndex