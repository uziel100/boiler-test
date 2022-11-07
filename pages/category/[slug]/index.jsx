import { LayoutMain } from 'components/layouts'
import { FilterProductContextProvider } from 'features/products/context/FilterProductContext'
import ProductFilterPage from 'features/products/pages/ProductFilterPage'
import { parseFiltersUrlProducts } from 'features/products/utils'
import { addApolloState, initializeApollo } from 'utils'

// eslint-disable-next-line arrow-body-style
const CategoriesRootPage = ({ filtersSSR }) => {
  // console.log({ products })
  return (
    <FilterProductContextProvider initial={filtersSSR}>
      <ProductFilterPage />
    </FilterProductContextProvider>
  )
}

CategoriesRootPage.getLayout = function getLayout(page) {
  return <LayoutMain>{page}</LayoutMain>
}

export async function getServerSideProps({ query = {} }) {
  const apolloClient = initializeApollo()

  const DEFAULT_FILTERS = {
    freeShipping: false,
    priceMin: 0,
    priceMax: 0,
    orderBy: 'none',
    ctg: query?.ctg || query.slug,
    tags: [],
    rating: 0
  }
  const filtersSSR = parseFiltersUrlProducts(query, DEFAULT_FILTERS)
  console.log(filtersSSR)
  return addApolloState(apolloClient, {
    props: {
      filtersSSR
      // products: Array.from(Array(3)).map(() => Math.random())
    }
  })
}

export default CategoriesRootPage
