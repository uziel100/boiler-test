import { FormControl, MenuItem, Select, Stack } from '@mui/material'
import { BpTypography } from 'components/shared'

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

const FilterOrderBy = ({ value, onChange }) => (
  <Stack
    sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}
    direction="row"
    alignItems="center"
    justifyContent="space-between"
    gap={1.5}
  >
    <BpTypography fontWeight={500} variant="body1" color="grey.700">
      Ordenar por:
    </BpTypography>
    <FormControl sx={{ m: 1, minWidth: 160 }}>
      <Select
        size="small"
        value={value}
        onChange={onChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
      >
        {OptionsOrderBy.map(item => (
          <MenuItem key={item.id} value={item.value}>
            {item.text}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </Stack>
)
export default FilterOrderBy
