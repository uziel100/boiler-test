import { InputLabel, Stack } from '@mui/material'
import { InputPassword } from 'components/common'
import { BpButton, BpTypography } from 'components/shared'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useEffect } from 'react'
import { useError } from 'hooks'
import { motion } from 'framer-motion'
import { containerVariants } from './animations'

const validationSchema = Yup.object({
  password: Yup.string().required(),
  confirmPassword: Yup.string('Confirmar contraseña')
    .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden')
    .required('Campo obligatorio')
})

const RegisterWizardStep3 = ({ data, setData, nextPage }) => {
  const { logError, showAlert } = useError()

  const formik = useFormik({
    initialValues: {
      confirmPassword: data?.confirmPassword || '',
      password: data?.password || ''
    },
    validationSchema,
    onSubmit: () => {
      try {
        console.log('Regsiter')
        showAlert('Usuario registrado :)', 'success')
      } catch (error) {
        logError(error)
      }
    }
  })

  useEffect(() => {
    setData(current => ({
      ...current,
      confirmPassword: formik.values.confirmPassword
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
        <Stack direction="row" justifyContent="space-between" alignItems="center" mt={30}>
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
            color="primary"
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
export default RegisterWizardStep3
