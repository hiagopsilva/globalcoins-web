'use client'

import React from 'react'
import SignUp from './signup'
import { initialValues, validationForm } from './form'

import { Formik } from 'formik'
import request from '@/service/request'

const SignUpContainer: React.FC = () => {
  const submitForm = async (values: UserType.SingUpPayload) => {
    try {
      const response = await request.post('/users/create', values)

      if (response) {
        alert('Usuário criado com sucesso')
      }
    } catch (error) {
      console.log({ error })
    }
  }
  return (
    <Formik
      validationSchema={validationForm}
      initialValues={initialValues}
      onSubmit={submitForm}
    >
      <SignUp />
    </Formik>
  )
}

export default SignUpContainer
