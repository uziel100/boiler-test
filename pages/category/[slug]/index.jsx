import { LayoutMain } from 'components/layouts'
import { DEFAULT_FILTERS_PRODUCTS } from 'features/products/consts'
import { FilterProductContextProvider } from 'features/products/context/FilterProductContext'
import ProductResultsPage from 'features/products/pages/ProductResultsPage'
import { parseFiltersUrlProducts } from 'features/products/utils'
import { addApolloState, initializeApollo } from 'utils'

const CategoriesRootPage = ({ filtersSSR }) => (
  <FilterProductContextProvider initial={filtersSSR}>
    <ProductResultsPage />
  </FilterProductContextProvider>
)

CategoriesRootPage.getLayout = function getLayout(page) {
  return <LayoutMain>{page}</LayoutMain>
}

export async function getServerSideProps({ query = {} }) {
  const apolloClient = initializeApollo()

  const DEFAULT_FILTERS = { ...DEFAULT_FILTERS_PRODUCTS, ctg: query?.ctg || query.slug }
  const filtersSSR = parseFiltersUrlProducts(query, DEFAULT_FILTERS)
  console.log('🚀 ~ file: index.jsx ~ line 23 ~ getServerSideProps ~ filtersSSR', filtersSSR)
  return addApolloState(apolloClient, {
    props: {
      filtersSSR
    }
  })
}

export default CategoriesRootPage
