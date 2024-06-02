import React from 'react'
import { TextFieldStyled } from './styles'
import { TextFieldVariants } from '@mui/material'

type Props = {
  variant?: TextFieldVariants
  type?: string
  placeholder?: string
}

const TextInput: React.FC<Props> = ({
  variant = 'outlined',
  type = 'text',
  placeholder,
  ...rest
}) => {
  return (
    <TextFieldStyled
      type={type}
      label={placeholder}
      variant={variant}
      size="small"
      {...rest}
    />
  )
}

export default TextInput
