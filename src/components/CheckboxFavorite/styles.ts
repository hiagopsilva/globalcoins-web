import styled from 'styled-components'
import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { Checkbox } from '@mui/material'

export const CheckboxFavoriteStyled = styled(Checkbox).attrs({
  size: 'medium',
})``

export const IconFavorite = styled(FavoriteBorder)``

export const IconFavoriteChecked = styled(Favorite)`
  color: #ec8f21;
`
