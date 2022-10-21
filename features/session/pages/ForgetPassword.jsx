import { Box, Card, InputAdornment } from '@mui/material'
import { BpButton, BpTextField, BpTypography } from 'components/shared'
import Image from 'next/image'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useError } from 'hooks'
import { IconEmail } from 'components/icons'
import { useState } from 'react'
import { ModalForgetPassword } from '../components'
import { useAuthService } from '../hooks'

const validationSchema = Yup.object({
  email: Yup.string().email('Formato inválido').required('Campo obligatorio')
})

const ForgetPassword = () => {
  const { forgetPassword } = useAuthService()
  const { showAlert, logError } = useError()
  const [openModal, setOpenModal] = useState(false)
  const [loading, setLoading] = useState(false)

  const formik = useFormik({
    initialValues: { email: '' },
    validationSchema,
    onSubmit: async ({ email }) => {
      setLoading(true)
      try {
        const statusOk = await forgetPassword({ email })
        if (!statusOk) throw new Error('No se ha podido enviar la solicitud')

        showAlert('Solicitud enviada', 'success')
        setOpenModal(true)
      } catch (error) {
        console.log(error)
        logError(error)
      } finally {
        setLoading(false)
      }
    }
  })

  return (
    <Box mt={{ xs: 2, md: 8 }}>
      <ModalForgetPassword email={formik.values.email} open={openModal} onClose={() => setOpenModal(false)} />
      <Card
        elevation={0}
        sx={{
          padding: '3.5rem 1.5rem',
          minWidth: '320px',
          maxWidth: '510px',
          margin: '0 auto',
          textAlign: 'center',
          border: theme => ({ xs: 'none', md: `1px solid ${theme.palette.grey[300]}` })
        }}
        component="form"
        onSubmit={formik.handleSubmit}
      >
        <Image fixed="1x" src="/images/reset-password-min.svg" width={120} height={120} alt="Recuperar contraseña" />
        <BpTypography fontWeight={600} color="grey.800" variant="subtitle1" label="¿Olvidaste tu contraseña?" />
        <BpTypography fontWeight={400} color="grey.600" variant="body2" sx={{ mt: 2, mb: 2 }}>
          No te preocupes, ingresa el correo vinculado a la cuenta de UEY y te enviaremos las instrucciones para
          recuperar tu contraseña.
        </BpTypography>
        <BpTextField
          id="email"
          name="email"
          sx={{ mt: 3 }}
          placeholder="Correo electrónico"
          type="text"
          color="secondary"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          className="mb-1"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconEmail />
              </InputAdornment>
            )
          }}
        />
        <BpButton
          type="submit"
          variant="contained"
          color="secondary"
          fullWidth={false}
          loading={loading}
          disabled={!(formik.isValid && formik.dirty)}
          sx={{ mt: { xs: 4, md: 2 }, width: { xs: '100%', sm: 'auto' } }}
        >
          Enviar correo
        </BpButton>
      </Card>
    </Box>
  )
}
export default ForgetPassword
