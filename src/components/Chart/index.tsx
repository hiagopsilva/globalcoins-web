import * as React from 'react'
import { BarChartStyled } from './styles'

export default function Chart() {
  return (
    <BarChartStyled
      xAxis={[
        {
          data: [
            'BRL 1',
            'BRL 2',
            'BRl 3',
            'BRL 4',
            'BRL 5',
            'BRL 6',
            'BRL 7',
            'BRL 8',
            'BRL 9',
            'BRL 10',
          ],
          scaleType: 'band',
        },
      ]}
      series={[
        {
          data: [2, 5, 3, 4, 4, 5, 6, 7, 8, 9],
        },
      ]}
    />
  )
}
