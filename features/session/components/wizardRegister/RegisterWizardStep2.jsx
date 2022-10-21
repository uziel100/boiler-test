import { Box, InputLabel, Stack } from '@mui/material'
import { InputPassword } from 'components/common'
import { BpButton, BpTypography } from 'components/shared'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { motion } from 'framer-motion'
import { useAuthService } from 'features/session/hooks'
import { useEffect } from 'react'
import { useError } from 'hooks'
import { useRouter } from 'next/router'
import CheckPasswordStrength from '../CheckPasswordStrength'
import { containerVariants } from './animations'

const validationSchema = Yup.object({
  password: Yup.string().required('Campo obligatorio'),
  validStrengthPassword: Yup.bool().isTrue(),
  confirmPassword: Yup.string('Confirmar contraseña')
    .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden')
    .required('Campo obligatorio')
})
const RegisterWizardStep2 = ({ data, setData, nextPage }) => {
  const { registerUser } = useAuthService()
  const { logError, showAlert } = useError()
  const router = useRouter()

  const formik = useFormik({
    initialValues: {
      password: data?.password || '',
      confirmPassword: data?.confirmPassword || '',
      validStrengthPassword: false
    },
    validationSchema,
    onSubmit: async () => {
      try {
        const resp = await registerUser(data)
        if (!resp) throw new Error('Ha ocurrido un error, intetelo de nuevo')
        showAlert('Usuario registrado :)', 'success')
        router.replace('/')
      } catch (error) {
        logError(error)
      }
    }
  })

  useEffect(() => {
    setData(current => ({
      ...current,
      ...formik.values
    }))
  }, [formik.values])

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit" style={{ height: '100%' }}>
      <Stack
        width="100%"
        height="100%"
        component="form"
        onSubmit={formik.handleSubmit}
        direction="column"
        justifyContent="space-between"
      >
        <Box>
          <InputLabel>
            <BpTypography
              textAlign="left"
              variant="body2"
              fontWeight={500}
              color="grey.800"
              sx={{ mb: 1, mt: 2 }}
              label="Crea tu contraseña"
            />
            <InputPassword
              id="password"
              name="password"
              placeholder="contraseña"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </InputLabel>
          <Box mt={3}>
            <CheckPasswordStrength
              passwordPlain={formik.values.password}
              onValid={val => {
                formik.setFieldValue('validStrengthPassword', val)
              }}
            />
          </Box>
          <InputLabel>
            <BpTypography
              textAlign="left"
              variant="body2"
              fontWeight={500}
              color="grey.800"
              sx={{ mb: 1, mt: 2 }}
              label="Confirma tu contraseña"
            />
            <InputPassword
              id="confirmPassword"
              name="confirmPassword"
              placeholder="contraseña"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
              helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
            />
          </InputLabel>
        </Box>
        <Stack direction="row" justifyContent="space-between" alignItems="center" mt={{ xs: 10, sm: 3 }}>
          <BpButton
            type="button"
            onClick={() => nextPage(-1)}
            fullWidth={false}
            sx={{
              px: 4
            }}
            variant="border"
            color="default"
          >
            Regresar
          </BpButton>
          <BpButton
            type="submit"
            variant="contained"
            color="secondary"
            fullWidth={false}
            sx={{
              px: 4
            }}
            disabled={!formik.isValid}
          >
            Registrarse
          </BpButton>
        </Stack>
      </Stack>
    </motion.div>
  )
}
export default RegisterWizardStep2
