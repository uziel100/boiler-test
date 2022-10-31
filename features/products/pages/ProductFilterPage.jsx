/* eslint-disable react/no-array-index-key */
import { Box, Button, FormControl, IconButton, MenuItem, Select, Stack, Tooltip } from '@mui/material'
import { CardProductNomal, ContainerApp } from 'components/common'
import { BpButton, BpTypography } from 'components/shared'
import FilterContainer from 'features/products/components/filters/FilterContainer'
import Image from 'next/image'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import React, { useState, useEffect } from 'react'
import { useProductService } from 'features/products/hooks'
import { useShoppingCart } from 'features/cart/hooks'
import { useError } from 'hooks'
import { useCategoryService } from 'features/common/hooks'
import { useRouter } from 'next/router'
import SkeletonProductNormal from 'components/common/feedback/SkeletonProductNormal'
import useFilterProducts from '../hooks/useFilterProducts'
import ProductsContainer from '../components/products/ProductsContainer'
import ProductsPagination from '../components/products/ProductsPagination'
import FilterMobil from '../components/filters/FilterMobil'
import FilterOrderBy from '../components/filters/FilterOrderBy'

const ProductFilterPage = () => {
  const { findAllProducts } = useProductService()
  const { handleStockProduct } = useShoppingCart()
  const { getCategoriesDrawer } = useCategoryService()
  const { filters, setFilters, resetFilters } = useFilterProducts()
  const { showAlert } = useError()
  const router = useRouter()
  const [firstMount, setFirstMount] = useState(true)

  const [products, setProducts] = useState(null)
  const [categoryProducts, setCategoryProducts] = useState(null)

  const [entry, setEntry] = useState(null)

  useEffect(() => {
    findAllProducts({}, { fetchPolicy: 'no-cache' })
      .then(data => {
        setTimeout(() => {
          setProducts(data.edges.map(({ node }) => ({ ...node })))
        }, 4000)
      })
      .catch(console.log)
  }, [])

  useEffect(() => {
    getCategoriesDrawer().then(data => {
      setCategoryProducts(data[0].categories)
    })
  }, [])

  const handleAddToCart = (product, count) => {
    handleStockProduct(product, count)
    showAlert(`Producto añadido a tu cesta`, 'success')
  }

  useEffect(() => {
    if (firstMount) {
      setFirstMount(false)
      return
    }
    // console.log('🚀 ~ file: ProductFilterPage.jsx ~ line 49 ~ ProductFilterPage ~ filters', filters)

    const query = []
    query.push(`type=${'products'}`)
    // query.push(`pag=${0}`)
    // query.push(`ord=${'hola'}`)
    // query.push(`num=${12}`)
    // query.push(`asc=${true}`)
    query.push(`rating=${filters.rating}`)
    query.push(`priceMin=${filters.priceMin}`)
    query.push(`priceMax=${filters.priceMax}`)
    query.push(`freeShipping=${filters.freeShipping}`)
    query.push(`orderBy=${filters.orderBy}`)

    const customUrl = `${router.pathname}?${query.join('&')}`

    router.push(
      {
        pathname: router.pathname,
        query: {
          rating: filters.rating,
          freeShipping: filters.freeShipping,
          priceMin: filters.priceMin,
          princeMax: filters.priceMax
        }
      },
      customUrl,
      {
        shallow: true
      }
    )
  }, [filters])

  const [open, setOpen] = React.useState(false)

  const handleClose = () => setOpen(false)

  return (
    <>
      <FilterMobil open={open} handleClose={handleClose} />
      <ContainerApp sx={{ mt: 4, mb: 20 }}>
        <Box
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
          <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
            <FilterContainer
              filters={filters}
              changeFilters={currentFilters => setFilters(data => ({ ...data, ...currentFilters }))}
              resetFilters={resetFilters}
              categories={categoryProducts}
              setEntry={setEntry}
            />
          </Box>
          <Box>
            <Stack
              direction="row"
              justifyContent="space-between"
              mb={2}
              sx={{ boxShadow: '0px 1px 20px rgba(0, 0, 0, 0.07)', borderRadius: '8px', py: 1, px: 2 }}
            >
              <Stack direction="row" justifyContent="space-between" gap={1.5}>
                <Stack
                  direction="row"
                  gap={1}
                  alignItems="center"
                  sx={{
                    maxWidth: entry?.level > 1 && entry?.categories?.length > 0 ? '200px' : 'auto',
                    overflow: 'hidden',
                    pr: 1
                  }}
                >
                  {entry && (
                    <>
                      {entry?.level > 1 && (
                        <IconButton onClick={() => setEntry({ ...entry.parent })} sx={{ flexShrink: 0 }}>
                          <KeyboardArrowLeftIcon />
                        </IconButton>
                      )}
                      <Tooltip title={entry.name} placement="top">
                        <Stack direction="row" alignItems="center" gap={1.5}>
                          <Image
                            objectFit="contain"
                            src="/images/category/category-comida.svg"
                            width={35}
                            height={47}
                          />
                          <BpTypography fontWeight={600} variant="body2" noWrap>
                            {entry.name}
                          </BpTypography>
                        </Stack>
                      </Tooltip>
                    </>
                  )}
                </Stack>
                {entry && entry.level > 1 && (
                  <Stack
                    maxWidth="320px"
                    overflow="scroll"
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    gap={1}
                  >
                    {entry.categories?.map(category => (
                      <Tooltip key={category.id} title={category.name} placement="top">
                        <Button
                          sx={{
                            boxShadow: 0,
                            bgcolor: 'grey.200',
                            color: 'grey.700',
                            borderRadius: 2,
                            maxWidth: '120px'
                          }}
                          disableElevation
                          disableFocusRipple
                          color="inherit"
                          variant="contained"
                          onClick={() => setEntry({ ...category, parent: entry, level: entry.level + 1 })}
                        >
                          <BpTypography fontWeight={500} variant="caption" noWrap>
                            {category.name}
                          </BpTypography>
                        </Button>
                      </Tooltip>
                    ))}
                  </Stack>
                )}
              </Stack>
              <BpButton fullWidth={false} variant="text" onClick={() => setOpen(true)}>
                open
              </BpButton>
              <FilterOrderBy value="none" />
            </Stack>
            <ProductsContainer products={products}>
              {({ loading, items }) => (
                <>
                  {loading && new Array(12).fill(0).map((_, idx) => <SkeletonProductNormal key={idx} />)}
                  {!loading &&
                    items.length > 0 &&
                    products.map(product => (
                      <CardProductNomal
                        key={product.id}
                        img={product.images.length > 1 ? product.images[0].url : product.images[0].url}
                        price={product.price}
                        title={product.name}
                        rating={product.score}
                        freeShipping={product.freeShipping}
                        onAddToCart={count => handleAddToCart(product, count)}
                      />
                    ))}
                </>
              )}
            </ProductsContainer>
            <ProductsPagination count={3} />
          </Box>
        </Box>
      </ContainerApp>
    </>
  )
}

export default ProductFilterPage
