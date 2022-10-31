import { Box, Slider, styled } from '@mui/material'
import React from 'react'
import { formatMoney } from 'utils'

const AirbnbSlider = styled(Slider)(({ theme }) => ({
  color: theme.palette.primary.main,
  height: 3,
  padding: '13px 0',
  '& .MuiSlider-thumb': {
    height: 22,
    width: 22,
    backgroundColor: '#fff',
    border: `2px solid ${theme.palette.primary.main}`,
    // '&:hover': {
    //   boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)'
    // },
    '& .airbnb-bar': {
      height: 9,
      width: 1,
      backgroundColor: theme.palette.primary.main,
      marginLeft: 1,
      marginRight: 1
    }
  },
  '& .MuiSlider-track': {
    height: 3
  },
  '& .MuiSlider-rail': {
    color: theme.palette.grey[500],
    // opacity: theme.palette.mode === 'dark' ? undefined : 1,
    height: 5
  },
  '& .MuiSlider-valueLabel': {
    fontSize: 14,
    fontWeight: '500',
    top: -6,
    backgroundColor: 'unset',
    color: theme.palette.text.primary,
    '&:before': {
      display: 'none'
    },
    '& *': {
      background: 'transparent',
      color: theme.palette.grey[700]
    }
  }
}))
const BpSliderRange = () => {
  const minDistance = 50
  const [value1, setValue1] = React.useState([0, 50])

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]])
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)])
    }
  }
  return (
    <Box sx={{ ml: value1[0] === 0 ? 1.2 : 'auto', mr: value1[1] === 300 ? 1.2 : 'auto' }} mt={4}>
      <AirbnbSlider
        min={0}
        max={300}
        value={value1}
        onChange={handleChange1}
        getAriaLabel={index => (index === 0 ? 'Minimum price' : 'Maximum price')}
        valueLabelDisplay="on"
        step={2}
        valueLabelFormat={x => `${formatMoney(x, undefined, 2)}`}
        disableSwap
      />
    </Box>
  )
}
export default BpSliderRange
