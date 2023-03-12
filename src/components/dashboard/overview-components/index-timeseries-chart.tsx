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
    <div className='h-72 text-black'>
      <ResponsiveLine
        data={[{ id: 'Index Value', data }]}
        margin={{ top: 5, right: 5, bottom: 70, left: 40 }}
        xScale={{ type: 'time', format: '%Y-%m-%dT%H:%M:%S.%LZ' }}
        xFormat='time:%H:%M'
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: true,
          reverse: false,
        }}
        enableArea={true}
        curve='monotoneX'
        axisTop={null}
        axisRight={null}
        yFormat=' >-.2f'
        axisBottom={{
          format: '%H:%M',
          tickValues: 'every 1 hour',
          legend: 'Time',
          legendOffset: 36,
          legendPosition: 'middle',
        }}
        axisLeft={{
          tickValues: 5,
          //   legend: 'Index Value',
          //   legendOffset: -40,
          legendPosition: 'middle',
        }}
        theme={{
          axis: {
            ticks: {
              line: {
                stroke: '#ffffff',
              },
              text: {
                fill: '#ffffff',
              },
            },
            legend: {
              text: {
                fill: '#ffffff',
              },
            },
          },

          grid: {
            line: {
              stroke: 'rgba(255, 255, 255, 0.068)',
              strokeWidth: 1,
            },
          },

          tooltip: {
            container: {
              background: '#ffffff',
            },
          },

          crosshair: {
            line: {
              stroke: '#ffffff',
              strokeDasharray: '4 4',
            },
          },

          legends: {
            text: {
              fill: '#ffffff',
            },
          },

          labels: {
            text: {
              fill: '#ffffff',
            },
          },

          dots: {
            text: {
              fill: '#ffffff',
            },
          },

          markers: {
            text: {
              fill: '#ffffff',
            },
          },

          annotations: {
            text: {
              fill: '#ffffff',
            },
          },
        }}
        colors={{ scheme: 'dark2' }}
        lineWidth={2}
        pointSize={4}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
      />
    </div>
  )
}

export default IndexTimeSeriesChart
