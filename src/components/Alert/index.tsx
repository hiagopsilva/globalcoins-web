import { Alert, CircularProgress } from '@mui/material'
import React from 'react'

import { Container } from './styles'

const AlertToast: React.FC = () => {
  return (
    <Container>
      <Alert icon={<CircularProgress size={20} />} severity="success">
        Atualizando Dados.
      </Alert>
    </Container>
  )
}

export default AlertToast
