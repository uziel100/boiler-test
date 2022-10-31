import { gql } from '@apollo/client'

// eslint-disable-next-line import/prefer-default-export
export const categoriesDrawer = gql`
  # query viewer {
  #   response: viewer {
  #     avatar {
  #       default
  #       height
  #     }
  #     email
  #   }
  # }
  query categories {
    response: categories {
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
      }
    }
  }
`
