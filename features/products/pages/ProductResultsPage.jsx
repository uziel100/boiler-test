/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-array-index-key */
import { Box, useMediaQuery, useTheme } from '@mui/material'
import { BannerQuoteWithoutPaying, CardProductNomal, ContainerApp, LoadingOverlay } from 'components/common'
import { BpButton, BpTypography } from 'components/shared'
import FilterContainer from 'features/products/components/filters/FilterContainer'
import React, { useState, useEffect } from 'react'
import { useProductService } from 'features/products/hooks'
import { useShoppingCart } from 'features/cart/hooks'
import { useError } from 'hooks'
import { capitalize } from 'utils'
import { useRouter } from 'next/router'
import SkeletonProductNormal from 'components/common/feedback/SkeletonProductNormal'
import useFilterProducts from '../hooks/useFilterProducts'
import ProductsContainer from '../components/products/ProductsContainer'
import { parseFiltersUrlProducts } from '../utils'
import useProducts from '../hooks/useProducts'
import ProductsTopFilters from '../components/products/ProductsTopFilters'

const ProductResultsPage = () => {
  const router = useRouter()
  const themeMui = useTheme()
  const { getProductsCategory } = useProductService()
  const { handleStockProduct } = useShoppingCart()
  const { filters, resetFilters, changeFilters } = useFilterProducts()
  const { getProducts, fetchMoreProducts, products, hasNextPage, loadingFechingMore } = useProducts()
  const { showAlert, logError } = useError()

  const [firstMount, setFirstMount] = useState(true)
  const [categoryProducts, setCategoryProducts] = useState(null)
  const isDeviceSM = useMediaQuery(themeMui.breakpoints.down('md'))

  const handleAddToCart = (product, count) => {
    handleStockProduct(product, count)
    showAlert(`Producto añadido a tu cesta`, 'success')
  }

  /**
   * Efecto para actualizar la url con los filtros
   * y hacer la solicitud http para obtener los
   * productos
   */
  useEffect(() => {
    if (firstMount) {
      setFirstMount(false)
      return
    }

    const customFilters = parseFiltersUrlProducts(router.query, filters, false)
    router.push(
      {
        pathname: router.asPath.split('?')[0],
        query: customFilters
      },
      undefined,
      {
        shallow: true
      }
    )
    getProducts()
  }, [filters])

  /**
   * Listar las subcategorias de la categoria base [slug]
   * para la seccion de filtros en desktop
   */
  useEffect(() => {
    setCategoryProducts(null)
    getProductsCategory({
      where: {
        slug: router.query.slug
      }
    })
      .then(resp => {
        setCategoryProducts(resp)
      })
      .catch(logError)
  }, [router.query?.slug])

  return (
    <>
      <LoadingOverlay open={loadingFechingMore} />

      <ContainerApp sx={{ mt: 4, mb: 20 }}>
        <BpTypography color="grey.800" fontWeight={600} textAlign="center" variant="h3">
          {capitalize(router.query.slug || 'Productos')}
        </BpTypography>
        <Box
          mt={5}
          display="grid"
          gap={3}
          sx={{
            gridTemplateColumns: {
              xs: '1fr',
              sm: '1fr',
              md: '280px 1fr'
            }
          }}
        >
          {!isDeviceSM && (
            <Box>
              <FilterContainer
                filters={filters}
                changeFilters={currentFilters => changeFilters({ ...currentFilters })}
                resetFilters={resetFilters}
                categories={categoryProducts}
              />
              <BannerQuoteWithoutPaying />
            </Box>
          )}
          <Box>
            <ProductsTopFilters isDeviceSM={isDeviceSM} />
            <ProductsContainer products={products}>
              {({ loading, items }) => (
                <>
                  {loading && new Array(12).fill(0).map((_, idx) => <SkeletonProductNormal key={idx} />)}
                  {!loading &&
                    items.length > 0 &&
                    products.map(product => (
                      <CardProductNomal
                        key={product.id}
                        img={product.imgUrl}
                        price={product.price}
                        title={product.name}
                        rating={product.score}
                        discount={product.discountRate > 0}
                        freeShipping={product.freeShipping}
                        onAddToCart={count => handleAddToCart(product, count)}
                      />
                    ))}
                </>
              )}
            </ProductsContainer>
            {hasNextPage && (
              <Box margin="2rem auto" width="100%" textAlign="center">
                <BpButton
                  onClick={fetchMoreProducts}
                  sx={{ borderRadius: 3 }}
                  fullWidth={false}
                  variant="text"
                  color="inherit"
                >
                  <BpTypography variant="body1" color="grey.700" fontWeight={500} sx={{ textDecoration: 'underline' }}>
                    Ver más
                  </BpTypography>
                </BpButton>
              </Box>
            )}
            <BannerQuoteWithoutPaying
              display={{
                xs: 'block',
                md: 'none'
              }}
            />
          </Box>
        </Box>
      </ContainerApp>
    </>
  )
}

export default ProductResultsPage
