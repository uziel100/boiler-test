/* eslint-disable import/prefer-default-export */
import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'

export async function middleware(req) {
  const response = NextResponse.next()
  const tokenSession = await getToken({ req })

  const currentPath = req.nextUrl.pathname || ''

  if (['/login', '/register'].includes(currentPath) && tokenSession) {
    return NextResponse.redirect(new URL('/', req.url))
  }

  if (!tokenSession) {
    response.cookies.set('authToken', '')
    // Aqui iran todas las rutas publicas que se puedan acceder sin session
    // pero que cuando ya se tenga session bloquear esas paginas
    if (!['/login', '/register'].includes(currentPath)) {
      return NextResponse.redirect(new URL('/', req.url))
    }
  }

  if (tokenSession) response.cookies.set('authToken', `${tokenSession?.user?.token}`)

  return response
}

export const config = {
  matcher: ['/login', '/register', '/account/:path*']
}
