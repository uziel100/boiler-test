import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import useError from 'hooks/useError'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useRouter } from 'next/router'
import { InputPassword } from 'components/common'
import { BpButton, BpTextField } from 'components/shared'
import { motion } from 'framer-motion'
import sharingInformationService from 'services/sharingInformation'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from 'store/states/counter'
import ExampleRxjs from './ExampleRxjs'
import { useAuthService } from '../hooks'

const validationSchema = Yup.object({
  email: Yup.string().email('Formato invalido').required('Campo obligatorio'),
  password: Yup.string().required('Campo obligatorio')
})

const variantButton = {
  hover: {
    scale: 1.3,
    transition: {
      duration: 0.3,
      yoyo: Infinity
    }
  }
}

const LoginPage = ({ toggleTheme }) => {
  const { onLogin } = useAuthService()
  const { logError, showAlert } = useError()
  const router = useRouter();


  const count = useSelector(state => state.counter.value );
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema,
    onSubmit: async ({ email, password }) => {
      try {

        sharingInformationService.setSubject("hola com estsa")
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

  return (
    <Container maxWidth="xs" className="mb-2">
      <form onSubmit={formik.handleSubmit} className="mt-3">
        <BpTextField
          id="email"
          name="email"
          label="Email"
          type="text"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          className="mb-1"
        />
        <InputPassword
          id="password"
          name="password"
          label="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          className="mb-1"
        />
        <BpButton  
         type="submit" variant="contained" color="secondary"  disabled={!(formik.isValid && formik.dirty)}>
          Login {count}
        </BpButton>
      </form>
      <br />
      <Button onClick={() => {
        dispatch(increment())
      }} >Increment</Button>
      <ExampleRxjs />
      <Button
        className="mt-2"
        sx={{ display: 'block' }}
        variant="outlined"
        color="primary"
        onClick={toggleTheme}
        disabled={!(formik.isValid && formik.dirty)}
      >
        Change theme {`${formik.dirty}`}
      </Button>
    </Container>
  )
}

export default LoginPage
