const { gql } = require('@apollo/client')

// eslint-disable-next-line import/prefer-default-export
export const categoriesDrawer = gql`
  query categories {
    response: categories {
      id
      slug
      name
      order
      img
      order
      categories {
        id
        slug
        name
        img
        order
        categories {
          id
          slug
          name
          img
          order
          categories {
            id
            slug
            name
            img
            order
          }
          categories {
            id
            slug
            name
            img
            order
          }
          categories {
            id
            slug
            name
            img
            order
          }
          categories {
            id
            slug
            name
            img
            order
          }
        }
      }
    }
  }
`
