import React, { FC } from 'react'

import { Wrapper, TD } from './styles'
import CheckboxFavorite from '../CheckboxFavorite'

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {}

const Table: FC<Props> = ({ ...rest }) => {
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

      {[1, 2, 3, 4, 5, 4, 4, 4, 4, 4].map((item) => (
        <tbody key={item}>
          <tr className="line">
            <TD>
              <CheckboxFavorite />
            </TD>
            <TD>Dólar Americano/Real Brasileiro</TD>
            <TD>5.2585</TD>
            <TD>5.1936</TD>
            <TD>0.0417</TD>
            <TD>0.8</TD>
            <TD>5.2443</TD>
            <TD>5.2459</TD>
            <TD>1717189193</TD>
          </tr>
        </tbody>
      ))}
    </Wrapper>
  )
}

export default Table
