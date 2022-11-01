// import { Backdrop } from '@mui/material'
import { LayoutMain } from 'components/layouts'
import { FilterProductContextProvider } from 'features/products/context/FilterProductContext'
import ProductFilterPage from 'features/products/pages/ProductFilterPage'

// eslint-disable-next-line arrow-body-style
const CategoriesRootPage = ({ filterSSR, products }) => {
  // console.log({ products })

  return (
    <FilterProductContextProvider initial={filterSSR}>
      <ProductFilterPage />
      {/* <Backdrop sx={{ zIndex: 9999, overflow: 'hidden' }} open /> */}
    </FilterProductContextProvider>
  )
}

CategoriesRootPage.getLayout = function getLayout(page) {
  return <LayoutMain>{page}</LayoutMain>
}

export async function getServerSideProps({ query = {} }) {
  const filters = {
    freeShipping: false,
    priceMin: 0,
    priceMax: 0,
    orderBy: 'none',
    rating: 0
  }
  if (query?.rating) filters.rating = parseInt(query.rating, 10)
  if (query?.freeShipping === 'true') filters.freeShipping = true
  if (query?.freeShipping === 'false') filters.freeShipping = false
  if (query?.priceMin) filters.priceMin = parseInt(query.priceMin, 10)
  if (query?.priceMax) filters.priceMax = parseInt(query.priceMax, 10)
  if (query?.orderBy) filters.orderBy = query.orderBy
  const filterSSR = { ...query, ...filters }
  console.log('🚀 ~ file: index.jsx ~ line 37 ~ getServerSideProps ~ filterSSR', filterSSR)

  return {
    props: {
      filterSSR: Object.entries(filterSSR).length > 0 ? filterSSR : null,
      products: Array.from(Array(3)).map(() => Math.random())
    } // will be passed to the page component as props
  }
}

export default CategoriesRootPage
