import { Box, InputLabel, Stack } from '@mui/material'
import { InputPassword } from 'components/common'
import InputDatePicker from 'components/common/input/InputDatePicker'
import { BpButton, BpTypography } from 'components/shared'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { subYears } from 'date-fns'
import CheckPasswordStrength from '../CheckPasswordStrength'
import { containerVariants } from './animations'

const maxDate = subYears(new Date, 18);

const validationSchema = Yup.object({
  birthdate: Yup.string().required('Campo obligatorio'),
  password: Yup.string().required('Campo obligatorio'),
  validStrengthPassword: Yup.bool().isTrue()
})
const RegisterWizardStep2 = ({ data, setData, nextPage }) => {
  const formik = useFormik({
    initialValues: {
      birthdate: data?.birthdate || maxDate,
      password: data?.password || '',
      validStrengthPassword: false
    },
    validationSchema,
    onSubmit: () => {
      nextPage(1)
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
          <InputLabel sx={{ mt: 3 }}>
            <BpTypography
              textAlign="left"
              variant="body2"
              fontWeight={500}
              color="grey.800"
              label="Introduce tu fecha de cumpleaños"
              sx={{ mb: 1 }}
            />
            <InputDatePicker
              id="birthdate"
              name="birthdate"
              value={formik.values.birthdate}
              error={formik.touched.birthdate && Boolean(formik.errors.birthdate)}
              helperText={formik.touched.birthdate && formik.errors.birthdate}
              onChange={currentDate => formik.setFieldValue('birthdate', currentDate)}
              maxDate={maxDate}
            />
          </InputLabel>
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
        </Box>
        <Stack direction="row" justifyContent="space-between" alignItems="center" mt={3}>
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
            Continuar
          </BpButton>
        </Stack>
      </Stack>
    </motion.div>
  )
}
export default RegisterWizardStep2
