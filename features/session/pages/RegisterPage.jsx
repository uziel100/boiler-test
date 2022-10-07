import { Button, Stack, Step, StepLabel, Stepper } from '@mui/material'
import { IconLogoUey } from 'components/icons'
import { BpTypography } from 'components/shared'
import Link from 'next/link'
import { useState } from 'react'
import { ContainerAuth } from '../components'

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad']

const RegisterPage = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [completed, setCompleted] = useState({})

  const totalSteps = () => steps.length

  const completedSteps = () => Object.keys(completed).length

  const isLastStep = () => activeStep === totalSteps() - 1

  const allStepsCompleted = () => completedSteps() === totalSteps()

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1
    setActiveStep(newActiveStep)
  }

  const handleStep = step => () => {
    setActiveStep(step)
  }

  return (
    <ContainerAuth>
      <ContainerAuth.Left sx={{ p: '2rem' }}>
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
        <Stack sx={{ width: '100%' }} direction="column" alignItems="center" gap={2} pt={4} px={3}>
          <Stepper sx={{ width: '100%' }} activeStep={activeStep}>
            {steps.map((label, index) => (
              <Step
                sx={{
                  '.Mui-completed > svg, .Mui-active > svg': {
                    color: theme => theme.palette.secondary.main
                  },
                  '.Mui-disabled > svg': {
                    color: theme => theme.palette.secondary[400]
                  }
                }}
                key={label}
                completed={completed[index]}
              >
                <StepLabel />
              </Step>
            ))}
          </Stepper>

          <Button onClick={handleNext} sx={{ mr: 1 }}>
            Next
          </Button>
        </Stack>
      </ContainerAuth.Right>
    </ContainerAuth>
  )
}
export default RegisterPage
