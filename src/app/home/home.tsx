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

type Props = {
  listCoins: CoinType.List
}
const Home: React.FC<Props> = ({ listCoins }) => {
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
          <TableStyled data={listCoins} />

          {listCoins.map((item) => (
            <CardCoinStyled key={item.name} data={item} />
          ))}
        </WrapperTable>
      </Content>

      <Footer />
    </Container>
  )
}

export default Home
