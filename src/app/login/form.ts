import * as yup from 'yup'

export const validationForm = yup.object({
  email: yup.string().required('Campo Obrigatório'),
  password: yup.string().required('Campo Obrigatório'),
})

export const initialValues = {
  email: '',
  password: '',
}
