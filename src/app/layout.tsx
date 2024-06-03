'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import { usePathname } from 'next/navigation'
import PrivateRoute from '@/routes/PrivateRoutes'
import { checkIsPublicRoute } from '@/routes/routing'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()

  const isPublicPage = checkIsPublicRoute(pathname)

  console.log({ isPublicPage })

  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {isPublicPage ? (
          <>{children}</>
        ) : (
          <PrivateRoute>{children}</PrivateRoute>
        )}
      </body>
    </html>
  )
}
