import { APP_ROUTES_CONSTANTS } from '@/utils/constants/routing'

export const checkIsPublicRoute = (pathname: string): boolean => {
  const publicRoutes = Object.values(APP_ROUTES_CONSTANTS.public)

  return publicRoutes.includes(pathname)
}
