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
