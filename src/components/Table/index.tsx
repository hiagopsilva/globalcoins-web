import React, { FC } from 'react'

import { Wrapper, TD } from './styles'
import CheckboxFavorite from '../CheckboxFavorite'
import { formatDate } from '@/utils/helpers'

type Props = {
  data: CoinType.List
}

const Table: FC<Props> = ({ data, ...rest }) => {
  return (
    <Wrapper {...rest}>
      <thead>
        <tr>
          <th></th>
          <th>Nome</th>
          <th>Máximo</th>
          <th>Mínimo</th>
          <th>Variação</th>
          <th>% de Variação</th>
          <th>Venda</th>
          <th>Compra</th>
          <th>Data</th>
        </tr>
      </thead>

      {data.map((item) => (
        <tbody key={item.name}>
          <tr className="line">
            <TD>
              <CheckboxFavorite />
            </TD>
            <TD>
              ({item.code}-{item.codein}) - {item.name}
            </TD>
            <TD>{item.high}</TD>
            <TD>{item.low}</TD>
            <TD>{item.varBid}</TD>
            <TD>{item.pctChange}</TD>
            <TD>{item.bid}</TD>
            <TD>{item.ask}</TD>
            <TD>{formatDate(Number(item.timestamp))}</TD>
          </tr>
        </tbody>
      ))}
    </Wrapper>
  )
}

export default Table
