import React from 'react'
import { Container, Description, Title, WrapperLine } from './styles'
import CheckboxFavorite from '../CheckboxFavorite'
import { formatDate } from '@/utils/helpers'

type Props = {
  data: CoinType.Item
}

const CardCoin: React.FC<Props> = ({ data, ...rest }) => {
  return (
    <Container {...rest}>
      <WrapperLine>
        <Title>{`${data.code}/${data.codein}`}</Title>
        <Description>
          <CheckboxFavorite />
        </Description>
      </WrapperLine>
      <WrapperLine>
        <Title>name</Title>
        <Description>{data.name}</Description>
      </WrapperLine>
      <WrapperLine>
        <Title>Máximo</Title>
        <Description>{data.high}</Description>
      </WrapperLine>
      <WrapperLine>
        <Title>Mínimo</Title>
        <Description>{data.low}</Description>
      </WrapperLine>
      <WrapperLine>
        <Title>Variação</Title>
        <Description>{data.varBid}</Description>
      </WrapperLine>
      <WrapperLine>
        <Title>% de Variação</Title>
        <Description>{data.pctChange}</Description>
      </WrapperLine>
      <WrapperLine>
        <Title>Venda</Title>
        <Description>{data.bid}</Description>
      </WrapperLine>
      <WrapperLine>
        <Title>Compra</Title>
        <Description>{data.ask}</Description>
      </WrapperLine>
      <WrapperLine>
        <Title>Data</Title>
        <Description>{formatDate(Number(data.timestamp))}</Description>
      </WrapperLine>
    </Container>
  )
}

export default CardCoin
