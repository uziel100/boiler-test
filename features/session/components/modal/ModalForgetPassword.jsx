import { Box, Stack } from '@mui/material'
import { BpModal, BpTypography } from 'components/shared'
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined'

const ModalForgetPassword = ({ open, onClose, email }) => (
  <BpModal open={open} onClose={onClose}>
    <Box maxWidth="466px" textAlign="center">
      <Stack
        sx={{
          bgcolor: 'primary.100',
          width: '48px',
          height: '48px',
          margin: '0 auto',
          borderRadius: '50%'
        }}
        alignItems="center"
        justifyContent="center"
      >
        <LocalPostOfficeOutlinedIcon color="primary" fontSize="large" />
      </Stack>
      <BpTypography sx={{ mt: 3 }} fontWeight={600} color="grey.800" variant="subtitle1" label="Revisa tu correo" />
      <BpTypography fontWeight={400} color="grey.600" variant="body2" sx={{ mt: 2, mb: 2 }}>
        Hemos enviado un link de confirmación a <strong>{email}.</strong> Por favor ingresa a tu correo y sigue las
        instrucciones para restaurar tu contraseña.
      </BpTypography>

      <BpTypography fontWeight={400} color="grey.700" variant="body2" sx={{ mt: 4 }}>
        ¿No recibiste el correo?
      </BpTypography>

      <BpTypography fontWeight={400} color="grey.700" variant="body2" sx={{ mt: 1, mb: 2 }}>
        Revisa tu correo no deseado o <strong style={{ cursor: 'pointer' }}>Reenvía el correo</strong>
      </BpTypography>
    </Box>
  </BpModal>
)
export default ModalForgetPassword
