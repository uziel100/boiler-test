/* eslint-disable import/prefer-default-export */
import { gql } from '@apollo/client'

export const PRODUCTS = gql`
  query products($first: Int, $after: String, $where: RootQueryToProductConnectionWhereArgs) {
    response: products(first: $first, after: $after, where: $where) {
      pageInfo {
        startCursor
        hasNextPage
        hasPreviousPage
        endCursor
      }
      edges {
        cursor
        node {
          averageRating
          featured
          id
          databaseId
          name
          onSale
          shortDescription
          status
          type
          image {
            sourceUrl
            altText
          }
          ... on SimpleProduct {
            onSale
            rawPrice: price(format: RAW)
            price
            rawRegularPrice: price(format: RAW)
            regularPrice
            rawSalePrice: price(format: RAW)
            salePrice
          }
          ... on GroupProduct {
            onSale
            price
          }
          ... on VariableProduct {
            onSale
            rawPrice: price(format: RAW)
            price
            rawRegularPrice: price(format: RAW)
            regularPrice
            rawSalePrice: price(format: RAW)
            salePrice
          }
        }
      }
    }
  }
`

export const PRODUCTS_CATEGORY = gql`
  query productCategories($where: RootQueryToProductCategoryConnectionWhereArgs) {
    response: productCategories(where: $where) {
      nodes {
        count
        description
        id
        isRestricted
        name
        slug
        menuOrder
        menuOrder
        image {
          sourceUrl
        }
        parent {
          node {
            id
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
                count
              }
            }
          }
        }
      }
    }
  }
`

export const TAGS_PRODUCTS = gql`
  query tags($where: RootQueryToTagConnectionWhereArgs) {
    response: tags(where: $where) {
      nodes {
        id
        description
        name
      }
    }
  }
`
