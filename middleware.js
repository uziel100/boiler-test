/* eslint-disable import/prefer-default-export */
import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'

export async function middleware(req) {
  // Setting cookies on the response
  const response = NextResponse.next()
  const tokenSession = await getToken({ req })

  if (tokenSession) {
    response.cookies.set('authToken', `${tokenSession?.user?.token}`)
  } else {
    response.cookies.set('authToken', '')
  }

  return response
}
