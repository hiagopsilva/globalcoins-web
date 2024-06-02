import React from 'react'
import { Container } from './styles'
import Menu from '@/components/Menu'

const Home: React.FC = () => {
  return (
    <Container>
      {/* <ReactVirtualizedTable /> */}
      <Menu />
    </Container>
  )
}

export default Home
