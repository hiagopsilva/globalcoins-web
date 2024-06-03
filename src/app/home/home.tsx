import React from 'react'
import {
  CardCoinStyled,
  ChartLeft,
  ChartRight,
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
import Footer from '@/components/Footer'
import Progress from '@/components/Progress'

type Props = {
  loading: boolean
  listCoins: CoinType.List
  listNamesForGraphic: string[]
  listValuesForGraphic: number[]
}
const Home: React.FC<Props> = ({
  loading,
  listCoins,
  listNamesForGraphic,
  listValuesForGraphic,
}) => {
  return (
    <Container>
      {loading && <Progress />}
      {!loading && (
        <>
          <Menu />

          <Content>
            <Line>
              <WrapperGraphic>
                <Title>Gráfico de moedas</Title>
                <ContentGraphic>
                  <ChartLeft
                    listNames={listNamesForGraphic}
                    listValues={listValuesForGraphic}
                  />
                </ContentGraphic>
              </WrapperGraphic>

              <WrapperGraphic>
                <WrapperSearch>
                  <Title>Histórico</Title>

                  <SelectHistoric></SelectHistoric>
                  <SelectHistoric></SelectHistoric>
                </WrapperSearch>

                <ContentGraphic>
                  <ChartRight listNames={['USD/BRL']} listValues={[1000]} />
                </ContentGraphic>
              </WrapperGraphic>
            </Line>

            <WrapperTable>
              <Title>Lista de Moedas</Title>
              <TableStyled data={listCoins} />

              <>{console.log({ listCoins })}</>
              {listCoins.map((item) => (
                <CardCoinStyled key={item.name} data={item} />
              ))}
            </WrapperTable>
          </Content>

          <Footer />
        </>
      )}
    </Container>
  )
}

export default Home
