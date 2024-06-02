import Image from 'next/image'
import styled from 'styled-components'

import Button from '../../components/Button'
import TextInput from '@/components/TextInput'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
`

export const WrapperLogo = styled.div``

export const Logo = styled(Image)`
  height: 100vh;
  width: 750px;
`

export const WrapperForm = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContentForm = styled.div``

export const Title = styled.h1`
  color: #333;
`

export const Description = styled.div`
  margin-top: 4px;
  font-size: 14px;
  color: #959595;
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;
`

export const Input = styled(TextInput)`
  &:first-child {
    margin-top: 20px;
  }

  & + & {
    margin-top: 8px;
    margin-bottom: 16px;
  }
`

export const ButtonStyled = styled(Button)``
