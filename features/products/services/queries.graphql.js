/* eslint-disable import/prefer-default-export */
import { gql } from '@apollo/client'

export const PRODUCTS = gql`
  query products($pag: Int, $num: Int, $ord: String, $asc: Boolean, $filter: ProductFilter) {
    response: products(pag: $pag, num: $num, ord: $ord, asc: $asc, filter: $filter) {
      totalCount
      totalEdges
      hasMore
      pag
      edges {
        node {
          id
          slug
          name
          description
          details
          price
          limit
          score
          freeShipping
          images {
            id
            url
            order
          }
          categoryBase {
            id
            slug
            name
            img
          }
        }
      }
    }
  }
`
