import * as React from 'react'
import { BarChartStyled } from './styles'

type Props = {
  listNames: string[]
  listValues: number[]
  width?: number
}

const BarChart: React.FC<Props> = ({ width, listNames, listValues }) => {
  return (
    <BarChartStyled
      xAxis={[
        {
          data: listNames,
          scaleType: 'band',
        },
      ]}
      series={[
        {
          data: listValues,
        },
      ]}
      width={width}
    />
  )
}

export default BarChart
