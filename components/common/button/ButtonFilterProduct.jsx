import { Box } from '@mui/material'
import { IconFilter } from 'components/icons'
import { BpTypography } from 'components/shared'

const ButtonFilterProduct = ({ count = 0, onClick = () => {} }) => (
  <Box
    borderRadius="4px"
    padding="0.4rem"
    gap={0.3}
    display="flex"
    alignItems="center"
    justifyContent="center"
    bgcolor="grey.200"
    onClick={onClick}
    height="100%"
    sx={{
      cursor: 'pointer'
    }}
  >
    <IconFilter />
    {count > 0 && (
      <BpTypography color="grey.700" fontWeight={500} variant="body1">
        {count}
      </BpTypography>
    )}
  </Box>
)
export default ButtonFilterProduct
