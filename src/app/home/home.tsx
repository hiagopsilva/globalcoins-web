import React from 'react'
import {
  Container,
  Content,
  ContentGraphic,
  ContentHistoric,
  Line,
  WrapperTable,
} from './styles'
import Menu from '@/components/Menu'
import Table from '@/components/Table'
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
          <Table />
        </WrapperTable>
      </Content>
    </Container>
  )
}

export default Home
