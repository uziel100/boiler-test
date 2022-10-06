const { gql } = require('@apollo/client')

export const nonce = gql`
  mutation nonce {
    nonce {
      id
      data
    }
  }
`

export const getAgent = gql`
  query getAgent {
    agent {
      id
      session {
        id
        user {
          id
          email
        }
      }
    }
  }
`
