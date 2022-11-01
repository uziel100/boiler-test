/* eslint-disable react/no-array-index-key */
import { Backdrop, Box, Button, FormControl, IconButton, MenuItem, Select, Stack, Tooltip } from '@mui/material'
import { CardProductNomal, ContainerApp, SkeletonCategoryProductHistory } from 'components/common'
import { BpButton, BpTypography } from 'components/shared'
import FilterContainer from 'features/products/components/filters/FilterContainer'
import Image from 'next/image'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import React, { useState, useEffect, useRef } from 'react'
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
  const { findAllProducts, getProductsCategory, getCategoryHistory } = useProductService()
  const { handleStockProduct } = useShoppingCart()
  const { filters, setFilters, resetFilters } = useFilterProducts()
  const { showAlert, logError } = useError()
  const router = useRouter()
  const [firstMount, setFirstMount] = useState(true)
  const [secondMount, setSecondMount] = useState(true)

  const [products, setProducts] = useState(null)
  const [categoryProducts, setCategoryProducts] = useState(null)

  const [entry, setEntry] = useState(null)

  // useEffect(() => {
  //   findAllProducts({}, { fetchPolicy: 'no-cache' })
  //     .then(data => {
  //       // console.log(data)
  //       setTimeout(() => {
  //         setProducts(data.edges.map(({ node }) => ({ ...node })))
  //       }, 3000)
  //     })
  //     .catch(logError)
  //   // setProducts([])
  // }, [])

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

  const handleAddToCart = (product, count) => {
    handleStockProduct(product, count)
    showAlert(`Producto añadido a tu cesta`, 'success')
  }

  useEffect(() => {
    if (firstMount) {
      setFirstMount(false)
      return
    }

    if (secondMount) {
      setSecondMount(false)
      return
    }

    // console.log('change filtes..............')
    // console.log('🚀 ~ file: ProductFilterPage.jsx ~ line 49 ~ ProductFilterPage ~ filters', filters)

    // const query = []
    // query.push(`type=${'products'}`)
    // query.push(`pag=${0}`)
    // query.push(`ord=${'hola'}`)
    // query.push(`num=${12}`)
    // query.push(`asc=${true}`)
    // query.push(`rating=${filters.rating}`)
    // query.push(`priceMin=${filters.priceMin}`)
    // query.push(`priceMax=${filters.priceMax}`)
    // query.push(`freeShipping=${filters.freeShipping}`)
    // query.push(`orderBy=${filters.orderBy}`)
    // console.log('::::::::::::::::::0', filters)
    // const customUrl = `${router.asPath.split('?')[0]}?${query.join('&')}`
    const { slug = null, ...otherQuery } = router.query
    router.push(
      {
        pathname: router.asPath.split('?')[0],
        query: {
          ...otherQuery,
          rating: filters.rating,
          freeShipping: filters.freeShipping,
          priceMin: filters.priceMin,
          priceMax: filters.priceMax,
          ctg: filters?.category || router.query?.ctg,
          orderBy: filters?.orderBy || 'none'
        }
      },
      undefined,
      {
        shallow: true
      }
    )
    setProducts(null)
    findAllProducts({}, { fetchPolicy: 'no-cache' })
      .then(data => {
        setTimeout(() => {
          setProducts(data.edges.map(({ node }) => ({ ...node })))
        }, 1000)
      })
      .catch(logError)
  }, [filters])

  useEffect(() => {
    setEntry(null)
    setProducts(null)
    getCategoryHistory(router.query?.slug, { where: { slug: [router.query?.ctg] } })
      .then(data => {
        setEntry(data)
      })
      .catch(logError)
    findAllProducts({}, { fetchPolicy: 'no-cache' })
      .then(data => {
        // console.log(data)
        setTimeout(() => {
          setProducts(data.edges.map(({ node }) => ({ ...node })))
        }, 1000)
      })
      .catch(logError)
  }, [router.query?.ctg])

  const [open, setOpen] = React.useState(false)

  const handleClose = () => setOpen(false)

  return (
    <>
      <FilterMobil
        changeFilters={currentFilters => setFilters(data => ({ ...data, ...currentFilters }))}
        open={open}
        handleClose={handleClose}
        filters={filters}
      />

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
              {!entry && <SkeletonCategoryProductHistory />}
              {entry && (
                <Stack direction="row" justifyContent="space-between" gap={1.5}>
                  <Stack
                    direction="row"
                    gap={1}
                    alignItems="center"
                    sx={{
                      maxWidth: entry?.parent && entry?.categories?.length > 0 ? '200px' : 'auto',
                      overflow: 'hidden',
                      pr: 1
                    }}
                  >
                    {entry && (
                      <>
                        {entry?.parent && (
                          <IconButton
                            onClick={() => setFilters(data => ({ ...data, category: entry?.parent.slug }))}
                            sx={{ flexShrink: 0 }}
                          >
                            <KeyboardArrowLeftIcon />
                          </IconButton>
                        )}
                        <Tooltip title={entry.name} placement="top">
                          <Stack direction="row" alignItems="center" gap={0.5}>
                            <Image objectFit="contain" src={entry.img} width={38} height={47} />
                            <BpTypography fontWeight={600} variant="body2" noWrap>
                              {entry.name}
                            </BpTypography>
                          </Stack>
                        </Tooltip>
                      </>
                    )}
                  </Stack>
                  {entry && (
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
                            onClick={() => setFilters(data => ({ ...data, category: category.slug }))}
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
              )}
              {/* <BpButton fullWidth={false} variant="text" onClick={() => setOpen(true)}>
                open
              </BpButton> */}
              <FilterOrderBy
                value={filters.orderBy}
                onChange={e => setFilters(prev => ({ ...prev, orderBy: e.target.value }))}
              />
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
