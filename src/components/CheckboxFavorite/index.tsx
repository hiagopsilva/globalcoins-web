import React from 'react'
import {
  CheckboxFavoriteStyled,
  IconFavorite,
  IconFavoriteChecked,
} from './styles'

type Props = {
  onClick: () => Promise<void>
  value: boolean
}

const CheckboxFavorite: React.FC<Props> = ({ value, onClick }) => {
  return (
    <CheckboxFavoriteStyled
      icon={<IconFavorite />}
      checkedIcon={<IconFavoriteChecked />}
      checked={value}
      onClick={onClick}
    />
  )
}

export default CheckboxFavorite
