import { APP_ROUTES_CONSTANTS } from '@/utils/constants/routing'
import { checkUserAuthenticated } from '@/utils/helpers'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

type Props = {
  children: React.ReactNode
}

const PrivateRoute: React.FC<Props> = ({ children }) => {
  const { push } = useRouter()

  const isUserAuthenticated = checkUserAuthenticated()

  useEffect(() => {
    if (!isUserAuthenticated) {
      push(APP_ROUTES_CONSTANTS.public.login)
    }

    if (isUserAuthenticated && localStorage.getItem('DATA') === null) {
      push(APP_ROUTES_CONSTANTS.public.login)
    }
  }, [isUserAuthenticated, push])

  return <>{isUserAuthenticated ? children : null}</>
}

export default PrivateRoute
