import React from 'react'
import { Container, Description, Title, WrapperLine } from './styles'
import CheckboxFavorite from '../CheckboxFavorite'

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
        <Title>high</Title>
        <Description>{data.high}</Description>
      </WrapperLine>
      <WrapperLine>
        <Title>low</Title>
        <Description>{data.low}</Description>
      </WrapperLine>
      <WrapperLine>
        <Title>varBid</Title>
        <Description>{data.varBid}</Description>
      </WrapperLine>
      <WrapperLine>
        <Title>pctChange</Title>
        <Description>{data.pctChange}</Description>
      </WrapperLine>
      <WrapperLine>
        <Title>bid</Title>
        <Description>{data.bid}</Description>
      </WrapperLine>
      <WrapperLine>
        <Title>ask</Title>
        <Description>{data.ask}</Description>
      </WrapperLine>
      <WrapperLine>
        <Title>Data</Title>
        <Description>{data.timestamp}</Description>
      </WrapperLine>
    </Container>
  )
}

export default CardCoin
