'use client'
import React from 'react'
import {
  ButtonStyled,
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

import { FormikProps, useFormikContext } from 'formik'

const Login: React.FC = () => {
  const {
    values,
    submitForm,
    handleChange,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }: FormikProps<any> = useFormikContext()

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
            <Input
              type="text"
              placeholder="E-mail"
              id="email"
              values={values}
              handleChange={handleChange('email')}
            />
            <Input
              type="password"
              placeholder="Senha"
              id="password"
              values={values}
              handleChange={handleChange('password')}
            />
            <ButtonStyled onClick={submitForm} variant="contained">
              Entrar
            </ButtonStyled>
          </Form>
        </ContentForm>
      </WrapperForm>
    </Container>
  )
}

export default Login
