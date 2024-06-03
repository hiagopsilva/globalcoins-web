import React from 'react'

import { ButtonComponent } from './styles'

type Props = {
  children: React.ReactNode
  variant: 'contained' | 'outlined'
  onClick?: () => void
}

const Button: React.FC<Props> = ({ onClick, variant, children, ...rest }) => {
  return (
    <ButtonComponent onClick={onClick} variant={variant} {...rest}>
      {children}
    </ButtonComponent>
  )
}

export default Button
