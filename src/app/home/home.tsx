import React from 'react'
import { Container } from './styles'
import ReactVirtualizedTable from '@/components/Table'

const Home: React.FC = () => {
  return (
    <Container>
      home
      <ReactVirtualizedTable />
    </Container>
  )
}

export default Home
