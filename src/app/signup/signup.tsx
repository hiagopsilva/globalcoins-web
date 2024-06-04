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
import Progress from '@/components/Progress'

type Props = {
  loading: boolean
}

const SignUp: React.FC<Props> = ({ loading }) => {
  const {
    values,
    submitForm,
    handleChange,
  }: FormikProps<UserType.SingUpPayload> = useFormikContext()

  return (
    <Container>
      {loading && <Progress />}
      <WrapperLogo>
        <Logo src={require('../../assets/logo.png')} alt="Global Coins" />
      </WrapperLogo>

      <WrapperForm>
        <ContentForm>
          <Title>Cadastro</Title>
          <Description>Cadastre-se para acessar a Global Coin.</Description>

          <Form>
            <Input
              type="text"
              placeholder="Nome"
              id="name"
              values={values}
              handleChange={handleChange('name')}
            />
            <Input
              type="text"
              placeholder="Sobrenome"
              id="lastName"
              values={values}
              handleChange={handleChange('lastName')}
            />
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

            <Input
              type="password"
              placeholder="Confirmar senha"
              id="confirmPassword"
              className="confirmPassword"
              values={values}
              handleChange={handleChange('confirmPassword')}
            />
            <ButtonStyled onClick={submitForm} variant="contained">
              Cadastrar
            </ButtonStyled>
          </Form>
        </ContentForm>
      </WrapperForm>
    </Container>
  )
}

export default SignUp
