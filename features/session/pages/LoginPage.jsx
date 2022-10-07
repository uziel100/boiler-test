import useError from 'hooks/useError'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { InputPassword } from 'components/common'
import { BpButton, BpTextField, BpTypography } from 'components/shared'
import { Box, Divider, InputAdornment, Stack } from '@mui/material'
import { IconAccountUser, IconLogoUey } from 'components/icons'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ButtonFacebook, ButtonGoogle, ContainerAuth } from '../components'

const validationSchema = Yup.object({
  email: Yup.string().email('Formato inválido').required('Campo obligatorio'),
  password: Yup.string().required('Campo obligatorio')
})

const LoginPage = () => {
  const { logError, showAlert } = useError()
  const router = useRouter()

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema,
    onSubmit: async ({ email, password }) => {
      try {
        console.log({ email, password })
        // sharingInformationService.setSubject('hola com estsa')
        // toggleTheme();
        // const resp = await onLogin({ email, password })
        // if (!resp?.login) throw new Error('Usuario o contraseña incorrectos')

        showAlert('Login success', 'success')
        // router.replace('/')
      } catch (error) {
        console.log(error)
        logError(error)
      }
    }
  })

  const goToRegisterWizard = () => router.push('/register')

  return (
    <ContainerAuth>
      <ContainerAuth.Left>
        <Stack direction="column" alignItems="center" gap={3} maxWidth={290}>
          <BpTypography color="grey.800" variant="h3" fontWeight={700}>
            ¡Bienvenido a{' '}
            <BpTypography component="span" color="primary.main" fontWeight={700} variant="h3" label="Uey!" />
          </BpTypography>
          <BpTypography
            color="grey.700"
            fontWeight={400}
            variant="body2"
            textAlign="center"
            label="¿No tienes una cuenta aún? Ingresa tus datos y disfruta de la mejor plataforma de eventos"
          />
          <BpButton onClick={goToRegisterWizard} sx={{ px: 4 }} fullWidth={false} variant="border" color="default">
            Regístrate
          </BpButton>
        </Stack>
      </ContainerAuth.Left>
      <ContainerAuth.Right>
        <Box
          sx={{
            padding: { xs: '0rem', sm: '3rem 0rem' },
            minWidth: '300px',
            maxWidth: '370px',
            width: '100%'
          }}
        >
          <Stack component="form" direction="column" alignItems="center" onSubmit={formik.handleSubmit} gap={2}>
            <IconLogoUey width={99} height={62} />
            <BpTextField
              id="email"
              name="email"
              sx={{ mt: 3 }}
              placeholder="Correo"
              type="text"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              className="mb-1"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconAccountUser />
                  </InputAdornment>
                )
              }}
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
            <Stack alignSelf="flex-start" mb={2}>
              <Link href="/forget-password" passHref>
                <a style={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                  <BpTypography
                    component="span"
                    sx={{ textDecoration: 'none', ':hover': { textDecoration: 'underline' } }}
                    fontVariant="secondary"
                    fontWeight={600}
                    variant="body2"
                  >
                    ¿Olvidate la contraseña?
                  </BpTypography>
                </a>
              </Link>
            </Stack>
            <BpButton
              type="submit"
              variant="contained"
              color="secondary"
              fullWidth={false}
              disabled={!(formik.isValid && formik.dirty)}
              sx={{ mt: { xs: 4, md: 2 }, width: { xs: '100%', sm: 'auto' } }}
            >
              Iniciar sesión
            </BpButton>
          </Stack>
          <Divider sx={{ mt: 4 }} orientation="horizontal" variant="fullWidth" flexItem>
            <BpTypography component="span" fontWeight={600} variant="body2" color="grey.600">
              O inicia sesión con
            </BpTypography>
          </Divider>
          <Stack direction="row" justifyContent="center" gap={2} mt={3}>
            <ButtonGoogle />
            <ButtonFacebook />
          </Stack>
          <Box sx={{ display: { xs: 'block', md: 'none' } }} textAlign="center" mt={4} pb={4}>
            <BpTypography component="span" fontWeight={600} variant="body2" color="grey.600">
              ¿Primera vez en UEY?
            </BpTypography>
            <BpButton onClick={goToRegisterWizard} sx={{ mt: 2 }} fullWidth variant="border" color="default">
              Regístrate
            </BpButton>
          </Box>
        </Box>
      </ContainerAuth.Right>
    </ContainerAuth>
  )
}

export default LoginPage
