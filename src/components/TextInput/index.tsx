import React from 'react'
import { TextFieldStyled } from './styles'
import { TextFieldVariants } from '@mui/material'

type Props = {
  variant?: TextFieldVariants
  type?: string
  placeholder?: string
  id?: string
  values: string | number
  handleChange: (e: string | React.ChangeEvent<UserType.loginPayload>) => void
}

const TextInput: React.FC<Props> = ({
  variant = 'outlined',
  type = 'text',
  placeholder,
  id,
  values,
  handleChange,
  ...rest
}) => {
  return (
    <TextFieldStyled
      id={id}
      type={type}
      values={values}
      onChange={handleChange}
      label={placeholder}
      variant={variant}
      size="small"
      {...rest}
    />
  )
}

export default TextInput
