import React from 'react'
import {
  CardCoinStyled,
  Container,
  Content,
  ContentGraphic,
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
  console.log({ listCoins })
  return (
    <Container>
      {loading && <Progress />}
      {!loading && (
        <>
          <Menu />

          <Content>
            <WrapperGraphic>
              <WrapperSearch>
                <Title>Histórico</Title>

                <SelectHistoric></SelectHistoric>
              </WrapperSearch>

              <ContentGraphic>
                <Chart
                  listNames={listNamesForGraphic}
                  listValues={listValuesForGraphic}
                />
              </ContentGraphic>
            </WrapperGraphic>

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
