import { Box, Divider, Menu, MenuItem } from '@mui/material'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { ButtonLogout } from '../button'

const LINKS = [
  {
    id: 'register',
    url: '/register',
    text: 'Regístrate'
  },
  {
    id: 'login',
    url: '/login',
    text: 'Inicia sesión'
  }
]

const LINKS_PROFILE = [
  {
    id: 'account',
    url: '/account',
    text: 'Mi cuenta'
  },
  {
    id: 'experiencies',
    url: '/',
    text: 'Mis experiencias'
  },
  {
    id: 'help',
    url: '/',
    text: 'Ayuda'
  }
]

const MenuAccount = ({ anchorEl, setAnchorEl }) => {
  const { data: session } = useSession()

  const open = Boolean(anchorEl)

  const handleClose = () => {
    setAnchorEl(null)
  }

  const LINKS_TO_USE = session ? LINKS_PROFILE : LINKS

  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          width: '186px',
          overflow: 'visible',
          borderRadius: '12px',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.1))',
          mt: 1.5,
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1
          },
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0
          }
        }
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      {LINKS_TO_USE.map(item => (
        <MenuItem key={item.id} onClick={null}>
          <Link to={item.url} href={item.url} passHref>
            <Box
              component="a"
              sx={{
                textDecoration: 'none',
                color: 'grey.700'
              }}
            >
              {item.text}
            </Box>
          </Link>
        </MenuItem>
      ))}
      <Divider />
      {!session ? (
        <MenuItem>Ayuda</MenuItem>
      ) : (
        <MenuItem>
          <ButtonLogout />
        </MenuItem>
      )}
    </Menu>
  )
}
export default MenuAccount
