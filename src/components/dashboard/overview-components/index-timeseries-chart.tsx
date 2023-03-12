'use client'

import { FC } from 'react'
import { MarketInfoDataType } from '@/lib/types'
import { ResponsiveLine } from '@nivo/line'
import { linearGradientDef } from '@nivo/core'
// import { timeFormat } from 'd3-time-format'

type IndexTimeSeriesChart = {
  marketData: MarketInfoDataType[]
}

const gradient = (
  <linearGradient id='gradient' x1='0%' y1='0%' x2='0%' y2='100%'>
    <stop offset='0%' stopColor='#ffffff' />
    <stop offset='100%' stopColor='#ffffff' stopOpacity={0.2} />
  </linearGradient>
)

const IndexTimeSeriesChart: FC<IndexTimeSeriesChart> = ({ marketData }) => {
  const data = marketData.map((item) => ({
    y: item.indexValue,
    x: new Date(item.timestamp),
  }))

  //   console.log(data)

  return (
    <div className='h-64 text-black my-6'>
      <ResponsiveLine
        data={[{ id: 'Index Value', data }]}
        margin={{ top: 5, right: 5, bottom: 20, left: 40 }}
        tooltipFormat={(value) => `x${value}`}
        xScale={{ type: 'time', format: '%Y-%m-%dT%H:%M:%S.%LZ' }}
        xFormat='time:%H:%M'
        yScale={{
          type: 'linear',
          min: 'auto',
          // max: 'auto',
          stacked: true,
        }}
        enableArea={true}
        areaOpacity={0.1}
        curve='linear'
        yFormat=' >-.2f'
        axisBottom={{
          format: '%H:%M',
          tickValues: 'every 1 hour',
          legendOffset: 30,
          legendPosition: 'middle',
        }}
        axisLeft={{
          tickValues: 5,
          legendPosition: 'middle',
        }}
        enableGridX={false}
        theme={{
          axis: {
            ticks: {
              line: {
                stroke: '#ffffff',
              },
              text: {
                fill: '#ffffff65',
              },
            },
          },

          grid: {
            line: {
              stroke: 'rgba(255, 255, 255, 0.027)',
              strokeWidth: 1,
            },
          },

          crosshair: {
            line: {
              stroke: '#ffffff',
            },
          },

          tooltip: {
            container: {
              background: '#ffffff',
            },
          },
        }}
        colors={['#ffffff']}
        useMesh={true}
      />
    </div>
  )
}

export default IndexTimeSeriesChart
