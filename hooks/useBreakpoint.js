import { useTheme } from '@emotion/react'
import { useMediaQuery } from '@mui/material'

const useBreakpoint = () => {
  const themeMui = useTheme()
  const isDeviceXs = useMediaQuery(themeMui.breakpoints.down('sm'))
  const isDeviceXsSm = useMediaQuery(themeMui.breakpoints.down('md'))
  const isDeviceMd = useMediaQuery(themeMui.breakpoints.up('sm'))

  return {
    isDeviceXs,
    isDeviceMd,
    isDeviceXsSm
  }
}

export default useBreakpoint
