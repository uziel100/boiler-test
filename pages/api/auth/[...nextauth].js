/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import Credentials from 'next-auth/providers/credentials'
import { initializeApollo } from 'utils'
import { categoriesDrawer } from 'features/common/services'
import { loginService } from 'features/session/services'
import { loginNormalAdapter, mapperUserAdaper } from 'features/session/adapters'

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    Credentials({
      name: 'Custom login',
      credentials: {
        email: {
          label: 'Correo',
          type: 'email',
          placeholder: 'Tu corre@gmail.com'
        },
        password: {
          label: 'Contraseña',
          type: 'password',
          placeholder: 'Contraseña'
        }
      },
      async authorize(credentials, req) {
        const apolloClient = initializeApollo()
        const payload = loginNormalAdapter({ email: credentials.email, password: credentials.password })
        const response = await loginService(apolloClient, payload)
        const sessionInfo = mapperUserAdaper(response.login)

        return sessionInfo
      }
    })
  ],

  pages: {
    signIn: 'https://sandbox.blackpixel.mx/login',
    newUser: 'https://sandbox.blackpixel.mx/register'
  },

  session: {
    maxAge: 2592000,
    strategy: 'jwt',
    updateAge: 86400
  },

  callbacks: {
    async session({ session, user, token }) {
      session.accessToken = token.accessToken
      session.user = token.user
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (account) {
        token.accessToken = account.access_token

        switch (account.type) {
          case 'oauth':
            // TODO: request api login
            console.log({ token, user, account, profile })
            // throw new Error('invid user passowd')
            token.user = {
              name: user.name,
              email: user.email,
              role: 'admin'
            }
            break
          case 'credentials':
            token.user = user
            break
          default:
            break
        }
      }
      return token
    }
  }
}
export default NextAuth(authOptions)
