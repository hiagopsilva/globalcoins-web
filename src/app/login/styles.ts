import Image from 'next/image'
import styled from 'styled-components'

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
  font-size: 14px;
  color: #959595;
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;
`

export const Input = styled.input``

export const Button = styled.button``
