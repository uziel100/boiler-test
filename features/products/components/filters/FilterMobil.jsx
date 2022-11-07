/* eslint-disable react/no-unknown-property */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react'
import {
  AppBar,
  Box,
  ButtonBase,
  CardContent,
  Dialog,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Slide,
  Stack,
  Toolbar
} from '@mui/material'
import TaskAltIcon from '@mui/icons-material/TaskAlt'
import ArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import { BpButton, BpSliderRange, BpTypography } from 'components/shared'
import FilterFreeShipping from './FilterFreeShipping'
import FilterPriceRange from './price/FilterPriceRange'
import FilterRating from './FilterRating'
import FilterByTags from './FilterByTags'

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />)

const OptionsOrderBy = [
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

const FilterMobil = ({ open, handleClose, changeFilters, filters: customFilter, resetFilters }) => {
  const [filters, setFilters] = useState(customFilter)

  const [value, setValue] = React.useState([0, 50])

  const handleChange = (name, newValue) => {
    setFilters(prev => ({ ...prev, [name]: newValue }))
  }

  const handleResetFilters = () => {
    resetFilters()
    handleClose()
  }

  const applyFilters = e => {
    e.preventDefault()
    changeFilters({ ...filters })

    handleClose()
  }

  const handleChangeFilterTags = (tagsSelected = []) => {
    handleChange(
      'tags',
      tagsSelected.map(item => item.id)
    )
  }

  useEffect(() => {
    setFilters({ ...customFilter })
    setValue([customFilter?.priceMin, customFilter?.priceMax])
  }, [customFilter])

  return (
    <Dialog fullScreen open={open} TransitionComponent={Transition}>
      <AppBar elevation={0} color="default" sx={{ position: 'fixed' }}>
        <Toolbar variant="dense">
          <ArrowLeftIcon sx={{ ml: -1 }} onClick={handleClose} />
          <BpTypography
            sx={{ flexBasis: '90%' }}
            textAlign="center"
            fontWeight={500}
            variant="body1"
            color="grey.800"
            component="p"
          >
            Filtrar y ordenar
          </BpTypography>
        </Toolbar>
      </AppBar>
      <Box component="form" onSubmit={applyFilters}>
        <CardContent
          sx={{ mt: 5, display: 'flex', flexDirection: 'column', gap: '1.5rem', overflowY: 'scroll', pb: 16 }}
        >
          <Box>
            <BpTypography textAlign="left" fontWeight={500} variant="body1" color="grey.800" component="p">
              Ordenar por
            </BpTypography>
            <FormControl sx={{ mt: 1 }}>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={filters.orderBy}
                onChange={e => handleChange('orderBy', e.target.value)}
              >
                {OptionsOrderBy.map(item => (
                  <FormControlLabel
                    sx={{
                      '& > span.MuiTypography-root': {
                        fontSize: 14,
                        color: theme => theme.palette.grey[700]
                      },
                      '& > span.MuiRadio-root': {
                        color: theme => theme.palette.grey[500]
                      },
                      '& > span.MuiRadio-root.Mui-checked': {
                        color: theme => theme.palette.primary.main
                      },
                      height: 35
                    }}
                    key={item.id}
                    value={item.value}
                    control={<Radio checkedIcon={<TaskAltIcon />} />}
                    label={item.text}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Box>
          <FilterFreeShipping
            name="freeShipping"
            value={filters.freeShipping}
            onChange={({ name, value: val }) => handleChange(name, val)}
          />
          <Box>
            <BpTypography textAlign="left" fontWeight={500} variant="body1" color="grey.800" component="p">
              Rango de precio
            </BpTypography>
            <BpSliderRange
              value={value}
              setValue={setValue}
              onChange={({ min, max }) => {
                handleChange('priceMin', min)
                handleChange('priceMax', max)
              }}
            />
            <FilterPriceRange component="div">
              <Box width="100%">
                <BpTypography sx={{ mb: 1 }} color="grey.700" fontWeight={500} variant="body2">
                  Precio mín.
                </BpTypography>
                <FilterPriceRange.Input
                  value={value[0]}
                  onChange={e => {
                    setValue([parseInt(e.target.value, 10), value[1]])
                  }}
                  min={0}
                  max={value[1] - 20}
                  sx={{ width: '100%' }}
                />
              </Box>
              <span style={{ display: 'inline', marginTop: 26 }}>-</span>
              <Box width="100%">
                <BpTypography sx={{ mb: 1 }} color="grey.700" fontWeight={500} variant="body2">
                  Precio máx.
                </BpTypography>
                <FilterPriceRange.Input
                  value={value[1]}
                  onChange={e => {
                    setValue([value[0], parseInt(e.target.value, 10)])
                  }}
                  min={value[0] + 20}
                  max={300}
                  sx={{ width: '100%' }}
                />
              </Box>
            </FilterPriceRange>
          </Box>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <BpTypography textAlign="left" fontWeight={500} variant="body1" color="grey.800" component="p">
              Calificación
            </BpTypography>
            <FilterRating
              name="rating"
              value={filters.rating}
              onChange={({ rating }) => handleChange('rating', rating)}
            />
          </Stack>
          <Box>
            <BpTypography
              sx={{ mb: 1 }}
              textAlign="left"
              fontWeight={500}
              variant="body1"
              color="grey.800"
              component="p"
            >
              Etiquetas
            </BpTypography>
            <FilterByTags
              size="medium"
              defaultValues={filters?.tags}
              onChange={tagsSelected => handleChangeFilterTags(tagsSelected)}
            />
          </Box>
          {/* <pre>{JSON.stringify(filters, null, 3)}</pre> */}
        </CardContent>
        <AppBar elevation={4} color="default" position="fixed" sx={{ top: 'auto', bottom: 0 }}>
          <Toolbar variant="regular" sx={{ gap: 2, justifyContent: 'space-between' }}>
            <ButtonBase onClick={handleResetFilters}>
              <BpTypography
                sx={{ display: 'block', minWidth: '100px' }}
                textAlign="left"
                fontWeight={500}
                variant="body2"
                color="grey.700"
                component="p"
              >
                Quitar filtros
              </BpTypography>
            </ButtonBase>
            <BpButton
              type="submit"
              onClick={applyFilters}
              sx={{ maxWidth: '240px' }}
              variant="contained"
              color="primary"
            >
              Mostrar resultados
            </BpButton>
          </Toolbar>
        </AppBar>
      </Box>
    </Dialog>
  )
}
export default FilterMobil
