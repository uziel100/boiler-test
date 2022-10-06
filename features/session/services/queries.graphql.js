const { gql } = require('@apollo/client')

export const logout = gql`
  mutation logout {
    logout
  }
`

export const login = gql`
  mutation login($email: String!, $password: String!, $nonce: ID!) {
    login: login(email: $email, password: $password, nonce: $nonce) {
      user {
        id
        firstName
        lastName
        phone
        email
      }
    }
  }
`
