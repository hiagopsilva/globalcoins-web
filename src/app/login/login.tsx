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
  SignUpLink,
  Title,
  WrapperForm,
  WrapperLogo,
} from './styles'

import { FormikProps, useFormikContext } from 'formik'
import Progress from '@/components/Progress'

type Props = {
  loading: boolean
  goSignUp: () => void
}
const Login: React.FC<Props> = ({ loading, goSignUp }) => {
  const {
    values,
    submitForm,
    handleChange,
  }: FormikProps<UserType.loginPayload> = useFormikContext()

  return (
    <Container>
      {loading && <Progress />}
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

        <SignUpLink onClick={goSignUp}>Cadastrar</SignUpLink>
      </WrapperForm>
    </Container>
  )
}

export default Login
