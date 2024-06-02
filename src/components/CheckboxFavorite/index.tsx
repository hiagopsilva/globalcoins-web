import React from 'react'
import {
  CheckboxFavoriteStyled,
  IconFavorite,
  IconFavoriteChecked,
} from './styles'

const CheckboxFavorite: React.FC = () => {
  return (
    <CheckboxFavoriteStyled
      icon={<IconFavorite />}
      checkedIcon={<IconFavoriteChecked />}
    />
  )
}

export default CheckboxFavorite
