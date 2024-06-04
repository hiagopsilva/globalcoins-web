'use client'

import React, { useState } from 'react'
import Login from './login/login'
import { initialValues, validationForm } from './login/form'

import { Formik } from 'formik'
import request from '@/service/request'
import { useRouter } from 'next/navigation'
import { APP_ROUTES_CONSTANTS } from '@/utils/constants/routing'

const LoginContainer: React.FC = () => {
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  const submitForm = async (values: UserType.loginPayload) => {
    try {
      setLoading(true)
      const response = await request.post('/auth', values)

      localStorage.setItem('TOKEN', response.data.access_token)

      localStorage.setItem('DATA', JSON.stringify(response.data.user))

      router.push(APP_ROUTES_CONSTANTS.private.home)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      alert(error.response.data.message)
    } finally {
      setLoading(false)
    }
  }

  const goSignUp = () => {
    router.push(APP_ROUTES_CONSTANTS.public.signup)
  }

  return (
    <Formik
      validationSchema={validationForm}
      initialValues={initialValues}
      onSubmit={submitForm}
    >
      <Login loading={loading} goSignUp={goSignUp} />
    </Formik>
  )
}

export default LoginContainer
