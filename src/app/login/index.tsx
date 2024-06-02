'use client'

import React from 'react'
import Login from './login'
import { initialValues, validationForm } from './form'

import { Formik } from 'formik'
import request from '@/service/request'

const LoginContainer: React.FC = () => {
  const submitForm = async (values: UserType.loginPayload) => {
    try {
      const response = await request.post('/auth', values)

      localStorage.setItem('TOKEN', response.data.access_token)
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
      <Login />
    </Formik>
  )
}

export default LoginContainer
