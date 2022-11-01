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

export const DRAWER_CATEGORIES = gql`
  query ($where: RootQueryToProductCategoryConnectionWhereArgs) {
    response: productCategories(where: $where) {
      nodes {
        id
        name
        slug
        # image {
        #   sourceUrl
        # }
        parent {
          node {
            name
            slug
          }
        }
        children {
          nodes {
            id
            name
            slug
            children {
              nodes {
                id
                name
                slug
                parent {
                  node {
                    id
                    name
                    slug
                  }
                }
              }
            }
            parent {
              node {
                name
                slug
              }
            }
          }
        }
      }
    }
  }
`

export const CATEGORY_HISTORY = gql`
  query ($where: RootQueryToProductCategoryConnectionWhereArgs) {
    response: productCategories(where: $where) {
      nodes {
        id
        name
        slug
        image {
          sourceUrl
        }
        parent {
          node {
            id
            slug
            name
          }
        }
        children {
          nodes {
            id
            name
            slug
          }
        }
      }
    }
  }
`
