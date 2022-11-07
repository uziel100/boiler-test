/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-array-index-key */
import { Box, Button, Chip, IconButton, Stack, Tooltip, useMediaQuery } from '@mui/material'
import {
  BannerQuoteWithoutPaying,
  ButtonFilterProduct,
  CardProductNomal,
  ContainerApp,
  SkeletonCategoryProductHistory
} from 'components/common'
import { BpButton, BpTypography } from 'components/shared'
import ClearIcon from '@mui/icons-material/Clear'
import FilterContainer from 'features/products/components/filters/FilterContainer'
import Image from 'next/image'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import React, { useState, useEffect } from 'react'
import { useProductService } from 'features/products/hooks'
import { useShoppingCart } from 'features/cart/hooks'
import { useError } from 'hooks'
import { capitalize } from 'utils'
import { useRouter } from 'next/router'
import SkeletonProductNormal from 'components/common/feedback/SkeletonProductNormal'
import useFilterProducts from '../hooks/useFilterProducts'
import ProductsContainer from '../components/products/ProductsContainer'
import FilterMobil from '../components/filters/FilterMobil'
import FilterOrderBy from '../components/filters/FilterOrderBy'
import { parseFiltersUrlProducts } from '../utils'

const OptionsOrderBy = [
  {
    id: 0,
    value: 'none',
    text: 'Ninguno'
  },
  {
    id: 1,
    value: 'popular',
    text: 'Populares'
  },
  {
    id: 2,
    value: 'opinion',
    text: 'Opinion media de los clientes'
  },
  {
    id: 3,
    value: 'new',
    text: 'Nuevo'
  },
  {
    id: 4,
    value: 'mayor',
    text: 'Mayor precio'
  },
  {
    id: 5,
    value: 'menor',
    text: 'Menor precio'
  }
]

