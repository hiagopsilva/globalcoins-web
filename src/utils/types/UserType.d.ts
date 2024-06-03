declare namespace UserType {
  export type loginPayload = {
    email: string
    password: string
  }

  type SingUpPayload = {
    name: string
    lastName: string
    email: string
    password: string
    confirmPassword: string
  }

  type DataStorage = {
    id: string
    name: string
    email: string
  }
}
