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

const Home: React.FC = () => {
  return (
    <Container>
      <Menu />

      <Content>
        <Line>
          <ContentGraphic></ContentGraphic>

          <ContentFavorites></ContentFavorites>
        </Line>

        <WrapperTable>
          <Table />
        </WrapperTable>
      </Content>
    </Container>
  )
}

export default Home
