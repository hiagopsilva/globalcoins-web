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
import { COINS_CONSTANTS } from '@/utils/constants/coins'
import { DAYS_CONSTANTS } from '@/utils/constants/days'

type Props = {
  loading: boolean
  listCoins: CoinType.List
  listNamesForGraphic: string[]
  listValuesForGraphic: number[]
  coin: string
  days: number

  setDays: (days: number) => void
  setCoin: (coin: string) => void
  logout: () => void
  handleFavorite: (coin: string) => Promise<void>
}
const Home: React.FC<Props> = ({
  loading,
  listCoins,
  listNamesForGraphic,
  listValuesForGraphic,
  setDays,
  setCoin,
  coin,
  days,
  logout,
  handleFavorite,
}) => {
  return (
    <Container>
      {loading && <Progress />}
      <Menu logout={logout} />

      <Content>
        <Line>
          <WrapperGraphic>
            <Title>Histórico</Title>

            <ContentGraphic>
              <ChartLeft
                listNames={listNamesForGraphic}
                listValues={listValuesForGraphic}
              />
            </ContentGraphic>
          </WrapperGraphic>

          <WrapperGraphic>
            <WrapperSearch>
              <SelectHistoric
                label="Moeda"
                options={COINS_CONSTANTS}
                value={coin}
                onChange={setCoin}
              ></SelectHistoric>
              <SelectHistoric
                label="Dias"
                options={DAYS_CONSTANTS}
                value={days}
                onChange={setDays}
              ></SelectHistoric>
            </WrapperSearch>

            <ContentGraphic>
              <ChartRight listNames={['USD/BRL']} listValues={[1000]} />
            </ContentGraphic>
          </WrapperGraphic>
        </Line>

        <WrapperTable>
          <Title>Lista de Moedas</Title>
          <TableStyled data={listCoins} handleFavorite={handleFavorite} />

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
