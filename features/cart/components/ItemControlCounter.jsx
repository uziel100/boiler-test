import { IconButton, Stack } from '@mui/material'
import { BpTypography } from 'components/shared'
import IconAdd from '@mui/icons-material/ControlPointRounded'
import IconRemove from '@mui/icons-material/RemoveCircleOutlineRounded'

const ItemControlCounter = ({ count, product, handleChange }) => (
  <Stack marginLeft={-1.1} direction="row" justifyContent="space-between" alignItems="center" gap={1}>
    <IconButton disabled={count === 1} onClick={() => (count === 1 ? null : handleChange(product, -1))}>
      <IconRemove sx={{ color: 'grey.500', cursor: 'pointer' }} />
    </IconButton>
    <BpTypography>{count}</BpTypography>
    <IconButton onClick={() => handleChange(product, 1)}>
      <IconAdd sx={{ color: 'grey.600', cursor: 'pointer' }} />
    </IconButton>
  </Stack>
)
export default ItemControlCounter
