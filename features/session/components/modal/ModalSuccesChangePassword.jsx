import { Box, Stack } from '@mui/material'
import { BpButton, BpModal, BpTypography } from 'components/shared'
import { useRouter } from 'next/router'
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined'

const ModalSuccesChangePassword = ({ open, onClose }) => {
  const router = useRouter()

  const goToLogin = () => router.replace('/login')

  return (
    <BpModal open={open} onClose={onClose}>
      <Box
        sx={{
          width: { xs: '100%', md: '450px' }
        }}
        textAlign="center"
        pb={2}
      >
        <Stack
          sx={{
            bgcolor: 'secondary.100',
            width: '48px',
            height: '48px',
            margin: '0 auto',
            borderRadius: '50%'
          }}
          alignItems="center"
          justifyContent="center"
        >
          <LocalPostOfficeOutlinedIcon color="secondary" fontSize="large" />
        </Stack>
        <BpTypography
          sx={{ mt: 3 }}
          fontWeight={600}
          color="grey.800"
          variant="subtitle1"
          label="Contraseña restablecida con éxito"
        />
        <BpTypography fontWeight={400} color="grey.600" variant="body2" sx={{ mt: 1, mb: 2 }}>
          Contraseña restablecida con éxito
        </BpTypography>
        <BpButton fullWidth={false} variant="contained" color="secondary" onClick={goToLogin}>
          Iniciar sesión
        </BpButton>
      </Box>
    </BpModal>
  )
}
export default ModalSuccesChangePassword
