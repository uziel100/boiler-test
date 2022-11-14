import { gql } from '@apollo/client'

export const DRAWER_CATEGORIES = gql`
  query drawerCategories($where: RootQueryToProductCategoryConnectionWhereArgs) {
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
  query categoryHistory($where: RootQueryToProductCategoryConnectionWhereArgs) {
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
            image {
              sourceUrl
            }
          }
        }
      }
    }
  }
`
