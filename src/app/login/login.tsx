'use client'
import React from 'react'
import {
  Button,
  Container,
  ContentForm,
  Description,
  Form,
  Input,
  Logo,
  Title,
  WrapperForm,
  WrapperLogo,
} from './styles'

const Login: React.FC = () => {
  return (
    <Container>
      <WrapperLogo>
        <Logo src={require('../../assets/logo.png')} alt="Global Coins" />
      </WrapperLogo>

      <WrapperForm>
        <ContentForm>
          <Title>Login</Title>
          <Description>Informe seus dados para fazer o login.</Description>

          <Form>
            <Input type="text" placeholder="Usuário" />
            <Input type="password" placeholder="Senha" />
            <Button type="submit">Entrar</Button>
          </Form>
        </ContentForm>
      </WrapperForm>
    </Container>
  )
}

export default Login
