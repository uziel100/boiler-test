import { Box, FormControl, MenuItem, Select } from '@mui/material'
import { BpTextField, BpTypography } from 'components/shared'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { DEFAULT_OPTIONS_ORDER_BY } from 'features/products/consts'

const FormHaveAPlace = ({ hiddenTitle = false }) => (
  <>
    {!hiddenTitle && (
      <BpTypography textAlign="center" fontWeight={600} variant="body1" color="grey.800" component="p">
        Buscar un lugar en UEY
      </BpTypography>
    )}
    <Box mt={2}>
      <BpTypography fontWeight={500} variant="body2" color="grey.700" component="p">
        Elige de tus direcciones guardadas
      </BpTypography>
      {/* <InputRadio /> */}
      <FormControl sx={{ my: 1 }} fullWidth>
        <Select
          size="medium"
          // value={value}
          // onChange={onChange}
          IconComponent={KeyboardArrowDownIcon}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          {DEFAULT_OPTIONS_ORDER_BY.map(item => (
            <MenuItem key={item.id} value={item.value}>
              {item.text}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <BpTypography sx={{ mt: 3 }} fontWeight={500} variant="body2" color="grey.700" component="p">
        Añadir una nueva dirección
      </BpTypography>
      <BpTypography sx={{ mb: 1 }} fontWeight={400} variant="body2" color="grey.600" component="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.
      </BpTypography>
      <BpTextField placeholder="Escribe aquí..." />
    </Box>
  </>
)
export default FormHaveAPlace
