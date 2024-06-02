'use client'

import React from 'react'
import Login from './login'
import { initialValues, validationForm } from './form'

import { Formik } from 'formik'

const LoginContainer: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const submitForm = async (values: any) => {
    console.log({ values })
    alert(JSON.stringify(values))
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
