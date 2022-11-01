import { InputAdornment, InputBase } from '@mui/material'

const stylesBase = {
  border: '1px solid #D4D3D4',
  padding: '4px 8px',
  borderRadius: '4px',
  width: '90px'
}

const InputPrice = ({ value, onChange, sx = {}, min = 0, max = 300 }) => (
  <InputBase
    type="number"
    sx={{ ...stylesBase, ...sx }}
    required
    startAdornment={<InputAdornment position="start">$</InputAdornment>}
    inputProps={{ min, max }}
    value={value}
    onChange={onChange}
  />
)

export default InputPrice
