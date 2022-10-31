/* eslint-disable react/no-unknown-property */
/* eslint-disable react/button-has-type */
import React from 'react'
import {
  AppBar,
  Box,
  CardContent,
  Dialog,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Slide,
  Toolbar
} from '@mui/material'
import TaskAltIcon from '@mui/icons-material/TaskAlt'
import ArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import { BpButton, BpSliderRange, BpTypography } from 'components/shared'
import FilterFreeShipping from './FilterFreeShipping'

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

const FilterMobil = ({ open, handleClose }) => {
  console.log('first')

  const [value, setValue] = React.useState('female')

  const handleChange = event => {
    setValue(event.target.value)
  }

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
      <CardContent sx={{ mt: 5 }}>
        <BpTypography textAlign="left" fontWeight={500} variant="body1" color="grey.800" component="p">
          Ordenar por
        </BpTypography>
        <FormControl sx={{ mt: 1 }}>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
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
                // sx={{ height: 35 }}
                value={item.value}
                control={<Radio checkedIcon={<TaskAltIcon />} />}
                label={item.text}
              />
            ))}
          </RadioGroup>
        </FormControl>
        <FilterFreeShipping />
        <BpTypography textAlign="left" fontWeight={500} variant="body1" color="grey.800" component="p">
          Rango de precio
        </BpTypography>
        <BpSliderRange />
      </CardContent>
      <AppBar elevation={0} color="default" position="fixed" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar variant="regular" sx={{ gap: 2, justifyContent: 'space-between' }}>
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
          <BpButton sx={{ maxWidth: '240px' }} variant="contained" color="primary">
            Mostrar resultados
          </BpButton>
        </Toolbar>
      </AppBar>
    </Dialog>
  )
}
export default FilterMobil
