import React from 'react'

import { ButtonComponent } from './styles'

type Props = {
  children: React.ReactNode
  variant: 'contained' | 'outlined'
}

const Button: React.FC<Props> = ({ variant, children, ...rest }) => {
  return (
    <ButtonComponent variant={variant} {...rest}>
      {children}
    </ButtonComponent>
  )
}

export default Button
