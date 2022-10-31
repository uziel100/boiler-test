import { gql } from '@apollo/client'

export const logout = gql`
  mutation logout {
    logout
  }
`

export const login = gql`
  mutation login($input: LoginInput!) {
    login: login(input: $input) {
      # id
      authToken
      user {
        id
        email
        description
        firstName
        lastName
      }
    }
  }
`

export const forgetPassword = gql`
  mutation forgetPassword($email: String!) {
    response: forgetPassword(email: $email)
  }
`

export const recoveryCode = gql`
  query recoveryCode($code: String!) {
    response: recoveryCode(code: $code) {
      id
      code
      redeemAt
      user {
        id
        email
      }
    }
  }
`

export const changePassword = gql`
  mutation changePassword($input: ChangePassword!) {
    response: changePassword(input: $input)
  }
`

export const registerUser = gql`
  mutation registerUser($input: RegisterUser!) {
    response: registerUser(input: $input) {
      id
      token
      user {
        id
        email
        firstName
        fullName
        birthday
      }
    }
  }
`
