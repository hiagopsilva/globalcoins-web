import styled from 'styled-components'
import { TextField } from '@mui/material'

export const TextFieldStyled = styled(TextField)`
  width: 100%;
  font-size: 14px;

  & .MuiInputBase-input {
    font-size: 14px;
  }

  &:focus {
    border-color: #ec8f21;
  }
`
