import React from 'react'
import {
  Container,
  Content,
  ContentFavorites,
  ContentGraphic,
  Line,
  WrapperTable,
} from './styles'
import Menu from '@/components/Menu'
import Table from '@/components/Table'
import Chart from '@/components/Chart'
import TableFavorites from '@/components/Table Favorites'

const Home: React.FC = () => {
  return (
    <Container>
      <Menu />

      <Content>
        <Line>
          <ContentGraphic>
            <Chart />
          </ContentGraphic>

          <ContentFavorites>
            <TableFavorites />
          </ContentFavorites>
        </Line>

        <WrapperTable>
          <Table />
        </WrapperTable>
      </Content>
    </Container>
  )
}

export default Home
