import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { Checkbox } from '@mui/material'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 8px;

  padding: 12px 8px;
`

export const WrapperLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px 16px;

  &:first-child {
    align-items: center;
    padding: 0 16px;
  }
`

export const Title = styled.div``

export const Description = styled.div``

export const CheckboxFavorite = styled(Checkbox).attrs({
  size: 'large',
})``

export const IconFavorite = styled(FavoriteBorder)``

export const IconFavoriteChecked = styled(Favorite)`
  color: #ec8f21;
`
