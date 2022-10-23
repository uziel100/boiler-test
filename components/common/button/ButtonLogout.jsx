import { Button } from '@mui/material'
import { BpTypography } from 'components/shared'
import LogoutIcon from '@mui/icons-material/Logout'
import useSessionApp from 'hooks/useSessionApp'

const ButtonLogout = () => {
  const { signOut } = useSessionApp()
  return (
    <Button
      onClick={() => signOut({ redirect: false, callbackUrl: '/' })}
      startIcon={<LogoutIcon />}
      variant="text"
      color="primary"
      fullWidth={false}
    >
      <BpTypography fontWeight={500} color="grey.700" variant="body2">
        Desconectarse
      </BpTypography>
    </Button>
  )
}
export default ButtonLogout
