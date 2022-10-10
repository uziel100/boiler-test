import { Box, CardContent, Stack, Step, StepLabel, Stepper } from '@mui/material'
import { IconLogoUey } from 'components/icons'
import { BpTypography } from 'components/shared'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { ContainerAuth, ModalNoticeOfPrivacy } from '../components'
import { RegisterWizardStep1, RegisterWizardStep2 } from '../components/wizardRegister'

const steps = ['step1', 'step2']

const RegisterPage = () => {
  const router = useRouter()
  const [page, setPage] = useState(0)
  const [dataRegister, setDataRegister] = useState({
    name: '',
    lastName: '',
    email: '',
    birthdate: '',
    password: ''
  })

  const WIZARD_STEPS = [
    <RegisterWizardStep1 data={dataRegister} setData={setDataRegister} nextPage={val => setPage(page + val)} />,
    <RegisterWizardStep2 data={dataRegister} setData={setDataRegister} nextPage={val => setPage(page + val)} />
  ]

  return (
    <>
      <ModalNoticeOfPrivacy open={!!router.query.q} onClose={() => router.push('/register')} />
      <ContainerAuth>
        <ContainerAuth.Left sx={{ p: '3rem 0' }}>
          <Stack
            height="520px"
            maxHeight="600px"
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            gap={3}
            maxWidth={290}
          >
            <IconLogoUey width={99} height={62} />
            <BpTypography
              color="grey.800"
              variant="h4"
              fontWeight={700}
              sx={{
                lineHeight: '32px'
              }}
            >
              Somos Uey{' '}
              <BpTypography
                component="span"
                color="primary.main"
                fontWeight={700}
                variant="h4"
                label=", arma y encuentra eventos"
              />{' '}
              con nosotros de manera fácil y rápida.
            </BpTypography>
            {/* <pre>{JSON.stringify(dataRegister, null, 3)}</pre>
            {page} */}
          </Stack>

          <BpTypography
            sx={{
              position: 'absolute',
              bottom: 20,
              zIndex: 9
            }}
            variant="caption"
            color="grey.700"
          >
            ¿Ya tienes una cuenta?{' '}
            <strong>
              <Link href="/login">Inicia sesión</Link>
            </strong>
          </BpTypography>
        </ContainerAuth.Left>
        <ContainerAuth.Right>
          <CardContent
            sx={{
              maxWidth: '380px',
              minWidth: '300px',
              width: '100%',
              p: { xs: 0, sm: '2rem 0' }
            }}
          >
            <Stack
              sx={{ display: { xs: 'none', sm: 'flex' } }}
              width="100%"
              direction="column"
              alignItems="center"
              mb={3}
            >
              <Stepper
                sx={{
                  width: '200px',
                  '& .MuiStepConnector-root': {
                    '.MuiStepConnector-line': {
                      borderTopStyle: 'dotted',
                      borderTopWidth: '4px'
                    }
                  }
                }}
                activeStep={page}
              >
                {steps.map(label => (
                  <Step
                    sx={{
                      '.Mui-completed > svg, .Mui-active > svg': {
                        color: theme => theme.palette.secondary.main
                      },
                      '.Mui-disabled > svg': {
                        color: theme => theme.palette.grey[400]
                      }
                    }}
                    key={label}
                  >
                    <StepLabel />
                  </Step>
                ))}
              </Stepper>
            </Stack>
            <Box height="100%">{WIZARD_STEPS[page]}</Box>
          </CardContent>
        </ContainerAuth.Right>
      </ContainerAuth>
    </>
  )
}
export default RegisterPage
