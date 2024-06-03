import CardCoin from '@/components/CardCoin'
import Select from '@/components/Select'
import Table from '@/components/Table'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`

export const Content = styled.div`
  margin-top: 32px;
`

export const WrapperTable = styled.div`
  width: 90%;
  margin: 0 auto;
`

export const Title = styled.h1`
  color: #333;
  font-size: 32px;
  font-weight: 600;

  @media (min-width: 200px) and (max-width: 767px) {
    font-size: 26px;
    margin: 24px 0px 12px;
  }
`

export const TableStyled = styled(Table)`
  display: block;

  @media (min-width: 200px) and (max-width: 767px) {
    display: none;
  }
`

export const CardCoinStyled = styled(CardCoin)`
  display: none;

  & + & {
    margin-top: 16px;
  }

  @media (min-width: 200px) and (max-width: 767px) {
    display: block;
  }
`

export const WrapperGraphic = styled.div`
  margin: 16px 64px;

  @media (min-width: 200px) and (max-width: 767px) {
    overflow-x: scroll;
    margin: 8px 16px;
  }
`

export const ContentGraphic = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-top: 12px;

  @media (min-width: 200px) and (max-width: 767px) {
    width: 100%;

    overflow-x: scroll;

    & + & {
      margin-left: 0;
    }
  }
`

export const WrapperSearch = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const SelectHistoric = styled(Select)``
