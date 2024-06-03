import React from 'react'
import {
  CardCoinStyled,
  Container,
  Content,
  ContentGraphic,
  Line,
  SelectHistoric,
  TableStyled,
  Title,
  WrapperGraphic,
  WrapperSearch,
  WrapperTable,
} from './styles'
import Menu from '@/components/Menu'
import Chart from '@/components/Chart'
import Footer from '@/components/Footer'

const Home: React.FC = () => {
  return (
    <Container>
      <Menu />

      <Content>
        <Line>
          <WrapperGraphic>
            <Title>Gráfico de moedas</Title>
            <ContentGraphic>
              <Chart />
            </ContentGraphic>
          </WrapperGraphic>

          <WrapperGraphic>
            <WrapperSearch>
              <Title>Histórico</Title>

              <SelectHistoric></SelectHistoric>
            </WrapperSearch>

            <ContentGraphic>
              <Chart />
            </ContentGraphic>
          </WrapperGraphic>
        </Line>

        <WrapperTable>
          <Title>Lista de Moedas</Title>
          <TableStyled />

          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((item) => (
            <CardCoinStyled key={item} />
          ))}
        </WrapperTable>
      </Content>

      <Footer />
    </Container>
  )
}

export default Home
