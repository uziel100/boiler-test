import { Box, Card, InputLabel } from '@mui/material'
import { InputPassword } from 'components/common'
import { BpButton, BpTypography } from 'components/shared'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useError } from 'hooks'
import { CheckPasswordStrength, ModalSuccesChangePassword } from '../components'

const validationSchema = Yup.object({
  password: Yup.string().required('Campo obligatorio'),
  passwordConfirm: Yup.string('Confirmar contraseña')
    .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden')
    .required('Campo obligatorio')
})

const ResetPasswordPage = () => {
  const [openModal, setOpenModal] = useState(false)
  const { showAlert, logError } = useError()
  const router = useRouter()

  const formik = useFormik({
    initialValues: { passwordConfirm: '', password: '', validStrengthPassword: false },
    validationSchema,
    onSubmit: async ({ password, passwordConfirm }) => {
      try {
        console.log({ password, passwordConfirm })
        showAlert('Operation success', 'success')
        setOpenModal(true)
      } catch (error) {
        console.log(error)
        logError(error)
      }
    }
  })

  return (
    <Box mt={{ xs: 1, md: 3 }}>
      <ModalSuccesChangePassword open={openModal} onClose={() => router.replace('/login')} />
      <Card
        elevation={0}
        sx={{
          padding: { xs: '0rem 1.5rem', md: '2rem 1.5rem' },
          minWidth: '320px',
          maxWidth: '510px',
          margin: '0 auto',
          textAlign: { xs: 'left', sm: 'center' },
          border: theme => ({ xs: 'none', md: `1px solid ${theme.palette.grey[300]}` })
        }}
        component="form"
        onSubmit={formik.handleSubmit}
      >
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Image fixed="1x" src="/images/reset-password-min.svg" width={120} height={120} alt="Recuperar contraseña" />
        </Box>
        <BpTypography
          sx={{ mt: 2 }}
          fontWeight={600}
          color="grey.800"
          variant="subtitle1"
          label="Establece tu nueva contraseña"
        />
        <BpTypography fontWeight={400} color="grey.600" variant="body2" sx={{ mt: 1, mb: 3 }}>
          Por favor asegúrate de que tu nueva contraseña cumpla con los requisitos y sea diferente a la anterior.
        </BpTypography>
        <InputLabel>
          <BpTypography
            textAlign="left"
            sx={{ mb: 1 }}
            variant="body2"
            fontWeight={500}
            color="grey.800"
            label="Crea tu contraseña"
          />
          <InputPassword
            id="password"
            name="password"
            placeholder="Contraseña"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            className="mb-1"
          />
        </InputLabel>
        <CheckPasswordStrength
          passwordPlain={formik.values.password}
          onValid={val => formik.setFieldValue('validStrengthPassword', val)}
        />
        <InputLabel>
          <BpTypography
            textAlign="left"
            sx={{ mb: 1, mt: 2 }}
            variant="body2"
            fontWeight={500}
            color="grey.800"
            label="Crea tu contraseña"
          />
          <InputPassword
            id="passwordConfirm"
            name="passwordConfirm"
            placeholder="Confirma tu contraseña"
            disabled={!formik.values.validStrengthPassword}
            value={formik.values.passwordConfirm}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.passwordConfirm && Boolean(formik.errors.passwordConfirm)}
            helperText={formik.touched.passwordConfirm && formik.errors.passwordConfirm}
            className="mb-1"
          />
        </InputLabel>
        <BpButton
          type="submit"
          variant="contained"
          color="secondary"
          fullWidth={false}
          disabled={!(formik.isValid && formik.dirty)}
          sx={{ mt: { xs: 4, md: 2 }, width: { xs: '100%', sm: 'auto' } }}
        >
          Recuperar contraseña
        </BpButton>
      </Card>
    </Box>
  )
}
export default ResetPasswordPage
