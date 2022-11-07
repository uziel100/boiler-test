import { useRouter } from 'next/router'
import { Box, ButtonBase, Card, CardContent, List, ListItem, ListItemButton, Stack } from '@mui/material'
import { BpTypography } from 'components/shared'
import { SkeletonCategoryProducts } from 'components/common'
import FilterFreeShipping from './FilterFreeShipping'
import AccordionFilters from './AccordionFilters'
import FilterPriceRange from './price/FilterPriceRange'
import FilterRating from './FilterRating'
import FilterByTags from './FilterByTags'

const FilterContainer = ({ categories, filters, changeFilters, resetFilters }) => {
  const router = useRouter()

  const handleClick = currentCategorySlug => {
    changeFilters({ ctg: currentCategorySlug })
  }

  const handleChangeFilterTags = (tagsSelected = []) => {
    changeFilters({ tags: tagsSelected.map(item => item.id) })
  }

  return (
    <Card elevation={0} sx={{ boxShadow: '0px 1px 20px rgba(0, 0, 0, 0.07)', borderRadius: 1, minWidth: '262px' }}>
      <CardContent>
        {/* encabezado */}
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
          <BpTypography fontWeight={600} variant="h6" color="grey.700">
            Filtros
          </BpTypography>
          <ButtonBase onClick={resetFilters} sx={{ padding: '0.2rem 0.5rem', borderRadius: 2 }}>
            <BpTypography fontWeight={400} variant="caption" color="grey.700" sx={{ fontSize: '12px' }}>
              Limpiar
            </BpTypography>
          </ButtonBase>
        </Stack>
        {/* filtro de envio gratis */}
        <FilterFreeShipping
          name="freeShipping"
          value={filters.freeShipping}
          onChange={({ value, name }) => changeFilters({ [name]: value })}
        />
        {/* filtros por rango de precio */}
        <AccordionFilters title="Rango de precio" defaultChecked>
          <FilterPriceRange onChange={changeFilters} valueMin={filters.priceMin} valueMax={filters.priceMax}>
            {({ priceMin, setPriceMin, priceMax, setPriceMax }) => (
              <>
                <FilterPriceRange.Input value={priceMin} onChange={e => setPriceMin(e.target.value)} />
                <span>-</span>
                <FilterPriceRange.Input value={priceMax} onChange={e => setPriceMax(e.target.value)} />
                <FilterPriceRange.Submit />
              </>
            )}
          </FilterPriceRange>
        </AccordionFilters>
        {/* filtro por estrellas */}
        <AccordionFilters title="Calificación" defaultChecked>
          <FilterRating name="filter-rating" value={filters.rating} onChange={changeFilters} />
        </AccordionFilters>
        {/* filtro por tags */}
        <Box my={2}>
          <BpTypography fontWeight={600} variant="body2" color="grey.700" sx={{ fontSize: '14px', mb: 1 }}>
            Etiquetas
          </BpTypography>
          <FilterByTags defaultValues={filters?.tags} onChange={tagsSelected => handleChangeFilterTags(tagsSelected)} />
        </Box>
        <Box>
          <BpTypography fontWeight={600} variant="body1" color="primary.main">
            Categorías
          </BpTypography>
          {!categories && <SkeletonCategoryProducts />}
          {categories &&
            categories.map(entry => (
              <List key={entry.id} disablePadding dense sx={{ mt: 1 }}>
                <ListItem
                  selected={entry.slug === router.query?.ctg}
                  sx={{
                    borderBottom: theme => `1px solid ${theme.palette.primary.main}`
                  }}
                  disableGutters
                  secondaryAction={
                    <ButtonBase onClick={() => handleClick(entry.slug)}>
                      <BpTypography fontWeight={400} variant="body2" color="grey.700">
                        Ver todo
                      </BpTypography>
                    </ButtonBase>
                  }
                >
                  <BpTypography fontWeight={600} variant="body2" color="grey.700">
                    {entry.name}
                  </BpTypography>
                </ListItem>
                {entry?.categories && (
                  <List disablePadding>
                    {entry.categories.map(category => (
                      <ListItemButton
                        key={category.id}
                        selected={category.slug === router.query?.ctg}
                        onClick={() => handleClick(category.slug)}
                        disableGutters
                        sx={{
                          '&.Mui-selected': {
                            background: 'none'
                          },
                          '&.Mui-selected > .MuiTypography-root': {
                            color: theme => theme.palette.primary.main
                          }
                        }}
                      >
                        <BpTypography fontWeight={400} variant="body2" color="grey.700">
                          {category.name}
                        </BpTypography>
                      </ListItemButton>
                    ))}
                  </List>
                )}
              </List>
            ))}
        </Box>
      </CardContent>
    </Card>
  )
}
export default FilterContainer
