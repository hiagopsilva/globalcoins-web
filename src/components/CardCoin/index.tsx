import React from 'react'
import {
  CheckboxFavorite,
  Container,
  Description,
  IconFavorite,
  IconFavoriteChecked,
  Title,
  WrapperLine,
} from './styles'

const CardCoin: React.FC = ({ ...rest }) => {
  return (
    <Container {...rest}>
      <WrapperLine>
        <Title>EUA / BRL</Title>
        <Description>
          <CheckboxFavorite
            icon={<IconFavorite />}
            checkedIcon={<IconFavoriteChecked />}
          />
        </Description>
      </WrapperLine>
      <WrapperLine>
        <Title>name</Title>
        <Description>Dólar Americano/Real Brasileiro</Description>
      </WrapperLine>
      <WrapperLine>
        <Title>high</Title>
        <Description>5.2585</Description>
      </WrapperLine>
      <WrapperLine>
        <Title>low</Title>
        <Description>5.1936</Description>
      </WrapperLine>
      <WrapperLine>
        <Title>varBid</Title>
        <Description>0.0417</Description>
      </WrapperLine>
      <WrapperLine>
        <Title>pctChange</Title>
        <Description>0.8</Description>
      </WrapperLine>
      <WrapperLine>
        <Title>bid</Title>
        <Description>5.2443</Description>
      </WrapperLine>
      <WrapperLine>
        <Title>ask</Title>
        <Description>5.2459</Description>
      </WrapperLine>
      <WrapperLine>
        <Title>Data</Title>
        <Description>1717189193</Description>
      </WrapperLine>
    </Container>
  )
}

export default CardCoin
