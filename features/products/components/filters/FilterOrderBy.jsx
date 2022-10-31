import { FormControl, MenuItem, Select, Stack } from '@mui/material'
import { BpTypography } from 'components/shared'

const FilterOrderBy = ({ value, onChange }) => {
  console.log('hola')
  return (
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
          <MenuItem value="none">Ninguno</MenuItem>
          <MenuItem value="popular">Populares</MenuItem>
          <MenuItem value="new">Nuevos</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  )
}
export default FilterOrderBy
