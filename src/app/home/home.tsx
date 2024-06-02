import React from 'react'
import {
  CardCoinStyled,
  Container,
  Content,
  ContentGraphic,
  Line,
  TableStyled,
  WrapperTable,
} from './styles'
import Menu from '@/components/Menu'
import Chart from '@/components/Chart'

const Home: React.FC = () => {
  return (
    <Container>
      <Menu />

      <Content>
        <Line>
          <ContentGraphic>
            <Chart />
          </ContentGraphic>

          <ContentGraphic>
            <Chart />
          </ContentGraphic>
        </Line>

        <WrapperTable>
          <TableStyled />

          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((item) => (
            <CardCoinStyled key={item} />
          ))}
        </WrapperTable>
      </Content>
    </Container>
  )
}

export default Home
