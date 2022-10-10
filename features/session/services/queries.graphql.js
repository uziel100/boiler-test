const { gql } = require('@apollo/client')

export const logout = gql`
  mutation logout {
    logout
  }
`

export const login = gql`
  mutation login($email: String!, $password: String!) {
    login: login(email: $email, password: $password) {
      id
      token
      user {
        id
        firstName
        fullName
        email
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
