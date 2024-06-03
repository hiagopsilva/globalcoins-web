import React, { FC } from 'react'

import { Wrapper, TD } from './styles'
import CheckboxFavorite from '../CheckboxFavorite'

type Props = {
  data: CoinType.List
}

const Table: FC<Props> = ({ data, ...rest }) => {
  return (
    <Wrapper {...rest}>
      <thead>
        <tr>
          <th>Favorito</th>
          <th>Nome</th>
          <th>high</th>
          <th>low</th>
          <th>varBid</th>
          <th>pctChange</th>
          <th>bid</th>
          <th>ask</th>
          <th>Timestamp</th>
        </tr>
      </thead>

      {data.map((item) => (
        <tbody key={item.name}>
          <tr className="line">
            <TD>
              <CheckboxFavorite />
            </TD>
            <TD>{item.name}</TD>
            <TD>{item.high}</TD>
            <TD>{item.low}</TD>
            <TD>{item.varBid}</TD>
            <TD>{item.pctChange}</TD>
            <TD>{item.bid}</TD>
            <TD>{item.ask}</TD>
            <TD>{item.timestamp}</TD>
          </tr>
        </tbody>
      ))}
    </Wrapper>
  )
}

export default Table
