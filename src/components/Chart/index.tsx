import * as React from 'react'
import { BarChart } from '@mui/x-charts/BarChart'

export default function Chart() {
  return (
    <BarChart
      xAxis={[
        {
          id: 'barCategories',
          data: ['BRL 1', 'BRL 2', 'BRl 3', 'BRL 4'],
          scaleType: 'band',
        },
      ]}
      series={[
        {
          data: [2, 5, 3, 4],
        },
      ]}
      width={650}
      height={300}
      colors={['#ec8f21']}
    />
  )
}
