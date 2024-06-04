'use client'

import React, { useState } from 'react'
import SignUp from './signup'
import { initialValues, validationForm } from './form'

import { Formik } from 'formik'
import request from '@/service/request'
import { APP_ROUTES_CONSTANTS } from '@/utils/constants/routing'
import { useRouter } from 'next/navigation'

const SignUpContainer: React.FC = () => {
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  const submitForm = async (values: UserType.SingUpPayload) => {
    try {
      setLoading(true)

      const response = await request.post('/users/create', values)

      if (response) {
        router.push(APP_ROUTES_CONSTANTS.public.login)
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      alert(error.response.data.message)
    } finally {
      setLoading(false)
    }
  }
  return (
    <Formik
      validationSchema={validationForm}
      initialValues={initialValues}
      onSubmit={submitForm}
    >
      <SignUp loading={loading} />
    </Formik>
  )
}

export default SignUpContainer
