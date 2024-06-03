import { BarChart } from '@mui/x-charts/BarChart'

import styled from 'styled-components'

export const BarChartStyled = styled(BarChart).attrs({
  width: window.innerWidth > 600 ? 1300 : 800,
  height: 300,
  colors: ['#ec8f21'],
})`
  font-size: 4px;

  &.MuiChartsAxis-tickLabel {
    font-size: 10px;
    background-color: red;
  }
`
