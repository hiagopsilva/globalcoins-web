import * as yup from 'yup'

export const validationForm = yup.object({
  name: yup.string().required('Campo Obrigatório'),
  lastName: yup.string().required('Campo Obrigatório'),
  email: yup.string().required('Campo Obrigatório'),
  password: yup.string().required('Campo Obrigatório'),
  confirmPassword: yup.string().required('Campo Obrigatório'),
})

export const initialValues = {
  name: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
}
