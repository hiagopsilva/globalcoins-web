import * as React from 'react'
import { BarChartStyled } from './styles'

type Props = {
  listNames: string[]
  listValues: number[]
}

const Chart: React.FC<Props> = ({ listNames, listValues }) => {
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
    />
  )
}

export default Chart
