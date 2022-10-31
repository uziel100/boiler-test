import { Box, ButtonBase, Card, CardContent, List, ListItem, ListItemButton, Stack } from '@mui/material'
import { BpTypography } from 'components/shared'
import FilterFreeShipping from './FilterFreeShipping'
import AccordionFilters from './AccordionFilters'
import FilterPriceRange from './FilterPriceRange'
import FilterRating from './FilterRating'

const FilterContainer = ({ categories, filters, changeFilters, resetFilters, setEntry }) => {
 
  const handleClick = ({ currentCategory, parent }, level = 1) => {
    setEntry({ ...currentCategory, parent, level })
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
          <FilterPriceRange onChange={changeFilters} valueMin={filters.priceMin} valueMax={filters.priceMax} />
        </AccordionFilters>
        {/* filtro por estrellas */}
        <AccordionFilters title="Calificación" defaultChecked>
          <FilterRating name="filter-rating" value={filters.rating} onChange={changeFilters} />
        </AccordionFilters>
        <Box>
          <BpTypography fontWeight={600} variant="body1" color="primary.main">
            Categorías
          </BpTypography>
          {categories &&
            categories.map(entry => (
              <List key={entry.id} disablePadding dense sx={{ mt: 1 }}>
                <ListItem
                  sx={{
                    borderBottom: theme => `1px solid ${theme.palette.primary.main}`
                  }}
                  disableGutters
                  secondaryAction={
                    <ButtonBase onClick={() => handleClick({ currentCategory: entry, parent: null }, 1)}>
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
                        onClick={() => handleClick({ currentCategory: category, parent: entry }, 2)}
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
