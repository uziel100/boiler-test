import { Box, Divider, InputAdornment, Radio, Stack } from '@mui/material'
import { IconEmail } from 'components/icons'
import { BpButton, BpTextField, BpTypography } from 'components/shared'
import Link from 'next/link'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { InputDatePicker } from 'components/common'
import { subYears } from 'date-fns'
import ButtonFacebook from '../ButtonFacebook'
import ButtonGoogle from '../ButtonGoogle'
import { containerVariants } from './animations'

const maxDate = subYears(new Date(), 18)

const validationSchema = Yup.object({
  name: Yup.string().max(100, 'Maximo 100 caracteres').required('Campo obligatorio'),
  lastName: Yup.string().max(100, 'Maximo 100 caracteres').required('Campo obligatorio'),
  email: Yup.string().email('Formato inválido').required('Campo obligatorio'),
  birthday: Yup.string().required('Campo obligatorio'),
  acceptTerms: Yup.bool().isTrue()
})

const RegisterWizardStep1 = ({ data, setData, nextPage }) => {
  const formik = useFormik({
    initialValues: {
      email: data?.email || '',
      lastName: data?.lastName || '',
      name: data?.name || '',
      birthday: data?.birthday || maxDate,
      acceptTerms: data?.acceptTerms || false
    },
    validationSchema,
    onSubmit: async val => {
      console.log({ val })
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
    <Box
      component={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      sx={{ height: '100%', mt: { xs: 0, sm: '2.5rem' } }}
    >
      <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 2 }}>
        <BpTypography fontWeight={600} variant="h5" color="grey.800">
          Regístrate en Uey
        </BpTypography>
        <BpTextField
          id="name"
          name="name"
          sx={{ mt: 3 }}
          placeholder="Nombre(s)"
          type="text"
          color="secondary"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          className="mb-1"
        />
        <BpTextField
          id="lastName"
          name="lastName"
          sx={{ mt: 1 }}
          color="secondary"
          placeholder="Apellido(s)"
          type="text"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
          className="mb-1"
        />
        <BpTextField
          id="email"
          name="email"
          sx={{ mt: 1 }}
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
        <InputDatePicker
          id="birthday"
          name="birthday"
          color="secondary"
          value={formik.values.birthday}
          error={formik.touched.birthday && Boolean(formik.errors.birthday)}
          helperText={formik.touched.birthday && formik.errors.birthday}
          onChange={currentDate => formik.setFieldValue('birthday', currentDate)}
          maxDate={maxDate}
        />
        <Stack direction="row" alignItems="center" mt={3} mb={1}>
          <Radio
            id="acceptTerms"
            name="acceptTerms"
            checked={formik.values.acceptTerms}
            onChange={e => formik.setFieldValue('acceptTerms', e.target.checked)}
            color="secondary"
          />
          <BpTypography fontWeight={400} variant="body2" color="grey.700" sx={{ display: 'block' }}>
            Acepta nuestras{' '}
            <Link href="/register?q=terms" as="/register">
              <strong style={{ textDecoration: 'underline', cursor: 'pointer' }}> Políticas de Privacidad</strong>
            </Link>
          </BpTypography>
        </Stack>
        <Stack direction="row" justifyContent="center">
          <BpButton
            type="submit"
            variant="contained"
            color="secondary"
            fullWidth
            disabled={!formik.isValid}
            sx={{ mt: { xs: 4, md: 2 }, width: { xs: '100%', sm: 'auto' } }}
          >
            Continuar
          </BpButton>
        </Stack>
      </Box>
      <Divider sx={{ mt: 3 }} orientation="horizontal" variant="fullWidth" flexItem>
        <BpTypography component="span" fontWeight={600} variant="body2" color="grey.600">
          O registrate con
        </BpTypography>
      </Divider>
      <Stack direction="row" justifyContent="center" gap={2} mt={3}>
        <ButtonGoogle />
        <ButtonFacebook />
      </Stack>
    </Box>
  )
}
export default RegisterWizardStep1
