import { Box, LinearProgress, linearProgressClasses, Stack } from '@mui/material'
import Check from '@mui/icons-material/TaskAlt'
import UnCheck from '@mui/icons-material/RadioButtonUnchecked'
import { useEffect, useState } from 'react'
import { passwordStrength } from 'check-password-strength'
import { BpTypography } from 'components/shared'
import { styled } from '@mui/styles'

const BorderLinearProgress = styled(LinearProgress, {
  shouldForwardProp: prop => prop !== 'htmlcolor'
})(({ theme, htmlcolor }) => ({
  height: 6,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200]
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: htmlcolor
  }
}))

const CONFIG_PASSWORD_STRENGTH = [
  {
    id: 0,
    value: 'Too weak',
    minDiversity: 0,
    minLength: 0
  },
  {
    id: 1,
    value: 'Weak',
    minDiversity: 1,
    minLength: 6
  },
  {
    id: 2,
    value: 'Medium',
    minDiversity: 2,
    minLength: 8
  },
  {
    id: 3,
    value: 'Strong',
    minDiversity: 3,
    minLength: 8
  }
]

const PROGRESS_KEYS = {
  'Too weak': {
    value: 0,
    color: 'gray'
  },
  Weak: {
    value: 33,
    color: '#F44336'
  },
  Medium: {
    value: 66,
    color: '#FBEB45'
  },
  Strong: {
    value: 100,
    color: '#4CAF50'
  }
}

const LIST_VALUES = [
  {
    id: 1,
    text: 'Mínimo 8 carácteres',
    term: 'length'
  },
  {
    id: 2,
    text: 'Mínimo 1 letra mayúscula',
    term: 'uppercase'
  },
  {
    id: 3,
    text: 'Mínimo 1 letra minúscula',
    term: 'lowercase'
  },
  {
    id: 4,
    text: 'Mínimo 1 número',
    term: 'number'
  }
]

const CheckPasswordStrength = ({ passwordPlain, onValid = undefined }) => {
  const [colorBar, setColorBar] = useState('#ccc')
  const [progressBar, setProgressBar] = useState(0)
  const [checkIncludes, setCheckIncludes] = useState([])

  useEffect(() => {
    const { value, contains, length } = passwordStrength(passwordPlain, CONFIG_PASSWORD_STRENGTH)
    setCheckIncludes([...contains, length > 7 ? 'length' : 'no-length'])
    setColorBar(PROGRESS_KEYS[value].color)
    setProgressBar(PROGRESS_KEYS[value].value)
    if (onValid) {
      onValid(value === 'Strong')
    }
  }, [passwordPlain])

  return (
    <Stack mt={1} direction="column" gap={2}>
      <BorderLinearProgress htmlcolor={colorBar} variant="determinate" value={progressBar} />
      <Box>
        {LIST_VALUES.map(({ id, text, term }) => (
          <Stack key={id} direction="row" alignItems="center" gap={2} mb={1}>
            {checkIncludes.includes(term) ? (
              <Check
                sx={{
                  color: theme => theme.palette.success.main
                }}
              />
            ) : (
              <UnCheck
                sx={{
                  color: theme => theme.palette.grey[500]
                }}
              />
            )}
            <BpTypography fontWeight={400} variant="body2" color="grey.700" label={text} />
          </Stack>
        ))}
      </Box>
    </Stack>
  )
}
export default CheckPasswordStrength
