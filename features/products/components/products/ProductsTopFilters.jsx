import { useEffect, useState } from 'react'
import { useError } from 'hooks'
import { Box, Button, Chip, IconButton, Stack, Tooltip } from '@mui/material'
import { ButtonFilterProduct, SkeletonCategoryProductHistory } from 'components/common'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import ClearIcon from '@mui/icons-material/Clear'
import { BpTypography } from 'components/shared'
import { DEFAULT_OPTIONS_ORDER_BY } from 'features/products/consts'
import Image from 'next/image'
import { useRouter } from 'next/router'
import useFilterProducts from 'features/products/hooks/useFilterProducts'
import { useProductService } from 'features/products/hooks'
import FilterOrderBy from '../filters/FilterOrderBy'
import FilterMobil from '../filters/FilterMobil'

const ProductsTopFilters = ({ isDeviceSM }) => {
  const router = useRouter()
  const { getCategoryHistory } = useProductService()
  const { filters, changeFilters, handleDeleteChipFilter, countFilters, chipFilters, resetFilters } =
    useFilterProducts()
  const { logError } = useError()

  const [entry, setEntry] = useState(null)
  const [firstMount, setFirstMount] = useState(true)
  const [open, setOpen] = useState(false)

  const handleDeleteChip = key => handleDeleteChipFilter(key)
  const handleClose = () => setOpen(false)
  const openFilter = () => setOpen(true)

  /**
   * Efecto para solicitar las categorias en formato:
   * 1. Agrega todas las categorias sin importar el [slug]
   * 2. Si la categorias padre hace match con el [slug] no devuelve las
   * subcategorias de la categorias seleccionada
   */
  useEffect(() => {
    if (firstMount) {
      setFirstMount(false)
      return
    }
    getCategoryHistory(router.query?.slug, isDeviceSM, { where: { slug: [router.query?.ctg || filters?.ctg] } })
      .then(data => {
        setEntry(data)
      })
      .catch(logError)
  }, [isDeviceSM])

  useEffect(() => {
    setEntry(null)
    getCategoryHistory(router.query?.slug, isDeviceSM, { where: { slug: [router.query?.ctg || filters?.ctg] } })
      .then(data => {
        setEntry(data)
      })
      .catch(logError)
    // evitar cambiar la categoria cuando son los mismo y no haga
    // doble peticon de los productos
    if (router.query?.ctg === filters?.ctg) return
    changeFilters({ ctg: router.query?.ctg })
  }, [router.query?.ctg])

  if (!isDeviceSM) {
    return (
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
                    <IconButton onClick={() => changeFilters({ ctg: entry?.parent.slug })} sx={{ flexShrink: 0 }}>
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
    )
  }

  return (
    <>
      {isDeviceSM && (
        <FilterMobil
          changeFilters={currentFilters => changeFilters({ ...currentFilters })}
          resetFilters={resetFilters}
          open={open}
          handleClose={handleClose}
          filters={filters}
        />
      )}
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
              {entry.categories?.length === 0 && <ButtonFilterProduct onClick={openFilter} count={countFilters} />}
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
                            <Image alt={category.name} src={category.img} width={38} height={40} />
                          )}
                          <BpTypography color="grey.700" fontWeight={500} variant="caption" noWrap>
                            {category.name}
                          </BpTypography>
                        </Button>
                      </Tooltip>
                    ))}
                  </Stack>
                  <ButtonFilterProduct onClick={openFilter} count={countFilters} />
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
                  : DEFAULT_OPTIONS_ORDER_BY.find(itemT => itemT.value === item.value).text
              }
              onDelete={() => handleDeleteChip(item.key)}
              deleteIcon={<ClearIcon sx={{ path: { color: theme => theme.palette.grey[800] } }} />}
            />
          ))}
        </Stack>
      </Box>
    </>
  )
}
export default ProductsTopFilters