const ProductFilterPage = () => {
  const { findAllProducts, getProductsCategory, getCategoryHistory } = useProductService()
  const { handleStockProduct } = useShoppingCart()
  const { filters, resetFilters, changeFilters, countFilters, chipFilters, handleDeleteChipFilter } =
    useFilterProducts()
  const { showAlert, logError } = useError()
  const router = useRouter()
  const [firstMount, setFirstMount] = useState(true)
  const [secondMount, setSecondMount] = useState(true)
  const [thirthMount, setThirthMount] = useState(true)

  const [products, setProducts] = useState(null)
  const [categoryProducts, setCategoryProducts] = useState(null)

  const [entry, setEntry] = useState(null)

  const [open, setOpen] = React.useState(false)
  const isDeviceDesktop = useMediaQuery('(min-width:892px)')

  const handleClose = () => setOpen(false)

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
    if (thirthMount) {
      setThirthMount(false)
      return
    }
    getCategoryHistory(router.query?.slug, !isDeviceDesktop, { where: { slug: [router.query?.ctg || filters?.ctg] } })
      .then(data => {
        setEntry(data)
      })
      .catch(logError)
  }, [isDeviceDesktop])

  useEffect(() => {
    setEntry(null)
    setProducts(null)
    getCategoryHistory(router.query?.slug, !isDeviceDesktop, { where: { slug: [router.query?.ctg || filters?.ctg] } })
      .then(data => {
        setEntry(data)
      })
      .catch(logError)
    findAllProducts({}, { fetchPolicy: 'no-cache' })
      .then(data => {
        setTimeout(() => {
          setProducts(data.edges.map(({ node }) => ({ ...node })))
        }, 1000)
      })
      .catch(logError)
  }, [router.query?.ctg])

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

  const handleDeleteChip = key => handleDeleteChipFilter(key)

  return (
    <>
      <FilterMobil
        changeFilters={currentFilters => changeFilters({ ...currentFilters })}
        resetFilters={resetFilters}
        open={open}
        handleClose={handleClose}
        filters={filters}
      />

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
          <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
            <FilterContainer
              filters={filters}
              changeFilters={currentFilters => changeFilters({ ...currentFilters })}
              resetFilters={resetFilters}
              categories={categoryProducts}
            />
            <BannerQuoteWithoutPaying />
          </Box>
          <Box>
            {isDeviceDesktop ? (
              <Stack
                direction="row"
                justifyContent="space-between"
                mb={2}
                display={{ xs: 'none', md: 'flex' }}
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
                              onClick={() => changeFilters({ ctg: entry?.parent.slug })}
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
                              onClick={() => changeFilters({ ctg: category.slug })}
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
                <FilterOrderBy value={filters.orderBy} onChange={e => changeFilters({ orderBy: e.target.value })} />
              </Stack>
            ) : (
              <>
                <Stack direction="row" justifyContent="space-between" mb={2}>
                  {!entry && <SkeletonCategoryProductHistory />}
                  {entry && (
                    <Box width="100%">
                      <Stack direction="row" gap={0} alignItems="center" justifyContent="space-between">
                        {router.query.slug !== entry.slug && (
                          <Stack direction="row" gap={0} alignItems="center">
                            {entry?.parent && (
                              <IconButton
                                onClick={() => changeFilters({ ctg: entry?.parent.slug })}
                                sx={{ flexShrink: 0, ml: -2 }}
                              >
                                <KeyboardArrowLeftIcon />
                              </IconButton>
                            )}
                            <Tooltip title={entry.name} placement="top">
                              <Stack direction="row" alignItems="center" gap={0.5}>
                                <Image objectFit="contain" src={entry.img} width={38} height={47} />
                                <BpTypography fontWeight={600} variant="body1" color="grey.800" noWrap>
                                  {entry.name}
                                </BpTypography>
                              </Stack>
                            </Tooltip>
                          </Stack>
                        )}
                        {entry.categories?.length === 0 && (
                          <ButtonFilterProduct onClick={() => setOpen(true)} count={countFilters} />
                        )}
                      </Stack>
                      {entry.categories?.length > 0 && (
                        <Box mt={1}>
                          <BpTypography
                            fontWeight={router.query.slug === entry.slug ? 500 : 600}
                            fontVariant={router.query.slug === entry.slug ? 'primary' : 'secondary'}
                            variant="body2"
                            color="grey.700"
                            noWrap
                          >
                            {router.query.slug !== entry.slug ? 'Explora la categoría' : 'Selecciona una categoría'}
                          </BpTypography>
                          <Box mt={1} display="grid" gridTemplateColumns="1fr 50px" alignItems="center" gap={1}>
                            <Stack direction="row" alignItems="center" gap={1} overflow="scroll">
                              {entry.categories?.map(category => (
                                <Tooltip key={category.id} title={category.name} placement="top">
                                  <Button
                                    sx={{
                                      boxShadow: 0,
                                      bgcolor: 'grey.200',
                                      color: 'grey.700',
                                      borderRadius: 2,
                                      height: '100%',
                                      maxWidth: {
                                        xs: 'auto'
                                        // md: '120px'
                                      },
                                      minWidth: 'auto',
                                      gap: '4px'
                                    }}
                                    disableElevation
                                    disableFocusRipple
                                    color="inherit"
                                    variant="contained"
                                    onClick={() => changeFilters({ ctg: category.slug })}
                                  >
                                    {router.query.slug === entry.slug && (
                                      <img alt={category.name} src={category.img} width={38} height={40} />
                                    )}
                                    <BpTypography color="grey.700" fontWeight={500} variant="caption" noWrap>
                                      {category.name}
                                    </BpTypography>
                                  </Button>
                                </Tooltip>
                              ))}
                            </Stack>
                            <ButtonFilterProduct onClick={() => setOpen(true)} count={countFilters} />
                          </Box>
                        </Box>
                      )}
                    </Box>
                  )}
                </Stack>
                <Box display="grid" gridTemplateColumns="1fr" overflow="scroll">
                  <Stack width="100%" minWidth="320px" gap={1} mb={2} direction="row" justifyContent="flex-start">
                    {chipFilters.map(item => (
                      <Chip
                        key={item.key}
                        size="small"
                        sx={{
                          bgcolor: 'grey.200',
                          fontSize: '12px',
                          color: theme => theme.palette.grey[800]
                        }}
                        label={
                          item.key !== 'orderBy'
                            ? item.value
                            : OptionsOrderBy.find(itemT => itemT.value === item.value).text
                        }
                        onDelete={() => handleDeleteChip(item.key)}
                        deleteIcon={<ClearIcon sx={{ path: { color: theme => theme.palette.grey[800] } }} />}
                      />
                    ))}
                  </Stack>
                </Box>
              </>
            )}

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
                        discount={product.discountRate > 0}
                        freeShipping={product.freeShipping}
                        onAddToCart={count => handleAddToCart(product, count)}
                      />
                    ))}
                </>
              )}
            </ProductsContainer>
            <Box margin="2rem auto" width="100%" textAlign="center">
              <BpButton sx={{ borderRadius: 3 }} fullWidth={false} variant="text" color="inherit">
                <BpTypography variant="body1" color="grey.700" fontWeight={500} sx={{ textDecoration: 'underline' }}>
                  Ver más
                </BpTypography>
              </BpButton>
            </Box>
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

export default ProductFilterPage
