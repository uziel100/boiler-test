import { LayoutMain } from 'components/layouts'
import { FilterProductContextProvider } from 'features/products/context/FilterProductContext'
import ProductFilterPage from 'features/products/pages/ProductFilterPage'

const CategoriesGeneralPage = ({ filterSSR }) => {
  console.log('filterSSR', filterSSR)

  return (
    <FilterProductContextProvider initial={filterSSR}>
      <ProductFilterPage />
    </FilterProductContextProvider>
  )
}

CategoriesGeneralPage.getLayout = function getLayout(page) {
  return <LayoutMain>{page}</LayoutMain>
}

export async function getServerSideProps({ query = {} }) {
  console.log('SSR', query)
  const filters = {}
  if (query?.rating) filters.rating = parseInt(query.rating, 10)
  if (query?.freeShipping === 'true') filters.freeShipping = true
  if (query?.freeShipping === 'false') filters.freeShipping = false
  if (query?.priceMin) filters.priceMin = parseInt(query.priceMin, 10)
  if (query?.priceMax) filters.priceMax = parseInt(query.priceMax, 10)
  const filterSSR = { ...query, ...filters }

  return {
    props: {
      filterSSR: Object.entries(filterSSR).length > 0 ? filterSSR : null
    } // will be passed to the page component as props
  }
}

export default CategoriesGeneralPage
