import { Box, Slider, styled } from '@mui/material'

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
const BpSliderRange = ({ value, setValue, onChange }) => {
  const minDistance = 20

  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return
    }

    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]])
      onChange({ min: Math.min(newValue[0], value[1] - minDistance), max: value[1] })
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)])
      onChange({ min: value[0], max: Math.max(newValue[1], value[0] + minDistance) })
    }
  }

  return (
    <Box sx={{ ml: value[0] === 0 ? 1.2 : 'auto', mr: value[1] === 300 ? 1.2 : 'auto' }} mt={4}>
      <AirbnbSlider
        min={0}
        max={300}
        value={value}
        onChange={handleChange}
        getAriaLabel={index => (index === 0 ? 'Minimum price' : 'Maximum price')}
        valueLabelDisplay="on"
        step={1}
        // valueLabelFormat={x => `${formatMoney(x, undefined, 2)}`}
        valueLabelFormat={x => `$${x}`}
        disableSwap
      />
    </Box>
  )
}
export default BpSliderRange
