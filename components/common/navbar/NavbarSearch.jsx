import { Box, Stack, Typography, TextField, InputBase, Divider } from '@mui/material'
import { IconSearch } from 'components/icons'
import { BpTypography } from 'components/shared'

const NavbarSearch = () => {
  return (
    <Stack
      direction="row"
      gap={1}
      alignItems="center"
      justifyContent="space-between"
      sx={{
        borderRadius: 6,
        padding: '0.5rem 1rem',
        border: theme => `1px solid ${theme.palette.grey[500]}`,
        cursor: 'pointer',
        display: { xs: 'none', sm: 'none', md: 'flex' }
      }}
    >
      <BpTypography variant="body2" fontWeight={500} label="Elige la fecha" color="grey.800" fontVariant="primary" />
      <Divider orientation="vertical" flexItem />
      <BpTypography variant="body2" fontWeight={500} label="La zona" color="grey.800" fontVariant="primary" />
      <Divider orientation="vertical" flexItem />
      <InputBase
        placeholder="¿Qué estás buscando?"
        inputProps={{ 'aria-label': 'search products' }}
        readOnly
        sx={{
          fontFamily: 'Poppins',
          fontWeight: 600,
          fontSize: '0.875rem'
        }}
      />
      <IconSearch />
    </Stack>
  )
}
export default NavbarSearch
