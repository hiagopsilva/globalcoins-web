/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { TextFieldStyled } from './styles'
import { TextFieldVariants } from '@mui/material'

type Props = {
  variant?: TextFieldVariants
  type?: string
  placeholder?: string
  id?: string
  className?: string
  values: any
  handleChange: (e: string | React.ChangeEvent<UserType.loginPayload>) => void
}

const TextInput: React.FC<Props> = ({
  variant = 'outlined',
  type = 'text',
  placeholder,
  id,
  values,
  handleChange,
  className,
  ...rest
}) => {
  return (
    <TextFieldStyled
      id={id}
      className={className}
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
