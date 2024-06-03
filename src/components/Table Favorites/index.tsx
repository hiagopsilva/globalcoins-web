import React, { FC } from 'react'

import { Wrapper, TD } from './styles'

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {}

const TableFavorites: FC<Props> = () => {
  return (
    <Wrapper>
      <thead>
        <tr>
          <th>Favorito</th>
          <th>Nome</th>
          <th>varBid</th>
        </tr>
      </thead>

      {[1, 2, 3, 4, 5, 4, 4, 4, 4, 4].map((item) => (
        <tbody key={item}>
          <tr className="line">
            <TD>SIM / NÃO</TD>
            <TD>Dólar Americano/Real Brasileiro</TD>
            <TD>5.2585</TD>
          </tr>
        </tbody>
      ))}
    </Wrapper>
  )
}

export default TableFavorites
